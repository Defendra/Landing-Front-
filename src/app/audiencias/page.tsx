import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { TargetAudience } from "@/components/landing/target-audience";

export default function AudiencesPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient">
                <TargetAudience />
            </main>
            <Footer />
        </div>
    )
}
