import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Guidance Business",
  description:
    "Insights on building a guidance business, wisdom economy, and transformational leadership.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#0F0D0A", color: "#D8CFC4", minHeight: "100vh" }}>
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
          href="/#pricing"
          style={{
            background: "#C4882A",
            color: "#0F0D0A",
            padding: "0.6rem 1.4rem",
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.95rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Get the Course →
        </Link>
      </nav>

      {/* Header */}
      <section
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C4882A",
            marginBottom: "1rem",
          }}
        >
          The Blog
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            lineHeight: 1.15,
          }}
        >
          Wisdom for the modern guide.
        </h1>
      </section>

      {/* Posts */}
      <section
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "0 2rem 4rem",
        }}
      >
        {posts.length === 0 ? (
          <p
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.1rem",
              color: "#8A7F74",
            }}
          >
            Posts coming soon.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: "none",
                  borderBottom: "1px solid #2A2520",
                  padding: "2.5rem 0",
                  display: "block",
                  borderTop: i === 0 ? "1px solid #2A2520" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#8A7F74",
                    marginBottom: "0.6rem",
                  }}
                >
                  {post.date && new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readingTime}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.8rem",
                    fontWeight: 500,
                    color: "#D8CFC4",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </h2>
                {post.description && (
                  <p
                    style={{
                      fontFamily: "var(--font-eb-garamond)",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      color: "#8A7F74",
                      marginBottom: "1rem",
                    }}
                  >
                    {post.description}
                  </p>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "0.95rem",
                    color: "#C4882A",
                    letterSpacing: "0.03em",
                  }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: "#1C1510",
          border: "1px solid #3A2D1E",
          maxWidth: "740px",
          margin: "0 auto 6rem",
          padding: "3rem 2.5rem",
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
          }}
        >
          Get the complete system for $222.
        </p>
        <Link
          href="/#pricing"
          style={{
            background: "#C4882A",
            color: "#0F0D0A",
            padding: "0.9rem 2rem",
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Get the Course →
        </Link>
      </section>

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
