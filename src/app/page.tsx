import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ValueProposition } from "@/components/landing/value-proposition";
import { TargetAudience } from "@/components/landing/target-audience";
import { Footer } from "@/components/landing/footer";
import { ProductFlow } from "@/components/landing/ProductFlow";
import { ContactSection } from "@/components/landing/ContactSection";
import RoleShowcase from "@/components/landing/RoleShowcase";


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1">
            <Hero />
            <ProductFlow />
            <ValueProposition />
            <RoleShowcase />
            <TargetAudience />
            <ContactSection />
        </main>
        <Footer />
    </div>
  );
}
