import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import RoleShowcase from "@/components/landing/RoleShowcase";

export default function RolesPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1 hero-gradient">
                <RoleShowcase />
            </main>
            <Footer />
        </div>
    )
}
