"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Section } from "./Section";

const steps = [
  { t: "Registro del Guardia", d: "Perfil completo y validado." },
  { t: "Programación", d: "Turnos optimizados y relevos 1 clic." },
  { t: "Minuta Digital", d: "Evidencia con GPS y multimedia." },
  { t: "Novedades y Alertas", d: "Incapacidades, cursos, dotación." },
  { t: "Relevos Inteligentes", d: "Notifica, asigna, confirma." },
  { t: "Pre-nómina Validada", d: "Pagos exactos, auditables." },
];

export default function StepsTimeline() {
  return (
    <Section 
        title="¿Cómo funciona Defendra?"
        subtitle="Un flujo de trabajo diseñado para la eficiencia, desde el registro del guardia hasta la nómina validada."
    >
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
            <motion.li
            key={s.t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            >
                <Card className="rounded-2xl border-border/30 bg-card/80 p-5 h-full">
                    <div className="text-sm text-primary font-semibold">Paso {i + 1}</div>
                    <div className="mt-1 font-semibold text-text-high text-lg">{s.t}</div>
                    <p className="mt-2 text-sm text-text-mid">{s.d}</p>
                </Card>
            </motion.li>
        ))}
        </ol>
    </Section>
  );
}
