import { AdminLoginForm } from "@/components/auth/AdminLoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-background hero-gradient p-4">
       <Card className="w-full max-w-md bg-card/70 backdrop-blur-sm border-border/20">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-headline text-text-high">Acceso de Administrador</CardTitle>
            <CardDescription>Usa las credenciales provistas por tu empresa.</CardDescription>
        </CardHeader>
        <CardContent>
            <AdminLoginForm />
            <div className="mt-4 text-center text-sm">
                <Link href="/login" className="underline text-text-mid hover:text-text-high">
                    ¿No eres administrador? Vuelve a la selección
                </Link>
            </div>
        </CardContent>
       </Card>
    </div>
  );
}
