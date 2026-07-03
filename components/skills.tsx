"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { LineReveal } from "./text-reveal";
import { useStagger } from "@/hooks/use-animations";
import { FloatingShapes } from "./floating-shapes";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  hoverBorder: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    hoverBorder: "group-hover:border-blue-500/30",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    hoverBorder: "group-hover:border-emerald-500/30",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Mongoose", "Python"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500/20 to-amber-500/20",
    hoverBorder: "group-hover:border-orange-500/30",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-rose-500/20 to-pink-500/20",
    hoverBorder: "group-hover:border-rose-500/30",
    skills: ["Git & GitHub", "Postman", "VS Code", "Render", "Vite", "MongoDB Compass", "Jira"],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, visibleCount } = useStagger(category.skills.length, 60);

  return (
    <AnimatedElement delay={index * 180} animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
      <div
        ref={ref}
        className={cn(
          "group relative rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden",
          category.hoverBorder
        )}
      >
        {/* Gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.05)" }} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
              <category.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.skills.length} technologies
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIdx) => (
              <span
                key={skill}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/50 px-3.5 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 cursor-default",
                  skillIdx < visibleCount
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-3 scale-90"
                )}
                style={{ transitionDelay: `${skillIdx * 30}ms` }}
              >
                <span className={cn(
                  "h-1.5 w-1.5 rounded-full bg-primary/60 transition-all duration-500",
                  skillIdx < visibleCount ? "scale-100" : "scale-0"
                )} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative py-24 px-6 section-separator">
      <FloatingShapes count={5} />
      <div className="mx-auto max-w-6xl relative z-10">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <LineReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Skills
              </span>
            </LineReveal>
            <LineReveal delay={100}>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technologies I work with
              </h2>
            </LineReveal>
            <LineReveal delay={200}>
              <p className="mt-2 max-w-md text-base text-muted-foreground leading-relaxed">
                My technical toolkit spanning front-end, back-end, databases, and developer tools.
              </p>
            </LineReveal>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
