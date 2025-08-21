
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from "recharts"

const privateSectorCoverageData = [
  { hour: '08:00', required: 120, scheduled: 120, present: 118 },
  { hour: '10:00', required: 120, scheduled: 119, present: 119 },
  { hour: '12:00', required: 120, scheduled: 120, present: 120 },
  { hour: '14:00', required: 125, scheduled: 125, present: 124 },
  { hour: '16:00', required: 125, scheduled: 125, present: 125 },
  { hour: '18:00', required: 110, scheduled: 110, present: 110 },
];

const publicSectorComplianceData = [
  { name: 'Sede Central', compliance: 98 },
  { name: 'Archivo General', compliance: 99 },
  { name: 'Edificio Norte', compliance: 92 },
  { name: 'Bodega Sur', compliance: 95 },
  { name: 'Punto de Atención', compliance: 88 },
  { name: 'Parqueadero', compliance: 100 },
];

const complianceSemaphoreData = [
    { name: "Vigilancia Fija", value: 98, fill: "hsl(var(--primary))" },
    { name: "Vigilancia Móvil", value: 92, fill: "hsl(var(--accent))" },
    { name: "Escoltas", value: 99, fill: "hsl(var(--primary))" },
    { name: "Transporte de Valores", value: 84, fill: "hsl(var(--destructive))" },
    { name: "Seg. Electrónica", value: 96, fill: "hsl(var(--primary))" },
    { name: "Consultoría", value: 100, fill: "hsl(var(--primary))" },
]


const ADMIN_COLORS = {
  required: 'hsl(var(--muted))',
  scheduled: 'hsl(var(--primary))',
  present: 'hsl(var(--accent))',
};

