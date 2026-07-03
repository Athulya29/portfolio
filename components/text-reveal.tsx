"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

// Word-by-word reveal
export function TextReveal({
  text,
  className,
  delay = 0,
  wordDelay = 60,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span";
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  const words = text.split(" ");

  return (
    <Tag ref={ref as React.Ref<HTMLParagraphElement>} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <span
            className={cn(
              "inline-block transition-all ease-out",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
            style={{
              transitionDuration: "600ms",
              transitionDelay: `${delay + i * wordDelay}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

// Character-by-character reveal for headings
export function CharReveal({
  text,
  className,
  delay = 0,
  charDelay = 30,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className={cn(
              "inline-block transition-all ease-out",
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-[110%] opacity-0 blur-sm"
            )}
            style={{
              transitionDuration: "500ms",
              transitionDelay: `${delay + i * charDelay}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

// Line reveal with clip
export function LineReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  const directionClasses = {
    up: isVisible ? "translate-y-0" : "translate-y-8",
    left: isVisible ? "translate-x-0" : "-translate-x-8",
    right: isVisible ? "translate-x-0" : "translate-x-8",
  };

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "transition-all ease-out",
          isVisible ? "opacity-100" : "opacity-0",
          directionClasses[direction]
        )}
        style={{
          transitionDuration: "900ms",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
