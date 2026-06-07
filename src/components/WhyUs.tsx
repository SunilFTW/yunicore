export default function WhyUs() {
  const audiences = [
    {
      title: "Homeowners & Apartments",
      desc: "Designing private sanctuaries that intimately reflect your lifestyle, crafted with unparalleled attention to detail."
    },
    {
      title: "Business Owners & Corporates",
      desc: "Developing commanding commercial environments that elevate brand identity and foster productivity."
    },
    {
      title: "Property Developers",
      desc: "Partnering to deliver high-yield, architecturally significant projects on time and with absolute precision."
    }
  ];

  return (
    <section id="audience" className="bg-greige py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-4 block">Who We Serve</span>
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
          Partnering Across <span className="italic">Industries.</span>
        </h2>
        <p className="font-jost text-charcoal/70 max-w-2xl mx-auto mt-6 mb-16">
          Whether you are building your dream home, renovating an apartment, or developing a commercial property, we have the specialized expertise to bring your project to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {audiences.map((audience, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-jost text-xs uppercase tracking-widest text-brass mb-6">
                0{index + 1}
              </span>
              <h3 className="font-cormorant text-3xl text-charcoal mb-4">
                {audience.title}
              </h3>
              <p className="font-jost text-charcoal/70 font-light leading-relaxed max-w-sm">
                {audience.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
