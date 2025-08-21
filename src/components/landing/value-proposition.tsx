import { AreaChart, GanttChart, Blocks, BadgePercent } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <BadgePercent className="h-10 w-10 text-primary" />,
    title: "-40% en costos operativos",
    description: "Optimiza la asignación de recursos y reduce gastos innecesarios con planificación inteligente.",
  },
  {
    icon: <GanttChart className="h-10 w-10 text-primary" />,
    title: "+80% en trazabilidad",
    description: "Visibilidad completa de cada evento, novedad y ronda para una auditoría impecable.",
  },
  {
    icon: <Blocks className="h-10 w-10 text-primary" />,
    title: "100% registros auditables",
    description: "Cumplimiento normativo garantizado con data inmutable y reportes listos para la Supervigilancia.",
  },
];

export function ValueProposition() {
  return (
    <section id="solucion" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Propuesta de Valor
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Una nueva era para la seguridad privada
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Nuestra plataforma centraliza y automatiza la gestión de la seguridad, garantizando el cumplimiento normativo y optimizando cada aspecto de tus operaciones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardHeader className="items-center gap-4 text-center">
                {feature.icon}
                <div className="grid gap-1">
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-foreground/70">
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
