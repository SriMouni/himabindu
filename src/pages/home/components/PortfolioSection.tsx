import { img } from "@/assets/images";
import { useState } from "react";

type Category = "all" | "awards" | "schools";

interface ImageItem {
  src: string;
  category: "awards" | "schools";
}

const imageData: ImageItem[] = [
  // ── KL World Forum 2026 ──
  { src: img("award-event-11.jpeg"), category: "awards" },
  { src: img("award-event-10.jpeg"), category: "awards" },
  { src: img("award-event-09.jpeg"), category: "awards" },
  { src: img("award-event-08.jpeg"), category: "awards" },
  { src: img("award-event-07.jpeg"),   category: "awards" },
  { src: img("award-event-06.jpeg"),   category: "awards" },
  // ── Awards & Recognition ──
  { src: img("award-event-03.jpeg"), category: "awards" },
  { src: img("award-event-01.jpeg"),  category: "awards" },
  { src: img("award-event-02.jpeg"), category: "awards" },
  { src: img("award-event-04.jpeg"),    category: "awards" },
  { src: img("award-event-05.jpeg"),  category: "awards" },
  { src: img("achievement14.jpeg"), category: "awards" },
  { src: img("achievement13.jpeg"), category: "awards" },
  { src: img("achievement12.jpeg"), category: "awards" },
  { src: img("achievement11.jpg"),  category: "awards" },
  { src: img("achievement10.jpeg"), category: "awards" },
  { src: img("achievement9.jpeg"),  category: "awards" },
  { src: img("achievement8.jpeg"),  category: "awards" },
  { src: img("achievement7.jpeg"),  category: "awards" },
  { src: img("achievement6.jpg"),   category: "awards" },
  { src: img("achievement5.jpeg"),  category: "awards" },
  { src: img("achievement4.jpeg"),  category: "awards" },
  { src: img("achievement3.jpg"),   category: "awards" },
  { src: img("achievement3.jpeg"),  category: "awards" },
  { src: img("achievement1.jpeg"),  category: "awards" },
  // ── Schools & Events ──
  { src: img("school30.jpeg"), category: "schools" },
  { src: img("school31.jpeg"), category: "schools" },
  { src: img("school32.jpeg"), category: "schools" },
  { src: img("school33.jpeg"), category: "schools" },
  { src: img("school21.jpeg"), category: "schools" },
  { src: img("school13.jpeg"), category: "schools" },
  { src: img("school24.jpeg"), category: "schools" },
  { src: img("school15.jpeg"), category: "schools" },
  { src: img("school16.jpeg"), category: "schools" },
  { src: img("school2.jpeg"),  category: "schools" },
  { src: img("school14.jpeg"), category: "schools" },
  { src: img("school4.jpeg"),  category: "schools" },
  { src: img("school11.jpeg"), category: "schools" },
  { src: img("school12.jpeg"), category: "schools" },
  { src: img("school8.jpeg"),  category: "schools" },
  { src: img("school5.jpeg"),  category: "schools" },
  { src: img("school3.jpeg"),  category: "schools" },
  { src: img("school17.jpeg"), category: "schools" },
  { src: img("school18.jpeg"), category: "schools" },
  { src: img("school19.jpeg"), category: "schools" },
  { src: img("school20.jpeg"), category: "schools" },
  { src: img("school26.jpg"),  category: "schools" },
  { src: img("school22.jpeg"), category: "schools" },
  { src: img("school23.jpeg"), category: "schools" },
  { src: img("school1.jpeg"),  category: "schools" },
  { src: img("school9.jpeg"),  category: "schools" },
  { src: img("school10.jpeg"), category: "schools" },
  { src: img("school7.jpeg"),  category: "schools" },
  { src: img("school25.jpeg"), category: "schools" },
  { src: img("school27.jpg"),  category: "schools" },
  { src: img("school28.jpg"),  category: "schools" },
  { src: img("school29.jpg"),  category: "schools" },
];

const FILTERS: { key: Category; label: string; icon: string }[] = [
  { key: "all",    label: "All",               icon: "ri-grid-line" },
  { key: "awards", label: "Awards & Recognition", icon: "ri-trophy-line" },
  { key: "schools",label: "Schools & Events",  icon: "ri-building-line" },
];

const INITIAL_COUNT = 16;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [showAll, setShowAll]           = useState(false);
  const [lightbox, setLightbox]         = useState<string | null>(null);

  const filtered = activeFilter === "all"
    ? imageData
    : imageData.filter((img) => img.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const handleFilter = (cat: Category) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-xs font-label font-semibold tracking-widest text-foreground-400 uppercase">Portfolio</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-background-50">
              Moments That<br />
              <span className="italic font-light text-primary-400">Matter Most</span>
            </h2>
          </div>
          <p className="text-foreground-400 text-sm leading-relaxed max-w-xs md:text-right">
            A visual journey through joyful learning, community events, and award moments.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => {
            const count = f.key === "all"
              ? imageData.length
              : imageData.filter((img) => img.category === f.key).length;
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => handleFilter(f.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-label font-medium transition-all cursor-pointer whitespace-nowrap ${
                  active
                    ? "bg-primary-500 text-background-50"
                    : "bg-background-50/8 border border-background-50/15 text-foreground-400 hover:bg-background-50/15 hover:text-foreground-200"
                }`}
              >
                <i className={`${f.icon} text-sm`} />
                {f.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  active ? "bg-background-50/20 text-background-50" : "bg-background-50/10 text-foreground-500"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Grid ── */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4">
          {visible.map((item, idx) => (
            <button
              key={item.src}
              className="portfolio-item relative overflow-hidden rounded-xl cursor-pointer group block w-full mb-3 md:mb-4 break-inside-avoid"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="portfolio-overlay absolute inset-0 bg-foreground-950/30 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background-50/90">
                  <i className="ri-zoom-in-line text-foreground-950" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Show more */}
        {!showAll && filtered.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 rounded-full border border-foreground-600 text-foreground-300 text-sm font-label font-medium hover:bg-foreground-900/40 transition-colors cursor-pointer whitespace-nowrap"
            >
              Show All {filtered.length} Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground-950/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <i className="ri-close-line text-xl" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}