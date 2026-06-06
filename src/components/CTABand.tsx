export default function CTABand() {
  return (
    <section id="contact" className="bg-charcoal py-32 w-full flex flex-col items-center justify-center text-center px-6 border-b border-white/5">
      <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight">
        Begin the <span className="italic">Conversation.</span>
      </h2>
      <p className="font-jost text-white/70 font-light text-base md:text-lg mb-12 max-w-lg mx-auto">
        Commission your next project with Chennai's premier design and construction studio.
      </p>
      <a
        href="tel:+919999999999"
        className="font-jost text-xs uppercase tracking-[0.2em] px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500"
      >
        Request a Consultation
      </a>
    </section>
  );
}
