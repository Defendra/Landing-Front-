
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Ingresa un correo válido.");
      return;
    }
    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);
      // Mock de éxito para integrar rápido:
      await new Promise(resolve => setTimeout(resolve, 600));
      // En una implementación real, aquí iría la lógica de autenticación
      // y redirección al dashboard.
      router.push("/admin/dashboard");

    } catch (e: any) {
      setError(e?.message ?? "No se pudo iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-secondary/50">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
               <p className="text-sm text-muted-foreground">Defendra • Administrador</p>
              <CardTitle className="font-headline text-2xl">Iniciar sesión</CardTitle>
              <CardDescription>
                Tu empresa es la encargada del registro y te suministra las credenciales.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@tuempresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="username"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Contraseña</Label>
                      <Link href="/admin/recuperar" className="text-sm text-primary hover:underline">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="otp">Código de verificación <span className="text-muted-foreground">(opcional)</span></Label>
                    <Input
                      id="otp"
                      type="text"
                      inputMode="numeric"
                      placeholder="000000"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={loading}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={remember}
                      onCheckedChange={(checked) => setRemember(Boolean(checked))}
                      disabled={loading}
                    />
                    <Label htmlFor="remember" className="font-normal">
                      Mantener mi sesión iniciada
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Ingresando..." : "Ingresar"}
                  </Button>
                </div>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">o</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" type="button" onClick={() => alert("SSO corporativo (próximamente)")}>
                Continuar con SSO corporativo
              </Button>
               <p className="text-center text-xs text-muted-foreground mt-4">
                ¿No tienes usuario? Contacta al responsable de tu empresa.
              </p>
            </CardContent>
          </Card>
           <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-primary">
              ← Volver a elegir tipo de usuario
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
