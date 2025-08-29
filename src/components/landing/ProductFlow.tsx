import { FileText, GanttChartSquare, Bell, UserCheck, Bot, FileCheck2, Workflow } from "lucide-react";
import { Section } from "@/components/landing/Section";

const flowSteps = [
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        title: "1. Registro del Guardia",
        description: "Cada perfil, completo y actualizado. Base de datos centralizada y confiable."
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "2. Programación",
        description: "Turnos optimizados y reemplazos urgentes en 1 clic. Control y reducción de pérdidas."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "3. Minuta Digital",
        description: "Evidencia con GPS en cada evento. Transparencia y control en cada turno."
    },
    {
        icon: <Bell className="h-8 w-8 text-primary" />,
        title: "4. Novedades y Alertas",
        description: "Incapacidades, reportes, cursos y licencias al día. Cero riesgos por vencimientos."
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "5. Relevos Inteligentes",
        description: "Gestión de novedades y reemplazos por notificación, sin llamadas."
    },
    {
        icon: <FileCheck2 className="h-8 w-8 text-primary" />,
        title: "6. Pre-nómina Validada",
        description: "Pagos exactos con datos reales, verificados y auditables, listos para dispersión."
    }
];

export function ProductFlow() {
    return (
        <Section id="flujo" className="bg-bg-soft">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-high">
                    Defendra: La seguridad privada ahora es trazable, eficiente y digital
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-text-mid md:text-xl/relaxed">
                    Defendra garantiza trazabilidad, eficiencia y confianza en cada proceso del sector de vigilancia privada.
                </p>
            </div>

            <div className="relative mt-12">
                
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
