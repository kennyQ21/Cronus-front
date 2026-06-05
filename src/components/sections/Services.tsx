"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Cloud, Database, Cpu } from "lucide-react";
import Tilt from "@/components/ui/Tilt";

const capabilities = [
  {
    icon: Brain,
    title: "AI & GenAI",
    desc: "Custom LLMs and agentic workflows.",
    color: "#7C3AED",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    desc: "Multi-region IaC and Kubernetes.",
    color: "#00E5FF",
  },
  {
    icon: Database,
    title: "Data Systems",
    desc: "Petabyte-scale ETL pipelines.",
    color: "#4F8CFF",
  },
  {
    icon: Cpu,
    title: "Automation",
    desc: "Deterministic enterprise orchestration.",
    color: "#EC4899",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="capabilities" className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto w-full z-10">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-[#7C3AED] tracking-[0.2em] uppercase mb-8"
          >
            Chapter 4: Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Engineering modules
            <br />
            <span className="text-[#60607A]">built for scale.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <Tilt className="h-full">
                <div className="glass-card-glow h-full flex flex-col items-start p-8 group relative overflow-hidden">
                  {/* Dynamic Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${cap.color})` }} />
                  
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: `${cap.color}15` }}>
                    <cap.icon className="w-6 h-6" style={{ color: cap.color }} />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-sm text-[#A0A0B8] leading-relaxed mb-6">{cap.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between text-[10px] uppercase tracking-widest font-bold" style={{ color: cap.color }}>
                    <span>Module Active</span>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: cap.color }} />
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
