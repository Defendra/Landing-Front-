"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  empresa: z.string().min(2, "El nombre de la empresa es requerido."),
  pais: z.string().min(2, "El país es requerido."),
  colaboradores: z.coerce.number().int().positive("Debe ser un número positivo."),
  contacto: z.string().min(2, "El nombre de contacto es requerido."),
  email: z.string().email("Por favor, introduce un email válido."),
  telefono: z.string().min(5, "El teléfono es requerido."),
  mensaje: z.string().optional(),
});

export function LeadForm() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
        empresa: "", 
        pais: "Colombia", 
        colaboradores: 10,
        contacto: "",
        email: "", 
        telefono: "", 
        mensaje: "" 
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      toast({
        title: "Mensaje Enviado",
        description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
      router.push('/gracias');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
      });
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg bg-card border-border/50">
      <CardHeader>
        <CardTitle>Solicita una Demo</CardTitle>
        <CardDescription>Completa el formulario y un especialista te contactará.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="empresa" render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la Empresa</FormLabel>
                <FormControl><Input placeholder="Tu empresa" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField control={form.control} name="pais" render={({ field }) => (
              <FormItem>
                <FormLabel>País</FormLabel>
                <FormControl><Input placeholder="País" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField control={form.control} name="colaboradores" render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Colaboradores</FormLabel>
                <FormControl><Input type="number" placeholder="10" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField control={form.control} name="contacto" render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de Contacto</FormLabel>
                <FormControl><Input placeholder="Tu nombre" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email Corporativo</FormLabel>
                <FormControl><Input placeholder="tu@email.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField control={form.control} name="telefono" render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl><Input placeholder="+57 300 123 4567" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="mensaje" render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje (Opcional)</FormLabel>
                <FormControl><Textarea placeholder="Cuéntanos sobre tus necesidades..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
