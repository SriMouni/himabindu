import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  {
    year: "2005",
    title: "DRS Kids",
    desc: "Began my journey in early childhood education with DRS Kids, laying the foundation for a lifelong passion for nurturing young learners.",
    tag: "Foundation",
  },
  {
    year: "2012",
    title: "FirstCry Intellitots Nizampet",
    desc: "Launched the first flagship center in Nizampet Village, dedicated to nurturing young minds with quality care and a strong community presence.",
    tag: "Launch",
  },
  {
    year: "2016",
    title: "Botanical Garden Center",
    desc: "Expanded to Botanical Garden, creating a nature-inspired learning environment where children's curiosity and love for learning flourish.",
    tag: "Expansion",
  },
  {
    year: "2017",
    title: "Nizampet Annexe",
    desc: "Enhanced the flagship location with the Nizampet Annexe to accommodate growing enrollment and offer enriched programs for holistic development.",
    tag: "Growth",
  },
  {
    year: "2018",
    title: "HMT Hills Center",
    desc: "Opened in the serene HMT Hills, blending tranquil surroundings with academic excellence and personalized learning.",
    tag: "Growth",
  },
  {
    year: "2020",
    title: "Online Platform Launch",
    desc: "Adapted to changing times by launching a digital platform extending professional development and early learning to educators and families across the region.",
    tag: "Innovation",
  },
  {
    year: "2024",
    title: "Mayuri Nagar Center",
    desc: "Welcomed the newest center in Mayuri Nagar, continuing our commitment to innovative, high-quality early education in Hyderabad's communities.",
    tag: "Growth",
  },
  {
    year: "2026",
    title: "World Forum on Early Care & Education — Kuala Lumpur",
    desc: "Represented India at the premier global early childhood event in Kuala Lumpur, Malaysia (April 14–17, 2026) at Hilton KL. Joined experts from 40+ countries to share innovative teaching practices and discuss the future of the early childhood workforce.",
    tag: "Global",
  },
  {
    year: "2026",
    title: "Times Power Women — Outstanding Early Years Educator",
    desc: "Honoured as Outstanding Early Years Educator at Times Power Women Telangana 2026 by the Times of India. Featured in Hyderabad Times print edition and interviewed live by TV9 Telugu at the award ceremony.",
    tag: "Award",
  },
];

const tagColors: Record<string, string> = {
  Foundation: "bg-secondary-100 text-secondary-700",
  Launch:     "bg-primary-100 text-primary-700",
  Expansion:  "bg-accent-100 text-accent-700",
  Growth:     "bg-background-200 text-foreground-600",
  Innovation: "bg-accent-100 text-accent-700",
  Global:     "bg-accent-100 text-accent-700",
  Award:      "bg-primary-100 text-primary-700",
};

function TimelineCard({ m, i }: { m: typeof milestones[0]; i: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px",
    delay: i * 90,
  });

  const isLeft = i % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start pb-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline node — centered */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
        <div className={`w-11 h-11 rounded-full border-4 border-background-50 shadow-md flex items-center justify-center transition-all duration-500 ${
          isVisible ? "bg-primary-500 scale-100" : "bg-background-300 scale-75"
        }`}>
          <span className="text-lg font-heading font-bold text-background-50">{i + 1}</span>
        </div>
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex flex-col items-center mr-4">
        <div className="w-7 h-7 rounded-full bg-primary-500 mt-1 shrink-0 ring-4 ring-primary-100 flex items-center justify-center">
          <span className="text-sm font-heading font-bold text-background-50">{i + 1}</span>
        </div>
        {i < milestones.length - 1 && (
          <div className="w-px flex-1 bg-background-300 mt-2" />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 pb-14 md:pb-16 ${isLeft ? "md:pr-[calc(50%+40px)]" : "md:pl-[calc(50%+40px)]"}`}
      >
        <div className="group relative bg-background-50 rounded-2xl p-5 md:p-6 border border-background-200 hover:border-primary-200 transition-all duration-300 cursor-default">
          {/* Connecting arrow (desktop) */}
          <div
            className={`hidden md:block absolute top-7 w-3 h-3 bg-background-50 border-l border-t border-background-200 rotate-45 ${isLeft ? "right-[-7px]" : "left-[-7px]"}`}
          />

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-heading text-2xl md:text-3xl font-bold text-primary-600">{m.year}</span>
            <span className={`text-xs font-label font-medium px-2.5 py-0.5 rounded-full ${tagColors[m.tag]}`}>
              {m.tag}
            </span>
          </div>
          <h3 className="text-sm font-label font-semibold text-foreground-800 mb-2 group-hover:text-primary-600 transition-colors">
            {m.title}
          </h3>
          <p className="text-sm text-foreground-500 leading-relaxed">{m.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-background-100 relative overflow-hidden">
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(oklch(var(--foreground-950)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-accent-600 uppercase">Timeline</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            A Journey Rooted<br />
            <span className="italic font-light text-primary-500">in Purpose</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed">
            Every child's journey begins with a school — mine began by building one.
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Central line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-accent-300 to-background-300 -translate-x-1/2" />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <TimelineCard key={`${m.year}-${m.title}`} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}