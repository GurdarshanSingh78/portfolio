"use client";

import { useCallback, useRef, useState, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  target,
  rel,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setPosition({ x: deltaX, y: deltaY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.15s ease-out",
  };

  const props = {
    ref: ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>,
    className,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (as === "a") {
    return (
      <a {...props} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
}
