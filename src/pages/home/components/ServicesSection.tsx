const services = [
  {
    icon: "ri-building-4-line",
    title: "Preschool Setup & Curriculum Consulting",
    desc: "Complete guidance for establishing new preschools — from licensing and space design to curriculum development and staff training.",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: "ri-user-star-line",
    title: "Teacher Training & Workshops",
    desc: "Professional development programs for early childhood educators covering best practices, classroom management, and child development.",
    color: "bg-accent-100 text-accent-600",
  },
  {
    icon: "ri-home-heart-line",
    title: "Parent Education Programs",
    desc: "Workshops and seminars for parents on child development, positive discipline, and supporting learning at home.",
    color: "bg-secondary-100 text-secondary-600",
  },
  {
    icon: "ri-mic-line",
    title: "Public Speaking & Panel Discussions",
    desc: "Keynote presentations and panel participation at conferences, sharing insights on early childhood education trends and innovations.",
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: "ri-book-open-line",
    title: "Educational Resource Development",
    desc: "Creating custom curricula, assessment tools, and educational materials tailored to specific program needs and learning objectives.",
    color: "bg-accent-100 text-accent-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-secondary-500" />
              <span className="text-xs font-label font-semibold tracking-widest text-secondary-600 uppercase">Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950">
              How I Can<br />
              <span className="italic font-light text-primary-500">Help You</span>
            </h2>
          </div>
          <div className="flex-1 flex items-center">
            <p className="text-foreground-500 text-base leading-loose">
              I support schools, educators, and parents through comprehensive consulting and training programs — drawing on 13+ years of hands-on early childhood education leadership.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-background-100 border border-background-200 rounded-2xl p-6 md:p-8 flex flex-col gap-4 ${
                i === services.length - 1 && services.length % 3 !== 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl text-xl ${service.color}`}>
                <i className={service.icon} />
              </div>
              <div>
                <h3 className="text-sm font-label font-semibold text-foreground-900 mb-2 leading-snug">{service.title}</h3>
                <p className="text-sm text-foreground-500 leading-relaxed">{service.desc}</p>
              </div>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-label font-semibold text-primary-600 hover:text-primary-700 cursor-pointer"
              >
                Enquire <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-12 rounded-2xl bg-background-950 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
          <div>
            <p className="font-heading text-2xl md:text-3xl font-medium text-background-50 mb-1">
              Ready to collaborate on something meaningful?
            </p>
            <p className="text-sm text-foreground-400">I&apos;d love to hear from you.</p>
          </div>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-primary-500 text-background-50 text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}