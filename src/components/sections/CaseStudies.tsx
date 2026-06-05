"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, FileText, Activity } from "lucide-react";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="case-studies" className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto w-full z-10">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-[#EC4899] tracking-[0.2em] uppercase mb-8"
          >
            Chapter 6: Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Mission Dossiers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dossier 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-white/10 bg-[#050816]/80 backdrop-blur-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-8 w-px h-full bg-white/5" />
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Lock className="w-4 h-4 text-[#FF453A]" />
              <span className="text-xs font-mono text-[#FF453A] tracking-[0.3em] uppercase font-bold">Classified Project 01</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-2">AI Compliance Network</h3>
            <p className="text-sm text-[#A0A0B8] font-mono mb-8">Sector: Global Pharmaceuticals</p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Audit Speed</span>
                <span className="text-sm font-bold text-[#00E5FF]">82% Faster</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Deployment Scope</span>
                <span className="text-sm font-bold text-white">40 Countries</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Compliance Status</span>
                <span className="text-sm font-bold text-emerald-400">Zero Failures</span>
              </div>
            </div>

            <button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-[#00E5FF] transition-colors">
              <FileText className="w-4 h-4" /> Request Full Decryption
            </button>
          </motion.div>

          {/* Dossier 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-white/10 bg-[#050816]/80 backdrop-blur-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-8 w-px h-full bg-white/5" />
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Activity className="w-4 h-4 text-[#4F8CFF]" />
              <span className="text-xs font-mono text-[#4F8CFF] tracking-[0.3em] uppercase font-bold">Classified Project 02</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-2">Real-Time Clearing Engine</h3>
            <p className="text-sm text-[#A0A0B8] font-mono mb-8">Sector: Tier 1 Financial Services</p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Latency</span>
                <span className="text-sm font-bold text-[#00E5FF]">&lt; 2ms</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Daily Volume</span>
                <span className="text-sm font-bold text-white">$14.2B Processed</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs text-[#60607A] uppercase tracking-widest">Downtime</span>
                <span className="text-sm font-bold text-emerald-400">0.00s (Active-Active)</span>
              </div>
            </div>

            <button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-[#00E5FF] transition-colors">
              <FileText className="w-4 h-4" /> Request Full Decryption
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
