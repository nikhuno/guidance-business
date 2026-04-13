import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Days to Your Guidance Business — Free Email Course",
  description:
    "A free 5-day email course for coaches, guides, and practitioners. Learn the foundations of a profitable, soul-aligned guidance business.",
};

const lessons = [
  "Day 1: What a guidance business actually is — and why you already qualify",
  "Day 2: The positioning formula that makes you unmistakable (without an audience)",
  "Day 3: How to package your wisdom into an offer people pay premium for",
  "Day 4: Pricing with confidence — the psychology of premium guidance",
  "Day 5: Your first client roadmap — a 30-day action plan",
];

export default function FreePage() {
  return (
    <main
      style={{
        background: "#0F0D0A",
        color: "#D8CFC4",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "580px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "3.5rem" }}>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "1.3rem",
              color: "#8A7F74",
              textDecoration: "none",
            }}
          >
            Guidance Business
          </a>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            border: "1px solid #C4882A",
            padding: "0.4rem 1rem",
            marginBottom: "1.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C4882A",
            }}
          >
            Free 5-Day Email Course
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
            fontWeight: 500,
            color: "#D8CFC4",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          5 Days to Your
          <br />
          <em>Guidance Business</em>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "#8A7F74",
            marginBottom: "2.5rem",
          }}
        >
          Five emails. Five foundations. The clarity you need to start building
          a guidance business that earns and endures.
        </p>

        {/* Lessons */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 2.5rem",
            textAlign: "left",
          }}
        >
          {lessons.map((lesson, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#8A7F74",
                padding: "0.9rem 0",
                borderBottom: "1px solid #1E1A16",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: "#C4882A",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                  paddingTop: "0.1rem",
                }}
              >
                ✦
              </span>
              {lesson}
            </li>
          ))}
        </ul>

        {/* Form — Kit placeholder */}
        {/* 
          PLACEHOLDER: Replace this form with your Kit (ConvertKit) embed.
          Form ID: YOUR_KIT_FORM_ID
          
          To embed:
          1. Go to Kit → Forms → select form → Embed
          2. Replace the form below with the Kit-generated HTML/JS embed
          OR
          3. Use Kit's API endpoint for custom forms
        */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            name="first_name"
            placeholder="Your first name"
            required
            style={{
              background: "#1A1714",
              border: "1px solid #2A2520",
              color: "#D8CFC4",
              padding: "1rem 1.25rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1rem",
              outline: "none",
              width: "100%",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            style={{
              background: "#1A1714",
              border: "1px solid #2A2520",
              color: "#D8CFC4",
              padding: "1rem 1.25rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1rem",
              outline: "none",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#C4882A",
              color: "#0F0D0A",
              padding: "1.1rem 2rem",
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Me the Free Course →
          </button>
        </form>

        <p
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: "0.85rem",
            color: "#8A7F74",
            marginTop: "1rem",
          }}
        >
          No spam. No pitching. Unsubscribe anytime.
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #2A2520",
            marginTop: "3rem",
            paddingTop: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontSize: "0.9rem",
              color: "#8A7F74",
            }}
          >
            Already know you&apos;re ready?{" "}
            <a
              href="/#pricing"
              style={{ color: "#C4882A", textDecoration: "none" }}
            >
              Get the full course for $222 →
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
