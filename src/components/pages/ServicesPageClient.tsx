"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Database, Cpu, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Tilt from "@/components/ui/Tilt";
import Magnetic from "@/components/ui/Magnetic";

interface ServiceBlock {
  slug: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  metrics: string;
  tech: string[];
}

const servicesList: ServiceBlock[] = [
  {
    slug: "ai-generative-ai",
    title: "AI & Generative AI Solutions",
    desc: "Deploy custom Large Language Models, structured agent teams, and semantic databases safely inside your corporate network. We focus on ROI-driven AI, not just wrappers.",
    icon: Brain,
    features: [
      "Retrieval Augmented Generation (RAG) pipelines",
      "Custom agentic workflow orchestration",
      "Model evaluation, pruning & token caching",
      "Private air-gapped model hosting deployments",
    ],
    metrics: "82% faster compliance checking",
    tech: ["Python", "PyTorch", "LangChain", "vLLM", "Pinecone", "LlamaIndex"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    desc: "Re-engineer obsolete mainframes or build secure, high-concurrency microservice backends that process millions of requests with sub-millisecond latencies.",
    icon: Code2,
    features: [
      "Distributed microservices architectures",
      "High-throughput transactional clearance backends",
      "Event-driven messaging and event-sourcing",
      "API design and secure gRPC interfaces",
    ],
    metrics: "Clearing capacity increased 10×",
    tech: ["Go", "Java / Spring Boot", "Kafka", "PostgreSQL", "Citus DB", "gRPC"],
  },
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering & DevOps",
    desc: "Provision self-healing, autoscaling Kubernetes clusters and secure cloud landing zones. We automate infrastructure to eliminate configuration drift.",
    icon: Cloud,
    features: [
      "Multi-region active-active architectures",
      "Declarative Infrastructure as Code (IaC)",
      "Zero-downtime automated CI/CD releases",
      "Zero-Trust IAM identity integrations",
    ],
    metrics: "35% reduction in infrastructure costs",
    tech: ["Kubernetes", "AWS", "Azure", "Terraform", "Docker", "Github Actions"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering & Warehousing",
    desc: "Collect, clean, and model complex transactional telemetry. We design automated lakehouses and pipelines that scale dynamically with your data assets.",
    icon: Database,
    features: [
      "Real-time event streaming pipelines",
      "ETL/ELT automation and orchestration",
      "Data lakehouse modelling and schema structures",
      "Audit logs and analytical warehouses",
    ],
    metrics: "100M+ daily transaction telemetry managed",
    tech: ["Apache Spark", "Airflow", "Snowflake", "Databricks", "dbt", "Kusto"],
  },
  {
    slug: "enterprise-automation",
    title: "Enterprise Workflow Automation",
    desc: "Audit manual operational processes and connect disparate business databases. We construct automated workflows to eliminate bottlenecks and human error.",
    icon: Cpu,
    features: [
      "Cross-department system synchronisations",
      "Automated document OCR & parsing pipelines",
      "Scheduled database migrations",
      "Incident logging and PagerDuty alert setups",
    ],
    metrics: "Reconciliation processing time reduced to zero",
    tech: ["n8n", "Make", "UiPath", "Python", "REST middleware"],
  },
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    desc: "Build highly responsive web portals and native mobile layouts. We write fast frontends with strict state management and robust performance metrics.",
    icon: Smartphone,
    features: [
      "SEO optimised Next.js server-rendered sites",
      "Native iOS & Android mobile applications",
      "Secure enterprise client billing portals",
      "Fluid micro-animations and accessibility compliance",
    ],
    metrics: "Used by 12,000+ field technicians daily",
    tech: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Zustand", "Swift"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="pt-24 pb-24">

        {/* Header */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.06] bg-mesh bg-blueprint-grid">
          <span className="section-label">Capabilities</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mt-2 max-w-3xl leading-tight">
            Enterprise Engineering Services
          </h1>
          <p className="mt-6 text-base text-[#5A5A5A] max-w-2xl leading-relaxed">
            We design, build, and operate high-availability systems. Our capabilities are
            organised around technical resilience, strict compliance, and business-focused outcomes.
          </p>
        </section>

        {/* Services List */}
        <section className="px-6 max-w-7xl mx-auto py-20">
          <div className="space-y-6">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  {...fadeUp(idx * 0.04)}
                  className="w-full"
                >
                  <Tilt className="w-full bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

                      {/* Left: Icon + Title + Desc + Features */}
                      <div className="lg:col-span-8 p-8 sm:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-black/[0.06] flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="w-10 h-10 flex items-center justify-center border border-black/[0.08] bg-[#F7F8FA] rounded-sm">
                            <Icon className="w-5 h-5 text-[#5A5A5A]" />
                          </div>

                          <div>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] hover:text-brand-primary transition-colors duration-200">
                              {service.title}
                            </h2>
                            <p className="mt-3 text-sm text-[#5A5A5A] leading-relaxed">{service.desc}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2 text-sm text-[#5A5A5A]">
                              <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Metric + Tech + Link */}
                      <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between gap-8 bg-[#F7F8FA] relative">
                        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.25] pointer-events-none" />
                        <div className="relative z-10">
                          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-2">
                            Business Metric
                          </p>
                          <p className="font-display text-lg font-bold text-[#111111] leading-snug">
                            {service.metrics}
                          </p>
                        </div>

                        <div className="relative z-10 space-y-6">
                          <div className="flex flex-wrap gap-1.5">
                            {service.tech.map((t) => (
                              <span key={t} className="text-[10px] text-[#5A5A5A] bg-white border border-black/[0.06] px-2.5 py-1 rounded-sm font-medium shadow-xs">
                                {t}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/services/${service.slug}`}
                            className="w-full inline-flex items-center justify-between px-5 py-3 rounded-sm text-sm font-semibold border border-black/[0.12] hover:border-brand-primary hover:text-brand-primary text-[#111111] bg-white transition-all shadow-sm hover:shadow-md cursor-pointer"
                          >
                            Explore Capability
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <Tilt className="p-10 sm:p-14 text-center border border-black/[0.08] border-t-[3px] border-t-brand-primary space-y-6 bg-[#F7F8FA] bg-blueprint-grid shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111]">
                Need a Custom Systems Advisory?
              </h2>
              <p className="text-base text-[#5A5A5A] max-w-xl mx-auto leading-relaxed">
                Connect directly with our Lead Architects to review your existing framework
                architectures and run a discovery assessment.
              </p>
              <div className="inline-flex">
                <Magnetic strength={0.15}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-brand-primary hover:bg-[#0099D4] transition-colors shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Speak to a Partner
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
            </Tilt>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
