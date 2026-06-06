import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonial />
      <WhyUs />
      <CTABand />
      <Footer />
    </main>
  );
}
