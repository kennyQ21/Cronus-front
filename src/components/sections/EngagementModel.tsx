"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Braces, Rocket, Activity, CheckCircle2 } from "lucide-react";

interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  objective: string;
  deliverables: string[];
}

const timelineData: TimelineStep[] = [
  {
    phase: "01",
    title: "Discovery & Advisory",
    duration: "Week 1 - 2",
    icon: Search,
    objective: "Auditing legacy technical debt, assessing architectural vulnerabilities, defining compliance requirements (SOC 2, ISO, HIPAA), and identifying high-value AI capabilities.",
    deliverables: [
      "Technical debt audit logs",
      "Systems vulnerability report",
      "Enterprise architecture roadmap",
      "Sizing & resource planning guide",
    ],
  },
  {
    phase: "02",
    title: "System Topology & Design",
    duration: "Week 3 - 4",
    icon: PenTool,
    objective: "Formulating detailed technical designs, database schemas, microservice interaction maps, network topologies, and high-fidelity UX prototypes.",
    deliverables: [
      "Figma UX/UI interface mockups",
      "API Swagger specifications & definitions",
      "Database schema entity relationship drafts",
      "Cloud network VNet & subnet topologies",
    ],
  },
  {
    phase: "03",
    title: "High-Availability Building",
    duration: "Agile Sprints",
    icon: Braces,
    objective: "Writing modular production-grade code, containerizing microservices, constructing CI/CD automation pipelines, and integrating vector lookup pipelines.",
    deliverables: [
      "Clean TypeScript / Go / Python codebases",
      "Dockerized microservice configurations",
      "Automated unit testing scripts",
      "Git continuous integration pipelines",
    ],
  },
  {
    phase: "04",
    title: "Cloud Deployment & Audit",
    duration: "Production Launch",
    icon: Rocket,
    objective: "Setting up multi-region IaC templates, deploying secure autoscaling clusters, conducting traffic stress testing, and completing compliance checks.",
    deliverables: [
      "Terraform / Bicep cloud infrastructure blueprints",
      "Production-ready Kubernetes configurations",
      "Active Application Insights / PagerDuty rules",
      "Penetration testing and security certifications",
    ],
  },
  {
    phase: "05",
    title: "SRE, Scale & Optimize",
    duration: "Continuous Partnership",
    icon: Activity,
    objective: "Monitoring system speed, managing cloud cluster costs, conducting periodic disaster drills, and fine-tuning AI model prompt parameters.",
    deliverables: [
      "24/7/365 active monitoring systems",
      "Monthly SLA compliance reports",
      "Cloud budget optimization recommendations",
      "AI inference speed and token audits",
    ],
  },
];

function TimelineCard({ step, index }: { step: TimelineStep; index: number }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 relative ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer side */}
      <div className="hidden md:block w-[45%]" />

      {/* Center Circle Marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-sm bg-white border border-black/[0.08] group-hover:border-brand-primary flex items-center justify-center transition-all duration-300 shadow-sm">
        {React.createElement(step.icon, { className: "w-4 h-4 text-brand-primary" })}
      </div>

      {/* Card Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[45%] ml-12 md:ml-0 p-6 sm:p-8 rounded-sm bg-white border border-black/[0.08] hover:border-brand-primary/30 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
      >
        {/* Glow indicator line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Phase Badge & Duration */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-3xl font-display font-extrabold text-black/[0.04] group-hover:text-brand-primary/10 transition-colors">
            {step.phase}
          </span>
          <span className="text-[10px] font-semibold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-2.5 py-1 rounded-sm border border-brand-primary/10">
            {step.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111] mb-4 group-hover:text-brand-primary transition-colors">
          {step.title}
        </h3>

        {/* Objective */}
        <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
          {step.objective}
        </p>

        {/* Deliverables */}
        <div className="space-y-2 pt-4 border-t border-black/[0.06]">
          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
            Phase Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {step.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-1.5 text-xs text-[#5A5A5A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function EngagementModel() {
  const containerRef = useRef(null);
  
  // Track scroll inside container to animate vertical line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="engagement-model" className="relative py-24 sm:py-32 bg-white overflow-hidden px-6">
      {/* Light Grid background pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.5] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,174,239,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="flex flex-col gap-4 mb-20 sm:mb-28 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Engagement Model & Delivery Lifecycle
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#5A5A5A]">
            Our structured, milestone-driven lifecycle engineered to guarantee transparency, velocity, and high-performance quality.
          </p>
        </div>

        {/* Timeline body wrapper */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          {/* Main vertical track line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-black/[0.06] pointer-events-none" />

          {/* Animated drawing timeline line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-brand-primary origin-top pointer-events-none"
          />

          {/* Map Steps */}
          <div className="relative">
            {timelineData.map((step, idx) => (
              <TimelineCard key={step.phase} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
