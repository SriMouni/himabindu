import { Link } from "react-router-dom";
import { posts } from "@/data/blog";

function formatDate(d: string): string {
  if (!d) return "";
  const date = new Date(d + "T00:00:00");
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

export default function InsightsSection() {
  const featured = posts.slice(0, 3);

  return (
    <section id="insights" className="py-24 md:py-32 bg-background-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary-500" />
              <span className="text-xs font-label font-semibold tracking-widest text-primary-500 uppercase">Insights</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
              From the<br />
              <span className="italic font-light text-primary-500">Blog</span>
            </h2>
            <p className="text-foreground-500 text-base leading-relaxed">
              Thoughts on early childhood education, play-based learning, preschool, and daycare in Hyderabad.
            </p>
          </div>
          <Link
            to="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-background-300 text-foreground-700 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors whitespace-nowrap"
          >
            View all articles <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background-50 rounded-3xl border border-background-200 p-6 flex flex-col hover:border-primary-200 transition-colors"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-xs bg-primary-100 text-primary-700 rounded-full px-3 py-1 font-label">{t}</span>
                ))}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground-950 leading-snug group-hover:text-primary-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-foreground-600 leading-relaxed mt-3 flex-1">{p.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-foreground-500">
                <span>{formatDate(p.date)}</span>
                <span className="inline-flex items-center gap-1 text-primary-600 font-medium">
                  Read more <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
