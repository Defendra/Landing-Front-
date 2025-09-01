"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Bell, ClipboardList } from "lucide-react";

const guardFeatures = [
    {
      icon: CheckCircle2,
      title: "Check-in Biométrico",
      description: "08:02 | Sede Norte | GPS OK",
    },
    {
      icon: FileText,
      title: "Minuta Digital Enviada",
      description: "Recepción de paquetería – Torre B",
    },
    {
      icon: ClipboardList,
      title: "Novedad: Vacaciones",
      description: "Pendiente de Aprobación",
    },
    {
      icon: Bell,
      title: "Alerta de Vencimiento",
      description: "Curso Básico vence en 15 días",
    },
];


export default function GuardView() {
    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card/80 border-border/30 rounded-xl p-4">
                <img
                    src="https://picsum.photos/400/800"
                    alt="App del Guardia en un móvil"
                    width={400}
                    height={800}
                    className="rounded-lg object-cover mx-auto"
                    data-ai-hint="mobile app interface"
                />
            </div>
            <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-text-high">Tu oficina en tu bolsillo</h3>
                 <p className="text-text-mid">
                    Desde la palma de tu mano, puedes gestionar turnos, reportar novedades y acceder a toda la información que necesitas para hacer tu trabajo de forma más eficiente y segura.
                 </p>
                 <div className="space-y-4">
                    {guardFeatures.map((feature) => (
                        <Card key={feature.title} className="bg-card/80 border-border/30">
                            <CardHeader className="flex flex-row items-center gap-4 p-4">
                                <feature.icon className="w-6 h-6 text-primary" />
                                <CardTitle className="text-base font-semibold text-text-high">{feature.title}</CardTitle>
                            </CardHeader>
                             <CardContent className="p-4 pt-0">
                                <p className="text-sm text-text-mid">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>
        </div>
    );
}