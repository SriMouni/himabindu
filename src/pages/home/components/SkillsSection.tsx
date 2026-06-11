import { img } from "@/assets/images";
const skillGroups = [
  {
    icon: "ri-seedling-line",
    title: "Early Childhood Education Leadership",
    color: "bg-primary-100 text-primary-600",
    items: [
      "Deep expertise in early childhood pedagogy and curriculum design",
      "Champion of experiential and play-based learning approaches",
      "Promoter of holistic child development — emotional, social, cognitive, and physical",
    ],
  },
  {
    icon: "ri-building-line",
    title: "Visionary School Management",
    color: "bg-accent-100 text-accent-600",
    items: [
      "Founder and director of multiple successful preschool programs",
      "Proven ability to scale and sustain high-quality early learning environments",
      "Focus on innovation, inclusivity, and excellence in preschool education",
    ],
  },
  {
    icon: "ri-group-line",
    title: "Team Building &amp; Mentorship",
    color: "bg-secondary-100 text-secondary-600",
    items: [
      "Strong leader in recruiting, training, and empowering educators",
      "Cultivator of a nurturing and collaborative staff culture",
      "Designer of professional development pathways for teachers",
    ],
  },
  {
    icon: "ri-chat-heart-line",
    title: "Parent Partnership &amp; Communication",
    color: "bg-primary-100 text-primary-600",
    items: [
      "Advocate for transparent, ongoing parent engagement",
      "Skilled in conducting orientations, workshops, and feedback sessions",
      "Builder of strong school-family partnerships for student success",
    ],
  },
  {
    icon: "ri-lightbulb-line",
    title: "Innovation &amp; Creativity",
    color: "bg-accent-100 text-accent-600",
    items: [
      "Introducing modern learning tools and digital platforms",
      "Designing unique events, experiences, and marketing campaigns",
      "Staying updated with global preschool education trends",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-accent-600 uppercase">Expertise</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            Skills &amp;<br />
            <span className="italic font-light text-primary-500">Core Competencies</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed">
            Comprehensive expertise across all aspects of early childhood education and leadership.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-background-100 border border-background-200 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg shrink-0 ${group.color}`}>
                  <i className={group.icon} />
                </div>
                <h3
                  className="text-sm font-label font-semibold text-foreground-900 leading-snug"
                  dangerouslySetInnerHTML={{ __html: group.title }}
                />
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground-600">
                    <i className="ri-check-line text-accent-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quote card – spans half */}
          <div className="bg-primary-500 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div className="font-heading text-4xl text-background-50/30 mb-4">&ldquo;</div>
            <blockquote className="font-heading text-2xl md:text-3xl font-medium text-background-50 leading-snug mb-6">
              A preschool should feel like love in action.
            </blockquote>
            <div className="flex items-center gap-3">
              <img
                src={img("bindu.jpeg")}
                alt="Himabindu"
                className="w-10 h-10 rounded-full object-cover object-top"
              />
              <div>
                <p className="text-sm font-label font-semibold text-background-50">Himabindu Rudrapaka</p>
                <p className="text-xs text-background-50/70">Early Education Visionary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}