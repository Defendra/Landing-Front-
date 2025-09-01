
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Bell, ClipboardList, AlertTriangle, BellRing } from "lucide-react";


const guardFeatures = [
    {
      icon: CheckCircle2,
      title: "Check-in Biométrico",
      meta: "08:02 | Sede Norte | GPS OK",
      desc: "Ingreso con verificación facial y geolocalización."
    },
    {
      icon: FileText,
      title: "Minuta Digital",
      meta: "Paquetería recibida – Torre B",
      desc: "Fotos, audio y notas por turno."
    },
    {
      icon: BellRing,
      title: "Novedades",
      meta: "Vacaciones – pendiente de aprobación",
      desc: "Incapacidades, permisos y reportes en un flujo."
    },
    {
      icon: AlertTriangle,
      title: "Alertas",
      meta: "Curso Básico vence en 15 días",
      desc: "Vencimientos de cursos, licencias y dotación."
    }
];


export default function GuardView() {
    return (
        <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B1324] to-[#0A0F1F] p-6 lg:p-8 shadow-lg">
            <h3 className="text-[22px] lg:text-2xl font-semibold mb-2 text-text-high">Tu oficina en tu bolsillo</h3>
            <p className="text-sm text-text-mid mb-6">
                Gestiona turnos, reporta novedades y accede a tu información en tiempo real, desde el móvil.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
                {guardFeatures.map(({ icon: Icon, title, meta, desc }) => (
                <li key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07] transition h-full">
                    <div className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                        <h4 className="font-medium text-text-high">{title}</h4>
                        <div className="text-xs text-muted-foreground">{meta}</div>
                        <p className="text-sm text-text-mid mt-1">{desc}</p>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    );
}
