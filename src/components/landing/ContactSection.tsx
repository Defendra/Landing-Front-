"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Brand } from "../../design/brand";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captcha, setCaptcha] = useState({ question: "", answer: 0, userAnswer: "" });

  // Generar captcha simple
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      question: `¿Cuánto es ${num1} + ${num2}?`,
      answer: num1 + num2,
      userAnswer: ""
    });
  };

  // Generar captcha al montar el componente
  useState(() => {
    generateCaptcha();
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Validar captcha
    if (parseInt(captcha.userAnswer) !== captcha.answer) {
      alert("Por favor, responde correctamente la pregunta de seguridad.");
      return;
    }

    setIsLoading(true);
    
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
    } finally {
      setIsLoading(false);
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
                
                {/* Captcha */}
                <div className="sm:col-span-2 flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
                  <span className="text-text-mid text-sm">{captcha.question}</span>
                  <Input
                    type="number"
                    value={captcha.userAnswer}
                    onChange={(e) => setCaptcha({...captcha, userAnswer: e.target.value})}
                    className="w-20"
                    placeholder="?"
                    required
                  />
                  <Button 
                    type="button" 
                    onClick={generateCaptcha}
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                  >
                    🔄
                  </Button>
                </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    type="submit" 
                    disabled={isLoading || sent}
                    className={`min-w-32 transition-colors duration-200 ${
                      sent 
                        ? 'bg-[#1DB954] hover:bg-[#1DB954]' 
                        : 'bg-[#FF7A00] hover:bg-[#FF6A00]'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : sent ? (
                      "¡Enviado!"
                    ) : (
                      "Enviar"
                    )}
                  </Button>
                </div>
                <p className="mt-2 text-xs text-text-mid">
                  O puedes escribirnos directamente a <a href="mailto:info@defendra.app" className="font-bold hover:text-[#FF7A00] transition-colors">info@defendra.app</a>
                </p>
            </form>
            </div>
        </div>
    </section>
  );
}
