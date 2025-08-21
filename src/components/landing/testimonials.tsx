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
    quote: "Defendra simplificó por completo nuestra gestión de personal. Ahora la programación de turnos es cuestión de minutos, no de horas.",
    name: "Ana Morales",
    title: "Jefe de Operaciones, Seguritech",
    avatar: "AM",
    avatarImage: "https://placehold.co/100x100.png",
  },
  {
    quote: "La plataforma es increíblemente intuitiva. Mis guardias la adoptaron sin problemas y los reportes en tiempo real nos dan un control que no teníamos.",
    name: "Javier Cárdenas",
    title: "Gerente General, Prosegur Colombia",
    avatar: "JC",
    avatarImage: "https://placehold.co/100x100.png",
  },
  {
    quote: "El cumplimiento del Decreto 356 era un dolor de cabeza. Defendra automatiza gran parte del papeleo y nos mantiene siempre al día.",
    name: "Luisa Fernanda Ríos",
    title: "Directora de Cumplimiento, G4S",
    avatar: "LR",
    avatarImage: "https://placehold.co/100x100.png",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background border-b">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Nuestros Clientes
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empresas que confían en Defendra
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestros clientes han transformado su operación y mejorado su eficiencia, sentando un nuevo estándar en la seguridad privada.
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
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="bg-card">
                      <CardContent className="flex flex-col items-start p-6 text-left">
                        <p className="text-lg font-medium mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
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
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
