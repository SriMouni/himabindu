import { useScrollReveal } from "@/hooks/useScrollReveal";

const pressItems = [
  {
    outlet: "Times of India",
    logo: "ri-newspaper-line",
    edition: "Hyderabad Times",
    title: "Times Power Women Telangana 2026",
    highlight: "Outstanding Early Years Educator",
    date: "April 2026",
    excerpt: "Recognised among Telangana's most influential women shaping the future of early childhood education. Featured in the Hyderabad Times print edition for pioneering work across six preschool centers.",
    quote: "Her vision has redefined early learning in Hyderabad's communities, blending innovation with deep-rooted care for every child's first steps into education.",
  },
  {
    outlet: "TV9 Telugu",
    logo: "ri-tv-line",
    edition: "Live Broadcast",
    title: "Live Interview at Times Power Women Ceremony",
    highlight: "Exclusive Television Coverage",
    date: "April 2026",
    excerpt: "Interviewed live by TV9 Telugu at the Times Power Women Telangana 2026 award ceremony. Shared insights on building child-centric preschool ecosystems and the importance of play-based learning.",
    quote: "A powerful voice for early education in Telangana, bringing visibility to the transformative impact of quality preschool experiences.",
  },
  {
    outlet: "World Forum Foundation",
    logo: "ri-global-line",
    edition: "Kuala Lumpur, Malaysia",
    title: "World Forum on Early Care & Education 2026",
    highlight: "India Delegate & Speaker",
    date: "April 2026",
    excerpt: "Represented India at the premier global early childhood event alongside experts from 40+ countries. Contributed to discussions on the future of the early childhood workforce and innovative teaching practices at Hilton Kuala Lumpur.",
    quote: "Brought India's grassroots preschool perspective to the global stage, championing accessible and joyful early learning for all children.",
  },
  {
    outlet: "Early Childhood Association",
    logo: "ri-award-line",
    edition: "National Recognition",
    title: "Early Childhood Education Excellence Award",
    highlight: "Industry Leadership",
    date: "2025",
    excerpt: "Honoured by the Early Childhood Association for exceptional contributions to preschool education in Telangana. Recognised for innovative curriculum design and teacher mentorship programs that have impacted 80+ educators.",
    quote: "A trailblazer in early years education whose work continues to raise the bar for preschool quality across the region.",
  },
];

function PressCard({ item, index }: { item: typeof pressItems[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px",
    delay: index * 120,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="group relative bg-background-50 rounded-2xl p-6 md:p-7 border border-background-200 hover:border-accent-200 transition-all duration-300 h-full flex flex-col">
        {/* Outlet header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-100 text-accent-600 group-hover:bg-accent-200 transition-colors">
            <i className={`${item.logo} text-lg`} />
          </div>
          <div>
            <p className="text-sm font-label font-bold text-foreground-900">{item.outlet}</p>
            <p className="text-xs text-foreground-400">{item.edition}</p>
          </div>
          <div className="ml-auto">
            <span className="text-xs font-label text-foreground-400 bg-background-100 px-2.5 py-1 rounded-full whitespace-nowrap">
              {item.date}
            </span>
          </div>
        </div>

        {/* Coverage title */}
        <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2 leading-snug">
          {item.title}
        </h3>

        {/* Highlight badge */}
        <div className="inline-flex items-center gap-1.5 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
          <span className="text-xs font-label font-semibold text-accent-600 uppercase tracking-wide">
            {item.highlight}
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-foreground-500 leading-relaxed mb-5 flex-1">
          {item.excerpt}
        </p>

        {/* Quote block */}
        <div className="relative border-l-2 border-accent-200 pl-4 py-1">
          <p className="text-xs text-foreground-400 italic leading-relaxed">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PressSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section id="press" className="py-24 md:py-32 bg-background-50 relative overflow-hidden">
      {/* Subtle warm accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 md:mb-20 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-accent-600 uppercase">Featured In</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            Recognised by<br />
            <span className="italic font-light text-primary-500">Leading Platforms</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed max-w-lg">
            National media, global forums, and industry bodies have spotlighted our work in transforming early childhood education across Hyderabad.
          </p>
        </div>

        {/* Press grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {pressItems.map((item, i) => (
            <PressCard key={item.outlet + item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-background-100 border border-background-200 rounded-full px-5 py-2.5">
            <i className="ri-shining-line text-accent-500 text-sm" />
            <span className="text-xs font-label text-foreground-500">
              As seen in national print media, television broadcasts, and global education forums
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}