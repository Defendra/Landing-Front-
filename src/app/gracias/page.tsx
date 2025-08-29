'use client';

import { Button } from "@/components/ui/button";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function GraciasPage() {
  const { whatsappUrl } = useWhatsAppCTA('¡Hola! Acabo de solicitar una demo en la web de Defendra y me gustaría conversar.');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 hero-gradient">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-500">¡Gracias por tu interés!</h1>
            <p className="max-w-[600px] text-text-mid md:text-xl">
              Hemos recibido tu solicitud. Un especialista de nuestro equipo se pondrá en contacto contigo muy pronto.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="default">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
