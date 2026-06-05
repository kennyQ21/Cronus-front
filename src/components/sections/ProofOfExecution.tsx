"use client";

import React from "react";
import { Activity, Clock, ShieldCheck, Database } from "lucide-react";

export default function ProofOfExecution() {
  return (
    <section className="py-16 border-t border-white/5 bg-[#050816] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Proof of Execution</span>
          <h2 className="font-display text-4xl font-bold text-white uppercase">
            Planetary-Scale Deployments
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-[#020617] border border-white/10 p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300" />
            <span className="text-[#60A5FA] font-mono text-[10px] tracking-widest uppercase mb-4 block">Case Study // Financial Exchange</span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">High-Frequency Trading Network</h3>
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-[#A0A0B8]">
               <div>
                 <strong className="text-white block mb-1">Architecture</strong>
                 Multi-Region AKS + Istio Mesh
               </div>
               <div>
                 <strong className="text-white block mb-1">Business Impact</strong>
                 $400B+ Daily Volume Secured
               </div>
            </div>
            <div className="bg-[#050816] p-4 rounded border border-white/5 grid grid-cols-2 gap-4">
               <div>
                 <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest flex items-center gap-2 mb-1"><Clock size={10}/> Before</div>
                 <div className="text-white font-bold text-lg">4 min failover</div>
               </div>
               <div>
                 <div className="text-[10px] font-mono text-[#10B981] uppercase tracking-widest flex items-center gap-2 mb-1"><Activity size={10}/> After</div>
                 <div className="text-white font-bold text-lg">&lt; 2s failover</div>
               </div>
            </div>
          </div>

          <div className="bg-[#020617] border border-white/10 p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300" />
            <span className="text-[#A78BFA] font-mono text-[10px] tracking-widest uppercase mb-4 block">Case Study // Global Logistics</span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Autonomous Knowledge Extraction</h3>
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-[#A0A0B8]">
               <div>
                 <strong className="text-white block mb-1">Architecture</strong>
                 LangGraph + Pinecone Enclave
               </div>
               <div>
                 <strong className="text-white block mb-1">Business Impact</strong>
                 10,000+ documents processed daily
               </div>
            </div>
            <div className="bg-[#050816] p-4 rounded border border-white/5 grid grid-cols-2 gap-4">
               <div>
                 <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest flex items-center gap-2 mb-1"><Database size={10}/> Before</div>
                 <div className="text-white font-bold text-lg">3 Week Backlog</div>
               </div>
               <div>
                 <div className="text-[10px] font-mono text-[#10B981] uppercase tracking-widest flex items-center gap-2 mb-1"><ShieldCheck size={10}/> After</div>
                 <div className="text-white font-bold text-lg">2 Minute Parse</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
