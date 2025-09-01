import { CheckCircle2, FileText, Bell, ClipboardList } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
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
    }
]

export default function GuardView() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-text-high">Todo en la palma de su mano</h3>
        <p className="text-text-mid text-base md:text-lg mt-4">
          El guardia registra turnos con evidencia en segundos: check-in biométrico con GPS, minutas digitales, novedades y alertas de vencimientos. Todo queda validado y trazable.
        </p>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <Card className="rounded-[2rem] border-border/30 bg-card/50 p-5 shadow-2xl">
          <CardContent className="p-0">
             <ul className="space-y-3">
               {features.map(({icon: Icon, title, description}) => (
                    <li key={title}>
                        <Card className="bg-card/80 border-border/20 p-4">
                             <div className="flex items-start gap-3">
                                <Icon className="h-5 w-5 mt-0.5 text-primary" aria-hidden="true" />
                                <div>
                                <p className="font-medium text-text-high">{title}</p>
                                <p className="text-sm text-text-mid">{description}</p>
                                </div>
                            </div>
                        </Card>
                    </li>
               ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
