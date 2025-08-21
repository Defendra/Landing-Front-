import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Profiles() {
  return (
    <section id="perfiles-teaser" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Roles en Defendra
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Una herramienta para cada rol
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empoderamos tanto al personal en campo como a los administradores en la oficina, conectando cada punto de la operación de seguridad.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl mt-12">
            <Image
                src="https://placehold.co/960x540.png"
                width="960"
                height="540"
                alt="Guardia y Administrador conectados a través de la plataforma Defendra"
                className="aspect-video w-full overflow-hidden rounded-lg object-cover border"
                data-ai-hint="collaboration security guard"
              />
        </div>
        <div className="mt-8">
            <Button asChild size="lg" variant="outline">
                <Link href="/perfiles">Comparar Perfiles</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
