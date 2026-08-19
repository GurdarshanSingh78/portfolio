"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Brain,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import FadeUp from "../motion/FadeUp";
import StaggerChildren, {
  staggerItemVariants,
} from "../motion/StaggerChildren";
import SectionLabel from "../ui/SectionLabel";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "code-2": Code2,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  brain: Brain,
  sparkles: Sparkles,
};

const accentColors = [
  "var(--accent-blue)",
  "var(--accent-emerald)",
  "var(--accent-warm)",
  "var(--accent-purple)",
  "var(--accent-amber)",
  "var(--accent-blue)",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container">
        <SectionLabel label="Skills" number="05" />

        <FadeUp>
          <h2 className="heading-xl mb-16" style={{ maxWidth: "550px" }}>
            Technical toolkit
          </h2>
        </FadeUp>

        <StaggerChildren
          className="skills-grid"
          staggerDelay={0.08}
        >
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            const accent = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={category.title}
                variants={staggerItemVariants}
                className="card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{
                      background: `color-mix(in srgb, ${accent} 10%, transparent)`,
                      color: accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    className="heading-md"
                    style={{ fontSize: "1.125rem", margin: 0 }}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
