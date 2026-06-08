"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEngineStore, EngineType } from "@/store/engineStore";
import { AlertCircle, Target, Briefcase, Cpu, Layers, Link as LinkIcon, BarChart } from "lucide-react";

const services = [
  {
    id: "AI_ORCHESTRATION" as EngineType,
    title: "Enterprise AI Platforms",
    problem: "Public AI models leak proprietary data. Basic RAG pipelines pollute context and hallucinate. Organizations need private, deterministic intelligence they can trust.",
    whatWeBuild: "We architect secure, sovereign AI platforms. We replace unpredictable LLM calls with rigid state-machines that enforce reasoning paths, ensuring your models only use authorized enterprise data.",
    outcomes: "Accelerate back-office operations by 80%. Ensure 100% data sovereignty. Eliminate hallucinations through deterministic extraction.",
    engagement: "4-Week AI Readiness Assessment followed by a 12-Week Pilot on a single, high-ROI workflow.",
    architecture: "Agentic Knowledge Networks leveraging Hybrid Vector Search (Dense + Sparse) integrated via zero-trust API gateways.",
    stack: ["vLLM", "Pinecone", "LangGraph", "NVIDIA Triton", "Private LLMs"],
    caseStudy: {
      title: "Global Supply Chain Agent",
      metric: "12hr to 400ms",
      desc: "Reduced procurement routing latency."
    },
    related: ["Data Platforms", "Cloud Modernization"]
  },
  {
    id: "CLOUD_TOPOLOGY" as EngineType,
    title: "Cloud Modernization",
    problem: "Legacy monolithic systems suffer from single points of failure, slow deployment cycles, and massive technical debt that prevents global scaling.",
    whatWeBuild: "We migrate fragile infrastructure to highly-available, multi-region cloud topologies. We design zero-downtime environments that heal themselves.",
    outcomes: "Achieve 99.999% availability. Reduce wasteful cloud spend by up to 40%. Deploy 10x faster with absolute confidence.",
    engagement: "Architecture Audit followed by phased monolithic strangulation into microservices over 6-9 months.",
    architecture: "Active-Active Multi-Region Kubernetes clusters connected via Istio service meshes with global traffic routing.",
    stack: ["AWS/Azure", "Kubernetes", "Terraform", "Istio", "Datadog"],
    caseStudy: {
      title: "Tier 1 Investment Bank",
      metric: "99.999%",
      desc: "High-frequency trading failover."
    },
    related: ["Enterprise AI Platforms", "Digital Experience"]
  },
  {
    id: "DATA_FLOW" as EngineType,
    title: "Data Foundations",
    problem: "24-hour batch ETL jobs and fragmented SQL databases lead to stale business intelligence and impossible AI implementations.",
    whatWeBuild: "We engineer real-time streaming lakehouses. We decouple compute and storage, creating a unified data taxonomy that powers instant analytics.",
    outcomes: "Reduce data latency to milliseconds. Create a unified source of truth. Enable predictive models to run on live data.",
    engagement: "Data Topology Review followed by the implementation of a real-time CDC pipeline and Lakehouse foundation.",
    architecture: "Real-Time Event Streaming via Change Data Capture into a centralized Lakehouse architecture.",
    stack: ["Apache Kafka", "Databricks", "Snowflake", "dbt", "PostgreSQL"],
    caseStudy: {
      title: "Fortune 50 Logistics",
      metric: "$12M ROI",
      desc: "Real-time supply chain visibility."
    },
    related: ["Automation Systems", "Enterprise AI Platforms"]
  }
];

function ServiceBlock({ service, setActiveEngine }: { service: typeof services[0], setActiveEngine: (engine: EngineType) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveEngine(service.id);
    }
  }, [isInView, service.id, setActiveEngine]);

  return (
    <div ref={ref} className="py-24 pr-6 border-b border-white/10 last:border-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: isInView ? 1 : 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase border border-[#00D4FF]/30 px-3 py-1 rounded bg-[#00D4FF]/5">
            {service.id.replace("_", " ")}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10 uppercase">
          {service.title}
        </h2>

        {/* 1. Problem */}
        <div className="mb-8">
          <h4 className="font-mono text-[10px] text-[#EF4444] tracking-widest uppercase mb-3 flex items-center gap-2"><AlertCircle size={14}/> The Problem</h4>
          <p className="text-[#A0A0B8] text-base leading-relaxed font-semibold">{service.problem}</p>
        </div>

        {/* 2. What We Build */}
        <div className="mb-10 p-6 bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded">
          <h4 className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase mb-3 flex items-center gap-2"><Layers size={14}/> What We Build</h4>
          <p className="text-white text-base leading-relaxed">{service.whatWeBuild}</p>
        </div>

        {/* 3. Business Outcomes & 4. Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#020617] border border-white/5 p-6 rounded">
            <h4 className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase mb-3 flex items-center gap-2"><Target size={14}/> Business Outcomes</h4>
            <p className="text-[#A0A0B8] text-sm leading-relaxed">{service.outcomes}</p>
          </div>
          <div className="bg-[#020617] border border-white/5 p-6 rounded">
            <h4 className="font-mono text-[10px] text-[#F59E0B] tracking-widest uppercase mb-3 flex items-center gap-2"><Briefcase size={14}/> Typical Engagement</h4>
            <p className="text-[#A0A0B8] text-sm leading-relaxed">{service.engagement}</p>
          </div>
        </div>

        {/* 5. Architecture Snapshot */}
        <div className="mb-10">
          <h4 className="font-mono text-[10px] text-[#60A5FA] tracking-widest uppercase mb-3 flex items-center gap-2"><Cpu size={14}/> Architecture Snapshot</h4>
          <p className="text-[#A0A0B8] text-sm leading-relaxed border-l-2 border-[#60A5FA] pl-4">{service.architecture}</p>
        </div>

        {/* 6. Technology Stack & 7. Case Study */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="font-mono text-[10px] text-[#7C3AED] tracking-widest uppercase mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((item: string, i: number) => (
                <span key={i} className="text-[#A0A0B8] text-[10px] font-mono border border-white/10 bg-[#020617] px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-[#EC4899] tracking-widest uppercase mb-3 flex items-center gap-2"><BarChart size={14}/> Proven Impact</h4>
            <div className="bg-[#020617] border border-white/10 p-4 rounded">
              <div className="text-white font-bold text-sm mb-1">{service.caseStudy.title}</div>
              <div className="text-[#EC4899] font-mono text-lg font-bold mb-1">{service.caseStudy.metric}</div>
              <div className="text-[#A0A0B8] text-[10px] uppercase tracking-wider">{service.caseStudy.desc}</div>
            </div>
          </div>
        </div>

        {/* 8. Related Solutions */}
        <div>
          <h4 className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-3 flex items-center gap-2"><LinkIcon size={14}/> Related Capabilities</h4>
          <div className="flex gap-4">
             {service.related.map((item, i) => (
               <span key={i} className="text-[#A0A0B8] text-xs underline decoration-white/20 underline-offset-4">{item}</span>
             ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    return () => setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative pt-24 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6">
        <div className="flex flex-col">
           <div className="pt-32 pb-12 border-b border-white/10 mb-8">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] mb-6">
                ENGINEERING<br/>OUTCOMES
              </h1>
              <p className="text-[#A0A0B8] text-lg max-w-md">
                We design and operate the intelligent systems that transform enterprise capabilities.
              </p>
           </div>

           {services.map((service, idx) => (
             <ServiceBlock key={idx} service={service} setActiveEngine={setActiveEngine} />
           ))}
        </div>
      </div>
    </div>
  );
}
