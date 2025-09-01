"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Boxes, BellRing, FileCheck2 } from "lucide-react";
import Link from "next/link";

const adminFeatures = [
    {
      icon: CalendarCheck,
      title: "Programación Inteligente",
      description: "Asigna turnos, gestiona relevos y optimiza la cobertura sin sobrecostos.",
      href: "#",
    },
    {
      icon: Boxes,
      title: "Control de Activos",
      description: "Gestiona dotación, equipos y vencimientos de licencias de forma centralizada.",
      href: "#",
    },
    {
      icon: BellRing,
      title: "Gestión de Novedades",
      description: "Recibe y aprueba incapacidades, permisos y otros reportes operativos.",
      href: "#",
    },
    {
      icon: FileCheck2,
      title: "Pre-nómina Validada",
      description: "Genera reportes de horas exactos y auditados, listos para liquidación.",
      href: "#",
    },
];

export default function AdminView() {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-text-high">Control total de la operación</h3>
                 <p className="text-text-mid">
                    Desde la programación de turnos hasta la pre-nómina, Defendra te da las herramientas para gestionar tu equipo de seguridad de forma eficiente, reduciendo costos y garantizando el cumplimiento.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {adminFeatures.map((feature) => (
                        <Link href={feature.href} key={feature.title}>
                            <Card className="bg-card/80 border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                                <CardHeader className="p-4">
                                    <feature.icon className="w-8 h-8 text-primary mb-2" />
                                    <CardTitle className="text-base font-semibold text-text-high">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="text-sm text-text-mid">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
             <div className="bg-card/80 border-border/30 rounded-xl p-4">
                <img
                    src="https://picsum.photos/800/600"
                    alt="Dashboard de Administrador"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover"
                    data-ai-hint="dashboard analytics"
                />
            </div>
        </div>
    );
}
