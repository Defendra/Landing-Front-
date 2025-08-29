import { FileText, GanttChartSquare, Bell, UserCheck, Bot, FileCheck2, Workflow } from "lucide-react";
import { Section } from "@/components/landing/Section";

const flowSteps = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        title: "1. Registro del Guardia",
        description: "Cada guardia es registrado en una base de datos centralizada y confiable, con su documentación completa y validada."
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "2. Programación Inteligente",
        description: "Optimiza la asignación de turnos y puestos para eliminar fugas de capital por horas extra y relevos no planificados."
    },
    {
        icon: <Bell className="h-8 w-8 text-primary" />,
        title: "3. Documentación y Alertas",
        description: "Mantén licencias, cursos y dotación siempre al día con notificaciones automáticas para evitar riesgos por vencimientos."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "4. Minuta Digital",
        description: "Registra todas las novedades del puesto con evidencia multimedia (fotos, GPS) en tiempo real para una trazabilidad total."
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "5. Gestión de Novedades",
        description: "Incapacidades, ausencias y permisos se reportan digitalmente, gestionando relevos por notificación, sin llamadas."
    },
    {
        icon: <FileCheck2 className="h-8 w-8 text-primary" />,
        title: "6. Prenómina Validada",
        description: "La plataforma consolida información real y verificada, generando un reporte listo para una dispersión de nómina exacta."
    }
];

export function ProductFlow() {
    return (
        <Section id="flujo" className="bg-bg-soft">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-high">
                    Trazabilidad de principio a fin
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-text-mid md:text-xl/relaxed">
                    Defendra garantiza eficiencia y confianza en cada proceso, conectando cada punto de tu operación para eliminar pérdidas y asegurar un servicio documentado.
                </p>
            </div>

            <div className="relative mt-12">
                {/* Visual Flow Diagram */}
                <div className="flex justify-center items-center mb-12">
                    <Workflow className="w-full max-w-4xl h-auto text-primary/10" strokeWidth={0.5} />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flowSteps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-headline text-text-high">{step.title}</h3>
                                <p className="mt-1 text-text-mid">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
