"use client";

import React, { useEffect } from "react";
import { useEngineStore } from "@/store/engineStore";

const insights = [
  {
    category: "AI Engineering",
    title: "Deterministic Fallbacks in LLM Pipelines",
    date: "OCTOBER 12, 2024",
    readTime: "8 MIN READ",
    desc: "Why probabilistic agents fail in enterprise production and how to implement strict state-machine guardrails for LLM orchestration."
  },
  {
    category: "Cloud Architecture",
    title: "Multi-Region Active-Active K8s Without the Latency",
    date: "SEPTEMBER 28, 2024",
    readTime: "12 MIN READ",
    desc: "A deep dive into our Terraform and Istio configuration for achieving sub-second cross-region failover for financial services."
  },
  {
    category: "Data Platforms",
    title: "The Death of Batch: Streaming Architectures in 2025",
    date: "SEPTEMBER 15, 2024",
    readTime: "6 MIN READ",
    desc: "Why Fortune 500s are ripping out nightly ETL jobs in favor of Kafka-backed real-time lakehouses."
  },
  {
    category: "Platform Engineering",
    title: "Developer Portals That Actually Get Adopted",
    date: "AUGUST 30, 2024",
    readTime: "10 MIN READ",
    desc: "How to structure Backstage to reduce MTTR and onboarding time without creating a maintenance nightmare for Ops."
  },
  {
    category: "AI Engineering",
    title: "Vector Search is Not Enough: Graph RAG",
    date: "AUGUST 12, 2024",
    readTime: "15 MIN READ",
    desc: "Why cosine similarity fails on complex enterprise documents, and how integrating knowledge graphs solves the context problem."
  },
  {
    category: "Enterprise Transformation",
    title: "Why Digital Transformations Fail at the Architecture Layer",
    date: "JULY 22, 2024",
    readTime: "7 MIN READ",
    desc: "Business strategy cannot outrun technical debt. How to assess legacy monoliths before promising AI capabilities."
  }
];

export default function InsightsPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative pt-24 pb-16">
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Thought Leadership</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1]">
              ENGINEERING INSIGHTS
            </h1>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {["AI Engineering", "Cloud", "Data", "Platform", "Leadership"].map((tag) => (
               <button key={tag} className="px-4 py-1.5 border border-white/10 bg-[#050816] text-[#A0A0B8] font-mono text-xs uppercase tracking-widest whitespace-nowrap hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors">
                 {tag}
               </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <article key={idx} className="glass-card border border-white/10 p-6 flex flex-col hover:border-[#00D4FF]/30 transition-colors group cursor-pointer">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase border border-[#00D4FF]/20 px-2 py-1 rounded bg-[#00D4FF]/5">
                  {insight.category}
                </span>
                <span className="text-[10px] font-mono text-[#60A5FA]">
                  {insight.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                {insight.title}
              </h2>
              
              <p className="text-[#A0A0B8] text-sm leading-relaxed mb-6 flex-grow">
                {insight.desc}
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono text-[#A0A0B8] uppercase">{insight.date}</span>
                <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Read Report →</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
