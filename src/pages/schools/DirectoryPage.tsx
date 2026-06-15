import { Link } from "react-router-dom";
import { schools } from "@/data/schools";
import { seoForPath } from "@/seo/resolve";
import Seo from "@/components/Seo";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const seo = seoForPath("/schools-managed-by-himabindu-rudrapaka");

export default function DirectoryPage() {
  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Schools Managed", path: "/schools-managed-by-himabindu-rudrapaka" },
          ]}
        />

        <header className="mt-8 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground-950">
            Schools Managed by Himabindu Rudrapaka
          </h1>
          <p className="mt-4 text-foreground-600 leading-relaxed">
            <Link to="/himabindu-rudrapaka" className="text-primary-600 underline">Himabindu Rudrapaka</Link> is the
            founder and manager of a network of FirstCry Intellitots Preschool &amp; Daycare centers across Hyderabad,
            Telangana. Each centre delivers joyful, safe, and play-based early childhood education and full daycare,
            backed by trained educators and a strong parent partnership.
          </p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {schools.map((s) => (
            <article key={s.slug} className="bg-background-100 rounded-2xl p-6 flex flex-col">
              <h2 className="font-heading text-xl font-semibold text-foreground-950">{s.shortName}</h2>
              <p className="text-sm text-primary-600 mt-1">{s.addressLocality} · Established {s.established}</p>
              <p className="text-sm text-foreground-600 mt-3 leading-relaxed flex-1">{s.overview.slice(0, 150)}…</p>
              <div className="mt-4 flex gap-3">
                <Link
                  to={`/schools/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  View school <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 bg-background-100 rounded-2xl p-6 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground-950 mb-3">
            About the network
          </h2>
          <p className="text-foreground-600 leading-relaxed text-sm">
            The schools are part of the Himabindu Rudrapaka Educational Group — a Hyderabad-based network of preschools
            and daycare centers founded and led by Himabindu Rudrapaka. Across these centres, more than 5,000 children
            have been nurtured by a team of 80+ educators using a child-centric, play-based learning philosophy.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
