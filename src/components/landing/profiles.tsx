
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle, Clock, FileText, Smartphone, User, Bell, GanttChartSquare, Bot, Users, BarChart } from "lucide-react";

function GuardMobileMockup() {
  return (
    <div className="relative aspect-[9/19] w-full max-w-sm mx-auto bg-card border-4 border-foreground/30 rounded-[2.5rem] shadow-2xl overflow-hidden">
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
        <div className="relative aspect-video w-full bg-card border-4 border-foreground/30 rounded-xl shadow-2xl overflow-hidden p-4 space-y-4">
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
                                <p className="text-xs text-muted-foreground">Turnos Programados Hoy</p>
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
                                <p className="text-xs text-muted-foreground">Puestos extraídos con IA</p>
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
                                <p className="text-xs text-muted-foreground">Novedades por Aprobar</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
             <p className="text-xs text-muted-foreground text-center pt-2">Calendario de turnos y planificación...</p>
        </div>
    )
}


export function Profiles() {
  return (
    <section id="perfiles-teaser" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
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
        <div className="mx-auto max-w-5xl mt-12">
            <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="font-headline text-2xl">Para el Guardia</h3>
                    <GuardMobileMockup />
                </div>
                 <div className="flex flex-col items-center gap-4">
                    <h3 className="font-headline text-2xl">Para el Administrador</h3>
                    <AdminDashboardMockup />
                </div>
            </div>
            <div className="md:hidden">
                 <Tabs defaultValue="guardia" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="guardia">Guardia</TabsTrigger>
                        <TabsTrigger value="admin">Administrador</TabsTrigger>
                    </TabsList>
                    <TabsContent value="guardia" className="mt-6">
                        <GuardMobileMockup />
                    </TabsContent>
                    <TabsContent value="admin" className="mt-6">
                        <AdminDashboardMockup />
                    </TabsContent>
                </Tabs>
            </div>
             <p className="text-center text-muted-foreground mt-4 text-sm">
                Vista ilustrativa: Guardia (móvil) y Administrador (web).
            </p>
        </div>
        <div className="mt-8">
            <Button asChild size="lg">
                <Link href="/perfiles">Comparar Funciones en Detalle</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

    