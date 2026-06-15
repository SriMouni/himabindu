import { Link } from "react-router-dom";
import { posts } from "@/data/blog";
import { seoForPath } from "@/seo/resolve";
import Seo from "@/components/Seo";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const seo = seoForPath("/blog");

export default function BlogIndex() {
  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

        <header className="mt-8 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground-950">
            Early Childhood Education Blog
          </h1>
          <p className="mt-4 text-foreground-600 leading-relaxed">
            Insights on early childhood education, play-based learning, preschool, and daycare in Hyderabad —
            by <Link to="/himabindu-rudrapaka" className="text-primary-600 underline">Himabindu Rudrapaka</Link>.
          </p>
        </header>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="bg-background-100 rounded-2xl p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-xs bg-primary-100 text-primary-700 rounded-full px-3 py-1">{t}</span>
                ))}
              </div>
              <h2 className="font-heading text-xl font-semibold text-foreground-950 leading-snug">
                <Link to={`/blog/${p.slug}`} className="hover:text-primary-600 transition-colors">{p.title}</Link>
              </h2>
              <p className="text-sm text-foreground-600 mt-2 leading-relaxed flex-1">{p.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-foreground-500">
                <span>{formatDate(p.date)}</span>
                <span>{p.readingMinutes} min read</span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function formatDate(d: string): string {
  if (!d) return "";
  const date = new Date(d + "T00:00:00");
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}
