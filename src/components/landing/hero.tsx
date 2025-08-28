"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight text-foreground">
             La nueva era de la <span className="text-brand-accent">seguridad privada</span> en Colombia
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.
          </p>
           <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-primary-foreground">
                  <Link href="#soluciones">Conoce la solución</Link>
              </Button>
               <Button asChild size="lg" variant="outline">
                  <Link href="/roles">Ver Perfiles</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
