export default function Process() {
  const steps = [
    { num: "01", title: "Consultation & Scoping", desc: "We begin with a transparent discussion to understand your vision, requirements, and budget without any commitment." },
    { num: "02", title: "Planning & Design", desc: "Our architects and designers translate your needs into precise plans, ensuring aesthetics align perfectly with structural integrity." },
    { num: "03", title: "Transparent Execution", desc: "Our civil engineering team executes the build with rigorous quality control, keeping you informed at every milestone." },
    { num: "04", title: "Handover", desc: "We deliver the completed project on time and within budget, ready for you to step in and experience." }
  ];

  return (
    <section id="process" className="bg-charcoal py-32 w-full text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="font-jost text-xs uppercase tracking-[0.2em] text-brass mb-4 block">Predictable Execution</span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light">
            Our <span className="italic">Process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-start border-l border-brass/30 pl-8 relative">
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-brass -ml-[1px]" />
              <span className="font-cormorant text-4xl text-brass/40 mb-6">{step.num}</span>
              <h3 className="font-jost text-sm uppercase tracking-widest text-charcoal font-medium mb-3">
                {step.title}
              </h3>
              <p className="font-jost text-charcoal/60 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
