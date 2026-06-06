export default function Portfolio() {
  const projects = [
    { type: "Residential", name: "The Alwarpet Residence" },
    { type: "Commercial", name: "Vanguard Corporate Hub" },
    { type: "Architecture", name: "ECR Beach Villa" }
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
               <img src="/images/port1.png" alt={projects[0].name} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-cormorant text-3xl font-light">{projects[0].name}</h3>
                <p className="font-jost text-alabaster/50 text-xs uppercase tracking-widest mt-3">
                  {projects[0].type} &nbsp;|&nbsp; [Location, e.g., Alwarpet] &nbsp;|&nbsp; [Year, e.g., 2024]
                </p>
              </div>
              <span className="font-jost text-xs uppercase tracking-widest text-brass">View Project</span>
            </div>
          </div>

          {/* Project 2 & 3 - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-full aspect-[4/5] bg-[#222] mb-6 overflow-hidden flex items-center justify-center relative">
                   <img src={`/images/port${index + 2}.png`} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-cormorant text-3xl font-light">{project.name}</h3>
                    <p className="font-jost text-alabaster/50 text-xs uppercase tracking-widest mt-3">
                      {project.type} &nbsp;|&nbsp; [Location] &nbsp;|&nbsp; [Year]
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
