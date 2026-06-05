"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6">
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end items-start p-8">
        <div className="text-[#FF453A] font-mono text-[10px] tracking-[0.2em] uppercase space-y-1">
          <span>WARN // ORBITAL DECAY DETECTED</span>
          <span>SYSTEM OFFLINE</span>
        </div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto w-full z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-[#FF453A] animate-pulse" />
            <span className="text-[#FF453A] font-mono text-sm tracking-widest uppercase">The Problem</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
            INFRASTRUCTURE
            <br />
            COLLAPSE
          </h2>
          <p className="max-w-xl text-[#A0A0B8] text-lg font-mono">
            Legacy systems cannot scale. Networks fragment. Data storms corrupt orbital communications. The planetary infrastructure of modern enterprises is dying under its own complexity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
