import { BadgePercent, GanttChart, Blocks } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "./Section";
import { KPICard } from "./KPICard";

const features = [
  {
    icon: <BadgePercent className="h-8 w-8 text-primary" />,
    label: "Horas Extra",
    value: "-32%",
    caption: "Reducción de costos por horas no justificadas.",
  },
  {
    icon: <GanttChart className="h-8 w-8 text-primary" />,
    label: "Ausentismo",
    value: "-27%",
    caption: "Disminución de ausentismo sin cobertura.",
  },
  {
    icon: <Blocks className="h-8 w-8 text-primary" />,
    label: "Cumplimiento SLA",
    value: "+21%",
    caption: "Mejora del cumplimiento de acuerdos de servicio.",
  },
];

export function ValueProposition() {
  return (
    <Section 
        id="solucion" 
        className="w-full"
        title="Una nueva era para la gestión de la seguridad"
        subtitle="Nuestra plataforma centraliza y automatiza la gestión de la seguridad, garantizando el cumplimiento normativo y optimizando cada aspecto de tus operaciones."
    >
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <KPICard 
                key={index} 
                icon={feature.icon}
                label={feature.label}
                value={feature.value}
                caption={feature.caption}
            />
          ))}
        </div>
    </Section>
  );
}
