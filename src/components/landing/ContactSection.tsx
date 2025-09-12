"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      tell_us: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://api-deploy.defendra.app/api/landing-contact-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
      } else {
        console.error("Error enviando formulario:", response.statusText);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
    }
  }

  const waLink = "https://wa.me/573107996793?text=Hola%20Defendra%2C%20quiero%20saber%20m%C3%A1s%20sobre%20la%20plataforma.";


  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-2xl font-semibold text-text-high">Conversemos</h3>
                <p className="mt-2 text-text-mid">Agenda una demo o cuéntanos tu caso.</p>
                <Button asChild className="mt-6 bg-green-600 hover:bg-green-500">
                    <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    WhatsApp inmediato
                    </a>
                </Button>
            </div>

            <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                <Input required name="name" placeholder="Nombre completo" className="input" />
                <Input required name="company" placeholder="Empresa" className="input" />
                <Input required type="email" name="email" placeholder="Email" className="input sm:col-span-2" />
                <Input required name="phone" placeholder="Teléfono" className="input sm:col-span-2" />
                <Textarea name="message" placeholder="Cuéntanos brevemente" className="input sm:col-span-2 h-28" />
                </div>
                <Button type="submit" className="mt-4" variant="default">
                {sent ? "¡Enviado!" : "Enviar"}
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                También recibiremos un correo en <b>defendraco@gmail.com</b>.
                </p>
            </form>
            </div>
        </div>
    </section>
  );
}
