"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export function KPICard({
  label,
  value,
  caption,
  icon,
}: {
  label: string;
  value: string;
  caption?: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -4 }}>
        <Card className="bg-white/5 border-white/10 backdrop-blur-md shadow-2xl hover:shadow-[0_0_30px_rgba(0,112,243,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full">
            <CardHeader className="flex-row items-center gap-4 pb-2">
                 {icon && <div className="text-primary flex-shrink-0 bg-primary/10 p-3 rounded-xl">{icon}</div>}
                 <CardTitle className="text-lg font-medium text-white">{label}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{value}</div>
                {caption && <p className="mt-3 text-sm text-slate-300 leading-relaxed">{caption}</p>}
            </CardContent>
        </Card>
    </motion.div>
  );
}
