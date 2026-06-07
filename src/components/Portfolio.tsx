export default function Portfolio() {
  const projects = [
    { type: "Residential", name: "The Alwarpet Residence", location: "Chennai", scope: "Architecture & Interior", image: "/images/port1.png" },
    { type: "Commercial", name: "Vanguard Corporate Hub", location: "Coimbatore", scope: "End-to-End Construction", image: "/images/port2.png" },
    { type: "Residential", name: "ECR Beach Villa", location: "ECR, Chennai", scope: "Renovation & Interior", image: "/images/port3.png" }
  ];

  return (
    <section id="portfolio" className="bg-charcoal py-32 w-full text-alabaster">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-4 block">Selected Works</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">
              Spaces of <span className="italic text-brass">Distinction</span>
            </h2>
          </div>
          <a href="#contact" className="font-jost text-xs uppercase tracking-widest border-b border-alabaster/30 pb-1 hover:border-brass hover:text-brass transition-colors">
            Discuss Your Project
          </a>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {/* Project 1 - Full Bleed */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-[#222] mb-6 overflow-hidden flex items-center justify-center relative">
               <img src={projects[0].image} alt={projects[0].name} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/60 transition-colors duration-700" />
               <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="font-jost text-xs uppercase tracking-[0.2em] text-brass mb-2">{projects[0].type}</p>
                <h3 className="font-cormorant text-3xl font-light text-white mb-2">{projects[0].name}</h3>
                <div className="flex flex-wrap gap-4 font-jost text-xs text-white/70">
                  <span>Loc: {projects[0].location}</span>
                  <span>Scope: {projects[0].scope}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 & 3 - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-full aspect-[4/5] bg-[#222] mb-6 overflow-hidden flex items-center justify-center relative">
                   <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/60 transition-colors duration-700" />
                   <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="font-jost text-xs uppercase tracking-[0.2em] text-brass mb-2">{project.type}</p>
                    <h3 className="font-cormorant text-3xl font-light text-white mb-2">{project.name}</h3>
                    <div className="flex flex-wrap gap-4 font-jost text-xs text-white/70">
                      <span>Loc: {project.location}</span>
                      <span>Scope: {project.scope}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a href="tel:+919999999999" className="font-jost text-xs uppercase tracking-[0.2em] px-10 py-5 border border-alabaster text-alabaster hover:bg-alabaster hover:text-charcoal transition-all duration-500">
            Start Your Project - Call Now
          </a>
        </div>

      </div>
    </section>
  );
}
