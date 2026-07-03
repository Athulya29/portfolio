"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { ExternalLink, Layers, Brain, ShoppingCart, Home, Briefcase } from "lucide-react";
import { LineReveal } from "./text-reveal";
import { useTilt } from "@/hooks/use-animations";
import { FloatingShapes } from "./floating-shapes";
import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  highlights: string[];
  accent: string;
}

const projects: Project[] = [
  {
    title: "Garage Management System",
    description: "Full-stack web platform for managing vehicle services and insurance records with role-based dashboards.",
    icon: Layers,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    highlights: [
      "Designed and deployed interactive dashboards for admins, users, and agents",
      "Implemented secure JWT authentication and scalable RESTful APIs",
      "Improved vehicle maintenance tracking and service workflow efficiency",
      "Integrated insurance records management and reporting systems"
    ],
    accent: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Brain Tumour Classification",
    description: "Ensemble of deep learning models for brain tumor classification using MRI images with CNN architectures and XGBoost.",
    icon: Brain,
    tags: ["Python", "CNN", "XGBoost", "Deep Learning", "MRI", "Data Visualization"],
    highlights: [
      "Developed an ensemble of CNN architectures with an XGBoost classifier meta-learner",
      "Enhanced prediction accuracy and robustness over single-model approaches",
      "Processed and visualized medical imaging datasets to optimize model training",
      "Achieved superior performance metrics for brain tumor classification"
    ],
    accent: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Real Estate Consultancy Website",
    description: "Responsive website for a real estate consultancy client to establish a professional online presence.",
    icon: Home,
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Frontend Development"],
    highlights: [
      "Built a modern, user-friendly interface featuring property listings and services",
      "Designed sections for featured properties, agent profiles, pricing, and contact",
      "Optimized the website for a seamless experience across desktop, tablet, and mobile devices",
      "Created highly responsive UI layouts using modern CSS styling techniques"
    ],
    accent: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Office Automation Solutions Website",
    description: "Responsive single-page website for an office automation solutions provider to showcase products and business offerings.",
    icon: Briefcase,
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Single Page App"],
    highlights: [
      "Created a modern and user-friendly interface with smooth navigation",
      "Showcased products, services, and business offerings dynamically",
      "Designed and optimized responsive layout configurations for all screen sizes",
      "Implemented interactive sections and contact forms to capture business leads"
    ],
    accent: "from-rose-500/10 to-pink-500/10",
  },
  {
    title: "E-Commerce Website",
    description: "Interactive e-commerce platform emphasizing responsive UI design and client-side interactions.",
    icon: ShoppingCart,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Built fully interactive product listings with dynamic search and filtering",
      "Designed clean and intuitive client-side shopping cart interface",
      "Emphasized mobile-first responsive design for cross-device compatibility",
      "Implemented smooth transitions and user-friendly navigation flows"
    ],
    accent: "from-orange-500/10 to-amber-500/10",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tiltRef = useTilt(6);

  return (
    <AnimatedElement delay={index * 150} animation={index % 3 === 0 ? "slide-left" : index % 3 === 2 ? "slide-right" : "fade-up"}>
      <div
        ref={tiltRef}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/10"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease-out, box-shadow 0.5s ease, border-color 0.5s ease, background-color 0.5s ease" }}
      >
        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent rotate-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Header */}
        <div className="relative z-10 p-6 pb-0">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
              <project.icon className="h-5 w-5" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/20 transition-all duration-700 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-500 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="relative z-10 flex-1 p-6 pt-4">
          <ul className="flex flex-col gap-2">
            {project.highlights.map((highlight, j) => (
              <li
                key={j}
                className="flex items-start gap-2.5 text-xs text-muted-foreground/80 transition-all duration-500 group-hover:text-muted-foreground"
                style={{ transitionDelay: `${j * 50}ms` }}
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50 transition-all duration-500 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-sm group-hover:shadow-primary/50" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="relative z-10 border-t border-border/20 p-4 transition-colors duration-500 group-hover:border-primary/10">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tagIdx) => (
              <span
                key={tag}
                className="rounded-md border border-border/30 bg-muted/20 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-all duration-500 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary/80"
                style={{ transitionDelay: `${tagIdx * 40}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects" className="relative py-24 px-6 section-separator">
      <FloatingShapes count={4} />
      <div className="mx-auto max-w-6xl relative z-10">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <LineReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Projects</span>
            </LineReveal>
            <LineReveal delay={100}>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured work
              </h2>
            </LineReveal>
            <LineReveal delay={200}>
              <p className="mt-2 max-w-md text-base text-muted-foreground leading-relaxed">
                A collection of projects that showcase my skills across different domains and technologies.
              </p>
            </LineReveal>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
