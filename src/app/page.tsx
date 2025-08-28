import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { ValueProposition } from "@/components/landing/value-proposition";
import { Profiles } from "@/components/landing/profiles";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";
import { BlogPanel } from "@/components/landing/blog";
import { mockPosts } from "@/app/blog/blog-data";
import { Footer } from "@/components/landing/footer";


export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ValueProposition />
        <Profiles />
        <TargetAudience />
        <Testimonials />
        <BlogPanel posts={mockPosts} />
      </main>
      <Footer />
    </>
  );
}
