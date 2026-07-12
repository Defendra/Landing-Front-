import { Shield, ShieldCheck, Truck, Car, School, Building, Factory, Package, ShoppingCart, UserSquare } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

const items = [
  { icon: Shield, title: "Vigilancia fija", desc: "Supervisión continua en puntos de control." },
  { icon: Truck, title: "Vigilancia móvil", desc: "Rondas dinámicas con trazabilidad digital." },
  { icon: UserSquare, title: "Escoltas", desc: "Protección personalizada con reportes en tiempo real." },
  { icon: Car, title: "Transporte de valores", desc: "Custodia de activos con trazabilidad encriptada." },
  { icon: ShieldCheck, title: "Empresas blindadoras", desc: "Fabricación y certificación de vehículos blindados." },
  { icon: School, title: "Escuelas de capacitación", desc: "Formación y entrenamiento para el personal." },
  { icon: Building, title: "Departamentos de seguridad", desc: "Coordinación interna para entidades públicas y privadas." },
  { icon: Factory, title: "Fabricación de equipos", desc: "Desarrollo y producción de equipos de seguridad." },
  { icon: Package, title: "Importación de equipos", desc: "Ingreso de tecnología especializada al país." },
  { icon: ShoppingCart, title: "Comercialización de equipos", desc: "Distribución nacional de herramientas de seguridad." },
];

export default function LicensesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item, i) => (
        <Card key={item.title} className="bg-white/5 border-white/10 backdrop-blur-sm p-5 text-center flex flex-col items-center justify-start group hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,112,243,0.2)] hover:-translate-y-1 transition-all duration-300">
            <div className="bg-primary/10 p-3 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110">
              <item.icon className="h-8 w-8 text-primary" />
            </div>
            <div className="font-semibold text-white text-base">{item.title}</div>
            <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
        </Card>
      ))}
    </div>
  );
}
