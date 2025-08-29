"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";

export function Hero() {
  const { whatsappUrl } = useWhatsAppCTA("Hola Defendra, me gustaría conocer la solución.");
  return (
    <section id="inicio" className="w-full pt-12 md:pt-24 lg:pt-32 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight text-text-high">
             La nueva era de la <span className="text-primary">seguridad privada</span> en Colombia
          </h1>
          <p className="max-w-[700px] mx-auto text-text-mid md:text-xl">
            Digitalizamos la operación de vigilancia para eliminar fugas por relevos y horas extra, con trazabilidad total y una pre-nómina validada.
          </p>
           <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Habla con nosotros</a>
              </Button>
               <Button asChild size="lg" variant="outline">
                  <Link href="/#solucion">Conoce la solución</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
