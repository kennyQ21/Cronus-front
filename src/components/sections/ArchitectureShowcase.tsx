"use client";

import React from "react";

export default function ArchitectureShowcase() {
  return (
    <section className="py-32 relative z-10 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Enterprise Architecture Showcase</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
            Built for Extreme Scale.
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl">
            We don&apos;t build websites. We engineer distributed systems, microservices, and AI inference layers capable of handling planetary-scale traffic and processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mockup 1 */}
          <div className="glass-card p-8 border border-white/10 group">
            <h3 className="font-mono text-[#60A5FA] tracking-widest uppercase mb-4 text-xs">Microservice Ecosystem Topology</h3>
            <div className="w-full h-64 bg-[#050816] rounded border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-[#00D4FF]/30 transition-colors">
              {/* Abstract 2D representation to complement the 3D canvas */}
              <div className="absolute inset-0 grid-overlay opacity-30" />
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-transparent border border-[#00D4FF] flex items-center justify-center text-xs text-[#00D4FF] font-mono">API</div>
                  <div className="w-12 h-12 bg-transparent border border-[#60A5FA] flex items-center justify-center text-xs text-[#60A5FA] font-mono">AUTH</div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-[#60A5FA] to-transparent" />
                <div className="w-32 h-12 bg-transparent border border-[#7C3AED] flex items-center justify-center text-xs text-[#7C3AED] font-mono">KAFKA EVENT BUS</div>
              </div>
            </div>
            <p className="text-[#A0A0B8] text-sm mt-6">
              Asynchronous event-driven communication decoupling high-load services.
            </p>
          </div>

          {/* Mockup 2 */}
          <div className="glass-card p-8 border border-white/10 group">
            <h3 className="font-mono text-[#60A5FA] tracking-widest uppercase mb-4 text-xs">Agentic RAG Infrastructure</h3>
            <div className="w-full h-64 bg-[#050816] rounded border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-[#00D4FF]/30 transition-colors">
              <div className="absolute inset-0 grid-overlay opacity-30" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full border border-dashed border-[#00D4FF] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20" />
                </div>
                <div className="h-px w-8 bg-[#60A5FA]" />
                <div className="w-16 h-16 border border-[#60A5FA] flex items-center justify-center text-[10px] text-[#60A5FA] font-mono text-center">VECTOR<br/>DB</div>
                <div className="h-px w-8 bg-[#60A5FA]" />
                <div className="w-16 h-16 border border-white/30 flex items-center justify-center text-[10px] text-white font-mono text-center bg-white/5">LLM<br/>NODE</div>
              </div>
            </div>
            <p className="text-[#A0A0B8] text-sm mt-6">
              Private generative AI deployments integrated directly with your secure enterprise data.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
