// JSON-LD schema builders. All schemas are linked via @id so search engines and
// AI crawlers understand: Himabindu Rudrapaka (Person) → founder/manager of →
// Himabindu Rudrapaka Educational Group (Organization) → operates → each Preschool.
import { SITE, abs } from "./site";
import type { School } from "@/data/schools";
import type { BlogPost } from "@/data/blog";

const PERSON_ID = `${SITE.url}/himabindu-rudrapaka#person`;
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    url: abs("/himabindu-rudrapaka"),
    image: abs(SITE.defaultImage),
    email: `mailto:${SITE.email}`,
    worksFor: { "@id": ORG_ID },
    founder: { "@id": ORG_ID },
    knowsAbout: [
      "Early Childhood Education",
      "Preschool Management",
      "Child Development",
      "Play-Based Learning",
      "Teacher Training",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    sameAs: SITE.socials,
  };
}

export function organizationSchema() {
  return {
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: SITE.organization,
    alternateName: "FirstCry Intellitots Preschools — Himabindu Rudrapaka",
    url: SITE.url,
    logo: abs(SITE.defaultImage),
    image: abs(SITE.defaultImage),
    description:
      "A network of FirstCry Intellitots Preschool & Daycare centers in Hyderabad founded and managed by Himabindu Rudrapaka.",
    founder: { "@id": PERSON_ID },
    foundingDate: "2012",
    areaServed: { "@type": "City", name: SITE.city },
    sameAs: SITE.socials,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function preschoolSchema(school: School) {
  return {
    "@type": "Preschool",
    "@id": abs(`/schools/${school.slug}#preschool`),
    name: school.name,
    description: school.overview,
    url: abs(`/schools/${school.slug}`),
    image: abs("/favicon-hr.png"),
    foundingDate: school.established,
    address: {
      "@type": "PostalAddress",
      addressLocality: school.addressLocality,
      addressRegion: school.region,
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: school.city },
    parentOrganization: { "@id": ORG_ID },
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@type": "BlogPosting",
    "@id": abs(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: abs(`/blog/${post.slug}`),
    image: abs(SITE.defaultImage),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    inLanguage: "en-IN",
    keywords: post.tags.join(", "),
  };
}

/** Wrap a set of schema nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
