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
      color: "hsl(var(--secondary))",
    },
    despues: {
      label: "Con Defendra",
      color: "hsl(var(--primary))",
    },
  };

export default function KPIChart() {
  return (
    <Section 
        title="Impacto real en tu operación"
        subtitle="Métricas promedio de nuestros clientes tras implementar Defendra."
        className="bg-bg-soft"
    >
        <Card className="bg-card/80 border-border/30 shadow-xl max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Optimización de Recursos y Cumplimiento</CardTitle>
                <CardDescription>Comparativo base 100 vs. Defendra.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-64">
                    <ChartContainer config={chartConfig} className="w-full h-full">
                        <BarChart data={chartData} accessibilityLayer>
                            <CartesianGrid vertical={false} />
                            <XAxis 
                                dataKey="kpi" 
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 10)}
                             />
                            <YAxis />
                            <ChartTooltip 
                                cursor={false} 
                                content={<ChartTooltipContent indicator="dot" />} 
                            />
                            <Legend />
                            <Bar dataKey="antes" fill="var(--color-antes)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="despues" fill="var(--color-despues)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    </Section>
  );
}
