import { img } from "@/assets/images";
import { useState } from "react";

const featuredAward = {
  year: "2026",
  title: "Outstanding Early Years Educator",
  org: "Times Power Women 2026 — Times of India, Hyderabad Times",
  desc: "Honoured as 'Outstanding Early Years Educator' at the Times Power Women 2026 Telangana edition — a prestigious initiative by Times of India recognising women achievers across categories including education, business, healthcare, and more. The award ceremony was held in Hyderabad and featured an exclusive TV9 Telugu interview on stage.",
  badge: "Times Power Women",
  images: [
    img("award-event-03.jpeg"),
    img("award-event-01.jpeg"),
    img("award-event-02.jpeg"),
  ],
};

const awards = [
  {
    year: "2026",
    title: "Excellence in Early Education",
    org: "EducationWorld Grand Jury Awards",
    desc: "FirstCry Intellitots centers honored for excellence in early childhood education, achieving top rankings across Hyderabad and national recognition.",
    img: img("achievement14.jpeg"),
  },
  {
    year: "2025",
    title: "Progressive Edupreneur",
    org: "EducationWorld TREE Award 2025–26",
    desc: "Presented by Shri Gajendra Yadav Ji, Cabinet Minister, Government of Chhattisgarh.",
    img: img("achievement13.jpeg"),
  },
  {
    year: "2025",
    title: "Dr. Sarvepalli Radhakrishnan National Award",
    org: "National Education Excellence",
    desc: "National recognition for outstanding contribution to early childhood education and leadership.",
    img: img("achievement9.jpeg"),
  },
  {
    year: "2025",
    title: "World Education Summit",
    org: "International Education Forum",
    desc: "Recognized at the World Education Summit for innovative contributions to preschool education.",
    img: img("achievement11.jpg"),
  },
  {
    year: "2024",
    title: "Top 20 Preschools in Telangana",
    org: "State Education Rankings",
    desc: "Ranked among the top 20 preschools in Telangana for quality and community impact.",
    img: img("achievement7.jpeg"),
  },
  {
    year: "2024",
    title: "Outstanding Educationist of the Year",
    org: "Education Leadership Awards",
    desc: "Recognized for outstanding dedication to the field of early childhood education.",
    img: img("achievement1.jpeg"),
  },
  {
    year: "2023",
    title: "Education Excellence Award",
    org: "Regional Education Authority",
    desc: "Awarded for sustained excellence and innovation in early childhood program design.",
    img: img("achievement3.jpeg"),
  },
  {
    year: "2023",
    title: "Top 100 Preschools of India",
    org: "National Education Rankings",
    desc: "Featured among the top 100 preschools in India for the second consecutive year.",
    img: img("achievement5.jpeg"),
  },
  {
    year: "2024",
    title: "Best Preschool Award",
    org: "Regional Excellence Awards",
    desc: "Recognized as best preschool for quality learning environments and child-centric approach.",
    img: img("achievement6.jpg"),
  },
  {
    year: "2022",
    title: "Top 100 Preschools of India",
    org: "National Education Rankings",
    desc: "First listing among India's top 100 preschools, marking a milestone in national recognition.",
    img: img("achievement4.jpeg"),
  },
];

export default function AwardsSection() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section id="awards" className="py-24 md:py-32 bg-background-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-secondary-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-secondary-600 uppercase">Recognition</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            Awards &amp;<br />
            <span className="italic font-light text-primary-500">Achievements</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed">
            Recognition earned through years of dedication to transforming early childhood education across India.
          </p>
        </div>

        {/* ── NEW: Times Power Women 2026 featured card ── */}
        <div className="relative rounded-3xl overflow-hidden bg-foreground-950 mb-6">
          {/* "NEW" flash badge */}
          <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-primary-500 rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-background-50 animate-pulse" />
            <span className="text-xs font-label font-bold text-background-50 tracking-wider uppercase">Newest Award</span>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[360px]">
            {/* Text */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center pt-16 lg:pt-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500 text-background-50">
                  <i className="ri-trophy-fill text-sm" />
                </span>
                <span className="text-xs font-label font-semibold text-foreground-400 tracking-widest uppercase">{featuredAward.year}</span>
                <span className="text-xs font-label px-3 py-0.5 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  {featuredAward.badge}
                </span>
              </div>

              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-background-50 mb-3 leading-tight">
                {featuredAward.title}
              </h3>
              <p className="text-sm text-primary-300 font-label font-medium mb-5">{featuredAward.org}</p>
              <p className="text-sm text-foreground-300 leading-relaxed max-w-lg mb-8">{featuredAward.desc}</p>

              {/* Thumbnail strip */}
              <div className="flex gap-2">
                {featuredAward.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      activeImg === i ? "border-primary-400 scale-105" : "border-foreground-700 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Award photo ${i + 1}`} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>

            {/* Active image */}
            <div className="w-full lg:w-[420px] h-64 lg:h-auto shrink-0 overflow-hidden bg-foreground-900 flex items-center justify-center p-3">
              <img
                key={activeImg}
                src={featuredAward.images[activeImg]}
                alt="Times Power Women 2026"
                className="max-w-full max-h-full object-contain transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* ── Grid of other awards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {awards.map((award) => (
            <div
              key={award.title + award.year}
              className="bg-background-50 rounded-2xl overflow-hidden border border-background-200 flex flex-col group"
            >
              <div className="overflow-hidden bg-background-100">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-label font-semibold text-primary-500">{award.year}</span>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent-100 text-accent-600">
                    <i className="ri-award-line text-xs" />
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-label font-semibold text-foreground-900 mb-1 leading-snug">{award.title}</h3>
                <p className="text-sm text-primary-500 mb-2">{award.org}</p>
                <p className="text-sm md:text-base text-foreground-500 leading-relaxed flex-1">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}