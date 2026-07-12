"use client";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Section } from "./Section";
import { ChartTooltip, ChartTooltipContent, ChartContainer } from "../ui/chart";

const chartData = [
  { kpi: "Horas Extra", antes: 100, despues: 68 },
  { kpi: "Ausentismo", antes: 100, despues: 73 },
  { kpi: "Cumpl. SLA", antes: 79, despues: 100 },
];

const chartConfig = {
    antes: {
      label: "Antes",
      color: "#475569", // slate-600
    },
    despues: {
      label: "Con Defendra",
      color: "#1DB954", // verde brillante
    },
  };

export default function KPIChart() {
  return (
    <Section 
        title="Impacto real en tu operación"
        subtitle="Métricas promedio de nuestros clientes tras implementar Defendra."
        className="relative z-10"
    >
        <Card className="bg-white/5 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl max-w-2xl mx-auto rounded-3xl">
            <CardHeader>
                <CardTitle className="text-white text-2xl font-bold">Optimización de Recursos y Cumplimiento</CardTitle>
                <CardDescription className="text-slate-400">Comparativo base 100 vs. Defendra.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-72 mt-4">
                    <ChartContainer config={chartConfig} className="w-full h-full">
                        <BarChart data={chartData} accessibilityLayer margin={{ top: 20 }}>
                            <defs>
                              <linearGradient id="colorDespues" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1DB954" stopOpacity={1}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0.6}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis 
                                dataKey="kpi" 
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                stroke="#94a3b8"
                                tickFormatter={(value) => value.slice(0, 10)}
                             />
                            <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                            <ChartTooltip 
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
                                content={<ChartTooltipContent indicator="dot" />} 
                            />
                            <Legend wrapperStyle={{ paddingTop: "20px" }}/>
                            <Bar dataKey="antes" fill="var(--color-antes)" radius={[6, 6, 0, 0]} barSize={40} />
                            <Bar dataKey="despues" fill="url(#colorDespues)" radius={[6, 6, 0, 0]} barSize={40} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    </Section>
  );
}
