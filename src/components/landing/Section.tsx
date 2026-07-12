"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Section({
  title,
  subtitle,
  children,
  className,
  id,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section 
        id={id} 
        className={cn("container py-16 md:py-24", className)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
    >
      {title && (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {title}
            </h2>
             {subtitle && (
                <p className="mt-4 text-slate-300 md:text-xl/relaxed">{subtitle}</p>
            )}
        </div>
      )}
      <div className={cn(title || subtitle ? "mt-12" : "")}>{children}</div>
    </motion.section>
  );
}
