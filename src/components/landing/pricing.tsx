import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Básico",
    price: "$49",
    period: "/mes/usuario",
    description: "Para startups y pequeñas empresas que inician su camino en la ciberseguridad.",
    features: [
      "Monitoreo de 10 activos",
      "Alertas por email",
      "Reporte mensual",
      "Soporte comunitario",
    ],
    cta: "Empezar Ahora",
    href: "#contacto",
    isPopular: false,
  },
  {
    name: "Profesional",
    price: "$99",
    period: "/mes/usuario",
    description: "La solución ideal para empresas en crecimiento que necesitan protección robusta.",
    features: [
      "Todo en Básico, y además:",
      "Monitoreo de 50 activos",
      "Análisis con IA",
      "Soporte prioritario por email",
    ],
    cta: "Empezar Ahora",
    href: "#contacto",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    description: "Protección integral para grandes corporaciones con requisitos complejos.",
    features: [
      "Todo en Profesional, y además:",
      "Activos ilimitados",
      "Respuesta a incidentes 24/7",
      "Manager de cuenta dedicado",
    ],
    cta: "Contactar Ventas",
    href: "#contacto",
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="precios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Planes para cada necesidad
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elija el plan que mejor se adapte al tamaño y las necesidades de su empresa. Simple, transparente y sin sorpresas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
              <CardHeader className="text-center">
                {tier.isPopular && <div className="mb-4 text-sm font-semibold text-primary">Más Popular</div>}
                <CardTitle className="font-headline">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
