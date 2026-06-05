"use client";

import React from "react";

export default function TechExpertise() {
  const domains = [
    {
      title: "AWS & Multi-Cloud",
      desc: "Why AWS: We utilize AWS (and Azure) to design Active-Active multi-region architectures. We don't just host; we build deterministic failover systems using Route53, EKS, and Global Aurora to guarantee 99.99% uptime for financial trading systems."
    },
    {
      title: "Kubernetes & Istio",
      desc: "Why K8s: Enterprise scale requires isolation and reproducibility. We deploy strict GitOps pipelines using ArgoCD and secure microservice communications via Istio service meshes, enforcing Zero-Trust networking across all node boundaries."
    },
    {
      title: "Kafka & Event Streaming",
      desc: "Why Kafka: Batch processing cannot sustain modern data operations. We build real-time event-driven architectures with Apache Kafka to decouple monolithic data pipelines and provide instant telemetry for autonomous AI agents."
    },
    {
      title: "Databricks & Snowflake",
      desc: "Why Data Platforms: AI is only as intelligent as its underlying data context. We architect Lakehouse patterns to enforce rigorous data governance, schema validation, and vector embedding pipelines required for enterprise-grade RAG."
    },
    {
      title: "LangGraph & vLLM",
      desc: "Why LangGraph: Standard LLM wrappers fail in enterprise settings due to non-deterministic loops. We use LangGraph to build strict, cyclic state-machines that enforce reasoning paths, and vLLM for high-throughput localized inference."
    },
    {
      title: "Terraform & IaC",
      desc: "Why Terraform: Manual infrastructure changes lead to planetary-scale outages. Every component we deploy is codified in Terraform, allowing for immutable infrastructure, rigorous security scanning, and instant disaster recovery."
    }
  ];

  return (
    <section className="py-16 border-t border-white/5 bg-[#050816] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Technology Mastery</span>
            <h2 className="font-display text-4xl font-bold text-white uppercase">
              Engineering with Intent
            </h2>
          </div>
          <p className="text-[#A0A0B8] text-sm max-w-sm mt-4 md:mt-0 font-mono">
            We don&apos;t collect buzzwords. We select enterprise-grade primitives to architect deterministic, highly available systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <div key={i} className="border-l border-[#00D4FF]/30 pl-4 py-2 hover:border-[#00D4FF] transition-colors group">
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{domain.title}</h3>
              <p className="text-[#A0A0B8] text-xs leading-relaxed">{domain.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
