
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const licencias = [
  { name: "Vigilancia fija" },
  { name: "Vigilancia móvil" },
  { name: "Escoltas" },
  { name: "Transporte de valores" },
  { name: "Empresas blindadoras" },
  { name: "Escuelas de capacitación" },
  { name: "Departamentos de seguridad" },
  { name: "Fabricación de equipos" },
  { name: "Importación de equipos" },
  { name: "Comercialización de equipos" },
]

export function TargetAudience() {
    return (
        <Section id="audiencias" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                     <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4">
                        Cumplimiento & Alcance
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        ¿A quién servimos?
                    </h2>
                    <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                       Defendra se adapta a todos los modelos de operación en seguridad privada, bajo las 10 licencias del Decreto 356 de 1994.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {licencias.map((lic) => (
                        <Card key={lic.name} className="bg-background/50 text-center p-4 flex flex-col items-center justify-center">
                            <ShieldCheck className="h-8 w-8 text-primary mb-2"/>
                            <p className="text-sm font-medium text-text-high">{lic.name}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12 max-w-3xl mx-auto">
                     <p className="text-text-mid text-lg">
                        Nuestra plataforma soporta todas las operaciones del sector de la seguridad privada, tanto en entidades públicas como privadas, garantizando trazabilidad, reducción de costos y cumplimiento normativo.
                    </p>
                </div>

            </div>
        </Section>
    )
}
