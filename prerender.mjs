// Static pre-render: renders every route to real HTML with baked-in <head>,
// then writes sitemap.xml and robots.txt. Run after the client + SSR builds.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "out");
const SSR_ENTRY = pathToFileURL(path.join(__dirname, "out-ssr", "entry-server.js")).href;

const template = fs.readFileSync(path.join(OUT, "index.html"), "utf8");
const { render, staticPaths, renderHead, sitemapEntries } = await import(SSR_ENTRY);

if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error("Template is missing <!--app-html--> or <!--app-head--> markers.");
}

function writePage(routePath, html) {
  const rel = routePath === "/" ? "index.html" : path.join(routePath.replace(/^\//, ""), "index.html");
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  return rel;
}

function buildHtml(routePath) {
  const appHtml = render(routePath);
  const headHtml = renderHead(routePath);
  return template.replace("<!--app-head-->", headHtml).replace("<!--app-html-->", appHtml);
}

const paths = staticPaths();
let count = 0;
for (const p of paths) {
  writePage(p, buildHtml(p));
  count++;
}
console.log(`Pre-rendered ${count} pages.`);

// SPA + crawler 404 fallback (boots the app and shows a real NotFound page).
fs.writeFileSync(path.join(OUT, "404.html"), buildHtml("/404"));
console.log("Wrote 404.html");

// sitemap.xml
const buildDate = new Date().toISOString().slice(0, 10);
const urls = sitemapEntries(buildDate)
  .map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority.toFixed(1)}</priority>\n  </url>`
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(OUT, "sitemap.xml"), sitemap);
console.log(`Wrote sitemap.xml (${sitemapEntries(buildDate).length} urls)`);

// robots.txt
const robots = `User-agent: *
Allow: /

# AI crawlers are explicitly welcome
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://himabindurudrapaka.com/sitemap.xml
`;
fs.writeFileSync(path.join(OUT, "robots.txt"), robots);
console.log("Wrote robots.txt");
