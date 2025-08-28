import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ValueProposition } from '@/components/landing/value-proposition';
import { Profiles } from '@/components/landing/profiles';
import { Footer } from '@/components/landing/footer';
import { Testimonials } from '@/components/landing/testimonials';
import { TargetAudience } from '@/components/landing/target-audience';
import { BlogPanel } from '@/components/landing/blog';
import { mockPosts } from '@/app/blog/blog-data';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 hero-gradient">
        <Hero />
        <ValueProposition />
        <Profiles />
        <TargetAudience />
        <Testimonials />
        <BlogPanel posts={mockPosts} />
      </main>
      <Footer />
    </div>
  );
}
