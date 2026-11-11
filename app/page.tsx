import Hero from "@/components/Hero";
import Commitments from "@/components/Commitments";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Commitments />
      <Services />
      <Process />
      <WhyUs />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
