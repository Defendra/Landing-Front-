"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminLoginSchema, type AdminLoginInput } from "@/lib/validators/auth";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Link from "next/link";


// Mock Service
async function signInGuard(input: AdminLoginInput) {
    await new Promise(r => setTimeout(r, 700));
    if (input.email === "guardia@defendra.app" && input.password === "prueba123") {
        return { ok: true, user: { role: "guard", email: input.email } };
    }
    return { ok: false, error: "Credenciales inválidas." };
}

// Mock Routes
const ROUTES = {
    guard: { home: "/roles" },
};


export default function GuardLoginForm() {
    const router = useRouter();
    const { toast } = useToast();
    const [showPwd, setShowPwd] = React.useState(false);
    const [serverError, setServerError] = React.useState<string | null>(null);

    const form = useForm<AdminLoginInput>({
        resolver: zodResolver(AdminLoginSchema),
        defaultValues: { email: "", password: "" },
        mode: "onSubmit",
    });

    const onSubmit = async (values: AdminLoginInput) => {
        setServerError(null);
        const res = await signInGuard(values);
        if (!res.ok) {
            setServerError(res.error ?? "Error al iniciar sesión.");
            return;
        }
        toast({ title: "¡Bienvenido!", description: "Ingreso exitoso." });
        router.push(ROUTES.guard.home);
    };

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register,
    } = form;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="guardia@empresa.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPwd ? "text" : "password"}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            aria-invalid={!!errors.password}
                            {...register("password")}
                            className="pr-10"
                        />
                        <button
                            type="button"
                            aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                            onClick={() => setShowPwd((v) => !v)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
                        >
                            {showPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-destructive">{errors.password.message}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <Checkbox id="remember" />
                         <Label htmlFor="remember" className="text-sm font-normal">Recordar sesión</Label>
                    </div>
                    <Link
                        href="#"
                        className="text-sm text-primary hover:underline"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                >
                    <LogIn />
                    {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                </Button>
            </form>

            {serverError && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Error de autenticación</AlertTitle>
                    <AlertDescription>{serverError}</AlertDescription>
                </Alert>
            )}

            <footer className="mt-6 text-center text-xs text-muted-foreground">
                ¿Aún no tienes cuenta? El registro lo gestiona tu empresa.
                 <Link href="/login/guard/register" className="text-primary hover:underline ml-1">
                    Conoce los requisitos.
                </Link>
            </footer>
        </>
    );
}
