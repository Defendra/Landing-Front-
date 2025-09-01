
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Boxes, BellRing, FileCheck2, TrendingDown, Percent, CheckSquare } from "lucide-react";
import Link from "next/link";


const kpis = [
  { icon: TrendingDown, label: "Horas Extra", value: "-32%", helper: "vs base 100" },
  { icon: Percent, label: "Ausentismo", value: "-27%", helper: "con cobertura" },
  { icon: CheckSquare, label: "Cumplimiento SLA", value: "+21%", helper: "mejora promedio" }
];


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
        <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B1324] to-[#0A0F1F] p-6 lg:p-8 shadow-lg">
            <h3 className="text-[22px] lg:text-2xl font-semibold mb-2">Control total de tu operación</h3>
            <p className="text-sm text-text-mid mb-6">
                Opera con datos reales y trazables: reduce costos, cubre vacantes y llega a la pre-nómina validada.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {kpis.map(({ icon: Icon, label, value, helper }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                        <div className="text-muted-foreground text-xs">{label}</div>
                        <div className="text-xl font-semibold leading-tight text-text-high">{value}</div>
                        <div className="text-muted-foreground/80 text-xs">{helper}</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {adminFeatures.map((feature) => (
                    <Link href={feature.href} key={feature.title}>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition h-full">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </span>
                                <div>
                                    <h4 className="font-medium text-text-high">{feature.title}</h4>
                                    <p className="text-sm text-text-mid mt-1">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
