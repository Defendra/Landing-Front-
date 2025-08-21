import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ValueProposition } from '@/components/landing/value-proposition';
import { Profiles } from '@/components/landing/profiles';
import { Testimonials } from '@/components/landing/testimonials';
import { Footer } from '@/components/landing/footer';
import { Contact } from '@/components/landing/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <Profiles />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
