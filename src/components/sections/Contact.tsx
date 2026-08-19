"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import FadeUp from "../motion/FadeUp";
import MagneticButton from "../ui/MagneticButton";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/GurdarshanSingh78",
    icon: GithubIcon,
    description: "Open source & projects",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gurdarshan-singh",
    icon: LinkedinIcon,
    description: "Professional network",
  },
  {
    label: "Email",
    href: "mailto:gurdarshansingh@example.com",
    icon: Mail,
    description: "Get in touch directly",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-narrow text-center">
        <FadeUp>
          <span className="text-caption block mb-6">Get in Touch</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="heading-display mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Let&rsquo;s build
            <br />
            something great
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="text-body mx-auto mb-12"
            style={{ maxWidth: "480px" }}
          >
            I&rsquo;m always open to discussing new opportunities, interesting
            projects, or collaborations in software engineering.
          </p>
        </FadeUp>

        {/* Contact links */}
        <FadeUp delay={0.3}>
          <div
            className="grid gap-4 mb-10 mx-auto"
            style={{
              maxWidth: "560px",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-flat group text-center"
                style={{
                  textDecoration: "none",
                  padding: "1.5rem 1rem",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 mx-auto"
                  style={{
                    border: "1.5px solid var(--border-light)",
                    color: "var(--text-secondary)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <link.icon size={18} />
                </div>
                <div
                  className="heading-md flex items-center justify-center gap-1"
                  style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    style={{
                      color: "var(--text-muted)",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                    }}
                    className="group-hover:opacity-100"
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {link.description}
                </span>
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Resume download */}
        <FadeUp delay={0.4}>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            strength={0.2}
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
        </FadeUp>
      </div>
    </section>
  );
}
