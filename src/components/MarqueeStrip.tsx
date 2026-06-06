export default function MarqueeStrip() {
  const items = [
    "Interior Design",
    "Civil Engineering",
    "Architecture",
    "Project Management",
    "Renovation"
  ];
  
  // Duplicate for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-gold py-4 overflow-hidden border-y border-gold flex">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-jost text-black uppercase tracking-widest text-sm font-medium px-8">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
