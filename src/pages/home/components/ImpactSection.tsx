import { useRef, useEffect, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const statsData = [
  { end: 13, suffix: "+", label: "Years in Early Childhood Leadership", icon: "ri-time-line", accent: "primary" },
  { end: 6,  suffix: "",  label: "Schools Established",                 icon: "ri-building-line", accent: "accent" },
  { end: 5000, suffix: "+", label: "Children Nurtured",                 icon: "ri-heart-3-line",  accent: "secondary" },
  { end: 80, suffix: "+", label: "Educators Mentored",                  icon: "ri-user-star-line", accent: "primary" },
];

const accentMap: Record<string, { icon: string; bar: string; num: string }> = {
  primary:   { icon: "bg-primary-100 text-primary-600",   bar: "bg-primary-500",   num: "text-primary-500" },
  accent:    { icon: "bg-accent-100 text-accent-600",     bar: "bg-accent-500",    num: "text-accent-500" },
  secondary: { icon: "bg-secondary-100 text-secondary-600", bar: "bg-secondary-500", num: "text-secondary-500" },
};

interface StatCardProps {
  end: number;
  suffix: string;
  label: string;
  icon: string;
  accent: string;
}

function StatCard({ end, suffix, label, icon, accent }: StatCardProps) {
  const { count, ref } = useCountUp({ end, suffix, duration: 2000 });
  const colors = accentMap[accent];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-background-50 border border-background-200 rounded-2xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden group hover:border-background-300 transition-colors"
    >
      {/* Top bar accent */}
      <div className={`absolute top-0 left-6 right-6 h-0.5 ${colors.bar} rounded-full`} />

      <div className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg ${colors.icon}`}>
        <i className={icon} />
      </div>

      <div>
        <p className={`font-heading text-5xl md:text-6xl font-semibold tabular-nums ${colors.num}`}>
          {count.toLocaleString()}{suffix}
        </p>
        <p className="text-xs text-foreground-500 font-label mt-2 leading-snug">{label}</p>
      </div>
    </div>
  );
}

const pillars = [
  { icon: "ri-seedling-line",    label: "Child-led Exploration" },
  { icon: "ri-emotion-happy-line", label: "Social-Emotional Growth" },
  { icon: "ri-leaf-line",        label: "Holistic Development" },
  { icon: "ri-home-heart-line",  label: "Inclusive Partnership" },
  { icon: "ri-music-2-line",     label: "Creative Expression" },
  { icon: "ri-shield-check-line", label: "Safe Environments" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ImpactSection() {
  const header = useInView();
  const body   = useInView();

  return (
    <section id="impact" className="py-24 md:py-32 bg-background-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div
          ref={header.ref}
          className={`flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16 transition-all duration-700 ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-xs font-label font-semibold tracking-widest text-primary-500 uppercase">Work &amp; Impact</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground-950 leading-tight">
              Transforming Lives<br />
              <span className="italic font-light text-primary-500">One Classroom</span><br />
              at a Time
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-end pb-2">
            <p className="text-foreground-500 text-base leading-loose mb-6">
              For over fourteen years, dedicated to transforming early childhood education
              through joyful, safe, and inclusive learning environments. Five FirstCry Intellitots
              Preschools across Hyderabad — nurturing 550+ young learners every year with
              45 passionate educators.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm">
                <i className="ri-map-pin-line" />
              </div>
              <span className="text-sm text-foreground-500 font-label">Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* ── Animated Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-20">
          {statsData.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* ── Two-column body ── */}
        <div
          ref={body.ref}
          className={`grid md:grid-cols-2 gap-10 lg:gap-16 mb-16 transition-all duration-700 delay-100 ${
            body.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-background-100 rounded-2xl border border-background-200 p-7 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <i className="ri-focus-3-line" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground-950">My Approach</h3>
            </div>
            <div className="space-y-3 text-sm text-foreground-600 leading-relaxed">
              <p>My work centres on creating preschools that feel like second homes — where children learn through exploration, play, and meaningful experiences.</p>
              <p>Curriculum blends literacy, numeracy, art, music, movement, and outdoor play with strong social-emotional learning. Safety, inclusivity, and child-wellbeing are the core of every school I lead.</p>
              <p>Teacher empowerment is central — a structured framework emphasizing child psychology, activity-based learning, storytelling, and reflective teaching.</p>
            </div>
          </div>

          <div className="bg-background-100 rounded-2xl border border-background-200 p-7 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <i className="ri-bar-chart-line" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground-950">The Outcomes</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Steady growth built on community trust and consistent quality",
                "High teacher retention through continuous professional development",
                "Strong parent satisfaction and long-term relationships",
                "Alumni thriving in leading primary schools with confidence",
                "Safe, inclusive spaces accommodating diverse learning styles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground-600">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 shrink-0 mt-0.5">
                    <i className="ri-check-line text-xs" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Philosophy dark block ── */}
        <div className="relative bg-foreground-950 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />

          <div className="relative mb-10">
            <p className="text-xs font-label font-semibold tracking-widest text-foreground-400 uppercase mb-4">Core Philosophy</p>
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-background-50 leading-snug">
              <span className="italic font-light text-primary-300">&ldquo;A preschool should feel</span><br />
              <span>like love in action.&rdquo;</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="flex items-center gap-3 bg-background-50/5 border border-background-50/10 rounded-xl p-4 hover:bg-background-50/10 transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-500/20 text-primary-300 shrink-0">
                  <i className={`${p.icon} text-sm`} />
                </div>
                <span className="text-sm text-foreground-300 font-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}