"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEngineStore, EngineType } from "@/store/engineStore";
import { Activity, Database, Search, Layers, Clock } from "lucide-react";

const studies = [
  {
    title: "Global Supply Chain Re-Architecture",
    client: "Fortune 50 Logistics Provider",
    context: "The client operated a $40B global logistics network relying on a 20-year-old monolithic Oracle database for inventory and routing. The database was locked during 8-hour nightly ETL batch windows.",
    problem: "Nightly batch processing caused a 12 to 24-hour delay in global supply chain visibility. If a cargo ship was delayed, downstream distribution centers wouldn't know until the next day, causing massive bullwhip effects.",
    architecture: "We deployed a decoupled, event-driven streaming architecture. Legacy mainframes were wrapped in Change Data Capture (CDC) connectors. Events streamed into an active-active Kafka cluster spanning 3 AWS regions, instantly feeding a Databricks lakehouse and a real-time Redis caching layer.",
    implementation: "1. Deployed AWS Transit Gateways for secure hybrid-cloud connectivity.\n2. Implemented Debezium for CDC without impacting mainframe performance.\n3. Rolled out microservices gradually using the Strangler Fig pattern.",
    lessons: "CDC connector tuning was critical to prevent mainframe CPU spikes. Enforcing strict Avro schemas in the Confluent Schema Registry prevented downstream pipeline failures.",
    future: "Integrating reinforcement learning models directly into the Kafka stream for autonomous predictive rerouting.",
    metrics: ["12hr → 400ms data latency", "Zero downtime migration", "$12M operational savings"],
    stack: ["Kafka", "Databricks", "AWS EKS", "Debezium", "Redis Enterprise"],
    engine: "DATA_FLOW" as EngineType
  },
  {
    title: "Autonomous RAG Knowledge Network",
    client: "Tier 1 Investment Bank",
    context: "The regulatory compliance team consisted of 400 analysts manually reading and extracting covenants from 10,000+ complex legal and financial documents daily.",
    problem: "Human analysts were backlogged by 3 weeks. Attempting to use public AI APIs was impossible due to strict SEC data privacy regulations. Standard vector search returned hallucinated answers due to complex financial jargon.",
    architecture: "A 100% air-gapped sovereign AI enclave on Azure. We implemented an Agentic RAG architecture (LangGraph) orchestrating specialized sub-agents for extraction, verification, and formatting. We used a Hybrid Search approach (Dense embeddings + Sparse BM25) backed by a Fine-Tuned Llama 3 model.",
    implementation: "1. Provisioned Azure GPU VMs within an isolated VNet.\n2. Ingested 5M+ historical documents into Pinecone.\n3. Built a deterministic state-machine using LangGraph to force the LLM to cite exact document coordinates.",
    lessons: "Basic semantic search fails on financial documents because numbers are structurally important. Hybrid search (adding exact keyword matching) improved accuracy from 71% to 99.4%.",
    future: "Expanding the agent network to automatically draft regulatory responses based on extracted findings.",
    metrics: ["4 days → 2 mins extraction", "99.4% verified accuracy", "100% data sovereignty"],
    stack: ["Pinecone", "LangGraph", "Azure ML", "vLLM", "Llama 3"],
    engine: "AI_ORCHESTRATION" as EngineType
  },
  {
    title: "High-Frequency Trading Network Failover",
    client: "Global Financial Exchange",
    context: "The exchange handled $500B+ in daily transaction volume. Their monolithic matching engine was housed in a single primary data center.",
    problem: "A minor fiber cut caused a 4-minute outage, resulting in millions of dollars in lost transaction fees and severe regulatory scrutiny.",
    architecture: "Active-Active Multi-Region Mesh. We re-architected the monolithic matching engine into distributed Go microservices deployed on Azure Kubernetes Service (AKS) across 3 geographic zones, connected by an Istio service mesh.",
    implementation: "1. Containerized the matching engine.\n2. Implemented an Istio multi-cluster mesh for transparent cross-region routing.\n3. Deployed a globally distributed CockroachDB cluster for strong consistency without single points of failure.",
    lessons: "Cross-region network latency (speed of light constraints) required careful placement of stateful database nodes to maintain ACID compliance without slowing down the trading engine.",
    future: "Deploying edge computing nodes closer to institutional traders to reduce last-mile latency.",
    metrics: ["4 mins → < 2s recovery", "99.999% uptime SLA", "Zero-trust mTLS encryption"],
    stack: ["Azure AKS", "Istio", "Golang", "CockroachDB", "Terraform"],
    engine: "CLOUD_TOPOLOGY" as EngineType
  }
];

