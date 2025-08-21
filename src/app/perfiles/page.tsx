
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { CalendarDays, FileText, BookOpenCheck, MessageSquare, Bot, GanttChartSquare, Users, BarChart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const guardFeatures = [
    {
        icon: <CalendarDays className="h-8 w-8 text-primary" />,
        title: "Horarios y Turnos",
        description: "Consulta turnos actualizados y recibe notificaciones por cambios.",
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Reporte de Novedades",
        description: "Incapacidades, vacaciones o permisos llegan directo a operaciones.",
    },
    {
        icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
        title: "Minuta Digital",
        description: "Registra eventos e incidentes con evidencia en tiempo real.",
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "Comunicación Directa",
        description: "Chat seguro con supervisores y alertas en emergencias.",
    },
];

const adminFeatures = [
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "Programación y Cobertura (IA)",
        description: "Planifica por puesto/persona con sugerencias asistidas por IA para coberturas y relevos.",
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Ficha Técnica con IA/OCR",
        description: "Extracción desde PDF/imágenes para consignas, checklist, riesgos y protocolos.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Novedades del Personal",
        description: "Vacaciones/incapacidades centralizadas con trazabilidad y reglas de reemplazo.",
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Reportes y KPIs",
        description: "Cobertura, incidentes y desempeño. Exportación de datos marca blanca.",
    },
];


export default function ProfilesOverviewPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Una herramienta para cada rol
                    </h1>
                    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Conoce de un vistazo lo que puede hacer cada perfil en Defendra.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Guardia Card */}
                    <Card className="h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <CardHeader>
                             <Image
                                src="https://placehold.co/600x400.png"
                                width={600}
                                height={400}
                                alt="Funciones para el Guardia"
                                className="aspect-video w-full overflow-hidden rounded-lg object-cover mb-4"
                                data-ai-hint="security guard mobile app"
                            />
                            <CardTitle className="font-headline text-2xl font-bold text-center">Para el Guardia</CardTitle>
                            <CardDescription className="text-center">
                                Accede a horarios, consulta turnos, reporta minutas y novedades. Todo desde tu móvil.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {guardFeatures.map((feature) => (
                                    <div key={feature.title} className="border rounded-lg p-4 flex flex-col items-start text-left h-full">
                                        {feature.icon}
                                        <div className="font-semibold mt-2">{feature.title}</div>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center mt-auto">
                                <Button asChild size="lg">
                                    <Link href="/guardia/onboarding">Iniciar registro de Guardia</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Administrador Card */}
                    <Card className="h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                         <CardHeader>
                             <Image
                                src="https://placehold.co/600x400.png"
                                width={600}
                                height={400}
                                alt="Funciones para el Administrador"
                                className="aspect-video w-full overflow-hidden rounded-lg object-cover mb-4"
                                data-ai-hint="admin dashboard analytics"
                            />
                            <CardTitle className="font-headline text-2xl font-bold text-center">Para el Administrador</CardTitle>
                            <CardDescription className="text-center">
                                Configura operaciones, programa personal, gestiona novedades y visualiza KPIs en tiempo real.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {adminFeatures.map((feature) => (
                                    <div key={feature.title} className="border rounded-lg p-4 flex flex-col items-start text-left h-full">
                                        {feature.icon}
                                        <div className="font-semibold mt-2">{feature.title}</div>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-sm text-muted-foreground text-center mt-auto pt-4">
                                El acceso de Administrador lo gestiona tu empresa.{" "}
                                <Link href="/login" className="underline font-medium text-primary">Más información</Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/login">Iniciar sesión (elegir tipo)</Link>
                    </Button>
                    <Button asChild size="lg">
                        <a href="/#contacto">Hablar con ventas</a>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
