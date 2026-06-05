"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, Cpu } from "lucide-react";

export default function CaseStudiesPreview() {
  return (
    <section className="py-32 relative z-10 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Operations Archive</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
              Engineering Impact
            </h2>
          </div>
          <Link href="/case-studies" className="text-[#60A5FA] font-mono text-sm uppercase tracking-widest flex items-center gap-2 hover:text-[#00D4FF] transition-colors mt-6 md:mt-0">
            View Operations Archive <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-white/10 hover:border-[#00D4FF]/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase mb-2">Tier 1 Investment Bank</h4>
                <h3 className="font-display text-2xl font-bold text-white uppercase">High-Frequency Failover</h3>
              </div>
              <div className="bg-[#00D4FF]/10 text-[#00D4FF] font-mono text-xs px-3 py-1 rounded">99.999%</div>
            </div>
            <div className="flex items-center gap-4 text-[#A0A0B8] text-sm font-mono border-t border-white/10 pt-6">
              <span className="flex items-center gap-2"><Activity size={14} /> 4 mins to &lt; 2s recovery</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 border border-white/10 hover:border-[#00D4FF]/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase mb-2">Fortune 50 Logistics</h4>
                <h3 className="font-display text-2xl font-bold text-white uppercase">Global Supply Chain Lakehouse</h3>
              </div>
              <div className="bg-[#00D4FF]/10 text-[#00D4FF] font-mono text-xs px-3 py-1 rounded">$12M ROI</div>
            </div>
            <div className="flex items-center gap-4 text-[#A0A0B8] text-sm font-mono border-t border-white/10 pt-6">
              <span className="flex items-center gap-2"><Cpu size={14} /> 12hr latency to 400ms</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
