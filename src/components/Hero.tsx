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
      <div className="absolute top-0 left-[6%] w-[1px] h-full bg-charcoal/5 z-0 hidden lg:block" />
      <div className="absolute top-0 left-[33%] w-[1px] h-full bg-charcoal/5 z-0 hidden lg:block" />

      {/* Main Content Container - Full width, pushed left */}
      <div className="absolute inset-0 z-10 w-full px-6 lg:px-16 xl:px-24 h-full flex flex-col justify-center pointer-events-none">
        
        {/* Overlapping Typography */}
        <div className="w-full md:w-[90%] lg:w-[85%] mt-12">
          <h1 className="font-cormorant text-6xl md:text-[6.5rem] lg:text-[8.5rem] font-medium leading-[0.9] tracking-tight animate-[fade-up_1.5s_ease-out_forwards] opacity-0 mix-blend-difference text-white" style={{ animationDelay: '0.2s' }}>
            Design. Build.
          </h1>
          <h1 className="font-cormorant text-6xl md:text-[6.5rem] lg:text-[8.5rem] font-medium leading-[0.9] tracking-tight animate-[fade-up_1.5s_ease-out_forwards] opacity-0 mix-blend-difference text-white" style={{ animationDelay: '0.4s' }}>
            <span className="italic">Deliver.</span>
          </h1>
          
          <div className="mt-12 md:mt-20 max-w-[600px] animate-[fade-up_1.5s_ease-out_forwards] opacity-0 text-charcoal" style={{ animationDelay: '0.6s' }}>
            <p className="font-jost text-base md:text-lg uppercase tracking-widest leading-relaxed font-medium border-l-2 border-brass pl-6">
              Interior Design, Architecture, Construction & Renovation Services Across Tamil Nadu.
            </p>
            
            <div className="mt-12 pointer-events-auto flex flex-col sm:flex-row gap-6">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 uppercase tracking-[0.2em] font-jost text-sm font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.182 24l6.108-1.594A11.96 11.96 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 22.019c-1.817 0-3.593-.487-5.15-1.411l-.369-.219-3.834 1.001 1.021-3.738-.241-.383C2.535 15.626 1.981 13.863 1.981 12.031 1.981 6.477 6.477 1.981 12.031 1.981c5.554 0 10.05 4.496 10.05 10.05 0 5.554-4.496 10.05-10.05 10.05z"/></svg>
                WhatsApp Consultation
              </a>
              <a href="#portfolio" className="border-2 border-charcoal text-charcoal bg-transparent px-10 py-5 uppercase tracking-[0.2em] font-jost text-sm font-semibold flex items-center justify-center transition-colors hover:bg-charcoal hover:text-white">
                View Projects
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
