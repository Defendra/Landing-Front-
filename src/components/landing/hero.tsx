import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl xl:text-6xl/none">
                Defendra: La seguridad privada del futuro
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Gestión inteligente de guardias y operaciones en tiempo real. Transformamos la seguridad privada con tecnología.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#perfiles">
                  Soy Guardia
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#perfiles">
                  Soy Administrador
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Hero"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            data-ai-hint="dashboard security"
          />
        </div>
      </div>
    </section>
  );
}
