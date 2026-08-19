"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { additionalProjects } from "@/data/projects";
import FadeUp from "../motion/FadeUp";
import StaggerChildren, {
  staggerItemVariants,
} from "../motion/StaggerChildren";
import SectionLabel from "../ui/SectionLabel";

export default function Projects() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="container">
        <SectionLabel label="More Projects" number="04" />

        <FadeUp>
          <h2 className="heading-xl mb-16" style={{ maxWidth: "600px" }}>
            And many more explorations
          </h2>
        </FadeUp>

        <StaggerChildren
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          }}
          staggerDelay={0.08}
        >
          {additionalProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItemVariants}
              className="card group"
              style={{
                background: "var(--bg-secondary)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top accent dot */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: project.accent }}
                />
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-subtle"
                      style={{ display: "inline-flex", padding: "4px" }}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon width={16} height={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-subtle"
                      style={{ display: "inline-flex", padding: "4px" }}
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="heading-md mb-2 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
                <ArrowUpRight
                  size={16}
                  style={{
                    color: "var(--text-muted)",
                    opacity: 0,
                    transform: "translate(-4px, 4px)",
                    transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                {project.tagline}
              </p>

              <p
                className="text-body flex-1"
                style={{ fontSize: "0.875rem", marginBottom: "1.25rem" }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="pill"
                    style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
