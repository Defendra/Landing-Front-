import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function LoginChoicePage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <div className="container max-w-4xl py-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Soy Administrador</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col h-full">
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Tu empresa es la encargada del registro y te suministra las credenciales de acceso.
                                </p>
                                <Button asChild className="w-full">
                                    <Link href="#">Ingresar como Administrador</Link>
                                </Button>
                                <p className="text-xs text-muted-foreground mt-3">
                                    ¿No tienes usuario? Contacta al responsable de tu empresa.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Soy Guardia</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col h-full">
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Realiza tu registro completo con verificación de identidad y carga de documentos.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                     <Button asChild variant="secondary" className="flex-1">
                                        <Link href="#">Ya tengo cuenta</Link>
                                    </Button>
                                    <Button asChild className="flex-1">
                                        <Link href="#">Iniciar Registro</Link>
                                    </Button>
                                </div>
                                <ul className="text-sm text-muted-foreground mt-4 space-y-1 list-disc list-inside">
                                    <li>Selfie biométrica + documento</li>
                                    <li>Datos de contacto y bancarios</li>
                                    <li>Cursos/licencias y soportes</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
