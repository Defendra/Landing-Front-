import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building, FileText, UserMinus, Hourglass, ShieldAlert, Info } from "lucide-react";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const kpis = [
  { value: "390.000", label: "Empleos formales", icon: <Users className="h-6 w-6 text-primary" />, source: "Supervigilancia (vía CCS, 2024)" },
  { value: "1,2% del PIB", label: "$10,5 billones/año (2023)", icon: <TrendingUp className="h-6 w-6 text-primary" />, source: "CCS & Supervigilancia" },
  { value: "901-1,474", label: "Empresas de seguridad", icon: <Building className="h-6 w-6 text-primary" />, source: "Supervigilancia & CIIU 8010" },
];

const painPoints = [
    { title: "Alta rotación de personal", description: "Sobrecostos de contratación y pérdida de continuidad.", icon: <UserMinus className="h-8 w-8 text-destructive" />, source: "Estudios académicos (2015-2023)"},
    { title: "Procesos basados en papel", description: "Baja trazabilidad, auditorías lentas y datos dispersos.", icon: <FileText className="h-8 w-8 text-destructive" />, source: "Protocolo operativo Supervigilancia"},
    { title: "Presión de costos laborales", description: "Incremento de recargos nocturnos y festivos (2025-2027).", icon: <Hourglass className="h-8 w-8 text-destructive" />, source: "Ley 2466 de 2025"},
    { title: "Entorno delictivo complejo", description: "Exige mayor control, evidencia auditable y respuesta rápida.", icon: <ShieldAlert className="h-8 w-8 text-destructive" />, source: "Estadística delictiva (Policía Nacional)"},
]

const companiesData = [
    { name: "Supervigilancia (2022)", value: 901 },
    { name: "CIIU 8010 (2023)", value: 1474 },
]

export function Hero() {
  return (
    <section id="inicio" className="w-full hero-gradient pt-12 md:pt-24 lg:pt-32 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-1">
          
          <div className="flex flex-col justify-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight">
               La nueva era de la <span className="text-primary">seguridad privada</span> en Colombia
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.
            </p>
             <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-destructive text-accent-foreground">
                    <Link href="#solucion">Conoce la solución</Link>
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="/perfiles">Ver Perfiles</Link>
                </Button>
            </div>
          </div>

          <Card className="w-full shadow-2xl bg-background/80 backdrop-blur-sm border-border/50">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="font-headline text-2xl">El sector hoy: datos y dolores reales</CardTitle>
                     <TooltipProvider>
                        <ShadTooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Info className="h-5 w-5 text-muted-foreground" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">Las cifras y dolores presentados se basan en fuentes públicas y gremiales para dar contexto. No son datos propios de Defendra.</p>
                            </TooltipContent>
                        </ShadTooltip>
                    </TooltipProvider>
                </div>
                <CardDescription>Cifras del sector de vigilancia y seguridad privada en Colombia. Fuentes oficiales y gremiales.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {/* KPIs */}
                <div className="grid gap-4 md:grid-cols-3">
                    {kpis.map(kpi => (
                        <Card key={kpi.label} className="bg-card">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                               <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
                               {kpi.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-primary">{kpi.value}</div>
                                <p className="text-xs text-muted-foreground">Fuente: {kpi.source}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                 {/* Dolores Operativos */}
                <div>
                    <h3 className="font-semibold mb-4 text-center">Dolores operativos que afectan al sector</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {painPoints.map(point => (
                            <div key={point.title} className="flex items-start gap-4 p-4 rounded-lg bg-card h-full">
                                {point.icon}
                                <div>
                                    <h4 className="font-semibold">{point.title}</h4>
                                    <p className="text-sm text-muted-foreground">{point.description}</p>
                                    <p className="text-xs text-muted-foreground/70 mt-1">Fuente: {point.source}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gráficos */}
                 <div>
                    <h3 className="font-semibold mb-4 text-center">Visualización de Datos Clave</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="bg-card">
                            <CardHeader>
                                <CardTitle>Empresas Registradas</CardTitle>
                                <CardDescription>Comparativo de fuentes oficiales (2022 vs 2023).</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={150}>
                                    <BarChart data={companiesData} layout="vertical" margin={{ left: 30, right: 20 }}>
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} tickLine={false} axisLine={false} />
                                        <Tooltip cursor={{ fill: 'hsl(var(--muted-foreground) / 0.2)' }} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} background={{ fill: 'hsl(var(--muted))', radius: 4 }} />
                                    </BarChart>
                                </ResponsiveContainer>
                                <p className="text-xs text-muted-foreground mt-2 text-center">*El CIIU 8010 incluye actividades conexas. Fuente: Fedeseguridad.</p>
                            </CardContent>
                        </Card>
                         <Card className="bg-card">
                            <CardHeader>
                                <CardTitle>Evolución de Costos Laborales</CardTitle>
                                <CardDescription>Aumento progresivo de recargos por Ley 2466/2025.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center h-full pt-6">
                               <div className="w-full space-y-4">
                                    <div className="flex items-center">
                                        <span className="font-bold w-16">2025</span>
                                        <div className="w-full bg-muted rounded-full h-4">
                                            <div className="bg-primary h-4 rounded-full" style={{width: '80%'}}></div>
                                        </div>
                                         <span className="font-mono text-sm ml-2 w-16 text-right">Festivos 80%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold w-16">2026</span>
                                        <div className="w-full bg-muted rounded-full h-4">
                                            <div className="bg-primary h-4 rounded-full" style={{width: '90%'}}></div>
                                        </div>
                                         <span className="font-mono text-sm ml-2 w-16 text-right">Festivos 90%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold w-16">2027</span>
                                        <div className="w-full bg-muted rounded-full h-4">
                                            <div className="bg-primary h-4 rounded-full" style={{width: '100%'}}></div>
                                        </div>
                                         <span className="font-mono text-sm ml-2 w-16 text-right">Festivos 100%</span>
                                    </div>
                               </div>
                                <p className="text-xs text-muted-foreground mt-2 text-center">Horario nocturno inicia a las 7 p.m.</p>
                            </CardContent>
                        </Card>
                    </div>
                 </div>

                <div className="text-center text-xs text-muted-foreground">
                    Mostramos dolores documentados por estudios, normativa vigente y tableros oficiales.
                </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
