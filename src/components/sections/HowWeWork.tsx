"use client";

import React from "react";
import { Search, PenTool, Terminal, Rocket, Activity, LineChart } from "lucide-react";

const stages = [
  {
    icon: <Search size={20} />,
    title: "Discover",
    deliverables: "Architecture Audit, AI Readiness Report",
    outputs: "Identify systemic bottlenecks and data silos."
  },
  {
    icon: <PenTool size={20} />,
    title: "Architect",
    deliverables: "System Topology, Security Model, Tech Stack",
    outputs: "Design highly-available, zero-trust infrastructure."
  },
  {
    icon: <Terminal size={20} />,
    title: "Build",
    deliverables: "Microservices, LLM Agents, Data Pipelines",
    outputs: "Deterministic engineering with automated testing."
  },
  {
    icon: <Rocket size={20} />,
    title: "Deploy",
    deliverables: "Terraform IaC, CI/CD Pipelines, K8s Clusters",
    outputs: "Zero-downtime rollouts across multi-region edges."
  },
  {
    icon: <Activity size={20} />,
    title: "Operate",
    deliverables: "SRE Monitoring, Incident Response, SLAs",
    outputs: "Maintain 99.999% uptime with Datadog telemetry."
  },
  {
    icon: <LineChart size={20} />,
    title: "Optimize",
    deliverables: "Cost Analysis, Model Fine-Tuning, Scaling",
    outputs: "Reduce cloud spend and improve LLM inference speed."
  }
];

export default function HowWeWork() {
  return (
    <section className="py-16 border-t border-white/5 bg-[#020617]/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-10">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Delivery Methodology</span>
          <h2 className="font-display text-4xl font-bold text-white uppercase">
            How We Execute
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative">
          {/* Connecting Line (hidden on small screens) */}
          <div className="hidden xl:block absolute top-6 left-10 right-10 h-px bg-white/10 z-0" />

          {stages.map((stage, i) => (
            <div key={i} className="relative z-10 bg-[#050816] border border-white/10 p-5 hover:border-[#00D4FF]/30 transition-colors">
              <div className="w-10 h-10 rounded border border-[#00D4FF]/30 bg-[#020617] text-[#00D4FF] flex items-center justify-center mb-4">
                {stage.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{stage.title}</h3>
              <div className="mb-3">
                <h4 className="font-mono text-[9px] text-[#A0A0B8] uppercase tracking-widest mb-1">Deliverables</h4>
                <p className="text-white text-xs leading-tight">{stage.deliverables}</p>
              </div>
              <div>
                <h4 className="font-mono text-[9px] text-[#A0A0B8] uppercase tracking-widest mb-1">Business Output</h4>
                <p className="text-[#A0A0B8] text-xs leading-tight">{stage.outputs}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
