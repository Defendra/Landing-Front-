"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AdminLoginSchema } from "@/lib/validators/auth";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useRouter } from "next/navigation";
import { CheckCircle, AlertCircle } from "lucide-react";


export function AdminLoginForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{success: boolean; message: string} | null>(null);

    const form = useForm<z.infer<typeof AdminLoginSchema>>({
        resolver: zodResolver(AdminLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof AdminLoginSchema>) {
        setLoading(true);
        setResult(null);

        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (values.email.endsWith('@defendra.app') || values.email.endsWith('@empresa.com')) {
            setResult({ success: true, message: "Inicio de sesión exitoso. Redirigiendo..."});
            setTimeout(() => router.push('/roles'), 1500);
        } else {
            setResult({ success: false, message: "Credenciales inválidas. Por favor, verifica tu email y contraseña."});
        }

        setLoading(false);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Corporativo</FormLabel>
                        <FormControl>
                        <Input placeholder="tu@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Ingresando..." : "Ingresar"}
                </Button>
                </form>
            </Form>

            {result && (
                 <Alert variant={result.success ? "default" : "destructive"} className="mt-6 animate-in fade-in-50">
                    {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    <AlertTitle>{result.success ? "Éxito" : "Error de Autenticación"}</AlertTitle>
                    <AlertDescription>{result.message}</AlertDescription>
                </Alert>
            )}
        </>
    );
}
