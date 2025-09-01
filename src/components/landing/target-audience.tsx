import { Section } from "./Section";
import LicensesGrid from "./LicensesGrid";

export function TargetAudience() {
    return (
        <Section id="audiencias" className="bg-card">
            <div className="text-center">
                 <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4">
                    Cumplimiento & Alcance
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    ¿A quién servimos?
                </h2>
                <p className="mx-auto mt-4 max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                   Defendra se adapta a todos los modelos de operación en seguridad privada, bajo las 10 licencias del Decreto 356 de 1994.
                </p>
            </div>

            <div className="mt-12">
                <LicensesGrid />
            </div>

            <div className="text-center mt-12 max-w-3xl mx-auto">
                 <p className="text-text-mid text-lg">
                    Nuestra plataforma soporta todas las operaciones del sector de la seguridad privada, tanto en entidades públicas como privadas, garantizando trazabilidad, reducción de costos y cumplimiento normativo.
                </p>
            </div>
        </Section>
    )
}
