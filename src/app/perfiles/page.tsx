import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function ProfilesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
             <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Una herramienta para cada rol
                            </h1>
                            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Defendra potencia la eficiencia y comunicación de guardias en campo y administradores en oficina.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
                    <Card className="flex flex-col overflow-hidden">
                        <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
                        <Image
                            src="https://placehold.co/400x300.png"
                            width="400"
                            height="300"
                            alt="Perfil Guardia"
                            className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                            data-ai-hint="security guard mobile app"
                        />
                        <div className="space-y-2">
                            <h3 className="font-headline text-2xl font-bold">Para el Guardia</h3>
                            <p className="text-foreground/80">
                            Accede a horarios, consulta turnos, reporta minutas y novedades. Todo desde tu móvil.
                            </p>
                        </div>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/guardia">Ver funciones de Guardia</Link>
                        </Button>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col overflow-hidden">
                        <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
                        <Image
                            src="https://placehold.co/400x300.png"
                            width="400"
                            height="300"
                            alt="Perfil Administrador"
                            className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                            data-ai-hint="admin dashboard analytics"
                        />
                        <div className="space-y-2">
                            <h3 className="font-headline text-2xl font-bold">Para el Administrador</h3>
                            <p className="text-foreground/80">
                            Configura operaciones, programa personal, gestiona novedades y visualiza KPIs en tiempo real.
                            </p>
                        </div>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/admin">Ver funciones de Admin</Link>
                        </Button>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}
