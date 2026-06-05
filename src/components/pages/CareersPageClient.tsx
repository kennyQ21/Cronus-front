"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, BookOpen, Compass, Terminal, ShieldCheck, ArrowRight, X } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  desc: string;
  requirements: string[];
  responsibilities: string[];
}

const openRoles: JobRole[] = [
  {
    id: "sr-go-systems",
    title: "Senior Go Systems Engineer",
    department: "Core Platform Engineering",
    location: "EMEA / Remote",
    desc: "We are seeking a veteran Go engineer to take ownership of our high-concurrency transaction clearing microservices. You will profile memory leaks, optimize SQL queries, and design gRPC endpoints handling over 50,000 requests per second.",
    requirements: [
      "5+ years of production experience writing Go microservices.",
      "Expertise in event sourcing architectures with Apache Kafka.",
      "Deep understanding of Citus DB or partitioned PostgreSQL schemas.",
      "BS or MS in Computer Science or equivalent technical field.",
    ],
    responsibilities: [
      "Optimizing clearing microservices to reduce execution latencies below 1ms.",
      "Collaborating with lead systems architects to draft gRPC protobuf contracts.",
      "Writing automated integration test suites and maintaining 95%+ coverage.",
    ],
  },
  {
    id: "lead-ai-platform",
    title: "Lead AI Platform Engineer",
    department: "AI & Cognitive Practice",
    location: "North America / Remote",
    desc: "Join our GenAI advisory team to build secure RAG ingestion hubs for Fortune 500 enterprises. You will construct agentic model pipelines, implement token budget optimization rules, and configure private vector database indices.",
    requirements: [
      "4+ years of machine learning pipeline engineering with Python and PyTorch.",
      "Production experience orchestrating LLMs with LangChain or LlamaIndex.",
      "Proven expertise in vector lookup engines (Pinecone, Milvus, Qdrant).",
      "Prior experience deploying ML nodes to AWS EKS or Azure AKS.",
    ],
    responsibilities: [
      "Building secure, air-gapped LLM ingestion pipelines for medical regulatory documents.",
      "Implementing prompt cache layers to decrease API token consumption costs.",
      "Evaluating local open-source models (Llama, Mistral) against domain benchmarks.",
    ],
  },
  {
    id: "k8s-devops",
    title: "Senior Kubernetes DevOps Engineer",
    department: "Cloud Engineering & SRE",
    location: "Global / Hybrid",
    desc: "We are seeking an SRE expert to automate active-active multi-region Kubernetes configurations. You will write modular Terraform files, build GitOps pipelines using ArgoCD, and enforce strict security access controls.",
    requirements: [
      "5+ years of managing Kubernetes clusters in production environments.",
      "Advanced mastery of Terraform / Infrastructure-as-Code setups.",
      "Mastery of GitOps methodologies and automated CD tools (ArgoCD, Flux).",
      "Familiarity with regulatory security audits (SOC 2, ISO 27001).",
    ],
    responsibilities: [
      "Automating active-active failover cloud network configurations.",
      "Standardizing corporate landing zones to secure database access protocols.",
      "Configuring PagerDuty alert rules and active Application Insights logging.",
    ],
  },
  {
    id: "sr-data-architect",
    title: "Senior Data Pipeline Architect",
    department: "Data Engineering",
    location: "EMEA / Hybrid",
    desc: "Take ownership of raw transactional telemetry. You will design automated data lakes, configure Snowflake warehouses, and schedule robust Spark transformation runs that scale dynamically.",
    requirements: [
      "6+ years of data engineering experience utilizing Apache Spark and Airflow.",
      "Expertise in Snowflake data warehouse schema modeling.",
      "Deep fluency in writing, testing, and optimizing dbt schema transformations.",
      "Fluency in telemetry log querying (Kusto KQL, Log Analytics).",
    ],
    responsibilities: [
      "Designing automated ingestion pipelines handling over 100M+ events daily.",
      "Re-structuring warehouse schemas to reduce query latencies from hours to seconds.",
      "Deploying automated format validation scripts to prevent pipeline breakages.",
    ],
  },
];