export function TargetAudience() {
    return (
        <section id="audiences" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        A quién servimos
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Soluciones a la medida para cada actor del ecosistema de seguridad.
                    </p>
                </div>

                <Tabs defaultValue="private" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
                        <TabsTrigger value="private">Sector Privado</TabsTrigger>
                        <TabsTrigger value="public">Sector Público</TabsTrigger>
                        <TabsTrigger value="superintendencia">Cumplimiento</TabsTrigger>
                    </TabsList>

                    {/* Sector Privado */}
                    <TabsContent value="private" className="mt-8">
                        <div className="text-center mb-8">
                            <h3 className="font-headline text-2xl font-bold text-primary">Potencia y control para empresas de seguridad privada</h3>
                            <p className="text-muted-foreground">Reduce costos operativos, asegura cobertura y entrega trazabilidad real a tus clientes.</p>
                        </div>
                         <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="font-semibold mb-2">Dolores Típicos:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-left">
                                    <li>Programación manual con vacíos de cobertura y sobrecostos.</li>
                                    <li>Minutas en papel sin evidencia ni trazabilidad.</li>
                                    <li>Reemplazos tardíos por ausentismo o incapacidades.</li>
                                    <li>Vencimientos de cursos/licencias sin alertas.</li>
                                    <li>Reportes tardíos a clientes (SLA incumplidos).</li>
                                </ul>
                                 <h4 className="font-semibold mt-6 mb-2">Qué Ofrecemos:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-left">
                                    <li>Ficha Técnica con IA/OCR para extraer condiciones del servicio.</li>
                                    <li>Programación asistida por IA para optimizar turnos.</li>
                                    <li>Minuta Digital con evidencia multimedia y GPS.</li>
                                    <li>Gestión de novedades y reemplazos automáticos.</li>
                                    <li>Control de inventario crítico con alertas de vencimiento.</li>
                                    <li>Portal de cliente (marca blanca) con KPIs en tiempo real.</li>
                                    <li>Pre-nómina verificada y lista para exportar.</li>
                                </ul>
                            </div>
                            <Card className="bg-background">
                                <CardHeader>
                                    <CardTitle>Cobertura en Tiempo Real</CardTitle>
                                    <CardDescription>Requeridos vs. Programados vs. Presentes</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video w-full">
                                         <ResponsiveContainer width="100%" height="100%">
                                            <RechartsBarChart data={privateSectorCoverageData}>
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
                                    <p className="text-xs text-muted-foreground mt-2 text-center">*Datos ilustrativos.</p>
                                </CardContent>
                            </Card>
                         </div>
                         <div className="text-center mt-8">
                             <Button asChild className="bg-accent hover:bg-destructive text-accent-foreground">
                                <Link href="/#contacto">Solicitar demo para empresas</Link>
                            </Button>
                         </div>
                    </TabsContent>
                    
                    {/* Sector Público */}
                    <TabsContent value="public" className="mt-8">
                         <div className="text-center mb-8">
                            <h3 className="font-headline text-2xl font-bold text-primary">Transparencia y trazabilidad para entidades públicas</h3>
                            <p className="text-muted-foreground">Controla el cumplimiento del contratista y audita la operación con evidencia.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                             <div>
                                <h4 className="font-semibold mb-2">Dolores Típicos:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-left">
                                    <li>Dificultad para auditar contratos y verificar presencia real.</li>
                                    <li>Reporte de incidentes tardío o sin evidencia.</li>
                                    <li>Escasa trazabilidad de novedades y reemplazos.</li>
                                    <li>Documentación dispersa para auditorías.</li>
                                </ul>
                                 <h4 className="font-semibold mt-6 mb-2">Qué Ofrecemos:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-left">
                                    <li>Tablero de interventoría con KPIs de cumplimiento.</li>
                                    <li>Evidencia verificable (biometría, GPS, multimedia).</li>
                                    <li>Alertas de continuidad del servicio en tiempo real.</li>
                                    <li>Historial auditable centralizado.</li>
                                    <li>Reportes de cumplimiento descargables.</li>
                                </ul>
                            </div>
                             <Card className="bg-background">
                                <CardHeader>
                                    <CardTitle>Cumplimiento por Sede</CardTitle>
                                    <CardDescription>Horas efectivas vs. requeridas</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video w-full">
                                         <ResponsiveContainer width="100%" height="100%">
                                            <RechartsBarChart data={publicSectorComplianceData} layout="vertical" margin={{ left: 20, right: 20 }}>
                                                 <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                                <XAxis type="number" hide />
                                                <YAxis dataKey="name" type="category" width={100} tickLine={false} axisLine={false} fontSize={12} />
                                                <Tooltip cursor={{ fill: 'hsl(var(--muted-foreground) / 0.2)' }} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                                                <Bar dataKey="compliance" name="Cumplimiento (%)" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} background={{ fill: 'hsl(var(--muted))', radius: 4 }}>
                                                    {publicSectorComplianceData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.compliance < 95 ? 'hsl(var(--accent))' : 'hsl(var(--primary))'} />
                                                    ))}
                                                </Bar>
                                            </RechartsBarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 text-center">*Datos ilustrativos.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="text-center mt-8">
                             <Button asChild className="bg-accent hover:bg-destructive text-accent-foreground">
                                <Link href="/#contacto">Probar tablero de interventoría</Link>
                            </Button>
                         </div>
                    </TabsContent>

                    {/* Superintendencia */}
                     <TabsContent value="superintendencia" className="mt-8">
                         <div className="text-center mb-8">
                            <h3 className="font-headline text-2xl font-bold text-primary">Pack de cumplimiento para el Estatuto de Vigilancia</h3>
                            <p className="text-muted-foreground">Diseño de procesos y reportes pensados para auditorías y verificación.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="font-semibold mb-2">Qué Resolvemos:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-left">
                                    <li>Seguimiento de las 10 licencias del Estatuto.</li>
                                    <li>Gestión documental y de vencimientos automatizada.</li>
                                    <li>Bitácora auditable con sello de tiempo inmutable.</li>
                                    <li>Flujos de aprobación con trazabilidad completa.</li>
                                    <li>Alertas normativas sobre requisitos críticos.</li>
                                </ul>
                            </div>
                            <Card className="bg-background">
                                <CardHeader>
                                    <CardTitle>Semáforo de Cumplimiento</CardTitle>
                                    <CardDescription>Estado por tipo de licencia</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video w-full flex flex-wrap gap-2 items-center justify-center p-4">
                                        {complianceSemaphoreData.map(item => (
                                            <div key={item.name} className="flex flex-col items-center justify-center p-2 rounded-lg h-24 w-24" style={{backgroundColor: item.fill + '20' }}>
                                                <p className="text-xs text-center font-semibold">{item.name}</p>
                                                <p className="text-2xl font-bold" style={{color: item.fill}}>{item.value}%</p>
                                            </div>
                                        ))}
                                    </div>
                                     <p className="text-xs text-muted-foreground mt-2 text-center">*Datos ilustrativos.</p>
                                </CardContent>
                            </Card>
                        </div>
                         <div className="text-center mt-8">
                             <Button asChild className="bg-accent hover:bg-destructive text-accent-foreground">
                                <Link href="/#contacto">Conocer el Pack de Cumplimiento</Link>
                            </Button>
                         </div>
                    </TabsContent>

                </Tabs>
            </div>
        </section>
    )
}

    