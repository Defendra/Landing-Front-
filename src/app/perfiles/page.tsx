
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Bot, GanttChartSquare, Users, BarChart, ShieldCheck, MapPin, Building, Clock, BookUser, MessageSquare, FileText } from "lucide-react";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from 'recharts';


const guardFeatures = [
    { icon: <GanttChartSquare className="h-8 w-8 text-primary" />, title: "Horarios y Turnos", description: "Consulta próximos turnos, recibe notificaciones y entra al puesto con un tap." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Check-in Biométrico", description: "Selfie + GPS para validar asistencia en segundos, sin fricciones." },
    { icon: <FileText className="h-8 w-8 text-primary" />, title: "Minuta Digital", description: "Registra eventos con fotos, videos o audio. Envío en tiempo real." },
    { icon: <Clock className="h-8 w-8 text-primary" />, title: "Novedades y Solicitudes", description: "Vacaciones, incapacidades y permisos con seguimiento del estado de aprobación." },
    { icon: <MessageSquare className="h-8 w-8 text-primary" />, title: "Comunicación Directa", description: "Chat seguro con supervisores y alertas de emergencia para una respuesta rápida." },
    { icon: <BookUser className="h-8 w-8 text-primary" />, title: "Perfil y Documentos", description: "Tus licencias y cursos siempre a la mano con recordatorios de vencimiento." },
];

const adminFeatures = [
    { icon: <Bot className="h-8 w-8 text-primary" />, title: "Ficha Técnica con IA/OCR", description: "Carga un PDF y extrae automáticamente los puestos, rondas y condiciones del servicio." },
    { icon: <GanttChartSquare className="h-8 w-8 text-primary" />, title: "Programación y Cobertura", description: "Parrilla de turnos por puestos o personas, con detección de vacíos y sugerencias de IA." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Novedades de Personal", description: "Aprobación centralizada que impacta automáticamente la programación y pre-nómina." },
    { icon: <MapPin className="h-8 w-8 text-primary" />, title: "Inventario Crítico", description: "Asigna y controla armas, radios y chalecos con alertas por vencimiento de permisos." },
    { icon: <Building className="h-8 w-8 text-primary" />, title: "Clientes y Puestos", description: "Centraliza el archivo comercial, sedes y condiciones específicas de cada cliente." },
    { icon: <BarChart className="h-8 w-8 text-primary" />, title: "Dashboard de KPIs", description: "Visualiza en tiempo real la cobertura, incidentes y desempeño general de la operación." },
];


const guardDonutData = [
  { name: 'Completed', value: 62 },
  { name: 'Remaining', value: 38 },
];
const GUARD_COLORS = ['hsl(var(--primary))', 'hsl(var(--primary) / 0.3)'];

const adminCoverageData = [
  { hour: '08:00', required: 120, scheduled: 120, present: 118 },
  { hour: '10:00', required: 120, scheduled: 119, present: 119 },
  { hour: '12:00', required: 120, scheduled: 120, present: 120 },
  { hour: '14:00', required: 125, scheduled: 125, present: 124 },
  { hour: '16:00', required: 125, scheduled: 125, present: 125 },
  { hour: '18:00', required: 110, scheduled: 110, present: 110 },
];
const ADMIN_COLORS = {
  required: 'hsl(var(--muted))',
  scheduled: 'hsl(var(--primary))',
  present: 'hsl(var(--accent))',
};


export default function ProfilesOverviewPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Una herramienta para cada rol
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Conoce de un vistazo lo que puede hacer cada perfil en Defendra.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Guardia Card */}
                    <Card className="h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-background">
                        <CardHeader>
                            <div className="aspect-video w-full overflow-hidden rounded-lg object-cover mb-4 bg-card p-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={guardDonutData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} labelLine={false}>
                                            {guardDonutData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={GUARD_COLORS[index % GUARD_COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                                        <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" className="fill-foreground text-sm font-light">Avance</text>
                                        <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" className="fill-primary font-bold text-3xl">
                                            {`${guardDonutData[0].value}%`}
                                        </text>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <CardTitle className="font-headline text-2xl font-bold text-center">Para el Guardia</CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                **Avance del turno** — Progreso en tiempo real con check-in biométrico y minutas registradas. *Datos ilustrativos*.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {guardFeatures.map((feature) => (
                                    <div key={feature.title} className="border rounded-lg p-4 flex flex-col items-start text-left h-full bg-card">
                                        {feature.icon}
                                        <div className="font-semibold mt-2">{feature.title}</div>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center mt-auto">
                                <Button asChild size="lg" className="bg-accent hover:bg-destructive text-accent-foreground">
                                    <Link href="/guardia/onboarding">Iniciar registro de Guardia</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Administrador Card */}
                    <Card className="h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-background">
                         <CardHeader>
                            <div className="aspect-video w-full overflow-hidden rounded-lg object-cover mb-4 bg-card p-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsBarChart data={adminCoverageData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                        <XAxis dataKey="hour" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip 
                                            cursor={{ fill: 'hsl(var(--muted-foreground) / 0.2)' }} 
                                            contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                                        />
                                        <Legend iconSize={10} />
                                        <Bar dataKey="required" name="Requeridos" fill={ADMIN_COLORS.required} radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="scheduled" name="Programados" fill={ADMIN_COLORS.scheduled} radius={[4, 4, 0, 0]} />
                                        <Bar dataKey="present" name="Presentes" fill={ADMIN_COLORS.present} radius={[4, 4, 0, 0]} />
                                    </RechartsBarChart>
                                </ResponsiveContainer>
                            </div>
                            <CardTitle className="font-headline text-2xl font-bold text-center">Para el Administrador</CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                **Cobertura en tiempo real** — Compara requeridos, programados y presentes para detectar vacíos y actuar. *Datos ilustrativos*.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {adminFeatures.map((feature) => (
                                    <div key={feature.title} className="border rounded-lg p-4 flex flex-col items-start text-left h-full bg-card">
                                        {feature.icon}
                                        <div className="font-semibold mt-2">{feature.title}</div>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-auto">
                                <Button asChild size="lg">
                                    <Link href="/admin/login">Iniciar sesión de Admin</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/login">Ir a la página de Login</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-accent hover:bg-destructive text-accent-foreground">
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