function CaseStudyBlock({ item, setActiveEngine }: { item: { title: string, client: string, context: string, problem: string, architecture: string, implementation: string, lessons: string, future: string, metrics: string[], stack: string[], engine: EngineType }, setActiveEngine: (engine: EngineType) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveEngine(item.engine);
    }
  }, [isInView, item.engine, setActiveEngine]);

  return (
    <div ref={ref} className="py-24 pr-6 border-b border-white/10 last:border-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: isInView ? 1 : 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase border border-[#00D4FF]/30 px-3 py-1 rounded bg-[#00D4FF]/5 mb-6 inline-block">
          ENGINEERING REPORT // {item.client}
        </span>
        <h2 className="font-display text-4xl font-bold text-white mb-8">
          {item.title}
        </h2>

        <div className="bg-[#050816] border border-white/5 p-6 rounded mb-8">
           <h4 className="font-mono text-[10px] text-[#A0A0B8] tracking-widest uppercase mb-2">Context & Baseline</h4>
           <p className="text-[#A0A0B8] text-sm leading-relaxed">{item.context}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
             <h4 className="font-mono text-[10px] text-[#EC4899] tracking-widest uppercase mb-3 flex items-center gap-2"><Activity size={14} /> The Problem</h4>
             <p className="text-[#A0A0B8] text-sm leading-relaxed border-l-2 border-[#EC4899] pl-3">{item.problem}</p>
          </div>
          <div>
             <h4 className="font-mono text-[10px] text-[#60A5FA] tracking-widest uppercase mb-3 flex items-center gap-2"><Database size={14} /> The Architecture</h4>
             <p className="text-[#A0A0B8] text-sm leading-relaxed border-l-2 border-[#60A5FA] pl-3">{item.architecture}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-[#020617] border border-white/5 p-6 rounded">
          <div>
             <h4 className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase mb-3 flex items-center gap-2"><Layers size={14} /> Implementation Steps</h4>
             <div className="text-[#A0A0B8] text-sm leading-relaxed whitespace-pre-line">{item.implementation}</div>
          </div>
          <div>
             <h4 className="font-mono text-[10px] text-[#F59E0B] tracking-widest uppercase mb-3 flex items-center gap-2"><Search size={14} /> Lessons Learned</h4>
             <p className="text-[#A0A0B8] text-sm leading-relaxed">{item.lessons}</p>
             
             <h4 className="font-mono text-[10px] text-[#8B5CF6] tracking-widest uppercase mt-6 mb-3 flex items-center gap-2"><Clock size={14} /> Future Roadmap</h4>
             <p className="text-[#A0A0B8] text-sm leading-relaxed">{item.future}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
          <div className="w-full">
            <h4 className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase mb-4">Verified Impact Metrics</h4>
            <div className="flex flex-wrap gap-4">
              {item.metrics.map((metric: string, i: number) => (
                <div key={i} className="bg-[#00D4FF]/10 text-[#00D4FF] font-mono text-sm px-4 py-2 rounded font-bold border border-[#00D4FF]/20">
                  {metric}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full mt-4">
            <h4 className="font-mono text-[10px] text-[#A0A0B8] tracking-widest uppercase mb-4">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech: string, i: number) => (
                <span key={i} className="text-[10px] font-mono text-[#A0A0B8] uppercase border border-white/10 px-2 py-1 rounded bg-[#020617]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    return () => setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block h-screen sticky top-0" />
        
        <div className="flex flex-col">
           <div className="pt-32 pb-12 border-b border-white/10 mb-8">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] mb-6">
                ENGINEERING<br/>TRANSFORMATIONS
              </h1>
              <p className="text-[#A0A0B8] text-lg max-w-md">
                Detailed after-action reports on our most complex planetary-scale deployments.
              </p>
           </div>

           {studies.map((item, idx) => (
             <CaseStudyBlock key={idx} item={item} setActiveEngine={setActiveEngine} />
           ))}
        </div>
      </div>
    </div>
  );
}
