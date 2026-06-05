"use client";

import React from "react";
import { X, Network, Database, ServerCrash, AlertTriangle } from "lucide-react";

export default function TransformationGap() {
  return (
    <section className="py-16 bg-[#020617] border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/3">
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">The Problem</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase leading-[1.1] mb-6">
              The Enterprise<br/>Transformation Gap
            </h2>
            <p className="text-[#A0A0B8] text-sm leading-relaxed mb-8">
              Why do 80% of enterprise digital transformations fail? Because organizations attempt to deploy AI on top of disconnected systems, legacy architecture, and manual operations.
            </p>
            <div className="p-4 border border-[#EF4444]/30 bg-[#EF4444]/5 rounded flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center flex-shrink-0">
                <X size={16} />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase mb-1 tracking-wider">The Result</h4>
                <p className="text-[#A0A0B8] text-[10px] leading-relaxed">
                  Data silos. Fragile deployments. AI experiments that never reach production value.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-white/10 bg-[#020617] p-5">
                <div className="text-[#EF4444] mb-3"><Network size={20} /></div>
                <h3 className="text-white text-sm font-bold uppercase mb-2">Disconnected Systems</h3>
                <p className="text-[#A0A0B8] text-[10px] leading-relaxed">Point-to-point integrations that shatter under scale.</p>
              </div>
              <div className="border border-white/10 bg-[#020617] p-5">
                <div className="text-[#EF4444] mb-3"><Database size={20} /></div>
                <h3 className="text-white text-sm font-bold uppercase mb-2">Data Silos</h3>
                <p className="text-[#A0A0B8] text-[10px] leading-relaxed">Fragmented context preventing accurate AI reasoning.</p>
              </div>
              <div className="border border-white/10 bg-[#020617] p-5">
                <div className="text-[#EF4444] mb-3"><ServerCrash size={20} /></div>
                <h3 className="text-white text-sm font-bold uppercase mb-2">Legacy Architecture</h3>
                <p className="text-[#A0A0B8] text-[10px] leading-relaxed">Monoliths unable to handle high-throughput workloads.</p>
              </div>
              <div className="border border-white/10 bg-[#020617] p-5">
                <div className="text-[#EF4444] mb-3"><AlertTriangle size={20} /></div>
                <h3 className="text-white text-sm font-bold uppercase mb-2">Manual Operations</h3>
                <p className="text-[#A0A0B8] text-[10px] leading-relaxed">Heavy reliance on human intervention causing systemic delays.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
