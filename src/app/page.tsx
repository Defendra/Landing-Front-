import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ValueProposition } from "@/components/landing/value-proposition";
import { Profiles } from "@/components/landing/profiles";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";
import { BlogPanel } from '@/components/landing/blog';
import { Footer } from "@/components/landing/footer";
import { mockPosts } from "./blog/blog-data";


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1">
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
