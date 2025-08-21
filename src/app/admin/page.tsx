import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarDays, ClipboardCheck, Building, BarChart, Users, GanttChartSquare, FileText, BotMessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const adminFeatures = [
    {
        icon: <GanttChartSquare className="h-9 w-9 text-primary" />,
        title: "Programación y Cobertura (con IA)",
        description: "Planificación por puesto o persona con sugerencias asistidas por IA para coberturas y relevos.",
    },
    {
        icon: <BotMessageSquare className="h-9 w-9 text-primary" />,
        title: "Ficha Técnica (generada por IA)",
        description: "Extracción OCR/IA desde PDF/imágenes para estructurar consignas, checklist, riesgos y protocolos.",
    },
    {
        icon: <Users className="h-9 w-9 text-primary" />,
        title: "Novedades del Personal",
        description: "Vacaciones e incapacidades centralizadas con trazabilidad y reglas para reemplazos automáticos.",
    },
    {
        icon: <BarChart className="h-9 w-9 text-primary" />,
        title: "Reportes y KPIs",
        description: "Indicadores de cobertura, incidentes y desempeño. Exportación genérica para tu contabilidad.",
    },
];

export default function AdminPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                     Dirige toda tu operación desde un solo lugar
                                </h1>
                                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Programación, novedades, clientes y KPIs con datos verificados.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full pb-12 md:pb-24 lg:pb-32">
                    <div className="container px-4 md:px-6">
                         <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-4">
                            {adminFeatures.map((feature, index) => (
                                <div key={index} className="grid gap-1 text-center">
                                    <div className="flex justify-center items-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
