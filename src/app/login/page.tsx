import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Settings, User, Camera, FileText, BookUser } from "lucide-react";
import Link from "next/link";

function ProfileSelectionCard({ 
    icon, 
    title, 
    description,
    children,
    className
} : { 
    icon: React.ReactNode, 
    title: string, 
    description: string, 
    children: React.ReactNode,
    className?: string 
}) {
    return (
        <Card className={cn("w-full max-w-md bg-card/70 backdrop-blur-sm border-border/20 p-8 flex flex-col", className)}>
            <CardContent className="flex flex-col items-center text-center p-0">
                <div className="mb-4 text-primary">{icon}</div>
                <h2 className="text-2xl font-bold font-headline text-text-high">{title}</h2>
                <p className="text-text-mid mt-1">{description}</p>
                <div className="w-full border-t border-border/20 my-8"></div>
                {children}
            </CardContent>
        </Card>
    );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-background hero-gradient p-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-text-high">Bienvenido a Defendra</h1>
            <p className="text-lg text-text-mid mt-2">Selecciona tu tipo de perfil para continuar.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            <ProfileSelectionCard
                icon={<Settings className="w-12 h-12" />}
                title="Soy Administrador"
                description="Gestiona operaciones, personal y clientes."
            >
                <p className="text-text-mid text-sm">Tu empresa es la encargada del registro y te suministra las credenciales de acceso.</p>
                <Button asChild size="lg" className="w-full mt-8">
                    <Link href="/login/admin">Ingresar como Administrador</Link>
                </Button>
                <p className="text-xs text-text-low mt-4">¿No tienes usuario? Contacta al responsable de tu empresa.</p>
            </ProfileSelectionCard>
            
            <ProfileSelectionCard
                icon={<User className="w-12 h-12" />}
                title="Soy Guardia"
                description="Consulta turnos, reporta novedades y más."
                className="border-accent-500/30"
            >
                <p className="text-text-mid text-sm mb-6">Regístrate fácilmente con verificación de identidad y carga de documentos.</p>
                <ul className="space-y-3 text-left text-text-mid text-sm self-start w-full">
                    <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-accent" /> Selfie biométrica + documento</li>
                    <li className="flex items-center gap-3"><FileText className="w-5 h-5 text-accent" /> Datos de contacto y bancarios</li>
                    <li className="flex items-center gap-3"><BookUser className="w-5 h-5 text-accent" /> Cursos/licencias y soportes</li>
                </ul>
                 <div className="flex flex-col sm:flex-row gap-4 w-full mt-8">
                    <Button asChild size="lg" className="w-full" variant="outline">
                       <Link href="/login/guard/login">Ya tengo cuenta</Link>
                    </Button>
                    <Button asChild size="lg" className="w-full" style={{backgroundColor: "hsl(var(--accent))", color: "hsl(var(--primary-foreground))"}}>
                         <Link href="/login/guard/register">Iniciar Registro</Link>
                    </Button>
                </div>
            </ProfileSelectionCard>
        </div>
    </div>
  );
}
