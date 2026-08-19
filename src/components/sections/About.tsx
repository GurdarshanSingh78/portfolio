"use client";

import FadeUp from "../motion/FadeUp";
import SectionLabel from "../ui/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        <SectionLabel label="About" number="01" />

        {/* Two-column layout on desktop, single column on mobile */}
        <div className="about-grid">
          {/* Left column — Pull quote (hidden on mobile) */}
          <div className="about-quote-col">
            <FadeUp delay={0.1}>
              <blockquote
                className="heading-lg"
                style={{
                  color: "var(--text-primary)",
                  position: "sticky",
                  top: "120px",
                }}
              >
                &ldquo;I don&rsquo;t just write code.
                <br />
                <span style={{ color: "var(--accent-blue)" }}>
                  I engineer systems.
                </span>
                &rdquo;
              </blockquote>
            </FadeUp>
          </div>

          {/* Right column — Story */}
          <div>
            <FadeUp delay={0.2}>
              <p className="text-body mb-6">
                I&rsquo;m Gurdarshan Singh — a Computer Engineering student at
                Thapar Institute of Engineering & Technology with a deep
                fascination for how complex systems work under the hood.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-body mb-6">
                My engineering philosophy is simple:{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  understand the fundamentals deeply, then build with intention.
                </strong>{" "}
                Whether it&rsquo;s implementing CRDTs for distributed
                collaboration, designing lock-free concurrent data structures,
                or solving NP-hard optimization problems — I&rsquo;m drawn to
                challenges where elegant abstractions meet real-world
                constraints.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-body mb-10">
                I believe the best software is invisible — it feels so natural
                that users never think about the engineering behind it. That
                same philosophy drives how I approach every project: start with
                the problem, reason from first principles, and build something
                that&rsquo;s not just functional, but{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  fundamentally well-engineered.
                </strong>
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.5}>
              <div className="stats-grid">
                <div className="card-flat text-center">
                  <div
                    className="heading-lg mb-1"
                    style={{ color: "var(--accent-blue)" }}
                  >
                    8.0
                  </div>
                  <div className="text-caption">CGPA</div>
                </div>
                <div className="card-flat text-center">
                  <div
                    className="heading-lg mb-1"
                    style={{ color: "var(--accent-emerald)" }}
                  >
                    16+
                  </div>
                  <div className="text-caption">Projects</div>
                </div>
                <div className="card-flat text-center">
                  <div
                    className="heading-lg mb-1"
                    style={{ color: "var(--accent-warm)" }}
                  >
                    1
                  </div>
                  <div className="text-caption">Research Internship</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
