// src/components/landing/ProductFlow.tsx
"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  CalendarClock,
  ClipboardCheck,
  Bell,
  Repeat2,
  FileBadge2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";


type Step = {
  id: number;
  title: string;
  note: string;
  icon: React.ElementType;
  href?: string;
};

const STEPS: Step[] = [
  { id: 1, title: "Registrar guardia",     note: "Perfil completo y validado.",                 icon: UserCheck,     href: "#perfil-guardia" },
  { id: 2, title: "Programar turnos",      note: "Optimización y relevos en 1 clic.",           icon: CalendarClock, href: "#programacion"   },
  { id: 3, title: "Minuta digital",        note: "Evidencia con GPS y multimedia.",             icon: ClipboardCheck,href: "#minuta"        },
  { id: 4, title: "Novedades y alertas",   note: "Incapacidades, cursos, dotación.",            icon: Bell,          href: "#novedades"     },
  { id: 5, title: "Relevos inteligentes",  note: "Notifica, asigna y confirma en minutos.",     icon: Repeat2,       href: "#relevos"       },
  { id: 6, title: "Pre-nómina validada",   note: "Pagos exactos, verificados y auditables.",    icon: FileBadge2,    href: "#prenomina"     },
];

export default function ProductFlow() {
  return (
    <section id="como-funciona" className="relative py-20 bg-background">
      {/* fondo sutil con gradiente */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(30,64,175,.20),transparent)]" />

      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-high sm:text-4xl">
              ¿Cómo funciona Defendra?
            </h2>
            <p className="mt-2 text-sm/6 text-text-mid">
              Del registro del guardia a la pre-nómina validada, paso a paso.
            </p>
          </div>

          <div className="mt-4 flex gap-3 text-xs sm:mt-0">
            <Badge variant="outline" className="text-text-mid border-border/70">
              -32% horas extra
            </Badge>
            <Badge variant="outline" className="text-text-mid border-border/70">
              -27% ausentismo
            </Badge>
            <Badge variant="outline" className="text-text-mid border-border/70">
              +21% cumplimiento SLA
            </Badge>
          </div>
        </header>

        {/* Timeline responsive */}
        <ol className="relative grid gap-6 md:grid-cols-3">
          {/* Línea de conexión (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[64px] hidden h-0.5 bg-border/50 md:block"
          />

          {STEPS.map((step, idx) => (
            <StepCard
              key={step.id}
              step={step}
              isFirst={idx === 0}
              isLast={idx === STEPS.length - 1}
              index={idx}
            />
          ))}
        </ol>

        {/* CTA final */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#demo-recorrido"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-text-high ring-1 ring-border/70 transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Ver recorrido completo"
          >
            Ver recorrido completo
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Habla con nosotros"
          >
            Habla con nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: Step;
  isFirst: boolean;
  isLast: boolean;
  index: number;
}) {
  const Icon = step.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      {/* “nodo” de la línea (desktop) */}
      <div className="pointer-events-none absolute left-1/2 top-[64px] hidden -translate-x-1/2 md:block">
        <div className="size-3 rounded-full bg-border ring-4 ring-background group-hover:bg-primary" />
      </div>

      {/* Card */}
      <Link
        href={step.href ?? "#"}
        className={cn(
          "block rounded-2xl border border-border/50 bg-card/50 p-5 transition",
          "hover:border-primary/50 hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
        aria-label={`${step.id}. ${step.title}`}
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-text-high">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <span className="rounded-full bg-secondary/80 px-2 py-0.5 text-xs text-text-mid">
            Paso {step.id}
          </span>
        </div>

        <h3 className="text-base font-semibold text-text-high">{step.title}</h3>
        <p className="mt-1 text-sm text-text-mid">{step.note}</p>

        <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
          Ver detalle <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.li>
  );
}
