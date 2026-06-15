import { img } from "@/assets/images";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  accent?: string;
}

function StatItem({ end, suffix, label, accent = "text-foreground-950" }: StatItemProps) {
  const { count, ref } = useCountUp({ end, suffix, duration: 1600, startOnView: false });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col gap-0.5">
      <span className={`font-heading text-3xl md:text-4xl font-semibold tabular-nums ${accent}`}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs text-foreground-500 font-label whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background-50"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Warm blob top-right */}
        <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-primary-100/60 via-background-100/40 to-transparent rounded-bl-[80px]" />
        {/* Accent dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(oklch(var(--foreground-950)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background-200 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Left – text ── */}
          <div className="flex-1 w-full">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-label font-semibold tracking-wide text-primary-600">
                Early Childhood Education Visionary
              </span>
              
            </div>
            <div className="inline-flex items-center gap-2.5 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mx-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-label font-semibold tracking-wide text-primary-600">
                15+ Years of Transforming Learning for Children
              </span>
              
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.08] text-foreground-950 mb-6 tracking-tight">
              Himabindu<br />
              <span className="italic font-light text-primary-500">Rudrapaka</span>
            </h1>

            <p className="italic text-xs md:text-sm text-primary-300 font-body leading-relaxed max-w-xl mb-2 font-medium tracking-wider uppercase">
              Learning Innovator · Child Development Advocate · Preschool Leader
            </p>

            <div className="max-w-lg mb-10 space-y-4">
              <p className="text-base text-foreground-500 font-body leading-loose">
                An early childhood education professional, visionary edupreneur, and
                thought leader, I’m devoted to child-led learning and reimagining the
                future of early education. Across more than a decade and a half, I’ve
                created joyful, safe, and inclusive spaces where children flourish
                intellectually, emotionally, socially, and creatively — guided by the
                belief that a child’s earliest years lay the foundation for lifelong
                success, built with care, imagination, and purpose.
              </p>
              {/* <p className="text-base text-foreground-500 font-body leading-loose">
                In close partnership with families and educators, I nurture supportive
                learning communities that empower every child to explore with confidence,
                grow independently, and discover the joy of learning.
              </p> */}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3 mb-14">
              <button
                onClick={() => handleScroll("#impact")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground-950 text-background-50 text-sm font-medium hover:bg-foreground-800 transition-all cursor-pointer whitespace-nowrap"
              >
                Explore My Work
                <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-background-300 text-foreground-700 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-2-line" />
                Book Appointment
              </a>
            </div>

            {/* Stat pills */}
            {/* <div className="mt-10 bg-background-100 border border-background-200 rounded-2xl px-6 py-5">
              <p className="text-xs font-label font-semibold text-foreground-400 tracking-widest uppercase mb-4">At a Glance</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { end: 13,   suffix: "+", label: "Years Experience",     accent: "text-primary-500" },
                  { end: 6,    suffix: "",  label: "Schools Founded",       accent: "text-accent-500" },
                  { end: 5000, suffix: "+", label: "Children Nurtured",     accent: "text-secondary-500" },
                  { end: 80,   suffix: "+", label: "Educators Mentored",    accent: "text-primary-500" },
                ].map((s) => (
                  <StatItem key={s.label} {...s} />
                ))}
              </div>
            </div> */}
          </div>

          {/* ── Right – portrait ── */}
          <div className="flex-shrink-0 relative">
            {/* Floating award badge */}
            <div className="absolute -top-4 -left-6 z-20 bg-background-50 border border-background-200 rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <i className="ri-trophy-line text-sm" />
              </div>
              <div>
                <p className="text-xs font-label font-bold text-foreground-900 leading-none">12+ Awards</p>
                <p className="text-xs text-foreground-400 mt-0.5">National Recognition</p>
              </div>
            </div>

            {/* Portrait container */}
            <div className="relative w-72 h-80 md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[530px] rounded-3xl overflow-hidden">
              {/* Decorative bg shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-background-200 rounded-3xl" />
              <img
                src={img("bindu.jpeg")}
                alt="Himabindu Rudrapaka"
                className="relative z-10 w-full h-full object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-foreground-950/40 to-transparent z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}