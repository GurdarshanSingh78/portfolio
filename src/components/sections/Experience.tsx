"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import FadeUp from "../motion/FadeUp";
import SectionLabel from "../ui/SectionLabel";

export default function Experience() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        <SectionLabel label="Experience" number="07" />

        <FadeUp>
          <h2 className="heading-xl mb-16" style={{ maxWidth: "500px" }}>
            Professional experience
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="card" style={{ maxWidth: "800px" }}>
            <div className="flex items-start gap-4 mb-6">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  background: "color-mix(in srgb, var(--accent-emerald) 10%, transparent)",
                  color: "var(--accent-emerald)",
                }}
              >
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="heading-md" style={{ marginBottom: "0.25rem" }}>
                  Software Engineering Research Intern
                </h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    ELC (Electronics Corporation)
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Calendar size={13} />
                    May — July 2024
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <MapPin size={13} />
                    Patiala, Punjab
                  </span>
                </div>
              </div>
            </div>

            <div style={{ paddingLeft: "4rem" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Conducted research in software engineering methodologies, analyzing system architectures and proposing optimized solutions for production environments.",
                  "Developed functional prototypes to validate research findings, applying engineering best practices throughout the development lifecycle.",
                  "Collaborated with cross-functional teams to translate research insights into actionable engineering recommendations.",
                  "Gained hands-on experience with industry-standard tools and workflows, deepening understanding of production software engineering.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-body"
                    style={{
                      fontSize: "0.9375rem",
                      marginBottom: "0.625rem",
                      paddingLeft: "1.25rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent-emerald)",
                        fontWeight: 600,
                      }}
                    >
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Software Engineering",
                  "Research",
                  "Prototyping",
                  "System Architecture",
                  "SDLC",
                ].map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
