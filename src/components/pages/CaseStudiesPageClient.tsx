"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Target, Award, CheckSquare, MessageSquare } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

interface CaseDetail {
  id: string;
  client: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  implementation: string;
  outcome: string;
  results: string[];
  tech: string[];
}

const casesList: CaseDetail[] = [
  {
    id: "pharma-ai",
    client: "BioMedica International",
    industry: "Healthcare & Pharma",
    title: "AI Compliance Ingestion Hub",
    metric: "82%",
    metricLabel: "Audit Cycle Speedup",
    challenge: "Manually auditing and ingestion of thousands of pharmaceutical filings across 40+ country jurisdictions. Extremely high compliance penalties and human error rates.",
    solution: "Designed a RAG-first ingestion hub built on Next.js, LangChain, and Python FastAPI, utilizing AWS EKS and Pinecone vector search. Created localized AI agents running audits against regional regulatory standards.",
    implementation: "1. Auditing legacy document silos and mapping local laws. 2. Engineering Pinecone vector search indexing. 3. Building agentic validation nodes in FastAPI. 4. Enforcing strict cloud landing compliance tags.",
    outcome: "Accelerated filings ingestion pipelines, saving $1.4M in annual operating overhead and ensuring 100% regulatory compliance alignment.",
    results: [
      "Auditing cycle speeds boosted by 82%",
      "Ingestion backlog reduced from months to minutes",
      "Zero compliance alignment failures detected in 12 months",
      "$1.4M saved in operational audit costs",
    ],
    tech: ["AWS EKS", "Pinecone", "FastAPI", "Next.js", "LangChain", "Terraform"],
  },
  {
    id: "clearing-house",
    client: "ClearingHouse Corp",
    industry: "Financial Services",
    title: "High-Throughput Clearing Microservice Re-engineering",
    metric: "50,000",
    metricLabel: "Tx / Sec Clearance",
    challenge: "Clearing bottlenecks and processing delays caused by a legacy, 15-year-old COBOL mainframe clearing system struggling to handle market volatility peak volumes.",
    solution: "Developed a custom high-concurrency database-clearing microservice written in Go, using Apache Kafka for event sourcing and PostgreSQL with Citus extension for distributed scale.",
    implementation: "1. Profiling transaction logs to find database blocks. 2. Coding Go microservices and gRPC contracts. 3. Deploying parallel Kafka event queues. 4. Initiating zero-downtime database load routing.",
    outcome: "Clearing throughput capacity increased by 10x, enabling active sub-millisecond execution times and maintaining 99.999% system availability.",
    results: [
      "50,000 clearing actions completed per second",
      "Average execution latencies reduced below 1ms",
      "99.999% uptime maintained during peak volatility",
      "Obsolete COBOL mainframe completely decommissioned",
    ],
    tech: ["Go", "Apache Kafka", "Citus DB", "gRPC", "Prometheus", "ArgoCD"],
  },
  {
    id: "logistics-cloud",
    client: "CargoLink Logistics",
    industry: "Logistics & Supply Chain",
    title: "Global Active-Active Supply Chain Cloud Migration",
    metric: "35%",
    metricLabel: "Infrastructure Cost Savings",
    challenge: "Migrating an complex, monolithic supply chain logistics database from on-prem servers to the cloud, while maintaining live 24/7/365 telemetry streams.",
    solution: "Provisioned a multi-region active-active AKS (Azure Kubernetes) setup utilizing Terraform, configured globally routed databases via Cosmos DB, and implemented zero-trust access settings.",
    implementation: "1. Profiling Monolith endpoints. 2. Provisioning cloud clusters using modular Terraform files. 3. Setting up Cosmos DB global replication. 4. Continuous deployment auto-routing setup with ArgoCD.",
    outcome: "Successful migration completed with zero system downtime. Reduced global network latency by 60% and improved security postures.",
    results: [
      "35% cloud resource cost savings achieved",
      "Application latencies across EMEA reduced by 60%",
      "Zero seconds of database downtime during migration run",
      "100% automated CI/CD security audit compliance",
    ],
    tech: ["AKS", "Cosmos DB", "Terraform", "Entra ID", "Github Actions", "Grafana"],
  },
];

export default function CaseStudiesPageClient() {
  return (
    <div className="relative min-h-screen bg-white text-[#0F0F17] selection:bg-brand-primary/10">
      <Navbar />

      <main className="pt-24 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Banner */}
          <div className="p-8 sm:p-12 mb-16 rounded-sm border border-black/[0.08] bg-[#F7F8FA] bg-blueprint-grid text-center max-w-3xl mx-auto relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Featured Case Studies
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F17] mt-4 leading-tight">
              Mission-Critical Integrations
            </h1>
            <p className="text-sm sm:text-base text-[#50506A] mt-6 leading-relaxed">
              Read how we partner with enterprise leaders to de-risk software infrastructures, resolve system bottlenecks, and automate compliance audits.
            </p>
          </div>

          {/* Case Studies list */}
          <div className="space-y-16">
            {casesList.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/[0.08] p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative overflow-hidden group hover:border-brand-primary/30 transition-colors duration-300 shadow-sm border-t-[3px] border-t-brand-primary"
              >

                {/* Left Column: Metrics, Tech & Results */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-8 order-2 lg:order-1">
                  
                  {/* Verified outcome card */}
                  <div className="p-6 rounded-sm bg-neutral-50/50 border border-black/[0.06] flex items-center gap-6">
                    <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-primary tracking-tight">
                      {c.metric}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0F0F17] uppercase tracking-widest">
                        {c.metricLabel}
                      </p>
                      <p className="text-[10px] text-[#50506A] mt-0.5">
                        Business outcome audited
                      </p>
                    </div>
                  </div>

                  {/* Results list */}
                  <div className="space-y-4 pt-4 border-t border-black/[0.06]">
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Audited Outcomes
                    </span>
                    <div className="space-y-3">
                      {c.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#50506A] leading-normal">
                          <CheckSquare className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06]">
                    {c.tech.map((t) => (
                      <span key={t} className="text-[10px] text-[#50506A] bg-neutral-50 border border-black/[0.08] px-2.5 py-1 rounded-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Column: Challenge, Solution, Implementation */}
                <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold text-[#50506A] uppercase tracking-widest bg-neutral-50 px-2.5 py-1 rounded-sm border border-black/[0.08] inline-block font-medium">
                      {c.client} &bull; {c.industry}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F0F17] group-hover:text-brand-primary transition-colors duration-300">
                      {c.title}
                    </h2>
                  </div>

                  {/* Text sections */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5" /> The Obstacle
                      </h4>
                      <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed mt-1.5">
                        {c.challenge}
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-black/[0.06]">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> Core Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed mt-1.5">
                        {c.solution}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/[0.06]">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> Execution Phases
                      </h4>
                      <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed mt-1.5">
                        {c.implementation}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/[0.06]">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> Integration Outcome
                      </h4>
                      <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed mt-1.5">
                        {c.outcome}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Conversion CTA */}
          <div className="mt-24 p-8 sm:p-16 rounded-sm bg-[#F7F8FA] bg-blueprint-grid border border-black/[0.08] border-t-[3px] border-t-brand-primary text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden shadow-sm">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-black/[0.08] text-[9px] font-semibold uppercase tracking-widest text-brand-primary">
                <MessageSquare className="w-3 h-3" /> Consulting Advisory
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F0F17] leading-tight">
                Review Your Project Requirements With <br />a Lead Systems Architect
              </h2>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                Schedule a complimentary 30-minute system assessment. We will audit your challenges and map out delivery requirements.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-brand-primary hover:bg-[#0099D4] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Schedule System Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

