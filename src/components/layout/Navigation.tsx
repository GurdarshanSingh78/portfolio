"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 200);
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: "1rem" }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.nav
        className="nav-backdrop flex items-center gap-1 px-2 py-1.5"
        style={{
          borderRadius: "9999px",
          border: scrolled
            ? "1px solid var(--border-light)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-md)" : "none",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center justify-center px-4 py-2 rounded-full"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            fontStyle: "italic",
            color: "var(--text-primary)",
            textDecoration: "none",
            fontWeight: 400,
            transition: "background 0.2s ease",
          }}
          aria-label="Back to top"
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--bg-elevated)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          GS
        </a>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "var(--border-light)",
            margin: "0 0.25rem",
          }}
        />

        {/* Nav links */}
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 rounded-full"
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.2s ease",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--bg-elevated)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {link.label}
          </a>
        ))}
      </motion.nav>
    </motion.header>
  );
}
