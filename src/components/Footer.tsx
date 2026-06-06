import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex flex-col mb-6">
              <img src="/images/logo.png" alt="Yunicore Logo" className="h-16 w-auto object-contain opacity-90" />
            </Link>
            <p className="font-cormorant italic text-alabaster/40 text-xl max-w-sm mt-4">
              Architectural Excellence. Timeless Interiors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-jost text-xs uppercase tracking-widest text-brass mb-6">Quick Links</h4>
            <ul className="space-y-4 flex flex-col items-start">
              {["Services", "Portfolio", "Audience", "About"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="font-jost text-sm text-alabaster/60 hover:text-brass transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="md:col-span-4">
            <h4 className="font-jost text-xs uppercase tracking-widest text-brass mb-6">Our Services</h4>
            <ul className="space-y-4">
              {["Interior Design", "Civil Engineering", "Architecture", "Project Management", "Renovation"].map((item) => (
                <li key={item} className="font-jost text-sm text-alabaster/60 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-jost text-[0.65rem] uppercase tracking-widest text-alabaster/30">
            &copy; {new Date().getFullYear()} Yunicore. All rights reserved.
          </p>
          <p className="font-jost text-[0.65rem] uppercase tracking-widest text-alabaster/30">
            Chennai, Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
}
