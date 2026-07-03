"use client";

import { useEffect, useRef, useState } from "react";

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    // Detect hoverable elements
    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      }
    };
    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    let raf: number;
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.15;
      trail.current.y += (pos.current.y - trail.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x}px, ${trail.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference transition-[width,height,opacity] duration-300 ease-out"
        style={{
          width: hovering ? "48px" : "8px",
          height: hovering ? "48px" : "8px",
          borderRadius: "50%",
          backgroundColor: hovering ? "rgba(255,255,255,0.1)" : "hsl(var(--primary))",
          border: hovering ? "1.5px solid rgba(255,255,255,0.5)" : "none",
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Trail ring */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] transition-[width,height,opacity,border-color] duration-500 ease-out"
        style={{
          width: hovering ? "56px" : "32px",
          height: hovering ? "56px" : "32px",
          borderRadius: "50%",
          border: `1px solid hsl(var(--primary) / ${hovering ? 0.5 : 0.2})`,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
