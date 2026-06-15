// Single source of truth that maps any URL path to its SEO metadata + JSON-LD.
// Used by the page components (client head) and the prerender script (static head + sitemap).
import { SITE, abs } from "./site";
import { schools } from "@/data/schools";
import { profile } from "@/data/profile";
import { posts } from "@/data/blog";
import {
  graph,
  personSchema,
  organizationSchema,
  websiteSchema,
  preschoolSchema,
  breadcrumbSchema,
  faqSchema,
  articleSchema,
} from "./schema";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string; // site-relative path
  ogType: "website" | "article" | "profile";
  image: string; // site-relative or absolute
  jsonLd: object | null;
  lastmod?: string;
  priority?: number;
}

const HOME_CRUMB = { name: "Home", path: "/" };

function homeSeo(): SeoMeta {
  return {
    title: SITE.title,
    description: SITE.description,
    canonical: "/",
    ogType: "website",
    image: SITE.personImage,
    priority: 1.0,
    jsonLd: graph(websiteSchema(), organizationSchema(), personSchema()),
  };
}

function profileSeo(): SeoMeta {
  return {
    title: "Himabindu Rudrapaka — Early Childhood Education Leader & Preschool Entrepreneur",
    description: profile.bioShort,
    canonical: "/himabindu-rudrapaka",
    ogType: "profile",
    image: SITE.personImage,
    priority: 0.9,
    jsonLd: graph(
      personSchema(),
      organizationSchema(),
      breadcrumbSchema([HOME_CRUMB, { name: "Himabindu Rudrapaka", path: "/himabindu-rudrapaka" }]),
      faqSchema(profile.faqs)
    ),
  };
}

function directorySeo(): SeoMeta {
  return {
    title: "Schools Managed by Himabindu Rudrapaka — FirstCry Intellitots, Hyderabad",
    description:
      "Explore the FirstCry Intellitots Preschool & Daycare centers founded and managed by Himabindu Rudrapaka across Hyderabad — Nizampet, Botanical Garden, HMT Hills, and Mayuri Nagar.",
    canonical: "/schools-managed-by-himabindu-rudrapaka",
    ogType: "website",
    image: SITE.defaultImage,
    priority: 0.8,
    jsonLd: graph(
      organizationSchema(),
      personSchema(),
      ...schools.map((s) => preschoolSchema(s)),
      breadcrumbSchema([HOME_CRUMB, { name: "Schools Managed", path: "/schools-managed-by-himabindu-rudrapaka" }])
    ),
  };
}

function schoolSeo(slug: string): SeoMeta | null {
  const s = schools.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    title: `${s.shortName} — Preschool & Daycare | Managed by Himabindu Rudrapaka`,
    description: s.overview.slice(0, 155),
    canonical: `/schools/${s.slug}`,
    ogType: "website",
    image: SITE.defaultImage,
    priority: 0.8,
    jsonLd: graph(
      preschoolSchema(s),
      organizationSchema(),
      personSchema(),
      faqSchema(s.faqs),
      breadcrumbSchema([
        HOME_CRUMB,
        { name: "Schools Managed", path: "/schools-managed-by-himabindu-rudrapaka" },
        { name: s.shortName, path: `/schools/${s.slug}` },
      ])
    ),
  };
}

function blogIndexSeo(): SeoMeta {
  return {
    title: "Early Childhood Education Blog — Himabindu Rudrapaka",
    description:
      "Articles on early childhood education, play-based learning, preschool, and daycare in Hyderabad by Himabindu Rudrapaka.",
    canonical: "/blog",
    ogType: "website",
    image: SITE.defaultImage,
    priority: 0.7,
    jsonLd: graph(
      websiteSchema(),
      organizationSchema(),
      breadcrumbSchema([HOME_CRUMB, { name: "Blog", path: "/blog" }])
    ),
  };
}

function blogPostSeo(slug: string): SeoMeta | null {
  const p = posts.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    title: `${p.title} | Himabindu Rudrapaka`,
    description: p.description,
    canonical: `/blog/${p.slug}`,
    ogType: "article",
    image: SITE.defaultImage,
    priority: 0.6,
    lastmod: p.date,
    jsonLd: graph(
      articleSchema(p),
      personSchema(),
      organizationSchema(),
      breadcrumbSchema([
        HOME_CRUMB,
        { name: "Blog", path: "/blog" },
        { name: p.title, path: `/blog/${p.slug}` },
      ])
    ),
  };
}

const notFoundSeo: SeoMeta = {
  title: "Page Not Found — Himabindu Rudrapaka",
  description: "The page you are looking for could not be found.",
  canonical: "/404",
  ogType: "website",
  image: SITE.defaultImage,
  jsonLd: null,
};

/** Resolve SEO metadata for any path. */
export function seoForPath(path: string): SeoMeta {
  const clean = path.replace(/\/+$/, "") || "/";
  if (clean === "/") return homeSeo();
  if (clean === "/himabindu-rudrapaka") return profileSeo();
  if (clean === "/schools-managed-by-himabindu-rudrapaka") return directorySeo();
  if (clean === "/blog") return blogIndexSeo();
  const schoolMatch = /^\/schools\/([^/]+)$/.exec(clean);
  if (schoolMatch) return schoolSeo(schoolMatch[1]) ?? notFoundSeo;
  const blogMatch = /^\/blog\/([^/]+)$/.exec(clean);
  if (blogMatch) return blogPostSeo(blogMatch[1]) ?? notFoundSeo;
  return notFoundSeo;
}

/** Every concrete URL the site should pre-render & list in the sitemap. */
export function staticPaths(): string[] {
  return [
    "/",
    "/himabindu-rudrapaka",
    "/schools-managed-by-himabindu-rudrapaka",
    ...schools.map((s) => `/schools/${s.slug}`),
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
  ];
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Build the full <head> markup for a path (used by the prerender script). */
export function renderHead(path: string): string {
  const m = seoForPath(path);
  const url = abs(m.canonical);
  const image = abs(m.image);
  const t = escapeHtml(m.title);
  const d = escapeHtml(m.description);
  const robots = m.canonical === "/404" ? "noindex, follow" : "index, follow";

  const tags = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${m.ogType}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];

  if (m.jsonLd) {
    const json = JSON.stringify(m.jsonLd).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return tags.join("\n    ");
}

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  priority: number;
  changefreq: string;
}

export function sitemapEntries(buildDate: string): SitemapEntry[] {
  return staticPaths().map((path) => {
    const m = seoForPath(path);
    return {
      loc: abs(path),
      lastmod: m.lastmod || buildDate,
      priority: m.priority ?? 0.5,
      changefreq: path.startsWith("/blog/") ? "monthly" : "weekly",
    };
  });
}
