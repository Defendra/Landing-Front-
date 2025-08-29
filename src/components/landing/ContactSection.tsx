"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
// NOTE: Firebase will be configured in a separate step.
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebase"; 

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  empresa: z.string().min(2, "Ingresa tu empresa"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(7, "Teléfono inválido"),
  rol: z.enum(["Gerencia","Operaciones","Recursos Humanos","Compras","Otro"]),
  tamano: z.enum(["<50 guardas","50-200 guardas",">200 guardas"]),
  mensaje: z.string().min(10, "Cuéntanos un poco más"),
  website: z.string().max(0, { message: "Website must be empty" }).optional(),
});
type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      rol: "Gerencia",
      tamano: "50-200 guardas",
      mensaje: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot
    setLoading(true);
    try {
      // Temporarily log to console until Firebase is configured
      console.log("Lead data:", {
        ...data,
        source: "landing_contacto",
        // createdAt: serverTimestamp(), // This will be used with Firestore
      });
      // await addDoc(collection(db, "leads"), {
      //   ...data,
      //   source: "landing_contacto",
      //   createdAt: serverTimestamp(),
      // });
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("analytics", { detail: { event: "lead_submitted" }}));
      }
      setSent(true);
      form.reset();
    } catch (e) {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("analytics", { detail: { event: "lead_failed" }}));
        }
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: "No pudimos enviar tu solicitud. Inténtalo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  const waLink = "https://wa.me/573107996793?text=Hola%20Defendra%2C%20quiero%20saber%20m%C3%A1s%20sobre%20la%20plataforma.";

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-high">Hablemos</h2>
                <p className="mt-3 text-muted-foreground">
                    Cuéntanos sobre tu operación y un especialista de Defendra te contactará.
                </p>
                {!sent ? (
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
                        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register("website")} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField control={form.control} name="nombre" render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl><Input placeholder="Tu nombre" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="empresa" render={({ field }) => (
                                <FormItem>
                                <FormLabel>Empresa</FormLabel>
                                <FormControl><Input placeholder="Nombre de la empresa" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl><Input type="email" placeholder="tu@correo.com" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="telefono" render={({ field }) => (
                                <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl><Input placeholder="+57 3xx xxx xxxx" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="rol" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tu rol</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Selecciona tu rol" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Gerencia">Gerencia</SelectItem>
                                            <SelectItem value="Operaciones">Operaciones</SelectItem>
                                            <SelectItem value="Recursos Humanos">Recursos Humanos</SelectItem>
                                            <SelectItem value="Compras">Compras</SelectItem>
                                            <SelectItem value="Otro">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name="tamano" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tamaño de operación</FormLabel>
                                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Selecciona el tamaño" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="<50 guardas">{"<50 guardas"}</SelectItem>
                                            <SelectItem value="50-200 guardas">50–200 guardas</SelectItem>
                                            <SelectItem value=">200 guardas">{">200 guardas"}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <FormField control={form.control} name="mensaje" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensaje</FormLabel>
                                <FormControl><Textarea className="min-h-[120px]" placeholder="¿Qué te gustaría mejorar?" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600" disabled={loading}>
                            {loading ? "Enviando..." : "Enviar solicitud"}
                        </Button>
                        <p className="text-xs text-muted-foreground">Al enviar aceptas nuestra Política de Privacidad.</p>
                    </form>
                    </Form>
                ) : (
                    <div className="mt-8 rounded-xl border p-6 bg-card">
                    <h3 className="text-xl font-semibold text-text-high">¡Gracias! 🎉</h3>
                    <p className="mt-2 text-muted-foreground">
                        Hemos recibido tu solicitud. Te contactaremos muy pronto.
                    </p>
                    </div>
                )}
                </div>

                <div className="lg:col-span-5">
                    <Card className="p-6 bg-card">
                        <h3 className="text-lg font-semibold text-text-high">¿Prefieres WhatsApp?</h3>
                        <p className="mt-2 text-muted-foreground">
                        Escríbenos y comencemos a optimizar tu operación hoy mismo.
                        </p>
                        <Button asChild className="mt-4 bg-green-500 hover:bg-green-600 text-white" onClick={() => { if(typeof window !== 'undefined') window.dispatchEvent(new CustomEvent("analytics", { detail: { event: "whatsapp_click" }}))}}>
                            <a href={waLink} target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </Button>
                        <div className="mt-6 text-sm text-text-mid">
                        <p>Email: <a className="text-primary-500 hover:underline" href="mailto:defendraco@gmail.com">defendraco@gmail.com</a></p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}