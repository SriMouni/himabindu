import { Link, useParams } from "react-router-dom";
import { getSchool, schoolImage } from "@/data/schools";
import { seoForPath } from "@/seo/resolve";
import Seo from "@/components/Seo";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";

export default function SchoolPage() {
  const { slug = "" } = useParams();
  const school = getSchool(slug);
  if (!school) return <NotFound />;

  const seo = seoForPath(`/schools/${school.slug}`);

  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Schools Managed", path: "/schools-managed-by-himabindu-rudrapaka" },
            { name: school.shortName, path: `/schools/${school.slug}` },
          ]}
        />

        <header className="mt-8">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
            Preschool &amp; Daycare · {school.addressLocality}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground-950 mt-2">
            {school.name}
          </h1>
          <p className="mt-3 text-foreground-600 max-w-3xl leading-relaxed">{school.overview}</p>
          <p className="mt-4 text-sm">
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 font-medium">
              <i className="ri-user-star-line" /> Managed by{" "}
              <Link to="/himabindu-rudrapaka" className="underline">Himabindu Rudrapaka</Link>
            </span>
          </p>
          <div className="mt-6">
            <a
              href={school.enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
            >
              <i className="ri-calendar-2-line" /> Admission Enquiry
            </a>
          </div>
        </header>

        {/* Programs */}
        <Section title="Programs Offered">
          <div className="flex flex-wrap gap-2">
            {school.programs.map((p) => (
              <span key={p} className="bg-background-100 rounded-full px-4 py-2 text-sm text-foreground-700">{p}</span>
            ))}
          </div>
        </Section>

        {/* Daycare */}
        <Section title="Daycare Information">
          <p className="text-foreground-600 leading-relaxed max-w-3xl">{school.daycare}</p>
        </Section>

        {/* Gallery */}
        <Section title="Gallery">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {school.gallery.map((g, i) => (
              <img
                key={g}
                src={schoolImage(g)}
                alt={`${school.shortName} — photo ${i + 1}`}
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl border border-background-200"
              />
            ))}
          </div>
        </Section>

        {/* Location */}
        <Section title="Location">
          <p className="text-foreground-600 mb-4">{school.addressLocality}, {school.region}, India</p>
          <div className="rounded-2xl overflow-hidden border border-background-200 h-72">
            <iframe
              src={school.mapEmbed}
              title={`Map of ${school.shortName}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions">
          <div className="space-y-4">
            {school.faqs.map((f) => (
              <div key={f.q} className="bg-background-100 rounded-xl p-5">
                <h3 className="font-semibold text-foreground-900">{f.q}</h3>
                <p className="text-sm text-foreground-600 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact / CTA */}
        <Section title="Contact &amp; Admissions">
          <div className="bg-background-100 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground-900">Interested in {school.shortName}?</p>
              <p className="text-sm text-foreground-600 mt-1">Book an admission enquiry or visit the centre.</p>
            </div>
            <a
              href={school.enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 rounded-full px-7 py-3.5 text-sm font-medium transition-colors whitespace-nowrap"
            >
              <i className="ri-calendar-2-line" /> Enquire Now
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
