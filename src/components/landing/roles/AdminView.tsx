import { CalendarCheck, Boxes, BellRing, FileCheck2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Section } from "../Section";

const cards = [
  {
    icon: CalendarCheck,
    title: "Programación",
    desc: "Cobertura sin vacíos ni sobrecostos.",
    href: "#programacion",
  },
  {
    icon: Boxes,
    title: "Inventario y Vencimientos",
    desc: "Armas, dotaciones y licencias con alertas.",
    href: "#inventario",
  },
  {
    icon: BellRing,
    title: "Relevos Inteligentes",
    desc: "Notifica, asigna y confirma en minutos.",
    href: "#relevos",
  },
  {
    icon: FileCheck2,
    title: "Pre-nómina Validada",
    desc: "Pagos exactos listos para dispersión.",
    href: "#prenomina",
  },
];

export default function AdminView() {
  return (
    <div className="space-y-8">
      <p className="text-text-mid text-base md:text-lg max-w-3xl mx-auto text-center">
        El administrador programa turnos, gestiona inventario y novedades, valida evidencia y llega a una pre-nómina exacta y auditada.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title, desc, href }) => (
          <Link
            key={title}
            href={href}
            className="group block"
          >
            <Card className="h-full bg-card/80 border-border/30 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                 <CardContent className="p-0 flex flex-col items-start gap-4">
                    <div className="rounded-xl bg-secondary p-3">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="font-semibold text-text-high">{title}</p>
                        <p className="text-sm text-text-mid mt-1">{desc}</p>
                    </div>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
