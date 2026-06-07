export default function Services() {
  const services = [
    {
      title: "Interior Design",
      desc: "Curating highly functional, beautiful spaces tailored to your lifestyle and comfort."
    },
    {
      title: "Architecture",
      desc: "Designing structures that maximize space, light, and long-term value."
    },
    {
      title: "Civil Engineering",
      desc: "Ensuring structural integrity, safety, and rigorous technical execution on every build."
    },
    {
      title: "Project Management",
      desc: "Delivering your project on time and within budget, with total transparency and zero headaches."
    },
    {
      title: "Renovation",
      desc: "Upgrading and modernizing existing properties to meet contemporary standards."
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

        <div className="mt-24 flex justify-center">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="font-jost text-xs font-medium uppercase tracking-[0.2em] px-8 py-4 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center gap-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.182 24l6.108-1.594A11.96 11.96 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 22.019c-1.817 0-3.593-.487-5.15-1.411l-.369-.219-3.834 1.001 1.021-3.738-.241-.383C2.535 15.626 1.981 13.863 1.981 12.031 1.981 6.477 6.477 1.981 12.031 1.981c5.554 0 10.05 4.496 10.05 10.05 0 5.554-4.496 10.05-10.05 10.05z"/></svg>
            Discuss Your Project on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
