import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const kpis = [
  { value: "98%", label: "Cobertura", position: "top-1/4 left-[8%]", delay: "0s" },
  { value: "1,284", label: "Turnos hoy", position: "bottom-1/4 right-[10%]", delay: "0.15s" },
  { value: "3", label: "Alertas", position: "top-[18%] right-[18%]", textClass: "text-accent", delay: "0.3s" },
];

export function Hero() {
  return (
    <section id="inicio" className="w-full hero-gradient pt-12 md:pt-24 lg:pt-32 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight">
               La nueva era de la <span className="text-primary">seguridad privada</span> en Colombia
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Digitalizamos y automatizamos la operación de vigilancia con IA, trazabilidad y cumplimiento.
            </p>
             <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild size="lg" className="bg-accent hover:bg-destructive text-accent-foreground">
                    <Link href="#solucion">Conoce la solución</Link>
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="/perfiles">Ver Perfiles</Link>
                </Button>
            </div>
          </div>

          <div>
            <div className="group relative aspect-video rounded-xl shadow-2xl overflow-hidden">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Dashboard de Defendra con KPIs de cobertura y programación"
                    width={600}
                    height={400}
                    className="mx-auto w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint="dashboard security"
                    priority
                />
                 {kpis.map((kpi) => (
                    <div
                        key={kpi.label}
                        style={{ animation: `floatIn 0.7s ease-out both`, animationDelay: kpi.delay }}
                        className={cn(
                            "absolute backdrop-blur-md bg-background/70 border rounded-lg p-2 animate-in",
                            kpi.position
                        )}
                    >
                        <div className="text-sm text-muted-foreground">{kpi.label}</div>
                        <div className={cn("text-lg font-bold", kpi.textClass)}>{kpi.value}</div>
                    </div>
                 ))}
            </div>
             <p className="text-center text-muted-foreground mt-2 text-sm">
              Vista ilustrativa del producto
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

const floatInKeyframes = `
  @keyframes floatIn {
    from { transform: translateY(8px); opacity: 0; }
    to   { transform: translateY(0);  opacity: 1; }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = floatInKeyframes;
  document.head.appendChild(styleSheet);
}
