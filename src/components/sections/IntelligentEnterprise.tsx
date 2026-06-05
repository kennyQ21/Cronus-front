"use client";

import React from "react";
import { ArrowDown, Database, Brain, Cpu, Globe } from "lucide-react";

export default function IntelligentEnterprise() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#050816] relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-16">
          <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">The Vision</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white uppercase leading-[1.05] max-w-3xl mx-auto">
            The Intelligent Enterprise
          </h2>
          <p className="text-[#A0A0B8] text-sm max-w-xl mx-auto mt-6">
            We don&apos;t patch legacy systems. We engineer a vertical stack of data, intelligence, and automation that transforms your business into an autonomous entity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          
          {/* Step 1 */}
          <div className="w-full bg-[#020617] border border-white/10 p-6 rounded text-center opacity-50">
            <span className="font-mono text-[10px] tracking-widest text-[#A0A0B8] uppercase">Legacy Systems</span>
          </div>

          <ArrowDown className="text-[#00D4FF]/30" size={24} />

          {/* Step 2 */}
          <div className="w-full bg-[#020617] border border-[#00D4FF]/20 p-6 rounded flex items-center justify-center gap-4">
            <Database className="text-[#00D4FF]" size={20} />
            <span className="font-mono text-xs tracking-widest text-white uppercase">Unified Data Layer</span>
          </div>

          <ArrowDown className="text-[#00D4FF]/50" size={24} />

          {/* Step 3 */}
          <div className="w-full bg-[#020617] border border-[#00D4FF]/40 p-6 rounded flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
            <Brain className="text-[#00D4FF]" size={20} />
            <span className="font-mono text-xs tracking-widest text-white uppercase">AI Reasoning Layer</span>
          </div>

          <ArrowDown className="text-[#00D4FF]/80" size={24} />

          {/* Step 4 */}
          <div className="w-full bg-[#020617] border border-[#00D4FF]/60 p-6 rounded flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
            <Cpu className="text-[#00D4FF]" size={20} />
            <span className="font-mono text-xs tracking-widest text-white uppercase">Automation Layer</span>
          </div>

          <ArrowDown className="text-[#00D4FF]" size={24} />

          {/* Result */}
          <div className="w-full bg-gradient-to-r from-[#00D4FF]/10 via-[#00D4FF]/20 to-[#00D4FF]/10 border border-[#00D4FF] p-8 rounded flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(0,212,255,0.2)]">
            <Globe className="text-[#00D4FF]" size={24} />
            <span className="font-display text-2xl font-bold tracking-widest text-white uppercase">The Intelligent Enterprise</span>
          </div>

        </div>

      </div>
    </section>
  );
}
