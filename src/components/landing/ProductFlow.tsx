import { FileText, GanttChartSquare, Bell, UserCheck, Bot, FileCheck2, Workflow } from "lucide-react";
import { Section } from "@/components/landing/Section";

const flowSteps = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        title: "1. Registro y Validación",
        description: "Cada guardia es registrado en la plataforma con su documentación completa, que es validada para asegurar cumplimiento."
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "2. Programación Inteligente",
        description: "Los operadores asignan turnos y puestos de forma centralizada. El sistema detecta vacíos y sugiere optimizaciones."
    },
    {
        icon: <Bell className="h-8 w-8 text-primary" />,
        title: "3. Alertas y Documentación",
        description: "El sistema notifica automáticamente sobre vencimientos de cursos, dotación o permisos de armamento."
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "4. Relevos y Novedades",
        description: "Las incapacidades o ausencias se gestionan con un sistema de relevos por notificación, sin llamadas."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "5. Minuta Digital",
        description: "Los guardias registran todas las novedades del puesto con evidencia digital (fotos, texto, GPS) en tiempo real."
    },
    {
        icon: <FileCheck2 className="h-8 w-8 text-primary" />,
        title: "6. Pre-nómina Validada",
        description: "La plataforma consolida todas las horas trabajadas, extras y novedades en un reporte listo para ser validado y dispersado."
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
                    Así es como Defendra conecta cada punto de tu operación, eliminando pérdidas y garantizando un servicio confiable y documentado.
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
