"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";
import { motion } from "framer-motion";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setIsLoading(true);

    if (!executeRecaptcha) {
      console.error("Execute recaptcha not yet available");
      setIsLoading(false);
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");
      
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        tell_us: formData.get("message") as string,
        recaptcha_token: token,
      };

      const response = await fetch("/api/contact", {
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input required name="name" placeholder="Nombre completo" className="input bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
          <Input required name="company" placeholder="Empresa" className="input bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
          <Input required type="email" name="email" placeholder="Email" className="input sm:col-span-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
          <Input required name="phone" placeholder="Teléfono" className="input sm:col-span-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
          <Textarea name="message" placeholder="Cuéntanos brevemente" className="input sm:col-span-2 h-28 bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <p className="text-[10px] text-slate-500 max-w-[200px]">
            Este sitio está protegido por reCAPTCHA y se aplican la <a href="https://policies.google.com/privacy" className="text-primary hover:underline">Política de privacidad</a> y los <a href="https://policies.google.com/terms" className="text-primary hover:underline">Términos de servicio</a> de Google.
          </p>
          <Button 
            type="submit" 
            disabled={isLoading || sent}
            className={`min-w-32 transition-colors duration-200 shadow-[0_0_15px_rgba(255,122,0,0.3)] ${
              sent 
                ? 'bg-[#1DB954] hover:bg-[#1DB954] shadow-[0_0_15px_rgba(29,185,84,0.3)]' 
                : 'bg-[#FF7A00] hover:bg-[#FF6A00]'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2 text-white">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : sent ? (
              "¡Enviado!"
            ) : (
              <span className="text-white font-medium">Enviar Mensaje</span>
            )}
          </Button>
        </div>
    </form>
  );
}

export function ContactSection() {
  const { whatsappUrl: waLink } = useWhatsAppCTA("Hola Defendra, quiero saber más sobre la plataforma.");
  
  // Use a fallback site key or the real one from env
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "dummy_site_key_for_dev";

  return (
    <motion.section 
      id="contacto" 
      className="relative w-full py-20 z-10 scroll-mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white">Conversemos</h3>
                <p className="text-slate-300 text-lg">Agenda una demo, cuéntanos tu caso y descubre cómo podemos revolucionar tu operación de seguridad.</p>
                <div className="pt-4">
                  <Button asChild className="h-14 px-8 rounded-full bg-[#1DB954] hover:bg-[#10b981] text-white font-bold shadow-[0_0_20px_rgba(29,185,84,0.4)] hover:shadow-[0_0_30px_rgba(29,185,84,0.6)] transition-all hover:-translate-y-1">
                      <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      >
                      <span>💬</span> WhatsApp directo
                      </a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  O puedes escribirnos directamente a <a href="mailto:info@defendra.app" className="font-semibold text-white hover:text-accent transition-colors">info@defendra.app</a>
                </p>
            </div>

            <GoogleReCaptchaProvider reCaptchaKey={siteKey} language="es">
              <ContactForm />
            </GoogleReCaptchaProvider>
            
            </div>
        </div>
    </motion.section>
  );
}
