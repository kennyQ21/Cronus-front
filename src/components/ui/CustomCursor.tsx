"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || typeof window === "undefined") return;

    const trails = trailRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    const onMouseDown = () => cursorRef.current?.classList.add("scale-75");
    const onMouseUp = () => cursorRef.current?.classList.remove("scale-75");

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Animate trail particles
    const positions: { x: number; y: number }[] = Array(8).fill({ x: 0, y: 0 });

    const animate = () => {
      positions.unshift({ ...mouseRef.current });
      if (positions.length > 8) positions.pop();

      trails.forEach((el, i) => {
        if (!el || !positions[i]) return;
        const p = positions[i];
        const alpha = 1 - i / 8;
        const size = 6 - i * 0.5;
        el.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px)`;
        el.style.opacity = String(alpha * 0.4);
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] transition-transform duration-75"
        style={{ willChange: "transform" }}
      >
        <div className="w-full h-full rounded-full border-2 border-[#00E5FF] bg-transparent" />
        <div className="absolute inset-1 rounded-full bg-[#00E5FF] opacity-50" />
      </div>
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailRef.current[i] = el; }}
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-[#00E5FF]"
          style={{ willChange: "transform", transition: "opacity 0.1s" }}
        />
      ))}
    </>
  );
}
