export default function Process() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Understanding your vision, lifestyle, and requirements to establish a clear foundation." },
    { num: "02", title: "Concept Design", desc: "Translating ideas into architectural blueprints and 3D interior visualizations." },
    { num: "03", title: "Civil Execution", desc: "Rigorous construction and engineering with uncompromising quality control." },
    { num: "04", title: "Handover", desc: "Final styling and seamless transition of the completed masterpiece to you." }
  ];

  return (
    <section className="bg-greige py-32 w-full border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-4 block">Our Methodology</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light">
            The Yunicore <span className="italic text-brass">Process</span>
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
