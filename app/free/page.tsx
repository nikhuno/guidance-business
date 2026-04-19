"use client";

export default function FreePage() {
  const painPoints = [
    "You've done the inner work. You have real gifts. But the word \"coach\" has always felt like someone else's costume.",
    "You know something is there — a calling, a way of working — you just can't quite name it yet. Or charge for it.",
    "You've looked at the scripts, the funnels, the discovery call templates. Something in you keeps saying: not like this.",
  ];

  const letters = [
    {
      day: "Letter 1",
      title: "From that bathroom stall to here",
      sub: "The story behind what a guidance business actually is — and why it might be exactly what you've been circling.",
    },
    {
      day: "Letter 2",
      title: "You are not a coach",
      sub: "The distinction that changes everything. What a guide is, how it differs, and why that $10 session was the moment everything shifted.",
    },
    {
      day: "Letter 3",
      title: "The thing the personality tests keep missing",
      sub: "Your shadow pattern. The unlived version of you that's been pulling the strings — and how to start working with it instead of against it.",
    },
    {
      day: "Letter 4",
      title: "What happens when it clicks",
      sub: "Real stories. Real numbers. People who were exactly where you are — and what moved when the foundation was right.",
    },
    {
      day: "Letter 5",
      title: "The thing I keep wanting to say to you",
      sub: "A personal letter. No teaching, no framework. Just the thing that matters most after everything else.",
    },
  ];

  const testimonials = [
    {
      quote: "I've struggled for years until I came across this unique approach. The payment notification from my first client is testament to that.",
      name: "Norbert",
      detail: "First client: $2,500",
    },
    {
      quote: "It didn't feel like selling at all. It felt like a natural conversation about how I could help.",
      name: "Sarah",
      detail: "First client: $3,000 in 6 weeks",
    },
    {
      quote: "I took 6-7 courses, worked with mentors, paid a few good thousands. After this, I feel I don't need anything else anymore.",
      name: "Mihai",
      detail: "First results: €3,000",
    },
  ];

  const s = {
    bg: "#0F0D0A",
    fg: "#D8CFC4",
    fgDim: "#8A7F74",
    fgMute: "#5A5450",
    fgDeep: "#7A7168",
    amber: "#C4882A",
    border: "#1E1A16",
    cardBg: "#13110E",
    inputBg: "#141210",
    inputBorder: "#2A2520",
    heading: "#E8DFD4",
    cormorant: "'Cormorant Garamond', Georgia, serif",
    garamond: "'EB Garamond', Georgia, serif",
  } as const;

  return (
    <main style={{ background: s.bg, color: s.fg, minHeight: "100vh", fontFamily: s.garamond }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        ::placeholder{color:#3A3530;}
        input:focus{border-color:#C4882A!important;outline:none;}
        .btn:hover{background:#D49930!important;}
        .pain-item{border-bottom:1px solid #1E1A16;}
        .pain-item:first-child{border-top:1px solid #1E1A16;}

        /* Kit form overrides — match dark theme */
        .formkit-form{background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important;max-width:100%!important;}
        .formkit-form *{font-family:'EB Garamond',Georgia,serif!important;}
        .formkit-fields{display:flex!important;flex-direction:column!important;gap:0.9rem!important;}
        .formkit-field{margin:0!important;}
        .formkit-input{background:#141210!important;border:1px solid #2A2520!important;border-radius:0!important;color:#D8CFC4!important;padding:1rem 1.25rem!important;font-size:1rem!important;width:100%!important;}
        .formkit-input:focus{border-color:#C4882A!important;outline:none!important;}
        .formkit-input::placeholder{color:#3A3530!important;}
        .formkit-submit{background:#C4882A!important;color:#0A0806!important;border-radius:0!important;border:none!important;padding:1.1rem 2rem!important;font-size:1.05rem!important;font-weight:700!important;letter-spacing:0.02em!important;width:100%!important;cursor:pointer!important;margin-top:0!important;}
        .formkit-submit:hover{background:#D49930!important;}
        .formkit-submit span{color:#0A0806!important;}
        .formkit-guarantee,.formkit-powered-by-convertkit-container{display:none!important;}
        [data-element="errors"]{color:#C4882A!important;font-size:0.85rem!important;}
      `}</style>

      {/* Logo */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <a href="https://guidancebusiness.com" style={{
          fontFamily: s.cormorant, fontStyle: "italic", fontSize: "1.1rem",
          color: s.fgMute, textDecoration: "none", letterSpacing: "0.05em",
        }}>
          Guidance Business
        </a>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: "640px", margin: "0 auto", padding: "2.5rem 2rem 0", textAlign: "center" }}>
        <div style={{
          display: "inline-block", border: "1px solid rgba(196,136,42,0.4)",
          padding: "0.35rem 1rem", marginBottom: "2rem",
        }}>
          <span style={{
            fontFamily: s.garamond, fontSize: "0.75rem",
            letterSpacing: "0.2em", textTransform: "uppercase" as const, color: s.amber,
          }}>
            Free &middot; 5 Letters &middot; 9 Days
          </span>
        </div>

        <h1 style={{
          fontFamily: s.cormorant, fontSize: "clamp(2.8rem,8vw,4.8rem)",
          fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em",
          color: s.heading, marginBottom: "0.4rem",
        }}>
          You are not a coach.
        </h1>
        <h1 style={{
          fontFamily: s.cormorant, fontSize: "clamp(2.8rem,8vw,4.8rem)",
          fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em",
          fontStyle: "italic", color: s.amber, marginBottom: "2rem",
        }}>
          You are a guide.
        </h1>

        <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: s.fgDim, marginBottom: "0.5rem" }}>
          A free email series for people who sense there&apos;s a different kind of practice
          available to them &mdash; one that feels true, not performed.
        </p>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: s.fgDim }}>
          Five honest letters. No modules, no worksheets.
          Just the things I wish someone had told me.
        </p>
      </section>

      {/* Pain points */}
      <section style={{ maxWidth: "580px", margin: "3.5rem auto 0", padding: "0 2rem" }}>
        {painPoints.map((text, i) => (
          <div key={i} className="pain-item" style={{
            padding: "1.25rem 0", display: "flex", gap: "1rem", alignItems: "flex-start",
          }}>
            <span style={{ color: s.amber, fontSize: "1.2rem", flexShrink: 0, paddingTop: "0.1rem" }}>
              &mdash;
            </span>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "#9A8F84" }}>{text}</p>
          </div>
        ))}
      </section>

      {/* Nik's story */}
      <section style={{
        maxWidth: "580px", margin: "4rem auto 0", padding: "0 2rem 0 2.5rem",
        borderLeft: "2px solid #C4882A",
      }}>
        <p style={{
          fontFamily: s.cormorant, fontSize: "1.35rem", fontStyle: "italic",
          lineHeight: 1.6, color: "#C8BFB4", marginBottom: "1.25rem",
        }}>
          &ldquo;I had my first panic attack in a bathroom stall at Bloomberg.
          Six figures. Private chauffeur waiting downstairs. And I couldn&apos;t stop shaking.&rdquo;
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: s.fgDeep, marginBottom: "0.75rem" }}>
          I spent five years performing a version of success that had nothing to do with me.
          After leaving, I tried everything &mdash; startups, photography, consulting, certifications.
          None of it worked until I stopped trying to solve an identity problem with a strategy.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: s.fgDeep, marginBottom: "1.25rem" }}>
          Today I live in a small house in southern Italy, surrounded by olive trees.
          I work about three hours a day. I wake up without an alarm.
          I photograph, write, cook with my partner Chiara, and run a guidance business
          that earns more than I ever made in finance.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: s.fgDeep }}>
          The story of how I got from that bathroom stall to here is what these letters are about.
        </p>
        <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "#2A2520", border: "1px solid #3A3530",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: s.cormorant, fontSize: "1rem", color: s.amber, fontStyle: "italic",
          }}>N</div>
          <div>
            <p style={{ fontSize: "0.9rem", color: "#9A8F84" }}>Nik Huno</p>
            <p style={{ fontSize: "0.8rem", color: s.fgMute }}>Puglia, Italy &middot; 430+ guides</p>
          </div>
        </div>
      </section>

      {/* What you'll receive */}
      <section style={{ maxWidth: "580px", margin: "4.5rem auto 0", padding: "0 2rem" }}>
        <p style={{
          fontSize: "0.75rem", letterSpacing: "0.2em",
          textTransform: "uppercase" as const, color: s.fgMute, marginBottom: "1.5rem",
        }}>
          What you&apos;ll receive
        </p>
        {letters.map((item, i) => (
          <div key={i} style={{
            padding: "1.25rem 0", borderBottom: `1px solid ${s.border}`,
            display: "flex", gap: "1.25rem",
          }}>
            <div style={{ flexShrink: 0, width: "72px", paddingTop: "0.2rem" }}>
              <span style={{
                fontFamily: s.cormorant, fontSize: "0.8rem",
                color: s.amber, letterSpacing: "0.05em",
              }}>{item.day}</span>
            </div>
            <div>
              <p style={{
                fontFamily: s.cormorant, fontSize: "1.15rem",
                color: "#C8BFB4", marginBottom: "0.35rem", lineHeight: 1.3,
              }}>{item.title}</p>
              <p style={{ fontSize: "0.9rem", color: "#6A6158", lineHeight: 1.55 }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Form */}
      <section style={{ maxWidth: "480px", margin: "4.5rem auto 0", padding: "0 2rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: s.cormorant, fontSize: "1.9rem", fontWeight: 400,
          color: s.heading, marginBottom: "0.5rem", lineHeight: 1.2,
        }}>
          Begin the series.
        </h2>
        <p style={{ fontSize: "1rem", color: "#6A6158", marginBottom: "2rem", lineHeight: 1.6 }}>
          Free. The first letter arrives within the hour.
        </p>

        {/* Kit JS embed — form 9327364 / uid 99a62dce44 */}
        {/* Redirect after subscribe → blog.guidancebusiness.com/welcome (set in Kit dashboard) */}
        <script async data-uid="99a62dce44" src="https://nik-huno.kit.com/99a62dce44/index.js" />

        <p style={{ fontSize: "0.82rem", color: "#4A4540", marginTop: "1rem", lineHeight: 1.5 }}>
          No spam. No pitching. Unsubscribe anytime.
          I read every reply personally &mdash; no team, no automation behind the inbox.
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: "760px", margin: "5rem auto 0", padding: "0 2rem" }}>
        <p style={{
          fontSize: "0.75rem", letterSpacing: "0.2em",
          textTransform: "uppercase" as const, color: s.fgMute,
          marginBottom: "2.5rem", textAlign: "center",
        }}>
          From guides who&apos;ve walked this path
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: s.cardBg, border: `1px solid ${s.border}`, padding: "1.5rem",
            }}>
              <p style={{
                fontFamily: s.cormorant, fontSize: "1.05rem", fontStyle: "italic",
                lineHeight: 1.65, color: "#9A9188", marginBottom: "1.25rem",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <p style={{ fontSize: "0.85rem", color: s.amber, marginBottom: "0.2rem" }}>{t.name}</p>
              <p style={{ fontSize: "0.8rem", color: "#4A4540" }}>{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What this is */}
      <section style={{
        maxWidth: "580px", margin: "4.5rem auto 0",
        padding: "0 2rem", textAlign: "center",
      }}>
        <p style={{
          fontFamily: s.cormorant, fontSize: "1.3rem", fontStyle: "italic",
          color: "#6A6158", lineHeight: 1.8,
        }}>
          This is not a lead magnet.<br />
          It&apos;s not a preview of a course.<br />
          It&apos;s five honest letters about building something real.<br />
          From someone who did it the hard way, so you might not have to.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        maxWidth: "580px", margin: "5rem auto 0",
        padding: "2.5rem 2rem 3rem",
        borderTop: `1px solid ${s.border}`, textAlign: "center",
      }}>
        <a href="https://guidancebusiness.com" style={{
          fontFamily: s.cormorant, fontStyle: "italic",
          fontSize: "0.95rem", color: "#4A4540", textDecoration: "none",
        }}>
          guidancebusiness.com
        </a>
      </footer>
    </main>
  );
}
