import { Link, useParams } from "react-router-dom";
import { getPost, relatedPosts } from "@/data/blog";
import { seoForPath } from "@/seo/resolve";
import Seo from "@/components/Seo";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";
import { formatDate } from "./BlogIndex";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const seo = seoForPath(`/blog/${post.slug}`);
  const related = relatedPosts(post.slug, 3);

  return (
    <div className="bg-background-50 text-foreground-900 min-h-screen">
      <Seo title={seo.title} description={seo.description} canonical={seo.canonical} />
      <PageNav />

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />

        <article className="mt-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span key={t} className="text-xs bg-primary-100 text-primary-700 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-foreground-500">
            <Link to="/himabindu-rudrapaka" className="text-primary-600 hover:underline">{post.author}</Link>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>

          <div
            className="blog-content mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {related.length > 0 && (
          <section className="mt-14 pt-8 border-t border-background-200">
            <h2 className="font-heading text-2xl font-semibold text-foreground-950 mb-5">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="block bg-background-100 hover:bg-background-200 transition-colors rounded-xl p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground-900 leading-snug">{r.title}</h3>
                  <span className="text-xs text-primary-600 mt-2 inline-block">Read more →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
