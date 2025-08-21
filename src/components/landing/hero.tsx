import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Protección inquebrantable para su empresa digital.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Defendra combina inteligencia artificial de vanguardia con expertos en ciberseguridad para ofrecer una defensa proactiva y en tiempo real contra las amenazas más sofisticadas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contacto">
                  Solicitar Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#precios">
                  Ver Precios
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x600.png"
            alt="Hero"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            data-ai-hint="cybersecurity abstract"
          />
        </div>
      </div>
    </section>
  );
}
