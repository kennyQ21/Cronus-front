"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function WhyICronus() {
  return (
    <section className="py-20 relative z-10 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Vendor Evaluation</span>
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase">
            Why Enterprises Choose i-Cronus
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-3xl">
            We are not a staff-augmentation agency. We are an end-to-end infrastructure partner that architects, builds, and operates the core networks powering your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="glass-card border border-white/5 p-8 bg-[#050816]/50">
            <h3 className="font-display text-2xl font-bold text-[#A0A0B8] mb-6 flex items-center gap-3">
              <XCircle className="text-red-500" /> Traditional Development Vendors
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Task-Based Execution</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">They build what they are told without questioning the underlying architectural flaws or systemic technical debt.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Fragmented Capabilities</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">Require separate teams for AI, Cloud, and Data, leading to massive integration failures and security gaps.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Hand-Off Abandonment</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">Deliver code and leave you to figure out Day-2 operations, scaling, and critical incident response.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-card border border-[#00D4FF]/30 p-8 bg-[#00D4FF]/5">
            <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#00D4FF]" /> The i-Cronus Approach
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#00D4FF] mt-1">✓</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Enterprise Architecture First</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">We assess your global topology, regulatory compliance, and data taxonomy before writing a single line of code.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D4FF] mt-1">✓</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Unified Stack Mastery</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">Our engineers are full-spectrum architects traversing AWS/Azure, Kafka pipelines, and private LLM deployments seamlessly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00D4FF] mt-1">✓</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">Long-Term Infrastructure Ownership</h4>
                  <p className="text-[#A0A0B8] text-xs mt-1">We operate what we build, providing deterministic SLAs, observability, and 99.999% uptime guarantees.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