export default function CareersPageClient() {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

  return (
    <div className="relative min-h-screen bg-white text-[#0F0F17] selection:bg-brand-primary/10">
      <Navbar />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="p-8 sm:p-12 mb-20 rounded-sm border border-black/[0.08] bg-[#F7F8FA] bg-blueprint-grid text-center max-w-3xl mx-auto relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Careers
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F17] mt-4 leading-tight">
              Build Systems That Matter
            </h1>
            <p className="text-sm sm:text-base text-[#50506A] mt-6 leading-relaxed">
              We operate an engineering-first culture. We value technical precision, design audit parameters, and absolute ownership. Join a global team building mission-critical tech.
            </p>
          </div>

          {/* Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pb-16 border-b border-black/[0.08]">
            {[
              { title: "Engineering Rigor", desc: "We focus on clean, type-safe, and robust codebases. We profile memory, audit database schemas, and enforce coverage metrics.", icon: Terminal },
              { title: "Continuous Learning", desc: "Every engineer receives annual learning stipends, cert vouchers, and direct mentorship from industry veteran architects.", icon: BookOpen },
              { title: "Global Delivery", desc: "Our distributed delivery team operates in flexible, remote-first structures, aligning high-performance output with lifestyle balance.", icon: Compass },
            ].map((pillar) => (
              <div key={pillar.title} className="p-8 rounded-sm bg-white border border-black/[0.08] space-y-4 hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-sm bg-[#F7F8FA] border border-black/[0.08] flex items-center justify-center">
                  {React.createElement(pillar.icon, { className: "w-5 h-5 text-brand-primary" })}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0F0F17]">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Roles list */}
          <div className="space-y-8 mb-20">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Opportunities
              </span>
              <h2 className="font-display text-3xl font-bold text-[#0F0F17]">
                Active Openings
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className="p-6 rounded-sm bg-white border border-black/[0.08] hover:border-brand-primary/30 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-[#0F0F17] group-hover:text-brand-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-xs text-[#50506A]">
                      {role.department} &bull; <span className="text-brand-primary font-medium">{role.location}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#50506A] uppercase tracking-wider group-hover:text-brand-primary transition-colors shrink-0 pt-2 sm:pt-0">
                    <span>View Role Specs</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Benefits card */}
          <div className="p-8 sm:p-12 rounded-sm bg-[#F7F8FA] bg-blueprint-grid border border-black/[0.08] space-y-6">
            <h3 className="font-display text-xl font-bold text-[#0F0F17] flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-brand-primary" /> i-Cronus Engineering Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[#50506A]">
              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F17]">Advisory Mentoring</p>
                <p className="text-xs">Direct review sessions with our Principal Systems Architects.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F17]">Continuous Dev</p>
                <p className="text-xs">Paid AWS, Azure, GCP, and Kubernetes certifications.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F17]">Hybrid Flexibility</p>
                <p className="text-xs">Work from anywhere with high-end workspace setup support.</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F17]">Equity & Security</p>
                <p className="text-xs">Competitive base salary with system delivery bonus multipliers.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Expanded Role Specs Modal */}
      <AnimatePresence>
        {selectedRole && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[600px] sm:max-h-[85vh] z-50 rounded-sm bg-white border border-black/[0.08] shadow-2xl flex flex-col overflow-hidden text-[#0F0F17]"
            >
              {/* Header */}
              <div className="p-6 border-b border-black/[0.06] flex items-center justify-between bg-[#F7F8FA]">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F0F17]">
                    {selectedRole.title}
                  </h3>
                  <p className="text-xs text-[#50506A] mt-0.5">
                    {selectedRole.department} &bull; <span className="text-brand-primary">{selectedRole.location}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="p-2 text-[#50506A] hover:text-[#0F0F17] rounded-sm hover:bg-black/[0.04]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                
                {/* Description */}
                <div>
                  <p className="text-sm text-[#50506A] leading-relaxed">
                    {selectedRole.desc}
                  </p>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary">Technical Requirements</h4>
                  <div className="space-y-2">
                    {selectedRole.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#50506A]">
                        <Terminal className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary">Key Responsibilities</h4>
                  <div className="space-y-2">
                    {selectedRole.responsibilities.map((res, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#50506A]">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-6 border-t border-black/[0.06] bg-[#F7F8FA] flex justify-end">
                <a
                  href={`mailto:careers@i-cronus.com?subject=Application for ${selectedRole.title}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-xs font-semibold tracking-wider uppercase bg-brand-primary text-white hover:bg-[#0099D4] transition-all shadow-sm"
                >
                  Submit Resume
                  <ArrowRight className="ml-2 w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
