export default function Differentiators() {
  const points = [
    { title: "Direct Founder Involvement", desc: "No middle-men. You communicate directly with the leadership." },
    { title: "End-to-End Solutions", desc: "A single point of accountability from design to handover." },
    { title: "Transparent Communication", desc: "No hidden costs, no surprises. We keep you informed at every step." },
    { title: "12+ Years Experience", desc: "A proven track record of successful deliveries across Tamil Nadu." },
    { title: "Strong Execution Team", desc: "Skilled craftsmen and engineers dedicated to precision." },
    { title: "Reasonable Pricing", desc: "Premium quality execution without the inflated luxury markup." }
  ];

  return (
    <section id="why-choose-us" className="bg-alabaster py-32 w-full border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-4 block">The Yunicore Advantage</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Why Choose <span className="italic">Yunicore</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col border-l border-charcoal/20 pl-6 hover:border-brass transition-colors">
              <h3 className="font-jost text-lg uppercase tracking-wider text-charcoal mb-3">{point.title}</h3>
              <p className="font-jost text-sm font-light leading-relaxed text-charcoal/70">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
