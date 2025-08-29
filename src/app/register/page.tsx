import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient flex items-center justify-center">
                <div className="container text-center">
                    <h1 className="text-4xl font-bold text-text-high">Página de Registro</h1>
                    <p className="text-text-mid mt-4">Esta página está en construcción.</p>
                     <Button asChild className="mt-8">
                        <Link href="/">Volver al inicio</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
