import { img } from "@/assets/images";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      const res = await fetch("https://readdy.ai/api/form/d8lbt8tk31rj0i4c6p9g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-background-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-xs font-label font-semibold tracking-widest text-primary-500 uppercase">Get in Touch</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
              Let&apos;s Create<br />
              <span className="italic font-light text-primary-500">Something Great</span>
            </h2>
            <p className="text-foreground-500 text-base leading-relaxed">
              Ready to collaborate on something meaningful in early childhood education? I&apos;d love to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left – info */}
            <div>
              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: "ri-mail-line",
                    label: "Email",
                    value: "himabindurudrapaka@gmail.com",
                    href: "mailto:himabindurudrapaka@gmail.com",
                    color: "bg-primary-100 text-primary-600",
                  },
                  {
                    icon: "ri-linkedin-box-line",
                    label: "LinkedIn",
                    value: "Himabindu Rudrapaka",
                    href: "https://www.linkedin.com/in/himabindu-rudrapaka-8b4026316/",
                    color: "bg-accent-100 text-accent-600",
                  },
                  {
                    icon: "ri-calendar-event-line",
                    label: "Book an Appointment",
                    value: "Schedule via Google Calendar",
                    href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online",
                    color: "bg-secondary-100 text-secondary-600",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background-100 border border-background-200 hover:border-primary-200 transition-colors cursor-pointer group"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg shrink-0 ${item.color}`}>
                      <i className={item.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground-400 font-label mb-0.5">{item.label}</p>
                      <p className="text-sm font-label font-medium text-foreground-800 truncate">{item.value}</p>
                    </div>
                    <i className="ri-arrow-right-up-line text-foreground-400 group-hover:text-primary-500 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Profile card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary-50 border border-primary-100">
                <img
                  src={img("bindu.jpeg")}
                  alt="Himabindu Rudrapaka"
                  className="w-16 h-16 rounded-full object-cover object-top shrink-0"
                />
                <div>
                  <p className="font-label font-semibold text-foreground-950 text-sm">Himabindu Rudrapaka</p>
                  <p className="text-xs text-foreground-500 mt-0.5">Early Childhood Education Visionary</p>
                  <p className="text-xs text-foreground-400 mt-1">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Right – form */}
            <div>
              <form
                id="contact-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="bg-background-100 border border-background-200 rounded-2xl p-6 md:p-8 space-y-5"
              >
                <h3 className="font-heading text-2xl font-medium text-foreground-950 mb-2">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-medium text-foreground-600 mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-background-300 bg-background-50 text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-label font-medium text-foreground-600 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-background-300 bg-background-50 text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-300 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label font-medium text-foreground-600 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can I help?"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-background-300 bg-background-50 text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label font-medium text-foreground-600 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-background-300 bg-background-50 text-foreground-950 placeholder-foreground-400 focus:outline-none focus:border-primary-300 transition-colors resize-none"
                  />
                  <p className="text-xs text-foreground-400 mt-1">Max 500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl bg-foreground-950 text-background-50 text-sm font-label font-medium hover:bg-foreground-800 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-accent-100 text-accent-700 text-sm">
                    <i className="ri-checkbox-circle-line" />
                    Message sent! I&apos;ll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-100 text-primary-700 text-sm">
                    <i className="ri-error-warning-line" />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-100 border-t border-background-200 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading text-xl font-semibold text-foreground-950 mb-1">
                Himabindu<span className="text-primary-500"> Rudrapaka</span>
              </p>
              <p className="text-xs text-foreground-400 font-label">
                Nurturing young minds · Building bright futures
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="mailto:himabindurudrapaka@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-primary-100 hover:text-primary-600 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/himabindu-rudrapaka-8b4026316/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-accent-100 hover:text-accent-600 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-box-line text-sm" />
              </a>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment+with+Himabindu&dates=20250701T100000Z/20250701T103000Z&details=Consultation+Session&location=Online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-secondary-100 hover:text-secondary-600 transition-colors cursor-pointer"
              >
                <i className="ri-calendar-line text-sm" />
              </a>
            </div>

            <p className="text-xs text-foreground-400 font-label">
              &copy; 2026 Himabindu Rudrapaka. All rights reserved.
            </p>
          </div>

          <nav className="mt-8 pt-6 border-t border-background-200 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/himabindu-rudrapaka" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">
              About Himabindu Rudrapaka
            </Link>
            <Link to="/schools-managed-by-himabindu-rudrapaka" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">
              Schools Managed
            </Link>
            <Link to="/blog" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}