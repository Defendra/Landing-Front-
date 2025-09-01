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
        <Tabs defaultValue="guard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="guard">Para el Guardia</TabsTrigger>
                <TabsTrigger value="admin">Para el Administrador</TabsTrigger>
            </TabsList>
            <TabsContent value="guard" className="mt-12">
                <GuardView />
            </TabsContent>
            <TabsContent value="admin" className="mt-12">
                <AdminView />
            </TabsContent>
        </Tabs>
    </Section>
  );
}
