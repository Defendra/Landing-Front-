
"use client";

import { Button } from "@/components/ui/Button";
import { useWhatsapp } from "@/hooks/useWhatsapp";

export default function Hero() {
  const openWA = useWhatsapp();

  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-28 text-center md:text-left">
        <h1 className="max-w-4xl text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="text-ink-800">La nueva era de la</span>{" "}
          <span className="bg-gradient-to-r from-brand-electric via-brand-glow to-white bg-clip-text text-transparent">
            seguridad privada
          </span>{" "}
          <span className="text-ink-800">en Colombia</span>
        </h1>

        <p className="mt-6 max-w-2xl text-ink-600 text-lg mx-auto md:mx-0">
          Diseñamos soluciones que digitalizan y automatizan la operación de vigilancia con IA, trazabilidad y cumplimiento.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button onClick={() => openWA("hero_primary")}>Habla con nosotros</Button>
          <Button href="#solucion" variant="secondary">
            Conoce la solución
          </Button>
        </div>
      </div>
    </section>
  );
}
