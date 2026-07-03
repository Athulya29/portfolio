"use client";

import { SectionWrapper, AnimatedElement } from "./section-wrapper";
import { Mail, Github, Linkedin, MapPin, Send, Download, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "athulyaarkrishna@gmail.com",
    href: "mailto:athulyaarkrishna@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9363012295",
    href: "tel:+919363012295",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Athulya29",
    href: "https://github.com/Athulya29",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Athulya A R",
    href: "https://www.linkedin.com/in/athulyaar",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanniyakumari, Tamilnadu",
    href: "#",
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedElement>
          <div className="flex flex-col items-center gap-3 text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Let's work together"}
            </h2>
            <p className="mt-2 max-w-md text-base text-muted-foreground leading-relaxed">
              {
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great."
              }
            </p>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>
        </AnimatedElement>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, i) => (
            <AnimatedElement key={link.label} delay={i * 100} animation={i < 2 ? "slide-left" : i > 2 ? "slide-right" : "fade-up"}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70 mb-0.5">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {link.value}
                  </p>
                </div>
              </a>
            </AnimatedElement>
          ))}
        </div>

        {/* CTA Buttons */}
        <AnimatedElement delay={500}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:athulyaarkrishna@gmail.com"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="relative z-10">Send me an email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="/Athulya_Resume.pdf"
              download="Athulya_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-8 py-4 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
