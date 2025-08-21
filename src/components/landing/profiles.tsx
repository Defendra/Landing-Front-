"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Defendra transformó nuestra postura de seguridad. La tranquilidad que tenemos ahora no tiene precio. Su equipo es de clase mundial.",
    name: "Carlos Rodríguez",
    title: "CEO, TechCorp",
    avatar: "CR",
    avatarImage: "https://placehold.co/100x100.png",
  },
  {
    quote: "El nivel de expertise del equipo es impresionante. Son una verdadera extensión de nuestro propio departamento de TI. La integración fue perfecta.",
    name: "Ana López",
    title: "CTO, FinInnovate",
    avatar: "AL",
    avatarImage: "https://placehold.co/100x100.png",
  },
  {
    quote: "La visibilidad que nos da la plataforma sobre posibles amenazas es increíble. Hemos podido prevenir incidentes antes de que ocurrieran.",
    name: "Javier Pérez",
    title: "Director de Operaciones, LogiSolutions",
    avatar: "JP",
    avatarImage: "https://placehold.co/100x100.png",
  },
];

export function Profiles() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La confianza de nuestros clientes es nuestro mayor activo. Vea cómo hemos ayudado a empresas como la suya.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <p className="text-lg font-medium">"{testimonial.quote}"</p>
                        <div className="mt-4 flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={testimonial.avatarImage} data-ai-hint="person portrait" />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
