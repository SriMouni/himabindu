import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { AppRoutes } from "./router";

/** Render the app for a given URL path to an HTML string (used by prerender). */
export function render(url: string): string {
  return renderToString(
    <I18nextProvider i18n={i18n}>
      <StaticRouter location={url} basename={__BASE_PATH__}>
        <AppRoutes />
      </StaticRouter>
    </I18nextProvider>
  );
}

// Re-export SEO helpers so the prerender script can build heads + sitemap.
export { staticPaths, renderHead, sitemapEntries } from "./seo/resolve";
