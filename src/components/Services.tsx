export default function Services() {
  const services = [
    {
      title: "Interior Design",
      desc: "Curating bespoke interiors that balance uncompromising aesthetics with tactile comfort."
    },
    {
      title: "Architecture",
      desc: "Designing enduring structures defined by spatial harmony and environmental context."
    },
    {
      title: "Civil Engineering",
      desc: "Executing complex builds with rigorous structural integrity and technical precision."
    },
    {
      title: "Project Management",
      desc: "Overseeing every phase with total transparency, from initial blueprint to final handover."
    },
    {
      title: "Renovation",
      desc: "Transforming existing spaces into modern masterpieces while honoring their original soul."
    }
  ];

  return (
    <section id="services" className="bg-alabaster py-32 w-full border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="font-cormorant text-5xl md:text-7xl font-light text-charcoal leading-none">
            Our <span className="italic">Disciplines.</span>
          </h2>
          <span className="font-jost text-xs uppercase tracking-[0.2em] text-brass mt-8 md:mt-0">Core Expertise</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer border-t border-charcoal/10 pt-8 transition-colors hover:border-charcoal">
              <h3 className="font-jost text-xl uppercase tracking-widest text-charcoal mb-4 transition-colors group-hover:text-brass">
                {service.title}
              </h3>
              <p className="font-jost text-sm font-light leading-relaxed text-charcoal/70">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
