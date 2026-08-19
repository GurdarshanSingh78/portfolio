"use client";

import FadeUp from "../motion/FadeUp";

interface SectionLabelProps {
  label: string;
  number?: string;
  className?: string;
}

export default function SectionLabel({
  label,
  number,
  className = "",
}: SectionLabelProps) {
  return (
    <FadeUp className={className}>
      <div className="flex items-center gap-3 mb-6">
        {number && (
          <span className="text-caption" style={{ color: "var(--text-faint)" }}>
            {number}
          </span>
        )}
        <div
          className="h-px flex-shrink-0"
          style={{
            width: "32px",
            background: "var(--border-light)",
          }}
        />
        <span className="text-caption">{label}</span>
      </div>
    </FadeUp>
  );
}
