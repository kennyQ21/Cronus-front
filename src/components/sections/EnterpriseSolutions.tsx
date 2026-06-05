"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Cloud, Network, Activity } from "lucide-react";

const solutions = [
  {
    icon: <BrainCircuit size={24} className="text-[#00D4FF]" />,
    title: "Enterprise AI Platform",
    desc: "A secure foundation for deploying private generative AI. Ensures 100% data sovereignty while enforcing RBAC guardrails across internal knowledge networks.",
    tag: "ARTIFICIAL INTELLIGENCE"
  },
  {
    icon: <Cloud size={24} className="text-[#00D4FF]" />,
    title: "Cloud Modernization Program",
    desc: "Transition legacy monolithic applications into highly-available, multi-region Kubernetes architectures. Eliminate downtime and reduce cloud spend.",
    tag: "CLOUD ENGINEERING"
  },
  {
    icon: <Network size={24} className="text-[#00D4FF]" />,
    title: "Enterprise Data Foundation",
    desc: "Replace fragile batch ETLs with real-time Kafka streaming pipelines. Connect siloed databases into a unified Databricks lakehouse.",
    tag: "DATA PLATFORMS"
  },
  {
    icon: <Activity size={24} className="text-[#00D4FF]" />,
    title: "Automation Operating System",
    desc: "Deterministic workflows orchestrating enterprise APIs to automate back-office operations, reconciliation, and routing with zero human error.",
    tag: "INTELLIGENT AUTOMATION"
  }
];

export default function EnterpriseSolutions() {
  return (
    <section className="py-20 border-t border-white/5 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">What We Build</span>
            <h2 className="font-display text-3xl font-bold text-white uppercase">
              Core Engineering Domains
            </h2>
          </div>
          <Link href="/solutions" className="text-[#60A5FA] font-mono text-sm uppercase tracking-widest flex items-center gap-2 hover:text-[#00D4FF] transition-colors mt-6 md:mt-0">
            View All Solutions <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((sol, i) => (
            <div key={i} className="bg-[#050816] border border-white/10 p-6 hover:border-[#00D4FF]/30 transition-colors flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded border border-[#00D4FF]/30 bg-[#00D4FF]/5 flex items-center justify-center">
                  {sol.icon}
                </div>
                <span className="text-[10px] font-mono text-[#60A5FA] tracking-widest uppercase border border-[#60A5FA]/20 px-2 py-1 rounded bg-[#60A5FA]/5">
                  {sol.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{sol.title}</h3>
              <p className="text-[#A0A0B8] text-xs leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
