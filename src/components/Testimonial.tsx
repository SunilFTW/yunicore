export default function Testimonial() {
  const testimonials = [
    {
      quote: "Yunicore didn't just build our headquarters; they translated our corporate identity into a physical space. Their civil engineering precision and architectural vision are unmatched in Chennai.",
      name: "[Client Name]",
      title: "CEO, [Company Name]"
    },
    {
      quote: "From the initial concept sketches to the final handover, the level of transparency and bespoke luxury they brought to our home was extraordinary.",
      name: "[Client Name]",
      title: "Homeowner, [Location]"
    }
  ];

  return (
    <section className="bg-alabaster py-32 w-full border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-jost text-xs uppercase tracking-[0.3em] text-brass mb-4 block">Client Voices</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light">
            Words of <span className="italic text-brass">Trust</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-brass/20 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-cormorant text-2xl md:text-3xl text-charcoal font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-jost text-sm uppercase tracking-widest text-charcoal font-medium">
                  {t.name}
                </h4>
                <p className="font-jost text-xs text-charcoal/50 mt-1">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
