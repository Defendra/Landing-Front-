import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarClock, FileText, BookOpenCheck, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const guardFeatures = [
    {
        icon: <CalendarClock className="h-10 w-10 text-primary" />,
        title: "Horarios y Turnos",
        description: "Consulta tus horarios de trabajo actualizados y recibe notificaciones cuando tengas cambios en la programación.",
    },
    {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: "Reporte de Novedades",
        description: "Informa incapacidades, vacaciones o situaciones especiales. Todo llega directo al área de operaciones.",
    },
    {
        icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
        title: "Minuta Digital",
        description: "Registra eventos o incidentes durante tu turno y facilita reportes en tiempo real a la central.",
    },
    {
        icon: <MessageSquare className="h-10 w-10 text-primary" />,
        title: "Comunicación Directa",
        description: "Chat seguro con supervisores y alertas instantáneas en caso de emergencias.",
    },
];

export default function GuardiaPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Tu trabajo, siempre en tu mano
                                </h1>
                                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Con la app de Defendra tendrás control total de tus turnos y comunicación en tiempo real.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full pb-12 md:pb-24 lg:pb-32">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto grid max-w-5xl items-start gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:gap-x-16">
                            {guardFeatures.map((feature, index) => (
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

                <section className="w-full pb-12 md:pb-24 lg:pb-32 text-center">
                    <div className="container">
                        <Button asChild size="lg">
                            <Link href="/guardia/onboarding">Iniciar Registro</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
