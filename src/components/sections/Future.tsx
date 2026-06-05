"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Future() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative min-h-[120vh] flex flex-col justify-center items-center py-32 px-6">
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end items-end p-8 text-right">
        <div className="text-[#7C3AED] font-mono text-[10px] tracking-[0.2em] uppercase space-y-1">
          <span>SYS.CMD // CORE_INITIALIZATION</span>
          <span>QUANTUM SATELLITES: ONLINE</span>
        </div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto w-full z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-[#7C3AED]" />
            <span className="text-[#7C3AED] font-mono text-sm tracking-widest uppercase">The Future</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
            PLANETARY
            <br />
            AI CORE
          </h2>
          <p className="max-w-xl mx-auto text-[#A0A0B8] text-lg font-mono mb-32">
            Orbiting computation arrays process planetary-scale telemetry in real-time, executing deterministic orchestration across global infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
