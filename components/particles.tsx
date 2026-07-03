"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      baseOpacity: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
        this.baseOpacity = Math.random() * 0.5 + 0.3;
        this.opacity = this.baseOpacity;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity =
          this.baseOpacity + Math.sin(Date.now() * 0.001 + this.x) * 0.15;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const color = isDark ? `rgba(129, 140, 248` : `rgba(99, 102, 241`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `${color}, ${this.opacity})`;
        ctx.fillStyle = `${color}, ${this.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const count = Math.min(80, Math.floor((w * h) / 10000));

    particles = Array.from({ length: count }, () => new Particle(w, h));

    const drawLines = (isDark: boolean) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15;
            const color = isDark
              ? `rgba(129, 140, 248, ${opacity})`
              : `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      const isDark = resolvedTheme === "dark";

      particles.forEach((p) => {
        p.update(cw, ch);
        p.draw(ctx, isDark);
      });

      drawLines(isDark);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
