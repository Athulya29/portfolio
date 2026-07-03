"use client";

import { useEffect, useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "circle" | "square" | "triangle";
  rotation: number;
}

export function FloatingShapes({ count = 6 }: { count?: number }) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const s: Shape[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 15,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      type: (["circle", "square", "triangle"] as const)[Math.floor(Math.random() * 3)],
      rotation: Math.random() * 360,
    }));
    setShapes(s);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float-drift"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            transform: `rotate(${shape.rotation}deg)`,
          }}
        >
          {shape.type === "circle" && (
            <div className="h-full w-full rounded-full border border-primary/[0.06] bg-primary/[0.02]" />
          )}
          {shape.type === "square" && (
            <div className="h-full w-full rounded-lg border border-primary/[0.06] bg-primary/[0.02] rotate-45" />
          )}
          {shape.type === "triangle" && (
            <div
              className="h-0 w-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid hsl(var(--primary) / 0.03)`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
