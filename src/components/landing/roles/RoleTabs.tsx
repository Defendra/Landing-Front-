
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
        className="bg-background"
    >
        <div className="relative rounded-2xl border border-white/10 bg-[#0A0F1F]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_-10%,#1B2A6B,transparent_35%),radial-gradient(circle_at_80%_-10%,#0070F3,transparent_30%)] opacity-30" />
            <div className="relative">
                <Tabs defaultValue="guard" className="w-full p-4">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                        <TabsTrigger value="guard">Para el Guardia</TabsTrigger>
                        <TabsTrigger value="admin">Para el Administrador</TabsTrigger>
                    </TabsList>
                    <TabsContent value="guard" className="mt-8">
                        <GuardView />
                    </TabsContent>
                    <TabsContent value="admin" className="mt-8">
                        <AdminView />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </Section>
  );
}
