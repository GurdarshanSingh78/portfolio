"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yValue = direction === "up" ? distance : 0;
  const xValue =
    direction === "left" ? -distance : direction === "right" ? distance : 0;

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [yValue, 0, 0, -yValue / 2]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [xValue, 0, 0, -xValue / 2]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y, x }} className={className}>
      {children}
    </motion.div>
  );
}
