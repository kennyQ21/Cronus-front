"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Award,
  Settings,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  challenges: string[];
  howWeHelp: string[];
  services: { name: string; href: string }[];
  techSolutions: string[];
  successStory: {
    title: string;
    description: string;
    metric: string;
  };
}

export default function IndustryPageClient({ industry }: { industry: IndustryDetail }) {
  return (
    <div className="relative min-h-screen bg-white text-[#0F0F17] selection:bg-brand-primary/10">
      <Navbar />

      <main className="pt-24 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-text-secondary hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Industries
            </Link>
          </div>

          {/* Hero Header Card */}
          <div className="p-8 sm:p-12 mb-16 rounded-sm border border-black/[0.08] bg-[#F7F8FA] bg-blueprint-grid relative overflow-hidden">
            <div className="space-y-6 max-w-3xl relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Industry Vertical
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F17] leading-tight">
                {industry.name}
              </h1>
              <p className="text-lg text-brand-primary font-semibold leading-relaxed">
                {industry.tagline}
              </p>
              <p className="text-base text-[#50506A] leading-relaxed">
                {industry.summary}
              </p>
            </div>
          </div>

          {/* Challenges & How We Help Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Industry Challenges */}
            <div className="card p-8 bg-white space-y-6">
              <h2 className="font-display text-xl font-bold text-[#0F0F17] flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-red-500" /> Key Sector Obstacles
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-text-secondary leading-relaxed">
                    <span className="font-bold text-red-500 mt-0.5">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Help */}
            <div className="card p-8 bg-white border-l-[2px] border-l-brand-primary space-y-6">
              <h2 className="font-display text-xl font-bold text-[#0F0F17] flex items-center gap-2.5">
                <Award className="w-5 h-5 text-brand-primary" /> How i-Cronus Integrates
              </h2>
              <div className="space-y-4">
                {industry.howWeHelp.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-text-secondary leading-relaxed">
                    <span className="font-bold text-brand-primary mt-0.5">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Services & Tech Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Left: Relevant Services */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <Settings className="w-5 h-5 text-brand-primary" />
                <h3 className="font-display text-lg font-bold text-[#0F0F17] uppercase tracking-wider">
                  Relevant Services
                </h3>
              </div>
              <p className="text-xs text-brand-text-secondary leading-relaxed">
                Click to explore our specific capabilities deployed within this sector.
              </p>
              <div className="flex flex-col gap-3">
                {industry.services.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="flex items-center justify-between p-4 rounded-sm bg-white border border-black/[0.08] hover:border-brand-primary hover:bg-neutral-50 transition-all text-xs font-semibold uppercase tracking-wider text-[#0F0F17] shadow-sm hover:shadow-md"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-primary" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Technology Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-brand-primary" />
                <h3 className="font-display text-lg font-bold text-[#0F0F17] uppercase tracking-wider">
                  Technology Solutions
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.techSolutions.map((sol, i) => (
                  <div key={i} className="p-4 rounded-sm bg-white border border-black/[0.08] space-y-2 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">{sol}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Success Story section */}
          <div className="p-8 sm:p-12 rounded-sm bg-[#F7F8FA] bg-blueprint-grid border border-black/[0.08] border-t-[3px] border-t-brand-primary grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 relative overflow-hidden group shadow-sm">
            
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-2">
                  Industry Success Story
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0F0F17] leading-tight">
                  {industry.successStory.title}
                </h3>
              </div>

              <div className="p-6 rounded-sm bg-white border border-black/[0.08]">
                <span className="text-[9px] font-bold text-[#50506A] uppercase tracking-widest">
                  Verified Outcome Metric
                </span>
                <p className="text-xl sm:text-2xl font-display font-bold text-brand-primary mt-1">
                  {industry.successStory.metric}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex items-center">
              <p className="text-sm sm:text-base text-[#50506A] leading-relaxed">
                {industry.successStory.description}
              </p>
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="p-8 sm:p-16 rounded-sm bg-[#F7F8FA] bg-blueprint-grid border border-black/[0.08] border-t-[3px] border-t-brand-primary text-center space-y-8 relative overflow-hidden shadow-sm">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-black/[0.08] text-[9px] font-semibold uppercase tracking-widest text-brand-primary">
                <MessageSquare className="w-3 h-3" /> Consulting Advisory
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F0F17] leading-tight">
                Review Your Sector Requirements With <br />a Lead Systems Architect
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
