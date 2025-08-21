

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle, Clock, FileText, Smartphone, User, Bell, GanttChartSquare, Bot, Users, BarChart, ShieldCheck, MapPin, BookUser, MessageSquare, Building } from "lucide-react";

function GuardMobileMockup() {
  return (
    <div className="relative aspect-[9/19] w-full max-w-[280px] mx-auto bg-card border-4 border-foreground/30 rounded-[2.5rem] shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-8 bg-card flex items-center justify-center">
        <div className="w-20 h-2 bg-foreground/30 rounded-full"></div>
      </div>
      <div className="p-4 space-y-4 pt-10 text-left">
        <div className="flex items-center gap-3">
          <User className="w-10 h-10 text-primary" />
          <div>
            <p className="font-bold">Juan Pérez</p>
            <p className="text-sm text-muted-foreground">Guardia de Seguridad</p>
          </div>
        </div>
        <Card className="bg-background/50">
            <CardContent className="p-3">
                 <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                        <p className="font-semibold text-sm">Check-in Biométrico</p>
                        <p className="text-xs text-muted-foreground">08:02 | Sede Norte | GPS OK</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-background/50">
            <CardContent className="p-3">
                 <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                        <p className="font-semibold text-sm">Minuta Digital Enviada</p>
                        <p className="text-xs text-muted-foreground">Recepción de paquetería - Torre B</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-background/50">
            <CardContent className="p-3">
                 <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <div>
                        <p className="font-semibold text-sm">Novedad: Vacaciones</p>
                        <p className="text-xs text-muted-foreground">Pendiente de Aprobación</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="bg-background/50">
            <CardContent className="p-3">
                 <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-destructive" />
                    <div>
                        <p className="font-semibold text-sm">Alerta de Vencimiento</p>
                        <p className="text-xs text-muted-foreground">Curso Básico vence en 15 días</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}


function AdminDashboardMockup() {
    return (
        <div className="relative aspect-video w-full max-w-2xl mx-auto bg-card border-4 border-foreground/30 rounded-xl shadow-2xl overflow-hidden p-4 space-y-4">
            <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <h3 className="font-bold">Dashboard de Operaciones</h3>
                    <p className="text-sm text-muted-foreground">Vista general en tiempo real</p>
                </div>
                <div className="bg-primary/20 text-primary font-bold text-sm px-3 py-1 rounded-full">Cobertura: 98%</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-background/50">
                     <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                           <GanttChartSquare className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-bold text-lg">1,284</p>
                                <p className="text-xs text-muted-foreground">Turnos Programados</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-background/50">
                     <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                           <Bot className="w-6 h-6 text-primary" />
                            <div>
                                <p className="font-bold text-lg">24</p>
                                <p className="text-xs text-muted-foreground">Puestos con IA</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-background/50">
                     <CardContent className="p-3">
                        <div className="flex items-center gap-2">
                            <Users className="w-6 h-6 text-orange-400" />
                            <div>
                                <p className="font-bold text-lg">12</p>
                                <p className="text-xs text-muted-foreground">Novedades Pendientes</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
             <p className="text-xs text-muted-foreground text-center pt-2">Calendario de turnos y planificación...</p>
        </div>
    )
}

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


export function Profiles() {
  return (
    <section id="roles" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Roles en Defendra
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Una herramienta para cada rol
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empoderamos tanto al personal en campo como a los administradores en la oficina, conectando cada punto de la operación de seguridad.
            </p>
          </div>
        </div>

        <Tabs defaultValue="guardia" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="guardia">Para el Guardia</TabsTrigger>
                <TabsTrigger value="admin">Para el Administrador</TabsTrigger>
            </TabsList>
            <TabsContent value="guardia" className="mt-8">
                <Card className="bg-background/30 border-border/50">
                    <CardContent className="p-6 md:p-10 text-center">
                        <GuardMobileMockup />
                        <p className="mt-4 max-w-md mx-auto text-muted-foreground">
                            Todo desde el móvil: horarios, check-in, minutas y novedades con evidencia.
                        </p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="admin" className="mt-8">
                <Card className="bg-background/30 border-border/50">
                    <CardContent className="p-6 md:p-10 text-center">
                        <AdminDashboardMockup />
                         <p className="mt-4 max-w-md mx-auto text-muted-foreground">
                            Configura planes desde Ficha Técnica con IA, aprueba novedades y controla KPIs.
                        </p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/perfiles">Comparar Funciones en Detalle</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
