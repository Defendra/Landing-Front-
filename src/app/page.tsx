import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Solution from "@/components/sections/Solution";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* The following components are placeholders and will need to be implemented */}
        {/* <Stats /> */}
        {/* <Solution /> */}
        {/* <Clients /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
