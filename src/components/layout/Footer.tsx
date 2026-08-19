"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="section"
      style={{
        background: "var(--bg-primary)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: "1.5",
              }}
            >
              Designed & built by{" "}
              <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
                Gurdarshan Singh
              </span>
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-faint)",
              }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right — Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-icon"
            aria-label="Back to top"
            style={{ transition: "all 0.3s ease" }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
