// Central site constants used across SEO, schema, and sitemap generation.
export const SITE = {
  url: "https://himabindurudrapaka.com",
  name: "Himabindu Rudrapaka",
  shortName: "Himabindu Rudrapaka",
  title: "Himabindu Rudrapaka — Early Childhood Education Leader",
  description:
    "Himabindu Rudrapaka is an early childhood education leader and preschool entrepreneur who manages multiple FirstCry Intellitots Preschool & Daycare centers across Hyderabad, India.",
  locale: "en_IN",
  defaultImage: "/favicon-hr.png",
  personImage: "/himabindu-rudrapaka.jpg",
  twitter: "", // add @handle if available
  organization: "Himabindu Rudrapaka Educational Group",
  founder: "Himabindu Rudrapaka",
  jobTitle: "Early Childhood Education Leader & Preschool Entrepreneur",
  email: "himabindurudrapaka@gmail.com",
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
  socials: [
    "https://www.linkedin.com/in/himabindu-rudrapaka-8b4026316",
    "https://www.instagram.com/himabindurudrapaka",
  ],
} as const;

/** Absolute URL for a site-relative path. */
export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return SITE.url + (path.startsWith("/") ? path : `/${path}`);
}
