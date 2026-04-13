"use client";

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
    desc: "Price with confidence. Understand the psychology of premium. Charge what your transformation is worth.",
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
    role: "Coach",
  },
  {
    quote:
      "The DNA report was the backbone that brought all the other material together and made it actionable.",
    author: "Elle Luca",
    role: "Guide",
  },
  {
    quote:
      "The most practical, structured yet intuitive business mentoring program I've encountered. Exact roadmap from confusion to clarity.",
    author: "James R.",
    role: "Facilitator",
  },
  {
    quote: "gave me permission to find myself in the business arena",
    author: "Malana R.",
    role: "Practitioner",
  },
  {
    quote:
      "A life-changing course. I went from charging $50 per session to $3,500 packages in 90 days.",
    author: "Amara O.",
    role: "Mentor",
  },
  {
    quote:
      "Nobody else has reminded me so clearly to embrace my own voice. That is the difference here.",
    author: "Rob",
    role: "Teacher",
  },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Coaches, guides, healers, facilitators, teachers, and anyone who guides others through transformation. If people seek your wisdom — formally or informally — this is for you.",
  },
  {
    q: "Do I need credentials or a certification?",
    a: "No certification required. What matters is that you have genuine experience and wisdom to offer. The world needs authentic guides, not more paper on the wall.",
  },
  {
    q: "What if I don't have an audience yet?",
    a: "You don't need one. The course shows you how to find your first clients without a following — through depth, positioning, and the right conversations.",
  },
  {
    q: "How long does the course take?",
    a: "The core material is under 3 hours. Most students launch their first offer within a week of completing it.",
  },
  {
    q: "What makes this different from other business courses?",
    a: "Most business courses teach hustle. This teaches depth. You'll build something that actually fits who you are — not a replica of someone else's funnel.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. 30-day money-back guarantee. If you complete the course and don't find it valuable, we'll refund you in full — no questions asked.",
  },
];

const sectionLabel = (text: string) => (
  <p
    style={{
      fontFamily: "var(--font-eb-garamond)",
      fontSize: "0.75rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#C4882A",
      marginBottom: "1.25rem",
    }}
  >
    {text}
  </p>
);

const divider = (
  <div
    style={{
      width: "100%",
      height: "1px",
      background: "linear-gradient(90deg, transparent, #C4882A40, transparent)",
    }}
  />
);

