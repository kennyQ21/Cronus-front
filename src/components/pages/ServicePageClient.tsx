"use client";

import React from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  Wrench,
  Milestone,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  tech: string[];
  roadmap: string[];
  benefits: string[];
  caseStudy: {
    client: string;
    title: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export default function ServicePageClient({ service }: { service: ServiceDetail }) {
  return (
    <div className="min-h-screen bg-white text-[#0F0F17]">
      <Navbar />

      <main className="pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Back button Link */}
          <div className="mb-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-text-secondary hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </div>

          {/* Hero Header Card */}
          <div className="p-8 sm:p-12 mb-16 rounded-sm border border-black/[0.08] bg-[#F7F8FA] bg-blueprint-grid relative overflow-hidden">
            <div className="space-y-6 max-w-3xl relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Service Specialization
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F17] leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-[#50506A] leading-relaxed">
                {service.tagline}
              </p>
              <p className="text-base text-[#50506A] leading-relaxed">
                {service.summary}
              </p>
            </div>
          </div>

          {/* Challenges & Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Challenges */}
            <div className="card p-8 space-y-6 bg-white">
              <h2 className="font-display text-xl font-bold text-[#0F0F17] flex items-center gap-2.5">
                <Target className="w-5 h-5 text-red-500" /> Business Challenges We Address
              </h2>
              <div className="space-y-4">
                {service.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-text-secondary leading-relaxed">
                    <span className="font-bold text-red-500 mt-0.5">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="card p-8 space-y-6 border-l-[2px] border-l-brand-primary bg-white">
              <h2 className="font-display text-xl font-bold text-[#0F0F17] flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-primary" /> Solutions Offered
              </h2>
              <div className="space-y-4">
                {service.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-text-secondary leading-relaxed">
                    <span className="font-bold text-brand-primary mt-0.5">•</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Tech Stack & Benefits split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Left: Tech Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-brand-primary" />
                <h3 className="font-display text-lg font-bold text-[#0F0F17] uppercase tracking-wider">
                  Technology Stack
                </h3>
              </div>
              <p className="text-xs text-brand-text-secondary leading-relaxed">
                We leverage enterprise-standard, audit-ready developer toolkits to ensure system speed and framework reliability.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#0F0F17] bg-neutral-50 border border-black/[0.08] px-3 py-1.5 rounded-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Business Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
                <h3 className="font-display text-lg font-bold text-[#0F0F17] uppercase tracking-wider">
                  Value & Outcomes
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="card p-4 flex items-center gap-3 bg-white">
                    <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-text-secondary font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Implementation Approach Roadmap */}
          <div className="card p-8 sm:p-12 space-y-8 mb-20 bg-white">
            <div className="flex items-center gap-2.5">
              <Milestone className="w-5 h-5 text-brand-primary" />
              <h3 className="font-display text-xl font-bold text-[#0F0F17] uppercase tracking-wider">
                Implementation Approach
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.roadmap.map((step, idx) => (
                <div key={idx} className="space-y-3 relative">
                  <div className="text-2xl font-display font-extrabold text-black/10">
                    Phase 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F0F17]">{step.split(": ")[0]}</h4>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">{step.split(": ")[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Case Study section */}
          <div className="card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 mb-20 border-t-[3px] border-t-brand-primary bg-white">
            
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/[0.06] bg-neutral-50/50">
              <div>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Featured Case Study
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F0F17]">
                  {service.caseStudy.client}
                </h3>
                <p className="text-sm text-brand-text-secondary mt-2">
                  {service.caseStudy.title}
                </p>
              </div>

              <div className="card p-5 bg-white">
                <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                  Verified Outcome
                </p>
                <p className="text-lg font-display font-bold text-brand-primary mt-1">
                  {service.caseStudy.outcome}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 p-8 sm:p-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">The Challenge</h4>
                <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mt-1">
                  {service.caseStudy.challenge}
                </p>
              </div>
              <div className="pt-2 border-t border-black/[0.06]">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Our Solution</h4>
                <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mt-1">
                  {service.caseStudy.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="card p-10 sm:p-16 text-center space-y-8 border-t-[3px] border-t-brand-primary bg-[#F7F8FA] bg-blueprint-grid">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="section-label">
                <MessageSquare className="w-3 h-3 inline mr-1.5" />Consulting Advisory
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F0F17] leading-tight">
                Review Your Project With <br />a Lead Systems Architect
              </h2>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                Schedule a complimentary 30-minute system assessment. We will audit your challenges and map out delivery requirements.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-brand-primary hover:bg-[#0099D4] transition-colors shadow-sm hover:shadow-md"
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
