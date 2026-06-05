"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, BrainCircuit, ShieldAlert, Cpu, HeartHandshake, GitMerge, ArrowRight } from "lucide-react";

const differentiators = [
  {
    title: "Deep Technical Expertise",
    description: "Veteran systems architects and software developers at every engagement.",
    detail: "We focus heavily on technical foundations: zero environment drift, structured database indexing, type-safe API schemas, and robust container scaling.",
    icon: Award,
    color: "#00E5FF",
  },
  {
    title: "AI-First Thinking",
    description: "Generative AI models orchestrated directly into system nodes.",
    detail: "Rather than applying simple API wrappers, we design optimised RAG pipelines, fine-tuned domain-specific agent teams, and custom vector store searches.",
    icon: BrainCircuit,
    color: "#4F8CFF",
  },
  {
    title: "Enterprise Delivery",
    description: "Rigorous audit frameworks, safety measures, and SLA commitments.",
    detail: "All projects shipped using secure Terraform IaC code, maintaining strict SOC 2 Type II controls, active monitoring, and PagerDuty response pathways.",
    icon: ShieldAlert,
    color: "#7C3AED",
  },
  {
    title: "Scalable Solutions",
    description: "Built for performance spikes, large databases, and high throughput.",
    detail: "We construct active-active cloud networks, distributed databases, high-availability microservices, and queue networks designed for peak loads.",
    icon: Cpu,
    color: "#EC4899",
  },
  {
    title: "Agile Teams",
    description: "High-performance teams embedded into your deployment pipelines.",
    detail: "We operate in structured sprint cadences with daily scrums, continuous unit-test auditing, and absolute transparent code hand-offs.",
    icon: GitMerge,
    color: "#00E5FF",
  },
  {
    title: "End-to-End Ownership",
    description: "Full accountability from audit discovery through post-launch scaling.",
    detail: "We provide 24/7/365 SRE site reliability operations, incident management, cloud cost adjustments, and query optimisation updates.",
    icon: HeartHandshake,
    color: "#4F8CFF",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Differentiators</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
              Why Enterprise Leaders<br />Partner With Us
            </h2>
            <p className="mt-3 max-w-xl text-[#A0A0B8]">Our engineering culture, operational safety standards, and technical foundations are designed to de-risk high-concurrency systems.</p>
          </motion.div>
          <Link href="/about" className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors uppercase tracking-wider">
            Our Delivery Model <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 flex flex-col gap-5 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" style={{ background: `linear-gradient(180deg, ${diff.color}, ${diff.color}00)` }} />
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${diff.color}30, transparent)` }} />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${diff.color}12`, border: `1px solid ${diff.color}25` }}
                >
                  <Icon className="w-6 h-6" style={{ color: diff.color }} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-xl font-bold text-white">{diff.title}</h3>
                  <p className="text-sm font-semibold text-[#D0D0E0] leading-relaxed">{diff.description}</p>
                </div>

                <p className="text-xs text-[#60607A] leading-relaxed border-t border-white/5 pt-5">{diff.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