export default function Home() {
  return (
    <main
      style={{
        background: "#0F0D0A",
        color: "#D8CFC4",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.2rem 2rem",
          borderBottom: "1px solid #1E1A15",
          background: "#0F0D0A",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "#D8CFC4",
          }}
        >
          Guidance Business
        </span>
        <ThriveCartButton
          style={{
            background: "#C4882A",
            color: "#0F0D0A",
            padding: "0.55rem 1.3rem",
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.9rem",
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
          padding: "7rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        {sectionLabel("The Complete System")}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#D8CFC4",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Build a guidance business.
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "#C4882A",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Work less. Matter more.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.2rem",
            lineHeight: 1.75,
            color: "#8A7F74",
            maxWidth: "600px",
            margin: "0 auto 2.75rem",
          }}
        >
          A complete system for coaches, guides, and practitioners who want to
          earn $5–20K/month without burning out or selling their soul.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <ThriveCartButton
            style={{
              background: "#C4882A",
              color: "#0F0D0A",
              padding: "0.95rem 2.4rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}
          >
            Join for $222 →
          </ThriveCartButton>
          <Link
            href="/free"
            style={{
              display: "inline-block",
              border: "1px solid #2A2520",
              color: "#8A7F74",
              padding: "0.95rem 2.4rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.05rem",
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            Free 5-Day Course
          </Link>
        </div>
      </section>

      {divider}

      {/* ── THE GREAT DIVIDE ── */}
      <section
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "5.5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        {sectionLabel("The Context")}
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Great Divide
        </h2>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "#8A7F74",
            marginBottom: "1.5rem",
          }}
        >
          2026 will mark the end of an era. As AI replaces surface-level creators
          and generic coaches become obsolete, a new category of transformational
          leader is emerging:{" "}
          <em style={{ color: "#C4882A", fontStyle: "italic" }}>The Deep Guide.</em>{" "}
          Not the loudest voice. Not the most followed. The one whose presence
          alone shifts something.
        </p>
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "#8A7F74",
            marginBottom: "3rem",
          }}
        >
          This course is not for everyone. It is for the ones who have always
          guided — in kitchens, in offices, in quiet conversations at 2am — and
          who are ready, finally, to be paid for it.
        </p>
      </section>

      {/* Atmospheric bg image */}
      <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg.jpg"
          alt=""
          style={{ width: "100%", height: "500px", objectFit: "cover", display: "block", opacity: 0.85 }}
        />
      </div>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: "#1A1612",
          borderTop: "1px solid #2A2520",
          borderBottom: "1px solid #2A2520",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { num: "143+", label: "Course Graduates" },
            { num: "NPS: 8.8/10", label: "Student Satisfaction" },
            { num: "3 Hours", label: "To First Offer" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 500,
                  color: "#C4882A",
                  marginBottom: "0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.num}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8A7F74",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          {sectionLabel("The Curriculum")}
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "#D8CFC4",
              marginBottom: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Six modules. One complete system.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "0",
              border: "1px solid #2A2520",
            }}
          >
            {modules.map((m, i) => (
              <div
                key={m.num}
                style={{
                  padding: "2rem",
                  borderRight: i % 3 !== 2 ? "1px solid #2A2520" : "none",
                  borderBottom: i < 3 ? "1px solid #2A2520" : "none",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#C4882A",
                    marginBottom: "0.6rem",
                  }}
                >
                  {m.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#D8CFC4",
                    marginBottom: "0.75rem",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#8A7F74",
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── ORIGIN STORY ── */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          {sectionLabel("The Journey")}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image08.png"
            alt="The journey — from Bloomberg to guidance business"
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
              display: "block",
              margin: "0 auto 1.5rem",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image11.png"
            alt="The journey — results and transformation"
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </section>

      {divider}

      {/* ── INCOME PROOF ── */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          {sectionLabel("Student Results")}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image03.png"
            alt="Student results — income and wins"
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </section>

      {divider}

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {sectionLabel("Results & Proof")}
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#D8CFC4",
                letterSpacing: "-0.01em",
              }}
            >
              Guides who took the leap.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  padding: "2rem",
                  border: "1px solid #2A2520",
                  background: "#13100D",
                  borderTop: "2px solid #C4882A",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    lineHeight: 1.65,
                    color: "#D8CFC4",
                    marginBottom: "1.25rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    color: "#C4882A",
                  }}
                >
                  — {t.author}, {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── PRICING ── */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          {sectionLabel("Investment")}
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "#D8CFC4",
              marginBottom: "2.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Start building your guidance business today.
          </h2>

          <div
            style={{
              border: "1px solid #2A2520",
              padding: "2.5rem",
              background: "#13100D",
            }}
          >
            {/* Price */}
            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "1rem",
                color: "#8A7F74",
                textDecoration: "line-through",
                marginBottom: "0.25rem",
              }}
            >
              $555
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "3.5rem",
                fontWeight: 600,
                color: "#C4882A",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              $222
            </p>
            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                color: "#8A7F74",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              with code IAMREADY
            </p>

            {/* Checklist */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2rem",
                textAlign: "left",
              }}
            >
              {[
                "All 6 course modules",
                "Implementation workbooks",
                "Pricing & packaging templates",
                "Automation & system templates",
                "Lifetime access & all future updates",
                "Private community access",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontSize: "1.05rem",
                    color: "#D8CFC4",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid #1E1A15",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#C4882A", fontSize: "1rem" }}>✓</span>
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

            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "0.85rem",
                color: "#8A7F74",
                marginTop: "1rem",
              }}
            >
              One-time payment. Lifetime access. No subscription.
            </p>
          </div>
        </div>
      </section>

      {divider}

      {/* ── FAQ ── */}
      <section style={{ padding: "5.5rem 2rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {sectionLabel("Common Questions")}
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#D8CFC4",
                letterSpacing: "-0.01em",
              }}
            >
              Answers to what you&apos;re wondering.
            </h2>
          </div>
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{
                padding: "1.75rem 0",
                borderBottom: i < faqs.length - 1 ? "1px solid #1E1A15" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#C4882A",
                  marginBottom: "0.75rem",
                }}
              >
                {faq.q}
              </p>
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
      </section>

      {divider}

      {/* ── FINAL CTA ── */}
      <section
        style={{
          padding: "7rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#D8CFC4",
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Your medicine is needed.
        </h2>
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
          borderTop: "1px solid #1E1A15",
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.85rem",
            color: "#8A7F74",
          }}
        >
          © 2026 Guidance Business
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "Terms of Service"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "0.85rem",
                color: "#8A7F74",
                textDecoration: "none",
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
