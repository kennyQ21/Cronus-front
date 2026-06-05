"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Challenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="challenge" className="relative min-h-[80vh] flex flex-col justify-center items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold text-[#FF453A] tracking-[0.2em] uppercase mb-8"
        >
          Chapter 1: The Problem
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-12"
        >
          Modern systems are collapsing
          <br />
          <span className="text-[#60607A]">under complexity.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-left max-w-3xl mx-auto border-t border-white/10 pt-12">
          {[
            { title: "Data Overload", desc: "Petabytes of unstructured telemetry without actionable intelligence." },
            { title: "Disconnected Systems", desc: "Siloed legacy infrastructure failing to communicate." },
            { title: "Infrastructure Chaos", desc: "Runaway cloud costs and fragile deployment pipelines." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
              className="border-l border-[#FF453A]/30 pl-4"
            >
              <h3 className="text-white font-bold mb-2 font-mono text-sm">{item.title}</h3>
              <p className="text-[#A0A0B8] text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
