export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-alabaster overflow-hidden">
      
      {/* Right Side Image Placeholder (60% width on Desktop) */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-[#111] z-0">
        <img 
          src="/images/hero.png" 
          alt="Luxury Interior" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* Subtle Architectural Grid Lines */}
      <div className="absolute top-0 left-[8%] w-[1px] h-full bg-charcoal/5 z-0 hidden lg:block" />
      <div className="absolute top-0 left-[38%] w-[1px] h-full bg-charcoal/5 z-0 hidden lg:block" />

      {/* Main Content Container with Mix Blend Mode */}
      <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center pointer-events-none mix-blend-difference text-white">
        
        {/* Overlapping Typography */}
        <div className="w-full md:w-[90%] lg:w-[85%] mt-12">
          <h1 className="font-cormorant text-6xl md:text-[7rem] lg:text-[9rem] font-light leading-[0.85] tracking-tighter animate-[fade-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            Architectural
          </h1>
          <h1 className="font-cormorant text-6xl md:text-[7rem] lg:text-[9rem] font-light leading-[0.85] tracking-tighter animate-[fade-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="italic">Excellence.</span>
          </h1>
          
          <div className="mt-12 md:mt-24 max-w-[400px] animate-[fade-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
            <p className="font-jost text-sm md:text-base uppercase tracking-widest leading-relaxed opacity-80 border-l border-charcoal/20 pl-4">
              Enduring Spaces. Bespoke Living.
            </p>
            <p className="font-jost text-sm md:text-base font-light leading-relaxed mt-6 opacity-60 normal-case tracking-wide text-justify">
              Mastering the art of interior design and civil engineering in Chennai. We translate vision into physical reality for homeowners, corporates, and developers.
            </p>
            
            <div className="mt-12 pointer-events-auto">
              <a href="#portfolio" className="group flex items-center gap-5 w-fit">
                <div className="w-12 h-12 rounded-full border border-charcoal/30 flex items-center justify-center group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-charcoal transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
                  <svg className="w-4 h-4 text-charcoal group-hover:text-white transition-colors duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
                <span className="font-jost text-xs uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  View Portfolio
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator (Moved to Right Side) */}
      <div className="absolute z-20 bottom-12 right-6 lg:right-12 pointer-events-auto mix-blend-difference text-white animate-[fade-up_1.5s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.8s' }}>
        <div className="hidden md:flex flex-col items-center gap-4">
          <span className="font-jost text-[0.55rem] uppercase tracking-[0.2em] -rotate-90 origin-center mb-6 opacity-50">Scroll</span>
          <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-[grow-down_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
