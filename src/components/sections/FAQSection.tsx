"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do AI projects typically begin?",
    a: "We start with an AI Readiness Assessment to evaluate your data taxonomy, regulatory constraints, and infrastructure. We then architect a proof-of-concept focusing on a single, high-ROI workflow to demonstrate deterministic output before scaling."
  },
  {
    q: "How long does implementation take?",
    a: "Architecture audits take 2-3 weeks. Proof-of-concepts take 4-8 weeks. Full production deployments for enterprise architectures typically range from 3-6 months depending on legacy system complexity."
  },
  {
    q: "Do you support cloud migration from legacy monoliths?",
    a: "Yes. We specialize in refactoring on-premise monolithic applications into multi-region, Kubernetes-orchestrated microservices on AWS, Azure, or GCP with zero-downtime rollouts."
  },
  {
    q: "How do you handle security and compliance?",
    a: "Security is built into the architecture via Zero-Trust service meshes (Istio), strict RBAC integration, and isolated VPCs. We ensure compliance with HIPAA, SOC2, and GDPR by ensuring no data leaves your sovereign environment, especially when deploying private LLMs."
  },
  {
    q: "What is your engagement model?",
    a: "We act as your dedicated engineering partner. We do not augment your staff with temporary resources; we take full ownership of the architecture, build, deployment, and ongoing SLA-backed operations."
  },
  {
    q: "Do you build custom software or just infrastructure?",
    a: "Both. We architect the underlying cloud and data infrastructure, and we build the high-throughput APIs, microservices, and React/Next.js frontends that sit on top of it."
  },
  {
    q: "How do you prevent AI hallucinations?",
    a: "We do not rely on probabilistic LLM endpoints for business logic. We use LLMs strictly for natural language parsing, wrapped in deterministic state-machines (LangGraph) and strict vector-search guardrails to enforce absolute accuracy."
  },
  {
    q: "What industries do you specialize in?",
    a: "Our architectures are designed for highly-regulated, mission-critical environments including Finance, Healthcare, Manufacturing, Logistics, and the Public Sector."
  },
  {
    q: "Do you offer Day-2 operations and support?",
    a: "Yes. Our SRE teams provide 24/7 telemetry monitoring (Datadog/NewRelic), automated incident response, and continuous optimization for all infrastructure we deploy."
  },
  {
    q: "What is the typical cost structure?",
    a: "Engagements are scoped based on architectural complexity and deliverables. Following the Discover phase, we provide a fixed-bid or milestone-based proposal covering both capital expenditure (build) and operational expenditure (run)."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 border-t border-white/5 bg-[#050816] relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-1">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Enterprise Procurement</span>
          <h2 className="font-display text-4xl font-bold text-white uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A0A0B8] text-sm">
            Answers regarding our engineering methodology, security standards, and engagement structures.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border ${openIdx === i ? 'border-[#00D4FF]/30 bg-[#00D4FF]/5' : 'border-white/10 bg-[#020617]'} transition-colors cursor-pointer`}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="p-6 flex justify-between items-center gap-4">
                <h3 className={`font-semibold text-sm ${openIdx === i ? 'text-[#00D4FF]' : 'text-white'}`}>
                  {faq.q}
                </h3>
                <div className="text-[#A0A0B8] flex-shrink-0">
                  {openIdx === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              {openIdx === i && (
                <div className="px-6 pb-6 pt-0 text-[#A0A0B8] text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
