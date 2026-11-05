import { NextResponse } from "next/server";
import { markContactEmailSent, saveContactMessage } from "@/lib/db";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, tell_us, recaptcha_token } = body;

    // 1. Validar que tengamos el token
    if (!recaptcha_token) {
      return NextResponse.json(
        { error: "Token de reCAPTCHA faltante." },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("Falta la variable de entorno RECAPTCHA_SECRET_KEY");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // 2. Verificar el token con Google
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha_token}`;
    
    const recaptchaResponse = await fetch(verifyUrl, {
      method: "POST",
    });
    
    const recaptchaData = await recaptchaResponse.json();

    // reCAPTCHA v3 devuelve un "score" entre 0.0 (bot) y 1.0 (humano).
    // Usualmente un score > 0.5 es considerado seguro.
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.warn("Posible bot detectado:", recaptchaData);
      return NextResponse.json(
        { error: "Validación de reCAPTCHA fallida. ¿Eres un robot?" },
        { status: 403 }
      );
    }

    // 3. Guardar en base de datos (si falla, igual intentamos enviar el correo)
    let messageId: number | null = null;
    try {
      messageId = await saveContactMessage({
        name: String(name ?? ""),
        company: String(company ?? ""),
        email: String(email ?? ""),
        phone: String(phone ?? ""),
        message: String(tell_us ?? ""),
        recaptchaScore: typeof recaptchaData.score === "number" ? recaptchaData.score : null,
        userAgent: request.headers.get("user-agent"),
      });
    } catch (dbError) {
      console.error("Error guardando mensaje de contacto en DB:", dbError);
    }

    // 4. Enviar correo con Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Falta la variable de entorno RESEND_API_KEY");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    const from = process.env.EMAIL_FROM || "info@defendra.app";
    const to = process.env.CONTACT_TO_EMAIL || "info@defendra.app";

    const rows: [string, unknown][] = [
      ["Nombre", name],
      ["Empresa", company],
      ["Correo", email],
      ["Teléfono", phone],
      ["Mensaje", tell_us],
    ];
    const html = `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;vertical-align:top">${label}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="color:#888;font-size:12px">Puntaje reCAPTCHA: ${recaptchaData.score}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Defendra Web <${from}>`,
        to: [to],
        reply_to: typeof email === "string" && email.includes("@") ? email : undefined,
        subject: `Nuevo contacto web: ${String(name ?? "").slice(0, 80)}${company ? ` (${String(company).slice(0, 80)})` : ""}`,
        html,
      }),
    });

    const emailSent = resendResponse.ok;
    if (messageId !== null) {
      await markContactEmailSent(messageId, emailSent).catch((dbError) =>
        console.error("Error actualizando estado de correo en DB:", dbError)
      );
    }

    if (!emailSent) {
      const errorText = await resendResponse.text();
      console.error("Error enviando correo con Resend:", resendResponse.status, errorText);
      // Si quedó guardado en DB, el mensaje no se pierde: respondemos éxito
      if (messageId !== null) {
        return NextResponse.json({ success: true, message: "Mensaje recibido correctamente." });
      }
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
        { status: 502 }
      );
    }

    // Responder con éxito
    return NextResponse.json({ success: true, message: "Mensaje recibido correctamente." });

  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
