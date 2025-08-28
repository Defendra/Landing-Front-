import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Profiles } from "@/components/landing/profiles";

export default function RolesPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient">
                <Profiles />
            </main>
            <Footer />
        </div>
    )
}
