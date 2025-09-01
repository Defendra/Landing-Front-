import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ValueProposition } from "@/components/landing/value-proposition";
import { TargetAudience } from "@/components/landing/target-audience";
import { Footer } from "@/components/landing/footer";
import { ContactSection } from "@/components/landing/ContactSection";
import RoleShowcase from "@/components/landing/RoleShowcase";
import StepsTimeline from "@/components/landing/StepsTimeline";
import KPIChart from "@/components/landing/KPIChart";


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1">
            <Hero />
            <ValueProposition />
            <StepsTimeline />
            <KPIChart />
            <RoleShowcase />
            <TargetAudience />
            <ContactSection />
        </main>
        <Footer />
    </div>
  );
}
