"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { Code2, Server, Database, GitBranch, Download } from "lucide-react";
import { TextReveal, LineReveal } from "./text-reveal";
import { useCounter } from "@/hooks/use-animations";
import { FloatingShapes } from "./floating-shapes";
import Image from "next/image";

const highlights = [
  { icon: Code2, title: "Frontend", description: "React.js, responsive UIs, modern JavaScript" },
  { icon: Server, title: "Backend", description: "Node.js, Express.js, RESTful APIs" },
  { icon: Database, title: "Database", description: "MongoDB, SQL, data modeling" },
  { icon: GitBranch, title: "DevOps", description: "Git, GitHub, deployment, CI/CD" },
];

function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div
      ref={ref}
      className="group text-center rounded-xl border border-border/30 bg-card/20 py-3 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="text-xl font-bold text-primary tabular-nums">
        {count}{suffix}
      </div>
      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about" className="relative py-24 px-6 section-separator">
      <FloatingShapes count={4} />
      <div className="mx-auto max-w-6xl relative z-10">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <LineReveal delay={0}>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                About Me
              </span>
            </LineReveal>
            <LineReveal delay={100}>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Passionate about building great software
              </h2>
            </LineReveal>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          {/* Image Side */}
          <AnimatedElement animation="slide-left" delay={100} className="lg:col-span-2">
            <div className="relative mx-auto w-full max-w-sm group/img">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl opacity-60 transition-opacity duration-700 group-hover/img:opacity-90" />
              <div className="absolute -top-3 -right-3 h-24 w-24 rounded-2xl border border-primary/20 bg-primary/5 transition-all duration-700 group-hover/img:rotate-6 group-hover/img:scale-110" />
              <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl border border-primary/20 bg-primary/5 transition-all duration-700 group-hover/img:-rotate-6 group-hover/img:scale-110" />

              <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-1.5 backdrop-blur-sm shadow-2xl shadow-background/50 transition-all duration-700 group-hover/img:shadow-primary/10">
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/athulya_actual_profile.png"
                    alt="Athulya A R - Software Engineer"
                    width={400}
                    height={533}
                    className="h-full w-full object-cover object-top transition-all duration-1000 group-hover/img:scale-110"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                <a
                  href="/Athulya_Resume.pdf"
                  download="Athulya_Resume.pdf"
                  className="group/dl inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/90 px-5 py-2.5 text-xs font-semibold text-primary backdrop-blur-xl shadow-lg shadow-primary/10 transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95"
                >
                  <Download className="h-3.5 w-3.5 transition-transform duration-500 group-hover/dl:-translate-y-0.5 group-hover/dl:scale-110" />
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedElement>

          {/* Text Side */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <TextReveal
              text="I'm a motivated software engineer with hands-on experience building scalable web applications using the MERN stack. I specialize in creating responsive user interfaces, designing RESTful APIs, implementing JWT authentication, and database integration."
              className="text-base leading-relaxed text-muted-foreground"
              delay={200}
            />

            <TextReveal
              text="With a B.E. in Computer Science from Amrita College of Engineering and Technology, I graduated with a CGPA of 8.9/10, bringing solid foundations in software design, web technologies, and machine learning models."
              className="text-base leading-relaxed text-muted-foreground"
              delay={400}
              wordDelay={40}
            />

            {/* Stats Row with animated counters */}
            <AnimatedElement animation="fade-up" delay={350}>
              <div className="grid grid-cols-4 gap-3 mt-2">
                <StatCounter value={5} label="Projects Built" />
                <StatCounter value={3} label="Internships" />
                <StatCounter value={10} label="Tech Stack" suffix="+" />
                <StatCounter value={4} label="Certifications" />
              </div>
            </AnimatedElement>

            {/* Highlight Cards with tilt-like hover */}
            <div className="mt-2 grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <AnimatedElement key={item.title} delay={500 + i * 120}>
                  <div className="group rounded-xl border border-border/40 bg-card/30 p-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:rotate-1">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-5 w-5 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                      <h3 className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
