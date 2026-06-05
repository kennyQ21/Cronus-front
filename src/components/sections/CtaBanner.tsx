"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function CtaBanner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 mb-8">
            <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-xs font-semibold text-[#00E5FF] tracking-[0.2em] uppercase">Start a Conversation</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Partner on Your
            <br />
            <span className="gradient-text">Next Critical System?</span>
          </h2>

          <p className="text-[#A0A0B8] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Schedule an advisory session with a Lead Architect to audit your technical
            requirements and outline a system roadmap.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Magnetic strength={0.25}>
              <Link href="/contact" className="btn-solid inline-flex items-center gap-2 group energy-pulse">
                Consult an Architect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="/case-studies" className="btn-glow inline-flex items-center gap-2">
                View Case Studies
              </Link>
            </Magnetic>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-xs text-[#60607A]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00E5FF]" />
              <span>SLA-backed response: Under 2 hours</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4F8CFF]" />
              <span>Standard NDA protection guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
