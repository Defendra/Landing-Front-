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
        <Card className="bg-card/80 border-border/30 shadow-xl hover:shadow-primary/20 transition-shadow duration-300 h-full">
            <CardHeader className="flex-row items-center gap-4 pb-2">
                 {icon && <div className="text-primary flex-shrink-0">{icon}</div>}
                 <CardTitle className="text-lg font-medium text-text-mid">{label}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-text-high">{value}</div>
                {caption && <p className="mt-2 text-sm text-text-mid">{caption}</p>}
            </CardContent>
        </Card>
    </motion.div>
  );
}
