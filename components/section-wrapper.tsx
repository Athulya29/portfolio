"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
}: SectionWrapperProps) {
  const { ref, isVisible } = useIntersection({ threshold: 0.03 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "opacity-0 translate-y-10 transition-all duration-1000 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

export function AnimatedElement({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
}) {
  const { ref, isVisible } = useIntersection({ threshold: 0.08 });

  const animationClasses = {
    "fade-up": "translate-y-10",
    "fade-in": "",
    "slide-left": "-translate-x-10",
    "slide-right": "translate-x-10",
    scale: "scale-90",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-800 ease-out",
        animationClasses[animation],
        isVisible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: "800ms" }}
    >
      {children}
    </div>
  );
}
