
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { Section } from "./Section";
import LicensesGrid from "./LicensesGrid";

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

                <LicensesGrid />

                <div className="text-center mt-12 max-w-3xl mx-auto">
                     <p className="text-text-mid text-lg">
                        Nuestra plataforma soporta todas las operaciones del sector de la seguridad privada, tanto en entidades públicas como privadas, garantizando trazabilidad, reducción de costos y cumplimiento normativo.
                    </p>
                </div>

            </div>
        </Section>
    )
}
