import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Testimonials } from "@/components/landing/testimonials";

export default function ClientesPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient">
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}
