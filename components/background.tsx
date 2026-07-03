"use client";

import { useEffect, useRef } from "react";
import { Particles } from "./particles";
import { useMouseParallax } from "@/hooks/use-animations";

export function Background() {
    const { ref: parallaxRef, offset } = useMouseParallax(30);
    const orbRef = useRef<HTMLDivElement>(null);

    // Parallax on scroll for orbs
    useEffect(() => {
        const handleScroll = () => {
            if (orbRef.current) {
                const y = window.scrollY * 0.3;
                orbRef.current.style.transform = `translateY(${y}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={parallaxRef}
            className="fixed inset-0 -z-50 overflow-hidden pointer-events-none noise-overlay"
        >
            {/* Animated morphing gradient orbs with parallax */}
            <div ref={orbRef} className="absolute inset-0">
                <div
                    className="absolute -left-40 top-1/4 h-[500px] w-[500px] animate-morph bg-primary/8 blur-[160px] animate-glow-pulse"
                    style={{
                        transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                <div
                    className="absolute -right-40 bottom-1/4 h-[600px] w-[600px] animate-morph bg-primary/6 blur-[180px] animate-glow-pulse"
                    style={{
                        animationDelay: "1.5s",
                        transform: `translate(${offset.x * -0.3}px, ${offset.y * -0.3}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] animate-morph bg-primary/4 blur-[200px] animate-glow-pulse"
                    style={{
                        animationDelay: "3s",
                        transform: `translate(calc(-50% + ${offset.x * 0.2}px), calc(-50% + ${offset.y * 0.2}px))`,
                        transition: "transform 0.3s ease-out",
                    }}
                />
            </div>

            {/* Orbit rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border border-primary/[0.04]">
                    <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-primary/30" />
                </div>
                <div className="absolute h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse rounded-full border border-primary/[0.03]">
                    <div className="absolute -right-1 top-1/2 h-1.5 w-1.5 rounded-full bg-primary/20" />
                </div>
            </div>

            <Particles />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}
