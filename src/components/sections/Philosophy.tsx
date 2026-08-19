"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Sparkles } from "lucide-react";
import FadeUp from "../motion/FadeUp";
import StaggerChildren, {
  staggerItemVariants,
} from "../motion/StaggerChildren";
import SectionLabel from "../ui/SectionLabel";

const philosophies = [
  {
    icon: Lightbulb,
    title: "First Principles Thinking",
    description:
      "I decompose complex problems to their fundamental truths, then reason upward. No cargo-cult programming — every design decision is deliberate and justified.",
    accent: "var(--accent-blue)",
  },
  {
    icon: Layers,
    title: "Systems Architecture",
    description:
      "Software is a living system. I design for composability, resilience, and evolution — building abstractions that scale with complexity rather than crumble under it.",
    accent: "var(--accent-emerald)",
  },
  {
    icon: Sparkles,
    title: "Elegant Simplicity",
    description:
      "The best engineering feels effortless. I strive for solutions where complexity is absorbed by the architecture, not pushed onto the user or the next developer.",
    accent: "var(--accent-warm)",
  },
];

export default function Philosophy() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <SectionLabel label="Philosophy" number="02" />

        <FadeUp>
          <h2 className="heading-xl mb-16" style={{ maxWidth: "600px" }}>
            How I think about engineering
          </h2>
        </FadeUp>

        <StaggerChildren
          className="philosophy-grid"
        >
          {philosophies.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItemVariants}
              className="card group"
              style={{ background: "var(--bg-secondary)" }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                style={{
                  background: `${item.accent}10`,
                  color: item.accent,
                }}
              >
                <item.icon size={22} />
              </div>
              <h3
                className="heading-md mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-body" style={{ marginBottom: 0 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
