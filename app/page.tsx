import Link from "next/link";
import ThriveCartButton from "@/components/ThriveCartButton";

const modules = [
  {
    num: "01",
    title: "Positioning",
    desc: "Clarify exactly who you help, how you help them, and why no one else does what you do. Become unmistakable.",
  },
  {
    num: "02",
    title: "Packaging",
    desc: "Turn your gifts into a coherent offer. Structure your guidance into containers that serve and scale.",
  },
  {
    num: "03",
    title: "Pricing",
    desc: "Price with confidence. Understand the psychology of premium, and charge what your transformation is worth.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Design a delivery experience so good clients transform — and tell everyone about it.",
  },
  {
    num: "05",
    title: "Automation",
    desc: "Build systems that sell, onboard, and follow up for you. Work less without disappearing.",
  },
  {
    num: "06",
    title: "Scaling",
    desc: "Grow without grinding. Expand through leverage — content, community, and aligned partnerships.",
  },
];

const testimonials = [
  {
    quote: "The best blend of soul and business you will find on the internet.",
    author: "Sarah M.",
    role: "Transformational Coach",
  },
  {
    quote:
      "The most practical, structured yet intuitive business mentoring program I've encountered. It gave me the exact roadmap I needed to move from confusion to clarity.",
    author: "James R.",
    role: "Life Guide & Facilitator",
  },
  {
    quote:
      "A life-changing course that helped me build an impactful transformational business from the ground up. I went from charging $50/session to $3,500 packages in 90 days.",
    author: "Amara O.",
    role: "Spiritual Mentor",
  },
  {
    quote:
      "A blueprint for a soul-aligned guidance business — covering everything from the technical to the spiritual. Nothing like this exists anywhere else.",
    author: "Lena K.",
    role: "Somatic Therapist",
  },
  {
    quote:
      "This course offers a new take and fresh perspective to the current coaching model. It's not about hustle — it's about depth, and it works.",
    author: "Marcus T.",
    role: "Mindfulness Teacher",
  },
];

const faqs = [
  {
    q: "Who is this course for?",
    a: "This is for coaches, therapists, healers, facilitators, teachers, and anyone who guides others through transformation. If people seek your wisdom — formally or informally — this is for you.",
  },
  {
    q: "Do I need credentials or a certification?",
    a: "No certification required. What matters is that you have genuine experience and wisdom to offer. The world needs authentic guides, not more paper on the wall.",
  },
  {
    q: "What if I don't have an audience yet?",
    a: "Perfect. The course is designed to work from zero. We show you how to attract your first clients without a large following — through depth, not distribution.",
  },
  {
    q: "How long does the course take?",
    a: "About 3 hours of core content, plus implementation exercises. You can go through it in a weekend or spread it over a few weeks — move at your own pace.",
  },
  {
    q: "What makes this different from other business courses?",
    a: "Most business courses teach you to build a machine. We teach you to build a practice — one that honors your gifts, serves deeply, and sustains itself without burning you out.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes — if you go through the material and feel it wasn't worth it, reach out within 14 days for a full refund. No questions asked. We're confident in the work.",
  },
];

