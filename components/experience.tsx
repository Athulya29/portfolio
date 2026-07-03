"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { LineReveal } from "./text-reveal";
import { useScrollProgress } from "@/hooks/use-animations";

const experiences = [
  {
    title: "Freelance Developer",
    company: "Woodenclouds",
    location: "Kochi, Kerala",
    period: "Jan 2026 - Present",
    description: [
      "Built full-stack web applications using the MERN stack with responsive UI and scalable APIs.",
      "Managed deployment, debugging, authentication, and database integration for live projects.",
      "Collaborated with teams and clients using GitHub for version control, project tracking, and smooth workflow."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
    current: true,
  },
  {
    title: "MERN Stack Developer Intern",
    company: "Inmakes Infotech Pvt Ltd",
    location: "Ernakulam, Kerala",
    period: "Jun 2025 – Dec 2025",
    description: [
      "Designed and developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built RESTful APIs, implemented JWT authentication, and optimized performance for scalability.",
      "Collaborated in Agile teams for deployment, debugging, and continuous product improvement."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT"],
    current: false,
  },
  {
    title: "Artificial Intelligence & Machine Learning Intern",
    company: "Tessolve",
    location: "",
    period: "Apr 2023",
    description: [
      "Processed and visualized datasets using Python (NumPy, Pandas, Matplotlib).",
      "Assisted in building, training, and evaluating ML models for predictive analytics."
    ],
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "ML", "Predictive Analytics"],
    current: false,
  },
];

function TimelineProgress() {
  const { ref, progress } = useScrollProgress();
  return (
    <div ref={ref} className="absolute left-6 top-0 bottom-0 w-px md:left-1/2">
      {/* Background line */}
      <div className="absolute inset-0 bg-border/20" />
      {/* Animated progress line */}
      <div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 transition-all duration-100"
        style={{ height: `${Math.min(progress * 120, 100)}%` }}
      />
      {/* Glow at progress point */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary/20 blur-lg transition-all duration-100"
        style={{ top: `${Math.min(progress * 120, 100)}%` }}
      />
    </div>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative py-24 px-6 section-separator">
      <div className="mx-auto max-w-4xl">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <LineReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Experience</span>
            </LineReveal>
            <LineReveal delay={100}>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                My professional journey
              </h2>
            </LineReveal>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        {/* Timeline */}
        <div className="relative">
          <TimelineProgress />

          {experiences.map((exp, i) => (
            <AnimatedElement key={exp.title} delay={i * 250} animation={i % 2 === 0 ? "slide-left" : "slide-right"}>
              <div className={`relative mb-14 last:mb-0 flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className={`h-3.5 w-3.5 rounded-full border-2 border-primary bg-background transition-all duration-700 ${exp.current ? "scale-125 shadow-lg shadow-primary/30" : ""}`} />
                  {exp.current && (
                    <>
                      <div className="absolute h-7 w-7 animate-ping rounded-full bg-primary/20" />
                      <div className="absolute h-5 w-5 animate-pulse rounded-full bg-primary/10" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-28px)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="group rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/20 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 hover:rotate-[0.5deg]">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/30">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-1 transition-colors duration-500 group-hover:text-primary">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">
                        <Briefcase className="h-3.5 w-3.5 text-primary/60 transition-transform duration-500 group-hover:scale-110" />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">
                          <MapPin className="h-3.5 w-3.5 text-primary/60 transition-transform duration-500 group-hover:scale-110" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <ul className="mb-4 flex flex-col gap-2.5">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed transition-all duration-500 group-hover:text-foreground/60"
                          style={{ transitionDelay: `${j * 50}ms` }}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/50 transition-all duration-500 group-hover:bg-primary group-hover:scale-150" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIdx) => (
                        <span
                          key={tag}
                          className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-105"
                          style={{ transitionDelay: `${tagIdx * 40}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
