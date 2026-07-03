"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { Award, ExternalLink } from "lucide-react";
import { LineReveal } from "./text-reveal";
import { useStagger } from "@/hooks/use-animations";
import { cn } from "@/lib/utils";

const certifications = [
  { title: "Crash Course on Python", issuer: "Google", color: "from-blue-500/10 to-sky-500/10", borderHover: "hover:border-blue-500/30" },
  { title: "Introduction to Java", issuer: "LearnQuest", color: "from-orange-500/10 to-amber-500/10", borderHover: "hover:border-orange-500/30" },
  { title: "Python for Data Science", issuer: "IBM", color: "from-emerald-500/10 to-teal-500/10", borderHover: "hover:border-emerald-500/30" },
  { title: "MERN Stack Fundamentals", issuer: "Great Learning", color: "from-rose-500/10 to-pink-500/10", borderHover: "hover:border-rose-500/30" },
];

export function Certifications() {
  const { ref, visibleCount } = useStagger(certifications.length, 150);

  return (
    <SectionWrapper id="certifications" className="relative py-24 px-6 section-separator">
      <div className="mx-auto max-w-4xl">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <LineReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Certifications</span>
            </LineReveal>
            <LineReveal delay={100}>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Professional credentials
              </h2>
            </LineReveal>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        <div ref={ref} className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={cn(
                "group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-all duration-700 hover:bg-card/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:rotate-[0.5deg]",
                cert.borderHover,
                i < visibleCount
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              )}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Award className="h-5 w-5" />
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-sm font-semibold text-foreground transition-colors duration-500 group-hover:text-primary">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  {cert.issuer}
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-500 group-hover:opacity-60 group-hover:translate-x-0" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
