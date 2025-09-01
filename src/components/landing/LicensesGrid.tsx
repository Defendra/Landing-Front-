import { ShieldCheck } from "lucide-react";
import { Card } from "../ui/card";

const items = [
  "Vigilancia fija","Vigilancia móvil","Escoltas","Transporte de valores",
  "Empresas blindadoras","Escuelas de capacitación","Departamentos de seguridad",
  "Fabricación de equipos","Importación de equipos","Comercialización de equipos",
];

export default function LicensesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((t)=>(
        <Card key={t} className="bg-background/50 text-center p-4 flex flex-col items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-primary mb-2"/>
            <div className="text-sm font-medium text-text-high">{t}</div>
        </Card>
      ))}
    </div>
  );
}
