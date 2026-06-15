const items = [
  { icon: "ri-time-line",           text: "15+ Years Experience" },
  { icon: "ri-building-line",       text: "6 Schools Established" },
  { icon: "ri-heart-3-line",        text: "5000+ Children Nurtured" },
  { icon: "ri-trophy-line",         text: "12+ Awards" },
  { icon: "ri-earth-line",          text: "World Forum KL 2026" },
  { icon: "ri-newspaper-line",      text: "Times Power Women 2026" },
  // { icon: "ri-group-3-line",        text: "40+ Countries Network" },
  { icon: "ri-user-star-line",      text: "80+ Educators Mentored" },
];

export default function MarqueeStrip() {
  return (
    <div className="bg-foreground-950 border-y border-foreground-900 py-4">
      <div className="flex flex-wrap items-center justify-center gap-3 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-2 bg-background-50/8 border border-background-50/12 rounded-full px-4 py-2"
          >
            <i className={`${item.icon} text-primary-400 text-xs shrink-0`} />
            <span className="text-xs font-label font-medium text-foreground-300 whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}