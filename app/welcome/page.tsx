import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're in — Becoming the Guide",
  description: "Welcome to Becoming the Guide. Start here.",
  robots: "noindex",
};

export default function WelcomePage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .yt-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #0A0806;
        }
        .yt-wrapper iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
      `}</style>

      <main style={{
        background: "#0F0D0A",
        color: "#D8CFC4",
        minHeight: "100vh",
        fontFamily: "'EB Garamond', Georgia, serif",
      }}>

        {/* Logo */}
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <a href="https://guidancebusiness.com" style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "#5A5450",
            textDecoration: "none",
          }}>
            Guidance Business
          </a>
        </div>

        <section style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "2.5rem 2rem 0",
          textAlign: "center",
        }}>
          {/* Confirmation */}
          <div style={{
            display: "inline-block",
            border: "1px solid rgba(196, 136, 42, 0.4)",
            padding: "0.35rem 1rem",
            marginBottom: "2rem",
          }}>
            <span style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4882A",
            }}>
              You&apos;re in
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#E8DFD4",
            marginBottom: "1.25rem",
          }}>
            Check your inbox for the first letter.
            <br />
            <em style={{ color: "#9A8F84", fontSize: "0.75em" }}>While you wait — start here.</em>
          </h1>

          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.75,
            color: "#7A7168",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}>
            This is the video I made a while back that covers the full picture —
            what a guidance business is, how I built mine, and why I believe this is
            the most meaningful business model for people like us right now.
            It&apos;s long. It&apos;s unpolished. A lot of people have told me it changed something for them.
          </p>

          {/* YouTube embed */}
          <div className="yt-wrapper" style={{ border: "1px solid #1E1A16" }}>
            <iframe
              src="https://www.youtube.com/embed/kVv4ZfUuiwo?autoplay=1&rel=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="How to Build a Guidance Business — Nik Huno"
            />
          </div>

          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "#4A4540",
            marginTop: "1.25rem",
          }}>
            Pay attention to what you feel, not just what makes sense logically.
            Your body knows things your mind hasn&apos;t caught up to yet.
          </p>
        </section>

        {/* Divider + soft CTA */}
        <section style={{
          maxWidth: "580px",
          margin: "5rem auto 0",
          padding: "3rem 2rem",
          borderTop: "1px solid #1A1714",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.15rem",
            fontStyle: "italic",
            color: "#7A7168",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}>
            If you already know you want to build this —
            the full blueprint is at the link below.
            I sometimes run promotions. Check to see if one is active.
          </p>
          <a
            href="https://guidancebusiness.com"
            style={{
              display: "inline-block",
              border: "1px solid rgba(196, 136, 42, 0.5)",
              color: "#C4882A",
              padding: "0.85rem 2rem",
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "1rem",
              letterSpacing: "0.03em",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            The 3-Hour Guidance Business →
          </a>
        </section>

        <footer style={{
          maxWidth: "580px",
          margin: "4rem auto 0",
          padding: "2rem 2rem 3rem",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "0.82rem", color: "#3A3530" }}>
            Your first email is on its way. Check spam if it doesn&apos;t arrive within the hour.
          </p>
        </footer>

      </main>
    </>
  );
}
