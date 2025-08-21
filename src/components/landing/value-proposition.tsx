import { BadgePercent, GanttChart, Blocks } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: <BadgePercent className="h-10 w-10 text-primary" />,
    title: "Optimización de Recursos",
    description: "Reducción de costos operativos mediante la asignación inteligente de personal y turnos.",
  },
  {
    icon: <GanttChart className="h-10 w-10 text-primary" />,
    title: "Trazabilidad Total",
    description: "Visibilidad completa de cada evento, novedad y ronda para una auditoría impecable y en tiempo real.",
  },
  {
    icon: <Blocks className="h-10 w-10 text-primary" />,
    title: "Cumplimiento Garantizado",
    description: "Asegura el cumplimiento normativo (Decreto 356) con registros digitales inmutables y reportes automatizados.",
  },
];

export function ValueProposition() {
  return (
    <section id="solucion" className="w-full py-12 md:py-24 lg:py-32 bg-background border-y">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Nuestra Solución
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Una nueva era para la gestión de la seguridad
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Nuestra plataforma centraliza y automatiza la gestión de la seguridad, garantizando el cumplimiento normativo y optimizando cada aspecto de tus operaciones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center gap-4 text-center p-6">
                {feature.icon}
                <div className="grid gap-1">
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
