export default function About() {
  return (
    <section id="about" className="bg-alabaster py-32 md:py-48 w-full border-b border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex flex-col items-center">
          <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-8">Our Ethos</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
          Experienced. <span className="italic">Accountable.</span> Founder-Led.
        </h2>
        <div className="w-full h-[1px] bg-charcoal/10 my-16 mx-auto max-w-sm" />
        <p className="font-jost text-lg md:text-xl font-light leading-loose text-charcoal/80 max-w-3xl mx-auto">
          For over 12 years, Yunicore has been a trusted design and construction partner across Tamil Nadu. We provide end-to-end solutions, bridging the gap between visionary architecture and precise civil execution. With a commitment to transparent communication and direct founder involvement, we ensure every project is delivered with absolute precision.
        </p>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="w-[1px] h-24 bg-brass/30" />
        </div>
      </div>
    </section>
  );
}
