"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration, suffix = "" }: { from: number; to: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" className="relative min-h-[80vh] flex flex-col justify-center items-center py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto text-center z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold text-[#00E5FF] tracking-[0.2em] uppercase mb-8"
        >
          Chapter 2: The Mission
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-20"
        >
          We bring order to
          <br />
          <span className="gradient-text">complexity.</span>
        </motion.h2>

        {/* Cinematic Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 w-full pt-12 border-t border-white/5">
          {[
            { end: 240, suffix: "+", label: "SYSTEMS DEPLOYED" },
            { end: 85, suffix: "+", label: "GLOBAL CLIENTS" },
            { end: 99, suffix: ".99%", label: "UPTIME ACHIEVED" },
            { end: 15, suffix: "+", label: "YEARS OF ENGINEERING" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2 text-glow">
                <Counter from={0} to={metric.end} duration={2.5} suffix={metric.suffix} />
              </div>
              <div className="text-[10px] text-[#60607A] uppercase tracking-[0.2em] font-bold">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
