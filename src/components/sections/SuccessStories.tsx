"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, CheckCircle } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote: "i-Cronus solved our system bottlenecks when other consultants threw their hands up. They rebuilt our core clearing microservices and handled the migration with zero downtime. They are our go-to engineering partner for complex integrations.",
    author: "Marcus Vance",
    role: "VP of Core Infrastructure",
    company: "ClearingHouse Corp",
    outcome: "Clearing capacity increased 10×",
    color: "#7C3AED",
  },
  {
    id: 2,
    quote: "The compliance checking agent pipeline built by i-Cronus has fundamentally altered our regulatory submission lifecycle. We migrated 4,000 document checks into an automated workflow, ensuring audit alignments in real-time.",
    author: "Dr. Elena Rostov",
    role: "Director of Regulatory Strategy",
    company: "BioMedica International",
    outcome: "Audit cycle reduced by 82%",
    color: "#00E5FF",
  },
  {
    id: 3,
    quote: "We needed to migrate our global telemetry ingestion pipeline to the cloud without interrupting logistics. i-Cronus engineered an active-active AKS cluster setup that cut server latency in half and optimised our cloud spend.",
    author: "Sarah Chen",
    role: "Chief Information Officer",
    company: "CargoLink Logistics",
    outcome: "35% cloud cost optimisation",
    color: "#4F8CFF",
  },
];

const clients = ["BioMedica Inc.", "ClearingHouse Corp.", "CargoLink Int.", "Luminate Cloud", "Apex Health"];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % testimonialsData.length); };
  const handlePrev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + testimonialsData.length) % testimonialsData.length); };

  const active = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label">Client Success</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            Trust Formed Through<br />
            <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="mt-3 max-w-xl text-[#A0A0B8]">
            Technical leaders who trusted i-Cronus to engineer and deploy their business-critical digital networks.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-glow relative overflow-hidden"
              style={{ borderColor: `${active.color}20` }}
            >
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${active.color}60, transparent)` }} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
                {/* Quote column */}
                <div className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-between gap-6 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="space-y-5">
                    <Quote className="w-10 h-10 opacity-20" style={{ color: active.color }} />
                    <p className="text-lg text-white font-medium leading-relaxed">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-white">{active.author}</p>
                    <p className="text-xs text-[#60607A] mt-0.5">
                      {active.role},{" "}
                      <span className="text-[#A0A0B8] font-semibold">{active.company}</span>
                    </p>
                  </div>
                </div>

                {/* Outcome column */}
                <div className="md:col-span-4 p-8 sm:p-10 flex flex-col justify-center gap-4" style={{ background: `${active.color}05` }}>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: active.color }}>
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Outcome
                  </span>
                  <p className="font-display text-2xl font-bold text-white leading-tight">{active.outcome}</p>
                  <p className="text-xs text-[#60607A] leading-relaxed">SLA guarantees and operational metrics confirmed by client audit logs.</p>
                  {/* Animated line */}
                  <div className="h-px w-full mt-2 overflow-hidden bg-white/5">
                    <motion.div
                      className="h-full"
                      style={{ background: active.color }}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {testimonialsData.map((t, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                className={`h-2 rounded-full transition-all duration-300`}
                style={{
                  width: idx === currentIndex ? "24px" : "8px",
                  background: idx === currentIndex ? testimonialsData[idx].color : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handlePrev} className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 text-[#A0A0B8] hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={handleNext} className="p-2.5 rounded-lg border border-white/10 hover:border-white/20 text-[#A0A0B8] hover:text-white transition-all">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Client strip */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#60607A] mb-8 text-center">Empowering technical engineering teams globally</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {clients.map((company) => (
              <span key={company} className="font-display text-sm font-bold tracking-widest uppercase text-white/20 hover:text-[#00E5FF]/40 transition-colors cursor-default">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
