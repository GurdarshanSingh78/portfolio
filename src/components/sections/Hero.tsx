"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import FloatingShapes from "../ui/FloatingShapes";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <FloatingShapes />

      <motion.div
        style={{ opacity, y, scale }}
        className="container relative z-10"
      >
        <div
          className="flex flex-col items-center text-center"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ marginBottom: "2rem" }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--border-light)",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
              }}
            >
              <Image
                src="/profile.jpeg"
                alt="Gurdarshan Singh"
                width={140}
                height={140}
                priority
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </motion.div>

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <span
              className="text-caption inline-block mb-6"
              style={{
                padding: "0.5rem 1.25rem",
                border: "1px solid var(--border-light)",
                borderRadius: "9999px",
                background: "var(--bg-secondary)",
              }}
            >
              Computer Engineer · Systems Builder
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="heading-display mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Gurdarshan Singh
          </motion.h1>

          {/* Tagline */}
          <motion.p
            style={{
              maxWidth: "580px",
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: "1.65",
              marginBottom: "1rem",
              margin: "0 auto 1rem",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            I build scalable systems, intelligent software, and engineering
            projects that solve complex real-world problems.
          </motion.p>

          {/* Location */}
          <motion.p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              marginBottom: "2.5rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            Patiala, Punjab · Thapar Institute of Engineering & Technology
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <MagneticButton
              as="a"
              href="#work"
              className="btn-primary"
              strength={0.2}
            >
              View Projects
              <ArrowDown size={16} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              strength={0.2}
            >
              Resume
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://github.com/GurdarshanSingh78"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              strength={0.3}
            >
              <GithubIcon width={18} height={18} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/gurdarshan-singh-9b11052b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              strength={0.3}
            >
              <LinkedinIcon width={18} height={18} />
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
