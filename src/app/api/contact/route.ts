import { NextResponse } from "next/server";

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

    // 3. (AQUÍ VA TU LÓGICA DE CORREO / BASE DE DATOS)
    // Ya validamos que es humano. Aquí puedes usar Resend, Nodemailer, SendGrid, o guardar en DB.
    console.log("Datos recibidos de humano legítimo:", { name, company, email, phone, tell_us });
    console.log("Puntaje reCAPTCHA:", recaptchaData.score);

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
