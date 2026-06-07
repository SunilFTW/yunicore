export default function FounderSection() {
  return (
    <section className="bg-greige py-32 w-full border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-8">Personal Accountability</span>
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
          Direct Oversight. <span className="italic">Total Accountability.</span>
        </h2>
        <div className="w-full h-[1px] bg-charcoal/10 my-12 max-w-sm" />
        <p className="font-jost text-lg md:text-xl font-light leading-loose text-charcoal/80 max-w-3xl">
          Unlike large corporate firms where you are just an account number, every Yunicore project benefits from direct founder involvement. From the initial consultation to the final handover, we ensure clear communication, stringent quality control, and a personal commitment to your project's success.
        </p>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 flex items-center gap-4 bg-charcoal text-white px-8 py-4 uppercase tracking-[0.2em] font-jost text-xs transition-transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.182 24l6.108-1.594A11.96 11.96 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 22.019c-1.817 0-3.593-.487-5.15-1.411l-.369-.219-3.834 1.001 1.021-3.738-.241-.383C2.535 15.626 1.981 13.863 1.981 12.031 1.981 6.477 6.477 1.981 12.031 1.981c5.554 0 10.05 4.496 10.05 10.05 0 5.554-4.496 10.05-10.05 10.05z"/></svg>
          Message the Founder on WhatsApp
        </a>
      </div>
    </section>
  );
}
