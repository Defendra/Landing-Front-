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
    <section id="como-funciona" className="relative py-20 z-10">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              ¿Cómo funciona Defendra?
            </h2>
            <p className="mt-4 text-slate-300 md:text-xl/relaxed">
              Del registro del guardia a la pre-nómina validada, paso a paso.
            </p>
          </div>

          <div className="mt-4 flex gap-3 text-xs sm:mt-0">
            <Badge variant="outline" className="text-white border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              -32% horas extra
            </Badge>
            <Badge variant="outline" className="text-white border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              -27% ausentismo
            </Badge>
            <Badge variant="outline" className="text-white border-white/20 bg-accent/20 backdrop-blur-sm px-3 py-1 shadow-[0_0_15px_rgba(255,122,0,0.3)]">
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
              index={idx}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: Step;
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
        <div className="size-4 rounded-full bg-[#0F172A] border-[3px] border-white/20 shadow-[0_0_15px_rgba(0,194,255,0.5)] group-hover:border-primary group-hover:bg-primary transition-all duration-300" />
      </div>

      {/* Card */}
      <Link
        href={step.href ?? "#"}
        className={cn(
          "block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300",
          "hover:border-primary/50 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,194,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
        aria-label={`${step.id}. ${step.title}`}
      >
        <div className="mb-4 flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[inset_0_0_20px_rgba(0,194,255,0.1)] transition-transform duration-300 group-hover:scale-110">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <span className="rounded-full bg-white/10 border border-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
            Paso {step.id}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white">{step.title}</h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.note}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          Ver detalle <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.li>
  );
}
