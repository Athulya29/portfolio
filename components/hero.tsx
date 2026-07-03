"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight, Sparkles } from "lucide-react";

const roles = ["Software Engineer", "MERN Stack Developer", "Full Stack Engineer", "Problem Solver"];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const typedText = useTypingEffect(roles);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 md:pt-32 pb-12"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        {/* Greeting chip */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="group inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/40 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10">
            <Sparkles className="h-3.5 w-3.5 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-primary font-mono text-xs tracking-wide">{"Hello, World!"}</span>
          </span>
        </div>

        {/* Name with staggered letter animation */}
        <div className="animate-float">
          <h1
            className={`text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-8xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="inline-block overflow-hidden mr-4">
              <span
                className={`inline-block transition-transform duration-700 ease-out ${loaded ? "translate-y-0" : "translate-y-full"
                  }`}
                style={{ transitionDelay: "500ms" }}
              >
                {"I'm "}
              </span>
            </span>
            <span className="relative inline-block">
              {/* Animated underline */}
              <span
                className={`absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/30 transition-all duration-1000 ease-out ${loaded ? "w-full" : "w-0"
                  }`}
                style={{ transitionDelay: "1200ms" }}
              />
              {"Athulya".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span
                    className={`inline-block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      }`}
                    style={{ transitionDelay: `${600 + i * 60}ms` }}
                  >
                    {char}
                  </span>
                </span>
              ))}
              <span className="inline-block overflow-hidden mx-3">
                <span
                  className={`inline-block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent transition-all duration-700 ease-out ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  {" "}
                </span>
              </span>
              {"A R".split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span
                    className={`inline-block bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40 bg-clip-text text-transparent transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      }`}
                    style={{ transitionDelay: `${960 + i * 50}ms` }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Typing animation title */}
        <div
          className={`min-h-[2.5rem] transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl font-mono">
            <span className="text-primary/40 transition-colors duration-500">{"<"}</span>
            <span className="text-foreground">{typedText}</span>
            <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary animate-blink ml-0.5 align-middle" />
            <span className="text-primary/40 transition-colors duration-500">{" />"}</span>
          </p>
        </div>

        {/* Tagline */}
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground/80 sm:text-lg transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
            }`}
          style={{ transitionDelay: "1600ms" }}
        >
          Building scalable web applications with modern technologies.
          Passionate about clean code, intuitive user experiences, and turning ideas into reality.
        </p>

        {/* CTA Buttons with staggered bounce */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"
            }`}
          style={{ transitionDelay: "1800ms" }}
        >
          {[
            {
              href: "#projects",
              className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[0.98]",
              content: (
                <>
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ChevronRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Ripple on hover */}
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/10 transition-all duration-700 group-hover:h-80 group-hover:w-80" />
                  </span>
                </>
              ),
              delay: 1900,
            },
            {
              href: "/Athulya_Resume.pdf",
              download: "Athulya_Resume.pdf",
              className: "group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-500 hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.98]",
              content: (
                <>
                  <Download className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                  Download CV
                </>
              ),
              delay: 2000,
            },
            {
              href: "#contact",
              className: "inline-flex items-center gap-2 rounded-xl border border-border/40 bg-card/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[0.98]",
              content: <>Contact Me</>,
              delay: 2100,
            },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              {...("download" in btn ? { download: btn.download } : {})}
              className={`${btn.className} ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: `${btn.delay}ms` }}
            >
              {btn.content}
            </a>
          ))}
        </div>

        {/* Social Links with bounce-in */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"
            }`}
          style={{ transitionDelay: "2200ms" }}
        >
          {[
            { icon: Github, href: "https://github.com/Athulya29", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/athulyaar", label: "LinkedIn" },
            { icon: Mail, href: "mailto:athulyaarkrishna@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-border/30 bg-card/20 text-muted-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:text-primary hover:bg-primary/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 hover:rotate-3 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              style={{ transitionDelay: `${2300 + i * 100}ms` }}
            >
              <Icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-125" />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-9 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll Indicator with smoother animation */}
        <div
          className={`mt-12 transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "2600ms" }}
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-muted-foreground/40 transition-all duration-500 hover:text-primary"
            aria-label="Scroll down"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium transition-all duration-500 group-hover:tracking-[0.5em]">
              Explore
            </span>
            <div className="relative h-8 w-5 rounded-full border border-muted-foreground/20 transition-all duration-500 group-hover:border-primary/40 group-hover:h-10">
              <div className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-primary animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

