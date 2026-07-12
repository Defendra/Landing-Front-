
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GuardView from "./GuardView";
import AdminView from "./AdminView";
import { Section } from "../Section";

export default function RoleTabs() {
  return (
    <Section 
        id="roles"
        title="Una herramienta para cada rol"
        subtitle="Empoderamos al personal en campo y a los administradores en oficina, conectando cada punto de la operación de seguridad."
        className="relative z-10"
    >
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="relative">
                <Tabs defaultValue="guard" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-[#0F172A] border border-white/10 rounded-full p-1 h-14 shadow-inner">
                        <TabsTrigger value="guard" className="rounded-full text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_0_15px_rgba(0,194,255,0.5)] transition-all duration-300">Para el Guardia</TabsTrigger>
                        <TabsTrigger value="admin" className="rounded-full text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_0_15px_rgba(0,194,255,0.5)] transition-all duration-300">Para el Administrador</TabsTrigger>
                    </TabsList>
                    <TabsContent value="guard" className="mt-8 animate-in fade-in zoom-in duration-500">
                        <GuardView />
                    </TabsContent>
                    <TabsContent value="admin" className="mt-8 animate-in fade-in zoom-in duration-500">
                        <AdminView />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </Section>
  );
}
