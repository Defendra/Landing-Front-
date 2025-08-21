
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Profiles() {
  return (
    <section id="perfiles" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Una herramienta para cada rol
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Guardia en campo y Administrador en oficina siempre conectados.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl mt-8">
            <Image
                src="https://placehold.co/960x540.png"
                width="960"
                height="540"
                alt="Guardia y Administrador conectados"
                className="aspect-video w-full overflow-hidden rounded-lg object-cover border"
                data-ai-hint="collaboration security guard"
              />
        </div>
        <div className="mt-6">
            <Button asChild size="lg">
                <Link href="/perfiles">Ver perfiles en detalle</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
