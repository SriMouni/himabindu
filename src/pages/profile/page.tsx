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

export default function ProfilePage() {
  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Himabindu Rudrapaka", path: "/himabindu-rudrapaka" }]} />

        {/* Hero */}
        <header className="mt-8 flex flex-col md:flex-row gap-8 items-start">
          <img
            src={img("bindu.jpeg")}
            alt="Himabindu Rudrapaka — Early Childhood Education Leader"
            width={160}
            height={160}
            loading="eager"
            className="w-40 h-40 rounded-2xl object-cover object-top border border-background-200 shadow"
          />
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground-950">
              {profile.name}
            </h1>
            <p className="mt-2 text-primary-600 font-medium">{profile.jobTitle}</p>
            <p className="mt-1 text-sm text-foreground-500">{profile.tagline}</p>
            <p className="mt-4 text-foreground-600 leading-relaxed max-w-2xl">{profile.bioShort}</p>
          </div>
        </header>

        {/* Biography */}
        <Section title="Professional Biography">
          <div className="space-y-4 text-foreground-600 leading-relaxed max-w-3xl">
            {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>

        {/* Leadership */}
        <Section title="Educational Leadership Profile">
          <ul className="grid sm:grid-cols-2 gap-3">
            {profile.leadership.map((l) => (
              <li key={l} className="flex gap-3 bg-background-100 rounded-xl p-4 text-sm text-foreground-700">
                <i className="ri-check-line text-primary-500 mt-0.5" /> {l}
              </li>
            ))}
          </ul>
        </Section>

        {/* Vision & Mission */}
        <Section title="Vision &amp; Mission">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-background-100 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground-900 mb-2">Vision</h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{profile.vision}</p>
            </div>
            <div className="bg-background-100 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground-900 mb-2">Mission</h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{profile.mission}</p>
            </div>
          </div>
        </Section>

        {/* Schools managed */}
        <Section title="Preschools Managed by Himabindu Rudrapaka">
          <p className="text-foreground-600 mb-5 max-w-3xl">
            Himabindu Rudrapaka founded and manages the following FirstCry Intellitots Preschool &amp; Daycare
            centers across Hyderabad. See the full{" "}
            <Link to="/schools-managed-by-himabindu-rudrapaka" className="text-primary-600 underline">
              schools directory
            </Link>.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {schools.map((s) => (
              <Link
                key={s.slug}
                to={`/schools/${s.slug}`}
                className="block bg-background-100 hover:bg-background-200 transition-colors rounded-xl p-5"
              >
                <h3 className="font-semibold text-foreground-900">{s.shortName}</h3>
                <p className="text-sm text-foreground-500 mt-1">{s.addressLocality} · Est. {s.established}</p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <ul className="space-y-2">
            {profile.achievements.map((a) => (
              <li key={a} className="flex gap-3 text-foreground-700">
                <i className="ri-star-line text-primary-500 mt-1" /> <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Awards */}
        <Section title="Awards &amp; Recognitions">
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.awards.map((a) => (
              <div key={a.title + a.year} className="bg-background-100 rounded-xl p-5">
                <span className="text-xs font-semibold text-primary-500">{a.year}</span>
                <h3 className="font-semibold text-foreground-900 mt-1">{a.title}</h3>
                <p className="text-sm text-foreground-500 mt-1">{a.org}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Timeline */}
        <Section title="Professional Timeline">
          <ol className="relative border-l-2 border-background-200 ml-2 space-y-6 pl-6">
            {profile.timeline.map((t) => (
              <li key={t.year + t.title} className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary-500 border-2 border-background-50" />
                <span className="text-sm font-bold text-primary-600">{t.year}</span>
                <p className="text-foreground-700">{t.title}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions">
          <div className="space-y-4">
            {profile.faqs.map((f) => (
              <div key={f.q} className="bg-background-100 rounded-xl p-5">
                <h3 className="font-semibold text-foreground-900">{f.q}</h3>
                <p className="text-sm text-foreground-600 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Social */}
        <Section title="Connect">
          <div className="flex flex-wrap gap-3">
            {SITE.socials.map((s) => (
              <a key={s} href={s} target="_blank" rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 bg-background-100 hover:bg-background-200 transition-colors rounded-full px-5 py-2.5 text-sm font-medium">
                <i className="ri-linkedin-fill text-primary-600" /> LinkedIn
              </a>
            ))}
            <a href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 bg-background-100 hover:bg-background-200 transition-colors rounded-full px-5 py-2.5 text-sm font-medium">
              <i className="ri-mail-line text-primary-600" /> Email
            </a>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2
        className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 mb-5"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {children}
    </section>
  );
}
