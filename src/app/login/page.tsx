import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Camera, FileText, BookUser } from "lucide-react";

export default function LoginChoicePage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-secondary/50">
            <Header />
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-5xl mx-auto">
                     <div className="text-center mb-8">
                        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                           Bienvenido a Defendra
                        </h1>
                        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           Selecciona tu tipo de perfil para continuar.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="flex flex-col shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Soy Administrador</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <CardDescription className="mb-6 flex-grow">
                                    Tu empresa gestiona tu registro y te brinda credenciales de acceso.
                                </CardDescription>
                                <Button asChild className="w-full">
                                    <Link href="/admin/login">Ingresar como Administrador</Link>
                                </Button>
                                <p className="text-xs text-muted-foreground mt-3">
                                    ¿No tienes usuario? Contacta al responsable de tu empresa.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Soy Guardia</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <CardDescription className="mb-6 flex-grow">
                                    Regístrate fácilmente con verificación de identidad y carga de documentos.
                                </CardDescription>
                                <ul className="text-sm text-muted-foreground mb-6 space-y-2 list-inside list-disc pl-4">
                                    <li className="flex items-center gap-2"><Camera /> Selfie biométrica + documento</li>
                                    <li className="flex items-center gap-2"><FileText /> Datos de contacto y bancarios</li>
                                    <li className="flex items-center gap-2"><BookUser /> Cursos/licencias y soportes</li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                                     <Button asChild variant="secondary" className="flex-1">
                                        <Link href="#">Ya tengo cuenta</Link>
                                    </Button>
                                    <Button asChild className="flex-1">
                                        <Link href="/guardia/onboarding">Iniciar Registro</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
