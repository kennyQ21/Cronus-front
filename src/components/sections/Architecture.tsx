"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network } from "lucide-react";

export default function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6">
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end items-start p-8">
        <div className="text-[#4F8CFF] font-mono text-[10px] tracking-[0.2em] uppercase space-y-1">
          <span>SYS.CMD // ARCHITECTURE_MAP</span>
          <span>ROUTING: OPTIMIZED</span>
        </div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto w-full z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Network className="w-6 h-6 text-[#4F8CFF]" />
            <span className="text-[#4F8CFF] font-mono text-sm tracking-widest uppercase">The Architecture</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
            LIVING
            <br />
            NETWORK
          </h2>
          <p className="max-w-xl text-[#A0A0B8] text-lg font-mono">
            Every module acts as an orbital satellite communicating via encrypted data beams to a central planetary core. Synchronized, distributed, and infinitely scalable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
