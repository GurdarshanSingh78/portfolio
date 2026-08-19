"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Award } from "lucide-react";
import { timelineEvents } from "@/data/timeline";
import FadeUp from "../motion/FadeUp";
import SectionLabel from "../ui/SectionLabel";

const typeIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  education: GraduationCap,
  experience: Briefcase,
  project: Rocket,
  certification: Award,
};

const typeColors: Record<string, string> = {
  education: "var(--accent-blue)",
  experience: "var(--accent-emerald)",
  project: "var(--accent-warm)",
  certification: "var(--accent-purple)",
};

export default function Timeline() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <SectionLabel label="Journey" number="06" />

        <FadeUp>
          <h2 className="heading-xl mb-20" style={{ maxWidth: "500px" }}>
            The path so far
          </h2>
        </FadeUp>

        {/* Desktop timeline */}
        <div className="relative max-md:hidden" style={{ paddingBottom: "2rem" }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {timelineEvents.map((event, index) => {
            const Icon = typeIcons[event.type] || Rocket;
            const color = typeColors[event.type];
            const isLeft = index % 2 === 0;

            return (
              <FadeUp
                key={event.id}
                delay={index * 0.1}
                className="relative mb-16 last:mb-0"
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    top: "28px",
                    background: color,
                    borderColor: color,
                    boxShadow: `0 0 0 4px color-mix(in srgb, ${color} 15%, transparent)`,
                  }}
                />

                {/* Content */}
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "1fr 60px 1fr",
                    gap: 0,
                  }}
                >
                  <div
                    style={{
                      padding: isLeft ? "0 2rem 0 0" : 0,
                      textAlign: isLeft ? "right" : "left",
                      gridColumn: isLeft ? 1 : 3,
                      gridRow: 1,
                    }}
                  >
                    <div className="card" style={{ display: "inline-block", textAlign: "left", width: "100%" }}>
                      <div className="flex items-center gap-2 mb-3" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
                        <div
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                          style={{
                            background: `color-mix(in srgb, ${color} 10%, transparent)`,
                            color,
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <span
                          className="text-caption"
                          style={{ color, letterSpacing: "0.06em" }}
                        >
                          {event.period}
                        </span>
                      </div>
                      <h3
                        className="heading-md mb-1"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {event.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-muted)",
                          marginBottom: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {event.subtitle}
                      </p>
                      <p
                        className="text-body"
                        style={{
                          fontSize: "0.875rem",
                          marginBottom: event.tags ? "1rem" : 0,
                        }}
                      >
                        {event.description}
                      </p>
                      {event.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="pill"
                              style={{
                                fontSize: "0.6875rem",
                                padding: "0.1875rem 0.5rem",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Year label on opposite side */}
                  <div
                    style={{
                      gridColumn: isLeft ? 3 : 1,
                      gridRow: 1,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: isLeft ? "flex-start" : "flex-end",
                      paddingTop: "1.5rem",
                      paddingLeft: isLeft ? "2rem" : 0,
                      paddingRight: isLeft ? 0 : "2rem",
                    }}
                  >
                    <span
                      className="heading-lg"
                      style={{
                        color: "var(--text-faint)",
                        fontSize: "2.5rem",
                      }}
                    >
                      {event.year}
                    </span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative" style={{ paddingLeft: "48px" }}>
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border-light)" }}
          />

          {timelineEvents.map((event, index) => {
            const Icon = typeIcons[event.type] || Rocket;
            const color = typeColors[event.type];

            return (
              <FadeUp
                key={event.id}
                delay={index * 0.1}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot */}
                <div
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: "-30px",
                    top: "24px",
                    background: color,
                    boxShadow: `0 0 0 4px color-mix(in srgb, ${color} 15%, transparent)`,
                  }}
                />

                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
                      style={{
                        background: `color-mix(in srgb, ${color} 10%, transparent)`,
                        color,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-caption" style={{ color }}>
                      {event.period}
                    </span>
                  </div>
                  <h3
                    className="heading-md mb-1"
                    style={{ fontSize: "1.0625rem" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                    }}
                  >
                    {event.subtitle}
                  </p>
                  <p
                    className="text-body"
                    style={{ fontSize: "0.875rem", marginBottom: 0 }}
                  >
                    {event.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
