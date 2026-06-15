import { Link } from "react-router-dom";
import { schools } from "@/data/schools";
import { posts } from "@/data/blog";
import { SITE } from "@/seo/site";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground-950 text-foreground-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading text-xl font-semibold text-background-50">
            Himabindu <span className="text-primary-400">Rudrapaka</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            Early childhood education leader and preschool entrepreneur managing
            FirstCry Intellitots Preschool &amp; Daycare centers across Hyderabad.
          </p>
        </div>

        <div>
          <h3 className="text-background-50 font-semibold text-sm mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/himabindu-rudrapaka" className="hover:text-primary-400 transition-colors">About Himabindu Rudrapaka</Link></li>
            <li><Link to="/schools-managed-by-himabindu-rudrapaka" className="hover:text-primary-400 transition-colors">Schools Managed</Link></li>
            <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-background-50 font-semibold text-sm mb-4">Our Schools</h3>
          <ul className="space-y-2 text-sm">
            {schools.map((s) => (
              <li key={s.slug}>
                <Link to={`/schools/${s.slug}`} className="hover:text-primary-400 transition-colors">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-background-50 font-semibold text-sm mb-4">Latest Articles</h3>
          <ul className="space-y-2 text-sm">
            {posts.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="hover:text-primary-400 transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-foreground-800 text-xs text-foreground-500">
        © {SITE.name}. All rights reserved. Early childhood education &amp; preschool management, Hyderabad.
      </div>
    </footer>
  );
}
