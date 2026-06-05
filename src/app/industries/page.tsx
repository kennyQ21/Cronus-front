"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEngineStore } from "@/store/engineStore";
import { ShieldAlert, Network, Cpu, Database } from "lucide-react";

const industries = [
  {
    id: "FINANCE",
    title: "Financial Services",
    overview: "We architect low-latency, high-availability trading networks and secure data lakehouses for Tier-1 investment banks and fintech disruptors.",
    challenges: "Millisecond delays cost millions. Regulatory fines for data breaches are severe. Legacy mainframe environments block modern API integrations.",
    architecture: "Active-Active Multi-Region K8s with Zero-Trust Istio meshes. Real-time Kafka event buses for trade reconciliation and fraud detection.",
    compliance: "PCI-DSS, SOC2 Type II, SEC 17a-4 compliant immutable storage.",
    integrations: ["Bloomberg FIX", "SWIFT", "Plaid", "Stripe API"],
    outcomes: "Sub-2 millisecond latency. 99.999% uptime. Zero data exfiltration events.",
  },
  {
    id: "HEALTHCARE",
    title: "Healthcare & Life Sciences",
    overview: "Secure patient data pipelines, telemedicine microservices, and private AI deployments for clinical decision support.",
    challenges: "Extreme data privacy requirements (HIPAA). Highly fragmented EHR systems (Epic, Cerner) preventing unified patient views.",
    architecture: "Private LLM Endpoints within sovereign VPCs. FHIR-compliant data lakes built on Databricks. Agentic RAG for querying anonymized clinical trials.",
    compliance: "HIPAA, HITRUST, GDPR. Strict BAA enforcement.",
    integrations: ["Epic HL7", "Cerner", "Apple HealthKit"],
    outcomes: "Unified patient telemetry. 40% reduction in clinician charting time. 100% HIPAA compliance.",
  },
  {
    id: "LOGISTICS",
    title: "Global Supply Chain & Logistics",
    overview: "Planetary-scale tracking telemetry, dynamic route optimization arrays, and predictive inventory analytics.",
    challenges: "Batch processing causes massive visibility delays. IoT sensor data overwhelms legacy relational databases.",
    architecture: "High-throughput Kafka ingest pipelines handling 100,000+ events per second. Vector-accelerated route optimization engines.",
    compliance: "ISO 27001, CTPAT Data Security.",
    integrations: ["SAP ERP", "Oracle NetSuite", "IoT Edge Gateways"],
    outcomes: "Real-time global asset visibility. 15% reduction in fuel costs via AI routing. Zero inventory desync.",
  },
  {
    id: "PUBLIC_SECTOR",
    title: "Defense & Public Sector",
    overview: "Air-gapped AI deployments, secure communication networks, and legacy system modernization for government agencies.",
    challenges: "Absolute requirement for air-gapped operations. No reliance on public internet or third-party SaaS APIs. Massive technical debt.",
    architecture: "On-premise Kubernetes clusters. Open-source LLMs (Llama 3) fine-tuned and deployed locally via vLLM on dedicated GPU racks.",
    compliance: "FedRAMP High, IL5/IL6, ITAR.",
    integrations: ["Legacy Mainframes", "Custom Auth Gateways"],
    outcomes: "100% data sovereignty. Modern API layers over 40-year-old mainframes.",
  }
];

function IndustryBlock({ item, setActiveIndustryLayer }: { item: { id: string, title: string, overview: string, challenges: string, architecture: string, compliance: string, integrations: string[], outcomes: string }, setActiveIndustryLayer: (id: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndustryLayer(item.id);
    }
  }, [isInView, item.id, setActiveIndustryLayer]);

  return (
    <div ref={ref} className="py-24 pr-6 border-b border-white/10 last:border-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: isInView ? 1 : 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase border border-[#00D4FF]/30 px-3 py-1 rounded bg-[#00D4FF]/5 mb-6 inline-block">
          SECTOR: {item.id}
        </span>
        <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase">
          {item.title}
        </h2>
        <p className="text-[#A0A0B8] text-lg mb-8 leading-relaxed font-semibold">
          {item.overview}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#050816] border border-white/5 p-5 rounded hover:border-red-500/30 transition-colors">
            <h4 className="font-mono text-[10px] text-red-400 tracking-widest uppercase mb-2 flex items-center gap-2"><ShieldAlert size={14}/> Systemic Challenges</h4>
            <p className="text-[#A0A0B8] text-xs leading-relaxed">{item.challenges}</p>
          </div>
          <div className="bg-[#050816] border border-white/5 p-5 rounded hover:border-[#10B981]/30 transition-colors">
            <h4 className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase mb-2 flex items-center gap-2"><Network size={14}/> Recommended Architecture</h4>
            <p className="text-[#A0A0B8] text-xs leading-relaxed">{item.architecture}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div>
            <h4 className="font-mono text-[10px] text-[#60A5FA] tracking-widest uppercase mb-2 flex items-center gap-1"><ShieldAlert size={12}/> Compliance</h4>
            <p className="text-white text-xs font-mono">{item.compliance}</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-[#60A5FA] tracking-widest uppercase mb-2 flex items-center gap-1"><Database size={12}/> Integrations</h4>
            <div className="flex flex-wrap gap-1">
              {item.integrations.map((int: string, i: number) => (
                <span key={i} className="text-[#A0A0B8] text-[9px] font-mono border border-white/10 bg-[#020617] px-1.5 py-0.5 rounded">{int}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-[#60A5FA] tracking-widest uppercase mb-2 flex items-center gap-1"><Cpu size={12}/> Target Outcomes</h4>
            <p className="text-[#A0A0B8] text-xs">{item.outcomes}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function IndustriesPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);
  const setActiveIndustryLayer = useEngineStore((state) => state.setActiveIndustryLayer);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
    return () => {
      setActiveIndustryLayer("NONE");
    };
  }, [setActiveEngine, setActiveIndustryLayer]);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block h-screen sticky top-0" />
        
        <div className="flex flex-col">
           <div className="pt-32 pb-12 border-b border-white/10 mb-8">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] mb-6">
                GLOBAL<br/>OPERATIONS MAP
              </h1>
              <p className="text-[#A0A0B8] text-lg max-w-md">
                Industry-specific architecture topologies, compliance matrices, and deployment models.
              </p>
           </div>

           {industries.map((item, idx) => (
             <IndustryBlock key={idx} item={item} setActiveIndustryLayer={setActiveIndustryLayer} />
           ))}
        </div>
      </div>
    </div>
  );
}
