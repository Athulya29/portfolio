"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-card/10 backdrop-blur-sm">
      {/* Back to top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <a
          href="#hero"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card/80 text-muted-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        {/* Logo */}
        <span className="text-xl font-bold tracking-tight text-foreground">
          {"AR"}
          <span className="text-primary">.</span>
        </span>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/Athulya29", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/athulyaar", label: "LinkedIn" },
            { icon: Mail, href: "mailto:athulyaarkrishna@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border/20 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>{"Designed & Built with"}</span>
            <Heart className="h-3 w-3 text-primary fill-primary animate-pulse" />
            <span>{"by Athulya A R"}</span>
          </div>
          <p className="text-[10px] text-muted-foreground/40">
            {"© 2026 All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
