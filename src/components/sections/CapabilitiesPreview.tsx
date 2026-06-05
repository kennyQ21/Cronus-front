"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Database, Cloud, Cog, Code, Layers } from "lucide-react";

const domains = [
  { title: "AI Infrastructure", icon: <Cpu size={24} />, desc: "Private LLM hosting and agentic reasoning platforms." },
  { title: "Cloud Engineering", icon: <Cloud size={24} />, desc: "Multi-region failover and distributed Kubernetes grids." },
  { title: "Data Platforms", icon: <Database size={24} />, desc: "Real-time Kafka streaming and analytics lakehouses." },
  { title: "Intelligent Automation", icon: <Cog size={24} />, desc: "Deterministic workflows orchestrating enterprise systems." },
  { title: "Software Architecture", icon: <Code size={24} />, desc: "High-throughput microservices and event-driven APIs." },
  { title: "Digital Experience", icon: <Layers size={24} />, desc: "Global edge-delivered interfaces and user portals." }
];

export default function CapabilitiesPreview() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Core Technology Domains</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              What We Build
            </h2>
          </div>
          <Link href="/services" className="text-[#60A5FA] font-mono text-sm uppercase tracking-widest flex items-center gap-2 hover:text-[#00D4FF] transition-colors mt-6 md:mt-0">
            View Operations Manual <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 border border-white/10 hover:border-[#00D4FF]/50 transition-colors group"
            >
              <div className="text-[#00D4FF] mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {domain.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 uppercase">{domain.title}</h3>
              <p className="text-[#A0A0B8] text-sm leading-relaxed">{domain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
