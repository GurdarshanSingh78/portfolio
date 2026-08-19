"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { eliteProjects } from "@/data/projects";
import FadeUp from "../motion/FadeUp";
import SectionLabel from "../ui/SectionLabel";
import MagneticButton from "../ui/MagneticButton";

export default function FeaturedWork() {
  return (
    <section id="work" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <SectionLabel label="Featured Work" number="03" />

        <FadeUp>
          <h2 className="heading-xl mb-6" style={{ maxWidth: "700px" }}>
            Engineering projects that push boundaries
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="text-body mb-20"
            style={{ maxWidth: "600px" }}
          >
            Each project represents a deep dive into a different domain of
            computer science — from distributed systems to mathematical
            optimization.
          </p>
        </FadeUp>

        <div className="flex flex-col gap-20">
          {eliteProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.05}>
              <article className="project-card-featured">
                {/* Accent bar */}
                <div
                  className="project-accent-bar"
                  style={{ background: project.accent }}
                />

                <div
                  className="p-8 md:p-12"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                  }}
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <div>
                        <span
                          className="text-caption block mb-3"
                          style={{ color: project.accent }}
                        >
                          Featured Project
                        </span>
                        <h3
                          className="heading-xl"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "1.0625rem",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                          }}
                        >
                          {project.tagline}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 shrink-0">
                        {project.liveUrl && (
                          <MagneticButton
                            as="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            strength={0.2}
                          >
                            <ExternalLink size={15} />
                            Live Demo
                          </MagneticButton>
                        )}
                        {project.githubUrl && (
                          <MagneticButton
                            as="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                            strength={0.3}
                          >
                            <GithubIcon width={17} height={17} />
                          </MagneticButton>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-body mb-8" style={{ maxWidth: "700px" }}>
                      {project.description}
                    </p>

                    {/* Problem + Innovations Grid */}
                    <div
                      className="grid gap-8 mb-8"
                      style={{
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(280px, 1fr))",
                      }}
                    >
                      {/* Problem */}
                      <div className="card-flat">
                        <h4
                          className="text-caption mb-3"
                          style={{ color: project.accent }}
                        >
                          The Problem
                        </h4>
                        <p
                          className="text-body"
                          style={{ marginBottom: 0, fontSize: "0.9375rem" }}
                        >
                          {project.problem}
                        </p>
                      </div>

                      {/* Innovations */}
                      <div className="card-flat">
                        <h4
                          className="text-caption mb-3"
                          style={{ color: project.accent }}
                        >
                          Key Innovations
                        </h4>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {project.innovations.map((item) => (
                            <li
                              key={item}
                              className="text-body"
                              style={{
                                fontSize: "0.9375rem",
                                marginBottom: "0.5rem",
                                paddingLeft: "1rem",
                                position: "relative",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  color: project.accent,
                                  fontWeight: 600,
                                }}
                              >
                                ›
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Engineering Challenges */}
                    <div className="mb-8">
                      <h4 className="text-caption mb-4">
                        Engineering Challenges
                      </h4>
                      <div
                        className="grid gap-3"
                        style={{
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        }}
                      >
                        {project.challenges.map((challenge) => (
                          <div
                            key={challenge}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                              style={{ background: project.accent }}
                            />
                            <span
                              style={{
                                fontSize: "0.9375rem",
                                color: "var(--text-secondary)",
                                lineHeight: "1.5",
                              }}
                            >
                              {challenge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
