export default function About() {
  return (
    <section id="about" className="bg-alabaster py-32 md:py-48 w-full border-b border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex flex-col items-center">
          <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-8">Our Ethos</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
          The pursuit of <span className="italic">perfect proportion.</span>
        </h2>
        <div className="w-full h-[1px] bg-charcoal/10 my-16 mx-auto max-w-sm" />
        <p className="font-jost text-lg md:text-xl font-light leading-loose text-charcoal/80 max-w-3xl mx-auto">
          At Yunicore, we do not merely build structures; we curate environments. Based in Chennai, our multidisciplinary approach bridges the gap between visionary architecture and precise civil engineering. From intimate residential sanctuaries to commanding corporate hubs, every project is a masterclass in detail, materiality, and light.
        </p>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="w-[1px] h-24 bg-brass/30" />
        </div>
      </div>
    </section>
  );
}
