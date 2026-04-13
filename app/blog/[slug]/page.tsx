import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Guidance Business`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Guidance Business",
      url: "https://guidancebusiness.com",
    },
    url: `https://guidancebusiness.com/blog/${slug}`,
  };

  return (
    <main style={{ background: "#0F0D0A", color: "#D8CFC4", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid #2A2520",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#D8CFC4",
            textDecoration: "none",
          }}
        >
          Guidance Business
        </Link>
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.9rem",
            color: "#8A7F74",
            textDecoration: "none",
          }}
        >
          ← All Posts
        </Link>
      </nav>

      {/* Article */}
      <article
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "5rem 2rem 6rem",
        }}
      >
        {/* Meta */}
        <div
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.85rem",
            color: "#8A7F74",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {post.date && (
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            lineHeight: 1.12,
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </h1>

        {/* Description */}
        {post.description && (
          <p
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.25rem",
              lineHeight: 1.7,
              color: "#8A7F74",
              fontStyle: "italic",
              borderLeft: "2px solid #C4882A",
              paddingLeft: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {post.description}
          </p>
        )}

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #2A2520",
            marginBottom: "3rem",
          }}
        />

        {/* Content */}
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#8A7F74",
                  border: "1px solid #2A2520",
                  padding: "0.3rem 0.75rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            background: "#1C1510",
            border: "1px solid #3A2D1E",
            padding: "3rem 2.5rem",
            marginTop: "4rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.9rem",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#D8CFC4",
              marginBottom: "1rem",
            }}
          >
            Ready to build your guidance business?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1rem",
              color: "#8A7F74",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}
          >
            Get the complete system — 6 modules, implementation workbooks, and
            lifetime access — for just .
          </p>
          <Link
            href="https://guidancebusiness.com"
            style={{
              background: "#C4882A",
              color: "#0F0D0A",
              padding: "0.9rem 2.2rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get the Course —  →
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #2A2520",
          padding: "2rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.85rem",
            color: "#8A7F74",
          }}
        >
          © 2026 Guidance Business ·{" "}
          <a
            href="mailto:hello@guidancebusiness.com"
            style={{ color: "#8A7F74", textDecoration: "none" }}
          >
            hello@guidancebusiness.com
          </a>
        </p>
      </footer>
    </main>
  );
}
