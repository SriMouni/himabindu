const forumHighlights = [
  { icon: "ri-earth-line",    text: "40+ Countries Represented" },
  { icon: "ri-group-3-line",  text: "Global ECE Professionals" },
  { icon: "ri-calendar-event-line", text: "April 14–17, 2026" },
  { icon: "ri-map-pin-2-line", text: "Hilton Kuala Lumpur, Malaysia" },
];

export default function GlobalPresenceSection() {
  return (
    <section id="global" className="py-24 md:py-32 bg-background-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-accent-600 uppercase">Global Presence &amp; Media</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            On the World Stage<br />
            <span className="italic font-light text-primary-500">for Early Childhood</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed">
            From Hyderabad to Kuala Lumpur — taking India&apos;s early childhood education story global
            while bringing back fresh perspectives to enrich local learning communities.
          </p>
        </div>

        {/* ── World Forum hero block ── */}
        <div className="relative bg-foreground-950 rounded-3xl overflow-hidden mb-8">
          {/* Grid overlay */}
          <div className="absolute inset-0 dark-grid-bg opacity-100 pointer-events-none" />
          {/* Accent blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row gap-0">
            {/* Text side */}
            <div className="flex-1 p-8 md:p-12">
              {/* Location pill */}
              <div className="inline-flex items-center gap-2 bg-background-50/10 border border-background-50/15 rounded-full px-4 py-1.5 mb-6">
                <i className="ri-map-pin-line text-accent-400 text-xs" />
                <span className="text-xs font-label text-foreground-300">Kuala Lumpur, Malaysia</span>
              </div>

              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-background-50 leading-tight mb-4">
                World Forum on<br />
                <span className="italic font-light text-accent-300">Early Care &amp; Education</span>
              </h3>

              <p className="text-sm text-foreground-300 leading-relaxed mb-8 max-w-lg">
                The premier global early childhood event brought together early learning professionals,
                advocates, and experts from over <strong className="text-background-50">40 countries</strong> to
                share innovative teaching practices and discuss the future of the early childhood workforce.
                Himabindu represented India as a participant at this landmark conference, expanding her
                vision for integrating global perspectives into early learning.
              </p>

              {/* Highlight chips */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {forumHighlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-3 bg-background-50/8 rounded-xl px-4 py-3">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-accent-500/20 text-accent-300 shrink-0">
                      <i className={`${h.icon} text-sm`} />
                    </div>
                    <span className="text-xs text-foreground-300 font-label leading-snug">{h.text}</span>
                  </div>
                ))}
              </div>

              {/* Quote pull */}
              <blockquote className="border-l-2 border-primary-500 pl-4">
                <p className="text-sm text-foreground-400 italic leading-relaxed">
                  &ldquo;Inspired by international ideas and innovation, she continues to introduce
                  future-ready learning experiences while preserving the warmth, care, and cultural
                  values essential to childhood education.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-foreground-500 font-label">— Hyderabad Times</footer>
              </blockquote>
            </div>

            {/* Image side */}
            <div className="w-full lg:w-96 xl:w-[440px] h-60 lg:h-auto shrink-0 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=International%20education%20conference%20in%20Kuala%20Lumpur%2C%20diverse%20global%20professionals%20in%20a%20modern%20hotel%20ballroom%20with%20flags%20of%20many%20nations%2C%20warm%20ambient%20lighting%2C%20editorial%20photography%2C%20clean%20and%20inspiring%20atmosphere%2C%20soft%20beige%20and%20warm%20gold%20tones%2C%20no%20text%20overlays&width=880&height=1040&seq=world-forum-kl-2026-a1&orientation=portrait"
                alt="World Forum on Early Care and Education 2026"
                className="w-full h-full object-cover object-top opacity-70"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}