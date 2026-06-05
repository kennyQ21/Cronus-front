"use client";

import React from "react";
import { ShieldCheck, Target, MapPin, Eye, Award } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import EngagementModel from "@/components/sections/EngagementModel";
import Tilt from "@/components/ui/Tilt";

interface Leader {
  name: string;
  role: string;
  bio: string;
  credentials: string;
}

const leaders: Leader[] = [
  {
    name: "Dr. Raymond Vance",
    role: "Chief Executive Officer",
    bio: "Former Accenture Digital Partner with 20+ years of experience leading multi-million dollar global system transformation rollouts.",
    credentials: "BS, MS in Computer Science; MBA from Wharton",
  },
  {
    name: "Sarah Jenkins, PhD",
    role: "Chief Technology Officer",
    bio: "Former Thoughtworks Principal Architect specializing in high-concurrency clearing ledgers and distributed database scaling.",
    credentials: "PhD in Distributed Computing from MIT",
  },
  {
    name: "David Chen",
    role: "Head of AI & Cognitive Practice",
    bio: "Former systems engineer at OpenAI, specialized in private, air-gapped LLM configurations and retrieval agent frameworks.",
    credentials: "MS in Machine Learning from Stanford",
  },
  {
    name: "Elena Rostova",
    role: "VP of Global Delivery & SRE",
    bio: "Former EPAM Delivery Director. Oversees around-the-clock site reliability operations, ISO audits, and SOC 2 governance teams.",
    credentials: "Certified Scrum Master; Certified SRE Practitioner",
  },
];

const deliveryStats = [
  { icon: MapPin,    title: "Global Coverage",     desc: "North America & EMEA delivery offices" },
  { icon: ShieldCheck, title: "Compliance Safety", desc: "Active ISO 27001 & SOC 2 tracking" },
  { icon: Award,    title: "99.999% Availability", desc: "SLA guaranteed system parameters" },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="pt-24 pb-24">

        {/* Hero */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.06] bg-mesh bg-blueprint-grid">
          <div className="max-w-3xl">
            <span className="section-label">Our Identity</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
              Engineering High-Trust Digital Infrastructures
            </h1>
            <p className="mt-6 text-base text-[#5A5A5A] leading-relaxed max-w-2xl">
              We partner with global enterprise leaders to de-risk complex technology
              integrations, combining engineering excellence, AI specialisation, and
              transparent delivery cycles.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="section-label">Our Foundation</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111]">
                Re-Defining System Integrity
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base text-[#5A5A5A] leading-relaxed">
              <p>
                i-Cronus was established to satisfy a critical enterprise need: high-performance
                software engineering backed by senior advisory accountability. We saw corporations
                struggle with generic outsourcing models that delivered sluggish, vulnerable
                codebases causing production downtime.
              </p>
              <p>
                By establishing a strict engineering culture, we focused on transaction clearings,
                container orchestrations, and data ingestion architectures. Today, we deliver
                mission-critical networks that handle peak transactional loads with zero failovers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Tilt className="p-8 space-y-5 border-l-[3px] border-l-brand-primary bg-white border border-black/[0.08] shadow-sm rounded-sm">
              <div className="w-10 h-10 flex items-center justify-center border border-black/[0.08] rounded-sm bg-[#F7F8FA]">
                <Target className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                To engineer secure, resilient, and highly available technological infrastructures
                that protect enterprise assets, accelerate digital transformation, and unlock
                automated operational efficiency.
              </p>
            </Tilt>

            <Tilt className="p-8 space-y-5 border-l-[3px] border-l-brand-primary bg-white border border-black/[0.08] shadow-sm rounded-sm">
              <div className="w-10 h-10 flex items-center justify-center border border-black/[0.08] rounded-sm bg-[#F7F8FA]">
                <Eye className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                To become the global benchmark for high-trust technology consulting, recognised
                by enterprise leaders as the definitive partner for building and scaling
                mission-critical systems.
              </p>
            </Tilt>
          </div>
        </section>

        {/* Delivery Model */}
        <section className="border-b border-black/[0.06] bg-[#F7F8FA]">
          <EngagementModel />
        </section>

        {/* Leadership */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.06]">
          <div className="mb-16">
            <span className="section-label">Our Leadership</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111111]">
              Architects of Corporate Innovation
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#5A5A5A]">
              Our partners bring decades of executive credentials from leading technology
              networks and corporate clearing ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((leader) => (
              <div key={leader.name} className="h-full">
                <Tilt className="h-full p-6 flex flex-col justify-between gap-6 min-h-[290px] bg-white border border-black/[0.08] shadow-sm hover:shadow-md transition-all duration-300 rounded-sm">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-display text-base font-bold text-[#111111]">{leader.name}</h3>
                      <p className="text-xs text-brand-primary font-semibold mt-0.5 uppercase tracking-wide">
                        {leader.role}
                      </p>
                    </div>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed">{leader.bio}</p>
                  </div>
                  <div className="pt-4 border-t border-black/[0.06] text-[10px] text-[#5A5A5A] uppercase tracking-wider font-semibold">
                    {leader.credentials}
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </section>

        {/* Global Delivery */}
        <section className="px-6 max-w-7xl mx-auto py-20">
          <div className="card grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden border border-black/[0.08] border-t-[3px] border-t-brand-primary bg-white shadow-sm">
            {deliveryStats.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className={`p-8 text-center space-y-3 ${idx < 2 ? "border-b md:border-b-0 md:border-r border-black/[0.06]" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-black/[0.08] rounded-sm mx-auto bg-[#F7F8FA]">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="font-display text-base font-bold text-[#111111]">{title}</h4>
                <p className="text-xs text-[#5A5A5A]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
