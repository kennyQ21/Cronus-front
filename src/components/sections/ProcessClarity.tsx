"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProcessClarity() {
  const steps = [
    {
      number: "01",
      title: "Architecture Review",
      desc: "We analyze your current infrastructure, identify systemic bottlenecks, and establish a baseline for transformation."
    },
    {
      number: "02",
      title: "Strategic Design",
      desc: "Our architects map out a highly-available, secure, and scalable topology tailored specifically to your business outcomes."
    },
    {
      number: "03",
      title: "Deterministic Engineering",
      desc: "We build the core networks, AI platforms, and data systems using rigorous infrastructure-as-code principles."
    },
    {
      number: "04",
      title: "Day-2 Operations",
      desc: "We don't hand off and disappear. We operate, monitor, and scale what we build with strict SLAs and 99.99% uptime guarantees."
    }
  ];

  return (
    <section className="py-16 border-t border-white/5 bg-[#050816] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Process Clarity</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase max-w-2xl">
              What Happens When You Work With i-Cronus
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#020617] border border-white/10 p-6 flex flex-col relative group hover:border-[#00D4FF]/30 transition-colors">
              <span className="text-[#00D4FF]/20 font-display text-5xl font-bold absolute top-4 right-4 group-hover:text-[#00D4FF]/40 transition-colors">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-3 mt-8 relative z-10">{step.title}</h3>
              <p className="text-[#A0A0B8] text-xs leading-relaxed relative z-10">{step.desc}</p>
              
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-white/20 translate-x-1/2 -translate-y-1/2 z-20">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
