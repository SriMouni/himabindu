import { Link } from "react-router-dom";
import { schools } from "@/data/schools";
import { SITE } from "@/seo/site";

// Shared site footer — same design used on the home page and all content pages.
export default function SiteFooter() {
  return (
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
              href={`mailto:${SITE.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
            >
              <i className="ri-mail-line text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/himabindu-rudrapaka-8b4026316/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-accent-100 hover:text-accent-600 transition-colors"
            >
              <i className="ri-linkedin-box-line text-sm" />
            </a>
            <a
              href="https://www.instagram.com/himabindurudrapaka"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-background-200 text-foreground-600 hover:bg-secondary-100 hover:text-secondary-600 transition-colors"
            >
              <i className="ri-instagram-line text-sm" />
            </a>
          </div>

          <p className="text-xs text-foreground-400 font-label">
            &copy; 2026 Himabindu Rudrapaka. All rights reserved.
          </p>
        </div>

        <nav className="mt-8 pt-6 border-t border-background-200 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">Home</Link>
          <Link to="/himabindu-rudrapaka" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">About</Link>
          <Link to="/schools-managed-by-himabindu-rudrapaka" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">Schools Managed</Link>
          {schools.map((s) => (
            <Link key={s.slug} to={`/schools/${s.slug}`} target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">
              {s.shortName.replace("FirstCry Intellitots ", "")}
            </Link>
          ))}
          <Link to="/blog" target="_blank" rel="noopener noreferrer" className="text-foreground-600 hover:text-primary-600 transition-colors">Blog</Link>
        </nav>
      </div>
    </footer>
  );
}
