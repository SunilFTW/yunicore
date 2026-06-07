export default function FinalCTA() {
  return (
    <section className="bg-charcoal py-32 w-full flex flex-col items-center justify-center text-center px-6 border-b border-white/5">
      <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight">
        Planning Your <span className="italic">Next Project?</span>
      </h2>
      <p className="font-jost text-white/70 font-light text-base md:text-lg mb-12 max-w-lg mx-auto">
        Whether you're building a home, renovating a space, or developing a commercial property, Yunicore is ready to help.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="font-jost text-xs uppercase tracking-[0.2em] font-medium px-10 py-5 bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.182 24l6.108-1.594A11.96 11.96 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 22.019c-1.817 0-3.593-.487-5.15-1.411l-.369-.219-3.834 1.001 1.021-3.738-.241-.383C2.535 15.626 1.981 13.863 1.981 12.031 1.981 6.477 6.477 1.981 12.031 1.981c5.554 0 10.05 4.496 10.05 10.05 0 5.554-4.496 10.05-10.05 10.05zM17.533 15.34c-.302-.151-1.782-.88-2.059-.981-.277-.101-.478-.151-.68.151-.202.302-.782.981-.958 1.182-.176.202-.353.227-.655.076-1.516-.745-2.613-1.442-3.64-3.21-.237-.41-.026-.632.124-.881.135-.224.302-.353.453-.529.151-.176.202-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.68-1.637-.932-2.242-.244-.589-.493-.509-.68-.518-.176-.009-.378-.009-.579-.009s-.529.076-.806.378c-.277.302-1.058 1.033-1.058 2.519 0 1.486 1.083 2.922 1.234 3.123.151.202 2.129 3.25 5.157 4.553.721.31 1.282.495 1.722.634.724.23 1.383.197 1.899.119.58-.088 1.782-.73 2.034-1.435.252-.705.252-1.31.176-1.435-.075-.125-.276-.2-.578-.352z"/></svg>
          WhatsApp Us
        </a>
        <a
          href="tel:+919999999999"
          className="font-jost text-xs uppercase tracking-[0.2em] px-10 py-5 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
