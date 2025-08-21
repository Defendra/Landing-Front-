import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Users, FileText, Archive, Bell, Banknote, Settings, LayoutDashboard, Wand2, Forward, FileSpreadsheet, CalendarDays, ClipboardCheck, Building, BarChart } from "lucide-react";

const quickActions = [
    {
        title: "Crear Plan Operativo",
        description: "Inicia el wizard desde una Ficha Técnica para programar puestos y personal.",
        link: "/admin/operaciones/programacion?start=wizard",
        buttonText: "Iniciar Wizard",
        icon: <Wand2 className="h-6 w-6 text-primary mb-2" />
    },
    {
        title: "Novedades de Personal",
        description: "Aprueba vacaciones/incapacidades y activa reemplazos automáticos.",
        link: "/admin/operaciones/novedades",
        buttonText: "Gestionar Novedades",
        icon: <Forward className="h-6 w-6 text-primary mb-2" />
    },
    {
        title: "Generar Pre-Nómina",
        description: "Consolida horas, recargos y novedades aprobadas. Exporta a Siigo.",
        link: "/admin/nomina?range=quincena-actual",
        buttonText: "Generar Ahora",
        icon: <FileSpreadsheet className="h-6 w-6 text-primary mb-2" />
    }
];

const modules = [
    { title: 'Clientes', desc: 'Archivo comercial, puestos y fichas técnicas.', to: '/admin/clientes', icon: <Briefcase className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Operaciones', desc: 'Programación y Minuta Digital.', to: '/admin/operaciones/programacion', icon: <FileText className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Personal', desc: 'Aprobación de perfiles y hoja de vida digital.', to: '/admin/personal', icon: <Users className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Inventario', desc: 'Armamento, chalecos y vencimientos.', to: '/admin/inventario', icon: <Archive className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Alertas', desc: 'Bandeja unificada de eventos críticos.', to: '/admin/alertas', icon: <Bell className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Nómina', desc: 'Pre-liquidación por horas y novedades.', to: '/admin/nomina', icon: <Banknote className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Administración', desc: 'Usuarios, roles, permisos, modalidades.', to: '/admin/configuracion', icon: <Settings className="h-8 w-8 mx-auto mb-4 text-primary" /> },
    { title: 'Dashboard', desc: 'KPIs accionables en tiempo real.', to: '/admin/dashboard', icon: <LayoutDashboard className="h-8 w-8 mx-auto mb-4 text-primary" /> },
];

const adminFeatures = [
    {
        icon: <CalendarDays className="h-9 w-9 text-primary" />,
        title: "Programación y Cobertura",
        description: "Planifica por puesto o por persona, visualiza coberturas y detecta vacíos con anticipación.",
    },
    {
        icon: <ClipboardCheck className="h-9 w-9 text-primary" />,
        title: "Novedades del Personal",
        description: "Centraliza vacaciones, incapacidades y permisos. Aprobación ágil y trazabilidad completa.",
    },
    {
        icon: <Building className="h-9 w-9 text-primary" />,
        title: "Clientes y Contratos",
        description: "Archivo comercial, sedes y puestos. Relaciona cada servicio con su ficha técnica y condiciones.",
    },
    {
        icon: <BarChart className="h-9 w-9 text-primary" />,
        title: "Reportes y KPIs",
        description: "Indicadores de cobertura, incidentes y desempeño. Exporta reportes para seguimiento y auditoría.",
    },
];

const keyFlows = [
    {
        title: "Ficha Técnica → Programación",
        steps: ["Sube Ficha (PDF/imagen)", "Valida y configura plan", "Asigna personal", "Publica turnos"],
        link: "/admin/operaciones/programacion?start=wizard",
        cta: "Iniciar Wizard"
    },
    {
        title: "Novedades con reemplazos",
        description: "Al aprobar vacaciones/incapacidades, se marcan turnos “Requiere relevo”.",
        link: "/admin/operaciones/novedades",
        cta: "Ver Novedades"
    },
    {
        title: "Pre-Nómina automática",
        description: "Consolida horas, extras y recargos. Exportación para Siigo.",
        link: "/admin/nomina",
        cta: "Generar Pre-Nómina"
    }
];


export default function AdminPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Dirige toda tu operación desde un solo lugar
                                </h1>
                                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Programa turnos, aprueba novedades, controla inventario y genera la pre-nómina con datos verificados.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Button asChild size="lg"><Link href="#">Entrar a Admin</Link></Button>
                                <Button asChild size="lg" variant="outline"><Link href="#">Crear cuenta empresa</Link></Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="w-full py-12 md:py-24">
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

                {/* Acciones Rápidas */}
                <section className="w-full py-12 md:py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Acciones Rápidas
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {quickActions.map((action, index) => (
                                <Card key={index} className="h-full">
                                    <CardContent className="p-6 flex flex-col items-start text-left">
                                        {action.icon}
                                        <h3 className="text-xl font-bold font-headline">{action.title}</h3>
                                        <p className="text-muted-foreground flex-grow-1 mb-4">{action.description}</p>
                                        <Button asChild><Link href={action.link}>{action.buttonText}</Link></Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Mosaico de módulos */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Módulos del Administrador
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {modules.map((m, i) => (
                                <Card key={i} className="h-full text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex flex-col">
                                        {m.icon}
                                        <h3 className="text-xl font-bold font-headline">{m.title}</h3>
                                        <p className="text-muted-foreground flex-grow mb-4">{m.desc}</p>
                                        <Button asChild variant="outline" className="mt-auto"><Link href={m.to}>Ir al módulo</Link></Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Flujos clave */}
                <section className="w-full py-12 md:py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                            Flujos Clave
                        </h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Ficha Técnica → Programación</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                                        <li>Sube Ficha (PDF/imagen)</li>
                                        <li>Valida y configura plan</li>
                                        <li>Asigna personal</li>
                                        <li>Publica turnos</li>
                                    </ol>
                                    <Button asChild variant="link" className="p-0"><Link href="/admin/operaciones/programacion?start=wizard">Iniciar Wizard</Link></Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Novedades con reemplazos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Al aprobar vacaciones/incapacidades, se marcan turnos “Requiere relevo” y se alerta.</p>
                                    <Button asChild variant="link" className="p-0"><Link href="/admin/operaciones/novedades">Gestionar Novedades</Link></Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pre-Nómina automática</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Consolida horas, extras y recargos. Exportación para Siigo.</p>
                                    <Button asChild variant="link" className="p-0"><Link href="/admin/nomina">Generar Pre-Nómina</Link></Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
