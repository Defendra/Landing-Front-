import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { LeadForm } from "@/components/forms/LeadForm";
import { useWhatsAppCTA } from "@/hooks/useWhatsAppCTA";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const { whatsappUrl } = useWhatsAppCTA('Hola, quiero una demostración de Defendra.');
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient">
                <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="space-y-4">
                                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-high">
                                Hablemos
                                </h2>
                                <p className="max-w-[600px] text-text-mid md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                ¿Listo para transformar la seguridad de tu empresa? Contáctanos para una demostración personalizada o háblanos directamente por WhatsApp.
                                </p>
                                <div className="space-y-2 text-text-high">
                                    <p><strong>Email:</strong> contacto@defendra.co</p>
                                    <p><strong>Teléfono:</strong> +57 310 7996793</p>
                                    <p><strong>Ubicación:</strong> Bogotá, Colombia</p>
                                </div>
                                <Button asChild size="lg">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    Hablar con un asesor por WhatsApp
                                </a>
                                </Button>
                            </div>
                            <LeadForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
