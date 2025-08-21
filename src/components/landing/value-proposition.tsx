import { ShieldCheck, BrainCircuit, Siren, FileCheck2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Monitoreo Proactivo 24/7",
    description: "Nuestra plataforma vigila sus sistemas sin descanso, identificando y neutralizando amenazas antes de que se conviertan en problemas graves.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Análisis con IA",
    description: "Utilizamos IA para analizar miles de millones de eventos y predecir ataques, manteniéndole siempre un paso por delante de los ciberdelincuentes.",
  },
  {
    icon: <Siren className="h-8 w-8 text-primary" />,
    title: "Respuesta Rápida a Incidentes",
    description: "En caso de un ataque, nuestro equipo de élite responde en minutos para minimizar el impacto y recuperar la normalidad operativa de su empresa.",
  },
  {
    icon: <FileCheck2 className="h-8 w-8 text-primary" />,
    title: "Cumplimiento Simplificado",
    description: "Automatizamos la generación de reportes de cumplimiento (GDPR, ISO 27001, etc.) para que supere auditorías sin esfuerzo y con total confianza.",
  },
];

export function ValueProposition() {
  return (
    <section id="soluciones" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Nuestras Soluciones</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Potencia tu Seguridad con Defendra
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos un conjunto de herramientas de ciberseguridad diseñadas para proteger cada vector de ataque y fortalecer su postura de seguridad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="gap-4">
                {feature.icon}
                <div className="grid gap-1">
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                  <CardDescription>
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
