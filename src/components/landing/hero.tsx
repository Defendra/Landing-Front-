import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const kpis = [
  { value: "98%", label: "Cobertura", position: "top-1/4 left-[8%]", delay: "0s" },
  { value: "1,284", label: "Turnos hoy", position: "bottom-1/4 right-[10%]", delay: "0.15s" },
  { value: "3", label: "Alertas", position: "top-[18%] right-[18%]", textClass: "text-amber-500", delay: "0.3s" },
];

const trustChips = [
    { label: "🔒 Seguridad & auditoría" },
    { label: "🤖 IA / OCR para Ficha Técnica" },
    { label: "🌐 100% Web • Mobile‑First" },
]

export function Hero() {
  return (
    <section id="inicio" className="w-full hero-gradient pt-12 md:pt-24 lg:pt-32 border-b">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-secondary shadow-sm mb-3 w-fit">
                <span className="text-green-600 dark:text-green-400">●</span>
                <small className="text-muted-foreground">Hecho para empresas de seguridad en Colombia</small>
            </div>

            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight">
               Tecnología para una <span className="text-primary">seguridad privada</span> más eficiente en Colombia
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              Digitalizamos la operación de vigilancia con <strong>programación asistida por IA</strong>, 
              <strong> minutas en tiempo real</strong> y <strong>control centralizado</strong>. 
              Más trazabilidad, mejor servicio, menos fricción.
            </p>
             <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild size="lg">
                    <a href="#solucion">Conoce la solución</a>
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="/perfiles">Ver Perfiles</Link>
                </Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-4 text-muted-foreground">
                {trustChips.map(chip => (
                    <div key={chip.label} className="text-sm border bg-white/80 dark:bg-secondary/80 rounded-full px-3 py-1.5 shadow-sm">
                        {chip.label}
                    </div>
                ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="group relative aspect-video rounded-xl shadow-md overflow-hidden">
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
                            "absolute backdrop-blur-md bg-white/80 dark:bg-black/70 border rounded-lg p-2 animate-in",
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
