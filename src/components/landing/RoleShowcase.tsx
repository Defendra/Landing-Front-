"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const GUARD = [
  { t: "Check-in biométrico", d: "Con GPS y hora exacta." },
  { t: "Minuta Digital", d: "Fotos, audio, video por turno." },
  { t: "Novedades", d: "Incapacidades, permisos, reportes." },
  { t: "Alertas", d: "Vencimientos de cursos/licencias." },
];
const ADMIN = [
  { t: "Programación", d: "Cobertura sin vacíos ni sobrecostos." },
  { t: "Inventario y Vencimientos", d: "Armas, dotaciones y licencias." },
  { t: "Relevos", d: "Notifica y confirma en minutos." },
  { t: "Pre-nómina", d: "Base validada lista para dispersión." },
];

export default function RoleShowcase() {
  const [tab, setTab] = useState<"g" | "a">("g");
  const items = tab === "g" ? GUARD : ADMIN;

  return (
    <section id="roles" className="w-full py-16 md:py-24">
        <div className="container">
            <Tabs defaultValue="g" onValueChange={(value) => setTab(value as "g" | "a")} className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                    <TabsTrigger value="g">Para el Guardia</TabsTrigger>
                    <TabsTrigger value="a">Para el Administrador</TabsTrigger>
                </TabsList>
                <TabsContent value="g">
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {GUARD.map(it => (
                        <Card key={it.t} className="bg-card/80 border-border/30 p-5">
                            <CardContent className="p-0">
                                <div className="font-medium text-text-high">{it.t}</div>
                                <p className="mt-2 text-sm text-text-mid">{it.d}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="a">
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {ADMIN.map(it => (
                        <Card key={it.t} className="bg-card/80 border-border/30 p-5">
                             <CardContent className="p-0">
                                <div className="font-medium text-text-high">{it.t}</div>
                                <p className="mt-2 text-sm text-text-mid">{it.d}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
  );
}
