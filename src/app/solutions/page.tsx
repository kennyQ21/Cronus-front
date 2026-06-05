"use client";

import React, { useEffect } from "react";
import { useEngineStore } from "@/store/engineStore";
import { Layers, Network, Database, BrainCircuit, Activity, Cloud } from "lucide-react";

const solutions = [
  {
    id: "enterprise-ai",
    title: "Enterprise AI Platform",
    desc: "A secure, scalable foundation for deploying private generative AI.",
    businessProblem: "Enterprises want to deploy AI but face extreme compliance, data security, and model hallucination risks.",
    components: ["Private LLM Endpoints", "Guardrail Enforcement", "RBAC Integration", "Telemetry & Observability"],
    outcomes: ["100% Data Sovereignty", "Zero Third-Party Training", "Sub-200ms Inference Latency"],
    icon: <BrainCircuit size={20} className="text-[#00D4FF]" />
  },
  {
    id: "knowledge-intelligence",
    title: "Knowledge Intelligence System",
    desc: "Connect disparate enterprise data siloes into a unified semantic search network.",
    businessProblem: "Employees spend up to 30% of their day searching across Confluence, Jira, Slack, and Sharepoint.",
    components: ["Agentic RAG Architecture", "Pinecone Vector DB", "Multi-Modal Parsing", "Source Citation Engine"],
    outcomes: ["80% Reduction in Search Time", "Automated Report Generation", "Single Source of Truth"],
    icon: <Database size={20} className="text-[#00D4FF]" />
  },
  {
    id: "cloud-modernization",
    title: "Cloud Modernization Program",
    desc: "Migrate legacy on-premise infrastructure to distributed, resilient cloud native architectures.",
    businessProblem: "Monolithic systems suffer from high maintenance costs, slow deployment cycles, and extreme downtime risk.",
    components: ["Multi-Region Kubernetes", "Zero-Trust Mesh", "Terraform IaC", "Automated CI/CD"],
    outcomes: ["99.999% Availability", "Zero-Downtime Deployments", "40% Cloud Spend Reduction"],
    icon: <Cloud size={20} className="text-[#00D4FF]" />
  },
  {
    id: "data-foundation",
    title: "Enterprise Data Foundation",
    desc: "Real-time streaming pipelines feeding into unified analytics lakehouses.",
    businessProblem: "Batch processing causes 24-hour delays in business intelligence and supply chain visibility.",
    components: ["Kafka Event Streaming", "Databricks Lakehouse", "Real-Time ETL", "Data Governance Layer"],
    outcomes: ["Sub-second Analytics", "Unified Data Taxonomy", "Predictive Forecasting"],
    icon: <Network size={20} className="text-[#00D4FF]" />
  },
  {
    id: "automation-os",
    title: "Automation Operating System",
    desc: "Deterministic and probabilistic workflow routing to automate back-office operations.",
    businessProblem: "Human capital is wasted on repetitive data entry, reconciliation, and workflow routing.",
    components: ["LangGraph Orchestration", "API Integration Mesh", "Human-in-the-loop Fallbacks", "Audit Logging"],
    outcomes: ["60% Operational Cost Reduction", "Zero Human Error Rates", "24/7 Processing"],
    icon: <Activity size={20} className="text-[#00D4FF]" />
  },
  {
    id: "digital-experience",
    title: "Digital Experience Platform",
    desc: "High-performance edge-delivered portals for enterprise customers and internal teams.",
    businessProblem: "Slow, fragmented user interfaces reduce customer retention and internal productivity.",
    components: ["Next.js React Architecture", "Edge Rendering", "Global CDN", "Micro-Frontend Composition"],
    outcomes: ["Sub-second TTI", "Unified Brand Experience", "Increased Conversion"],
    icon: <Layers size={20} className="text-[#00D4FF]" />
  }
];

export default function SolutionsPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative pt-24 pb-16">
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Cross-Functional Programs</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
            ENTERPRISE SOLUTIONS
          </h1>
          <p className="text-[#A0A0B8] text-lg max-w-3xl">
            We don&apos;t just provide engineering talent. We deliver comprehensive, outcome-driven solutions that directly address systemic enterprise bottlenecks, from legacy cloud migrations to private AI deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div key={sol.id} className="glass-card p-8 border border-white/10 hover:border-[#00D4FF]/30 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded border border-[#00D4FF]/30 bg-[#00D4FF]/5 flex items-center justify-center">
                  {sol.icon}
                </div>
                <h2 className="font-display text-2xl font-bold text-white">{sol.title}</h2>
              </div>
              
              <p className="text-[#F8FAFC] font-semibold text-sm mb-4">{sol.desc}</p>
              
              <div className="mb-6">
                <h4 className="font-mono text-[10px] text-[#A0A0B8] tracking-widest uppercase mb-2">The Business Problem</h4>
                <p className="text-[#A0A0B8] text-sm leading-relaxed border-l-2 border-[#EC4899]/50 pl-3">{sol.businessProblem}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-mono text-[10px] text-[#A0A0B8] tracking-widest uppercase mb-2">Core Components</h4>
                  <ul className="space-y-1">
                    {sol.components.map((comp, i) => (
                      <li key={i} className="text-[#A0A0B8] text-xs flex items-start gap-2">
                        <span className="text-[#60A5FA] mt-0.5">▹</span> {comp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-[#A0A0B8] tracking-widest uppercase mb-2">Target Outcomes</h4>
                  <ul className="space-y-1">
                    {sol.outcomes.map((out, i) => (
                      <li key={i} className="text-[#A0A0B8] text-xs flex items-start gap-2">
                        <span className="text-[#10B981] mt-0.5">▹</span> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
