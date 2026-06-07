export default function TrustBar() {
  return (
    <div className="w-full bg-charcoal text-white py-8 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-between gap-8 md:gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-4xl font-light text-brass">12+</span>
            <span className="font-jost text-xs uppercase tracking-widest opacity-80 mt-2">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-4xl font-light text-brass">60+</span>
            <span className="font-jost text-xs uppercase tracking-widest opacity-80 mt-2">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-4xl font-light text-brass">3</span>
            <span className="font-jost text-xs uppercase tracking-widest opacity-80 mt-2">Active Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cormorant text-4xl font-light text-brass hidden md:block">★</span>
            <span className="font-jost text-xs uppercase tracking-widest opacity-80 mt-2 md:mt-4">Serving Tamil Nadu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
