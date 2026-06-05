"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Brain, Cloud, Database, Cpu, Layout, Settings } from "lucide-react";

export default function WhatWeBuild() {
  const domains = [
    {
      title: "Enterprise AI Platforms",
      desc: "We deploy secure, private generative AI models within your infrastructure. Retain absolute data sovereignty while enabling workforce transformation.",
      icon: <Brain size={18} className="text-[#00D4FF]" />
    },
    {
      title: "Cloud Modernization",
      desc: "We migrate fragile monolithic systems to highly available, multi-region cloud architectures to eliminate downtime and reduce operational waste.",
      icon: <Cloud size={18} className="text-[#00D4FF]" />
    },
    {
      title: "Data Foundations",
      desc: "We break down organizational silos, engineering real-time streaming pipelines and unified data architectures that power enterprise-grade analytics.",
      icon: <Database size={18} className="text-[#00D4FF]" />
    },
    {
      title: "Automation Systems",
      desc: "We design deterministic workflow engines that orchestrate complex enterprise APIs, eliminating manual intervention and human error at scale.",
      icon: <Cpu size={18} className="text-[#00D4FF]" />
    },
    {
      title: "Digital Experience Platforms",
      desc: "We engineer high-performance web and mobile interfaces that deliver desktop-level application speeds natively in the browser.",
      icon: <Layout size={18} className="text-[#00D4FF]" />
    },
    {
      title: "Platform Engineering",
      desc: "We build the internal developer platforms, CI/CD pipelines, and infrastructure-as-code foundations that allow your teams to ship faster.",
      icon: <Settings size={18} className="text-[#00D4FF]" />
    }
  ];

  return (
    <section className="py-16 border-t border-white/5 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
          <div>
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Core Competencies</span>
            <h2 className="font-display text-3xl font-bold text-white uppercase">
              What We Build
            </h2>
          </div>
          <Link href="/services" className="text-[#60A5FA] font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#00D4FF] transition-colors mt-6 md:mt-0">
            View All Capabilities <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, i) => (
            <div key={i} className="bg-[#050816] border border-white/10 p-6 hover:border-[#00D4FF]/30 transition-colors flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded border border-[#00D4FF]/30 bg-[#00D4FF]/5 flex items-center justify-center">
                  {domain.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{domain.title}</h3>
              <p className="text-[#A0A0B8] text-xs leading-relaxed">{domain.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