// ── Component ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ background: "#0F0D0A", color: "#D8CFC4" }}>
      {/* ── NAV ── */}
      <nav
        style={{
          borderBottom: "1px solid #2A2520",
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          background: "#0F0D0A",
          zIndex: 50,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#D8CFC4",
            letterSpacing: "0.01em",
          }}
        >
          Guidance Business
        </span>
        <ThriveCartButton
          style={{
            background: "#C4882A",
            color: "#0F0D0A",
            padding: "0.6rem 1.4rem",
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Get the Course →
        </ThriveCartButton>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "6rem 2rem 5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C4882A",
            marginBottom: "1.75rem",
          }}
        >
          The Complete System
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.12,
            color: "#D8CFC4",
            marginBottom: "1.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          Build a guidance business.
          <br />
          <em>Work less. Matter more.</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.25rem",
            lineHeight: 1.7,
            color: "#8A7F74",
            maxWidth: "620px",
            margin: "0 auto 2.75rem",
          }}
        >
          A complete system for coaches, guides, and practitioners who want to
          earn $5–20K/month without burning out or selling their soul.
        </p>
        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <ThriveCartButton
            style={{
              background: "#C4882A",
              color: "#0F0D0A",
              padding: "0.9rem 2.2rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.05rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            Join for $222 →
          </ThriveCartButton>
          <a
            href="/free"
            style={{
              border: "1px solid #2A2520",
              color: "#8A7F74",
              padding: "0.9rem 2.2rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.05rem",
              letterSpacing: "0.03em",
              textDecoration: "none",
            }}
          >
            Free 5-Day Course
          </a>
        </div>
      </section>

      {/* ── THE GREAT DIVIDE ── */}
      <section
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "5rem 2rem",
          borderTop: "1px solid #2A2520",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Great Divide
        </h2>
        <div
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.15rem",
            lineHeight: 1.85,
            color: "#8A7F74",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p>
            2026 will mark the end of an era. As AI replaces surface-level
            creators and generic coaches become obsolete, a new category of
            transformational leader is emerging: <span style={{ color: "#D8CFC4" }}>The Deep Guide.</span>
          </p>
          <p>
            This pattern has repeated throughout human history — at pivotal
            moments of change, the role of the guide returns with renewed
            significance. While thousands of &ldquo;experts&rdquo; will vanish overnight,
            authentic guides like you will become increasingly valuable.
          </p>
          <p>
            The world is awakening to a profound truth:{" "}
            <em style={{ color: "#C4882A" }}>
              No algorithm can hold sacred space for transformation. No AI can
              guide someone back to their own wisdom. No machine can offer the
              deep presence humans are desperately craving.
            </em>
          </p>
        </div>
      </section>

      {/* ── VSL EMBED ── */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            border: "1px solid #2A2520",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/kVv4ZfUuiwo"
            title="Guidance Business — Course Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section
        style={{
          borderTop: "1px solid #2A2520",
          borderBottom: "1px solid #2A2520",
          padding: "2rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {[
            { val: "143+", label: "guides enrolled" },
            { val: "NPS: 8.8/10", label: "student satisfaction" },
            { val: "3 hours.", label: "One transformation." },
          ].map(({ val, label }) => (
            <div key={val}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: "#C4882A",
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: "0.9rem",
                  color: "#8A7F74",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "6rem 2rem",
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
          The Curriculum
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            marginBottom: "3.5rem",
          }}
        >
          Six modules. One complete system.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "#2A2520",
          }}
        >
          {modules.map((mod) => (
            <div
              key={mod.num}
              style={{
                background: "#0F0D0A",
                padding: "2.5rem 2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "0.85rem",
                  color: "#C4882A",
                  letterSpacing: "0.12em",
                  marginBottom: "0.75rem",
                }}
              >
                {mod.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "#D8CFC4",
                  marginBottom: "0.75rem",
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#8A7F74",
                }}
              >
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          background: "#130F0B",
          padding: "6rem 2rem",
          borderTop: "1px solid #2A2520",
          borderBottom: "1px solid #2A2520",
        }}
      >
        <div style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4882A",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            What Students Say
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 500,
              color: "#D8CFC4",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            Guides who took the leap.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#1C1510",
                  border: "1px solid #3A2D1E",
                  padding: "2.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "#D8CFC4",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-eb-garamond)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#C4882A",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-eb-garamond)",
                      fontSize: "0.85rem",
                      color: "#8A7F74",
                      marginTop: "0.2rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "7rem 2rem",
          textAlign: "center",
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
          Enrollment
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            marginBottom: "2.5rem",
          }}
        >
          Start building your guidance business today.
        </h2>

        <div
          style={{
            border: "1px solid #2A2520",
            padding: "3rem 2.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.5rem",
                color: "#8A7F74",
                textDecoration: "line-through",
              }}
            >
              $555
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "3.5rem",
                fontWeight: 500,
                color: "#C4882A",
              }}
            >
              $222
            </span>
          </div>

          {/* Coupon */}
          <div
            style={{
              background: "#1C1510",
              border: "1px solid #3A2D1E",
              padding: "0.75rem 1.25rem",
              marginBottom: "2rem",
              display: "inline-block",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "0.85rem",
                color: "#8A7F74",
                letterSpacing: "0.05em",
              }}
            >
              Use code:{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#C4882A",
                letterSpacing: "0.1em",
              }}
            >
              IAMREADY
            </span>
          </div>

          {/* Inclusions */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 2rem",
              textAlign: "left",
            }}
          >
            {[
              "6 core modules (3+ hours)",
              "Implementation workbooks",
              "Pricing & packaging templates",
              "Automation workflow guides",
              "Lifetime access + updates",
              "14-day money-back guarantee",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: "1rem",
                  color: "#8A7F74",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #1E1A16",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ color: "#C4882A" }}>✦</span>
                {item}
              </li>
            ))}
          </ul>

          <ThriveCartButton
            style={{
              display: "block",
              width: "100%",
              background: "#C4882A",
              color: "#0F0D0A",
              padding: "1.1rem 2rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textAlign: "center",
            }}
          >
            Enroll Now — $222
          </ThriveCartButton>
        </div>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.9rem",
            color: "#8A7F74",
          }}
        >
          One-time payment. Immediate access. No subscription.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          borderTop: "1px solid #2A2520",
          padding: "6rem 2rem",
          background: "#0C0A08",
        }}
      >
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
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
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
              color: "#D8CFC4",
              marginBottom: "3rem",
            }}
          >
            Answers to what you&apos;re wondering.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid #2A2520",
                  padding: "2rem 0",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#D8CFC4",
                    marginBottom: "0.75rem",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#8A7F74",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: "#080604",
          borderTop: "1px solid #2A2520",
          padding: "8rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "#D8CFC4",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
          }}
        >
          Your medicine is needed.
        </p>
        <ThriveCartButton
          style={{
            background: "#C4882A",
            color: "#0F0D0A",
            padding: "1.1rem 2.8rem",
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          Start Building — $222
        </ThriveCartButton>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #2A2520",
          padding: "2.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "#D8CFC4",
          }}
        >
          Guidance Business
        </span>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="mailto:hello@guidancebusiness.com"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.9rem",
              color: "#8A7F74",
              textDecoration: "none",
            }}
          >
            hello@guidancebusiness.com
          </a>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.9rem",
              color: "#8A7F74",
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
          <Link
            href="/free"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.9rem",
              color: "#8A7F74",
              textDecoration: "none",
            }}
          >
            Free Course
          </Link>
          <span
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.85rem",
              color: "#8A7F74",
            }}
          >
            © 2026 Guidance Business
          </span>
        </div>
      </footer>
    </main>
  );
}
