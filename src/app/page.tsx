import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ValueProposition } from '@/components/landing/value-proposition';
import { Profiles } from '@/components/landing/profiles';
import { Pricing } from '@/components/landing/pricing';
import { Faq } from '@/components/landing/faq';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Profiles />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
