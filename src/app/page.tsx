import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Differentiators from "@/components/Differentiators";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import FounderSection from "@/components/FounderSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Differentiators />
      <Process />
      <Portfolio />
      <Testimonial />
      <FounderSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
