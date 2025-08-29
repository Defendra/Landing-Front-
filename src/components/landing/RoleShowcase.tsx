"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Shield, Clock, ClipboardCheck, Bell, MapPin, FileText, Replace, User } from "lucide-react";
import Link from "next/link";

type Feature = { icon: React.ElementType; title: string; desc: string };

const guardiaFeatures: Feature[] = [
  { icon: Shield,        title: "Perfil y documentos", desc: "Cursos, licencias, dotación y vencimientos siempre al día." },
  { icon: Clock,         title: "Turnos y check-in",    desc: "Ve su programación e inicia turno con biometría o GPS." },
  { icon: ClipboardCheck,title: "Minuta digital",       desc: "Evidencias con texto, foto, audio y adjuntos por evento." },
  { icon: Bell,          title: "Novedades",            desc: "Incapacidades, permisos y reportes operativos." },
  { icon: Replace,       title: "Relevos inteligentes", desc: "Acepta convocatorias de relevo con un toque." },
];

const adminFeatures: Feature[] = [
  { icon: MapPin,        title: "Cobertura en tiempo real", desc: "Requeridos vs. Programados vs. Presentes por servicio." },
  { icon: Clock,         title: "Programación eficiente",    desc: "Crea/edita turnos y gestiona reemplazos urgentes." },
  { icon: ClipboardCheck,title: "Auditoría de minutas",      desc: "Evidencias y KPIs por turno/servicio/cliente." },
  { icon: Bell,          title: "Alertas críticas",          desc: "Vencimientos, ausencias y novedades en un solo panel." },
  { icon: FileText,      title: "Pre-nómina validada",       desc: "Horas reales, recargos y extras listos para dispersión." },
];

function FeatureList({ features }: { features: Feature[] }) {
    return (
        <ul className="mt-6 space-y-4">
            {features.map((f, i) => (
            <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                <p className="font-semibold text-text-high">{f.title}</p>
                <p className="text-text-mid">{f.desc}</p>
                </div>
            </li>
            ))}
        </ul>
    )
}

function Mockup({ features }: { features: Feature[] }) {
    return (
        <Card className="relative bg-card/80 border-border/30 p-4 md:p-6 shadow-xl">
             <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-4 flex flex-col justify-between">
                <div className="mx-auto h-1.5 w-20 rounded-full bg-white/10" />
                <div className="space-y-3">
                  {features.slice(0,4).map((f, i) => (
                    <Card key={i} className="flex gap-3 rounded-xl bg-black/20 p-3 border-white/10">
                      <f.icon className="h-5 w-5 text-white/80 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-white">{f.title}</p>
                        <p className="text-xs text-white/60">{f.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/10" />
              </div>
        </Card>
    )
}


export default function RoleShowcase() {
  return (
    <section id="roles" className="w-full py-16 md:py-24 bg-bg-soft">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="guardia" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="guardia">Para el Guardia</TabsTrigger>
                <TabsTrigger value="admin">Para el Administrador</TabsTrigger>
            </TabsList>
            <TabsContent value="guardia" className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <Mockup features={guardiaFeatures} />
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Experiencia del Guardia</p>
                        <h3 className="mt-2 text-3xl font-bold font-headline text-text-high">
                           Todo desde el móvil: turnos, check-in, minutas y relevos.
                        </h3>
                        <FeatureList features={guardiaFeatures} />
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                           <Button asChild size="lg">
                                <Link href="/guard/login">Iniciar sesión (Guardia)</Link>
                           </Button>
                           <Button asChild size="lg" variant="outline">
                                <Link href="/#contacto">Habla con nosotros</Link>
                           </Button>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="admin" className="mt-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-last md:order-first">
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Panel del Administrador</p>
                        <h3 className="mt-2 text-3xl font-bold font-headline text-text-high">
                           Control total: cobertura, evidencias y pre-nómina en un solo lugar.
                        </h3>
                        <FeatureList features={adminFeatures} />
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                                <Link href="/#contacto">Solicitar demo</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/admin/login">Iniciar sesión (Admin)</Link>
                            </Button>
                        </div>
                    </div>
                    <Mockup features={adminFeatures} />
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
