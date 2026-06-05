"use client";

import React, { useEffect } from "react";
import { useEngineStore } from "@/store/engineStore";
import { Download, FileText, Database, Shield, Cpu, Activity } from "lucide-react";

const resources = [
  {
    title: "Enterprise AI Readiness Framework",
    type: "CHECKLIST",
    desc: "A 40-point assessment covering data taxonomy, RBAC, compliance, and infrastructure readiness required before deploying internal LLMs.",
    icon: <Cpu size={24} className="text-[#00D4FF]" />,
    tags: ["Generative AI", "Compliance", "Assessment"]
  },
  {
    title: "AWS Multi-Region Failover Architecture",
    type: "BLUEPRINT",
    desc: "High-resolution architectural diagrams and Terraform snippet references for active-active multi-region Kubernetes deployments.",
    icon: <Activity size={24} className="text-[#00D4FF]" />,
    tags: ["AWS", "Kubernetes", "Architecture"]
  },
  {
    title: "Streaming Data Platform Strategy",
    type: "PLAYBOOK",
    desc: "The organizational and technical playbook for transitioning from daily batch ETLs to real-time Kafka-driven lakehouses.",
    icon: <Database size={24} className="text-[#00D4FF]" />,
    tags: ["Kafka", "Data Engineering", "Strategy"]
  },
  {
    title: "Zero-Trust Service Mesh Security Model",
    type: "WHITEPAPER",
    desc: "Detailed technical analysis of implementing Istio inside highly regulated financial service environments.",
    icon: <Shield size={24} className="text-[#00D4FF]" />,
    tags: ["Security", "Istio", "Finance"]
  },
  {
    title: "Platform Engineering Adoption Guide",
    type: "FRAMEWORK",
    desc: "How to roll out Backstage internal developer portals to 1000+ engineers without facing adoption friction.",
    icon: <FileText size={24} className="text-[#00D4FF]" />,
    tags: ["Platform Engineering", "DevOps"]
  }
];

export default function ResourcesPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative pt-24 pb-16">
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Downloadable Assets</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1]">
              ARCHITECTURE RESOURCES
            </h1>
          </div>
          <p className="text-[#A0A0B8] text-sm max-w-sm">
            Technical playbooks, architecture blueprints, and readiness frameworks used by our lead engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <div key={idx} className="glass-card border border-white/10 p-8 flex flex-col hover:border-[#00D4FF]/30 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded border border-white/10 bg-[#050816] flex items-center justify-center group-hover:border-[#00D4FF]/30 transition-colors">
                  {res.icon}
                </div>
                <span className="text-[10px] font-mono text-[#60A5FA] tracking-widest uppercase border border-[#60A5FA]/20 px-2 py-1 rounded bg-[#60A5FA]/5">
                  {res.type}
                </span>
              </div>
              
              <h2 className="text-xl font-display font-bold text-white mb-3">
                {res.title}
              </h2>
              
              <p className="text-[#A0A0B8] text-sm leading-relaxed mb-6 flex-grow">
                {res.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {res.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono text-[#A0A0B8] uppercase px-2 py-1 bg-[#020617] border border-white/5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full btn-solid py-3 text-xs uppercase tracking-widest font-bold flex justify-center items-center gap-2 mt-auto">
                <Download size={14} /> Request Access
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
