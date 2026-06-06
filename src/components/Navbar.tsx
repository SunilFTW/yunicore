"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isScrolled 
          ? "bg-alabaster border-b border-charcoal/5 py-2 shadow-sm" 
          : "bg-alabaster/80 backdrop-blur-md border-b border-transparent py-4 lg:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="Yunicore Logo" 
            className={`w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] scale-[1.4] md:scale-[1.6] origin-left ${
              isScrolled ? "h-10 opacity-100" : "h-14 md:h-16 opacity-90"
            }`} 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {["Services", "Portfolio", "Audience", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-jost text-xs font-medium uppercase tracking-[0.2em] text-charcoal hover:text-brass transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="tel:+919999999999"
            className={`group relative overflow-hidden flex items-center justify-center gap-4 font-jost text-xs font-medium uppercase tracking-[0.2em] border transition-colors duration-500 hover:text-white ${
              isScrolled ? "border-charcoal text-charcoal px-8 py-3" : "border-charcoal/40 text-charcoal px-10 py-4"
            }`}
          >
            <span className="relative z-10">Consult Us</span>
            <svg className="w-3 h-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-charcoal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
