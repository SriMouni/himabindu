import { Link } from "react-router-dom";
import { img } from "@/assets/images";
import { profile } from "@/data/profile";
import { schools } from "@/data/schools";
import { SITE } from "@/seo/site";
import { seoForPath } from "@/seo/resolve";
import Seo from "@/components/Seo";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const seo = seoForPath("/himabindu-rudrapaka");

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-6 h-px bg-primary-500" />
      <span className="text-xs font-label font-semibold tracking-widest text-primary-500 uppercase">{label}</span>
    </div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-14 md:py-16 border-t border-background-200">
      <Eyebrow label={eyebrow} />
      <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground-950 mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function ProfilePage() {
  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen font-sans">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background-50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-primary-100/60 via-background-100/40 to-transparent rounded-bl-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{ backgroundImage: "radial-gradient(oklch(var(--foreground-950)) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-16">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Himabindu Rudrapaka", path: "/himabindu-rudrapaka" }]} />
          <div className="mt-10 flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2.5 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-xs font-label font-semibold tracking-wide text-primary-600">{profile.jobTitle}</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-medium leading-[1.08] text-foreground-950 tracking-tight">
                Himabindu<br />
                <span className="italic font-light text-primary-500">Rudrapaka</span>
              </h1>
              <p className="mt-4 text-sm md:text-base text-primary-300 font-body font-medium tracking-wider uppercase">
                {profile.tagline}
              </p>
              <p className="mt-6 text-base text-foreground-600 leading-loose max-w-xl">{profile.bioShort}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/schools-managed-by-himabindu-rudrapaka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground-950 text-background-50 text-sm font-medium hover:bg-foreground-800 transition-colors">
                  View Schools <i className="ri-arrow-right-line" />
                </Link>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-background-300 text-foreground-700 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors">
                  <i className="ri-mail-line" /> Get in Touch
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={img("bindu.jpeg")}
                alt="Himabindu Rudrapaka — Early Childhood Education Leader"
                width={300}
                height={380}
                loading="eager"
                className="w-64 h-80 md:w-[300px] md:h-[380px] object-cover object-top rounded-3xl border border-background-200 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Biography */}
        <Section eyebrow="About" title="Professional Biography">
          <div className="space-y-4 text-foreground-600 leading-loose max-w-3xl">
            {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>

        {/* Leadership */}
        <Section eyebrow="Leadership" title="Educational Leadership Profile">
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.leadership.map((l) => (
              <div key={l} className="flex gap-3 bg-background-100 rounded-2xl p-5 border border-background-200 text-sm text-foreground-700">
                <i className="ri-check-line text-primary-500 mt-0.5 text-lg" /> {l}
              </div>
            ))}
          </div>
        </Section>

        {/* Vision & Mission */}
        <Section eyebrow="Purpose" title="Vision & Mission">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-background-100 rounded-3xl p-7 border border-background-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 mb-4"><i className="ri-eye-line text-lg" /></div>
              <h3 className="font-heading text-xl font-semibold text-foreground-900 mb-2">Vision</h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{profile.vision}</p>
            </div>
            <div className="bg-background-100 rounded-3xl p-7 border border-background-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-100 text-accent-600 mb-4"><i className="ri-focus-3-line text-lg" /></div>
              <h3 className="font-heading text-xl font-semibold text-foreground-900 mb-2">Mission</h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{profile.mission}</p>
            </div>
          </div>
        </Section>

        {/* Schools managed */}
        <Section eyebrow="Network" title="Preschools Managed">
          <p className="text-foreground-600 mb-6 max-w-3xl leading-relaxed">
            Himabindu Rudrapaka founded and manages the following FirstCry Intellitots Preschool &amp; Daycare centers
            across Hyderabad. Explore the full{" "}
            <Link to="/schools-managed-by-himabindu-rudrapaka" className="text-primary-600 underline">schools directory</Link>.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {schools.map((s) => (
              <Link key={s.slug} to={`/schools/${s.slug}`}
                className="group bg-background-100 hover:border-primary-200 border border-background-200 transition-colors rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground-900 group-hover:text-primary-600 transition-colors">{s.shortName}</h3>
                <p className="text-sm text-foreground-500 mt-1">{s.addressLocality} · Est. {s.established}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium mt-3">View school <i className="ri-arrow-right-line" /></span>
              </Link>
            ))}
          </div>
        </Section>

        {/* Achievements */}
        <Section eyebrow="Highlights" title="Achievements">
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.achievements.map((a) => (
              <div key={a} className="flex gap-3 bg-background-100 rounded-2xl p-5 border border-background-200 text-foreground-700">
                <i className="ri-star-line text-primary-500 mt-0.5 text-lg shrink-0" /> <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section eyebrow="Recognition" title="Awards & Recognitions">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.awards.map((a) => (
              <div key={a.title + a.year} className="bg-background-100 rounded-2xl p-6 border border-background-200">
                <span className="text-xs font-label font-semibold text-primary-500">{a.year}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground-900 mt-1 leading-snug">{a.title}</h3>
                <p className="text-sm text-foreground-500 mt-2">{a.org}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Timeline */}
        <Section eyebrow="Journey" title="Professional Timeline">
          <ol className="relative border-l-2 border-background-200 ml-2 space-y-7 pl-7">
            {profile.timeline.map((t) => (
              <li key={t.year + t.title} className="relative">
                <span className="absolute -left-[37px] top-0.5 w-7 h-7 rounded-full bg-primary-500 border-4 border-background-50 flex items-center justify-center">
                  <i className="ri-map-pin-line text-background-50 text-xs" />
                </span>
                <span className="text-sm font-bold text-primary-600">{t.year}</span>
                <p className="text-foreground-700">{t.title}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Frequently Asked Questions">
          <div className="space-y-4 max-w-3xl">
            {profile.faqs.map((f) => (
              <div key={f.q} className="bg-background-100 rounded-2xl p-6 border border-background-200">
                <h3 className="font-heading text-lg font-semibold text-foreground-900">{f.q}</h3>
                <p className="text-sm text-foreground-600 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Connect */}
        <Section eyebrow="Connect" title="Get in Touch">
          <div className="flex flex-wrap gap-3 pb-4">
            {SITE.socials.map((s) => (
              <a key={s} href={s} target="_blank" rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 bg-background-100 hover:bg-background-200 border border-background-200 transition-colors rounded-full px-6 py-3 text-sm font-medium">
                <i className={`${s.includes("linkedin") ? "ri-linkedin-fill" : "ri-instagram-line"} text-primary-600`} />
                {s.includes("linkedin") ? "LinkedIn" : "Instagram"}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 bg-background-100 hover:bg-background-200 border border-background-200 transition-colors rounded-full px-6 py-3 text-sm font-medium">
              <i className="ri-mail-line text-primary-600" /> Email
            </a>
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
