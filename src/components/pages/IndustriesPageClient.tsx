"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Factory, ShoppingBag, Truck, LineChart, ArrowRight, ShieldAlert } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

interface IndustryBlock {
  slug: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  metricLabel: string;
  color: string;
  challenges: string[];
}

const industriesList: IndustryBlock[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Pharma",
    desc: "HIPAA-compliant patient data pipelines, automated clinical trial ingestions, and predictive diagnostics middleware built on secure cloud networks.",
    icon: Heart,
    metric: "HIPAA / HITECH",
    metricLabel: "Security Compliance",
    color: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30",
    challenges: ["Patient health records (PHI) data silos", "Audit delays in regulatory clinical filings", "Insecure API links to legacy EHR software"],
  },
  {
    slug: "manufacturing",
    name: "Smart Manufacturing",
    desc: "Industrial IoT (IIoT) telemetry pipelines, real-time factory floor anomaly check monitors, and predictive equipment maintenance forecasting.",
    icon: Factory,
    metric: "99.8%",
    metricLabel: "IoT Network Uptime",
    color: "from-orange-500/10 to-amber-500/10 hover:border-orange-500/30",
    challenges: ["High volumes of unsorted telemetry packets", "Unplanned machinery failures stopping runs", "Lack of real-time pipeline performance metrics"],
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    desc: "Scalable inventory clearing API backends, real-time cross-channel catalog syncing engines, and personalized client transaction pipelines.",
    icon: ShoppingBag,
    metric: "320ms",
    metricLabel: "Checkout Latency",
    color: "from-purple-500/10 to-pink-500/10 hover:border-purple-500/30",
    challenges: ["Database locks during transaction surges", "Out-of-sync multi-warehouse inventories", "Sluggish checkout UI causing customer bounce"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    desc: "Real-time geographical fleet tracking systems, automated route optimization microservices, and automated cargo warehouse database logging.",
    icon: Truck,
    metric: "12M+",
    metricLabel: "Daily Telemetry Ingests",
    color: "from-blue-500/10 to-cyan-500/10 hover:border-blue-500/30",
    challenges: ["Network latency in remote asset logs", "Inefficient automated cargo route mappings", "Monolithic supply chain database failures"],
  },
  {
    slug: "finance",
    name: "Financial Services",
    desc: "Audit-ready clearance transaction ledger ledgers, PCI-DSS Level 1 compliant secure API connections, and real-time fraud forecasting logic.",
    icon: LineChart,
    metric: "PCI-DSS Lvl 1",
    metricLabel: "Compliance Standard",
    color: "from-yellow-500/10 to-orange-500/10 hover:border-yellow-500/30",
    challenges: ["Legacy clearing engines bottlenecking volume", "Complex security requirements for customer logs", "Soaring database queries slowing auditing runs"],
  },
];

export default function IndustriesPageClient() {
  return (
    <div className="relative min-h-screen bg-white text-[#0F0F17] selection:bg-brand-primary/10">
      <Navbar />

      <main className="pt-24 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Banner */}
          <div className="p-8 sm:p-12 mb-16 rounded-sm border border-black/[0.08] bg-[#F7F8FA] bg-blueprint-grid text-center max-w-3xl mx-auto relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Sectors We Scale
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0F0F17] mt-4 leading-tight">
              Engineering Domain Depth
            </h1>
            <p className="text-sm sm:text-base text-[#50506A] mt-6 leading-relaxed">
              We design specialized technological systems that satisfy rigid industry audits and handle high telemetry volumes.
            </p>
          </div>

          {/* Grid list of industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;

              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 rounded-sm bg-white border border-black/[0.08] shadow-sm hover:shadow-md hover:border-brand-primary flex flex-col justify-between min-h-[420px] transition-all duration-200 relative group overflow-hidden"
                >
                  <div className="space-y-6 relative z-10">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-sm bg-neutral-50 border border-black/[0.08] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-brand-primary tracking-tight">{ind.metric}</p>
                        <p className="text-[9px] text-[#50506A] uppercase tracking-wider font-semibold">{ind.metricLabel}</p>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0F0F17] group-hover:text-brand-primary transition-colors duration-300">
                        {ind.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#50506A] leading-relaxed line-clamp-3">
                        {ind.desc}
                      </p>
                    </div>

                    {/* Key Challenges */}
                    <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                      <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> Industry Obstacles
                      </span>
                      <div className="space-y-1.5">
                        {ind.challenges.map((c, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#50506A]">
                            <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                            <span className="line-clamp-1">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-6 relative z-10">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider border border-black/[0.12] hover:border-brand-primary bg-white hover:bg-neutral-50 text-[#0F0F17] transition-all shadow-sm hover:shadow-md"
                    >
                      Explore Case Studies & Solutions
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="mt-24 p-8 sm:p-12 rounded-sm bg-[#F7F8FA] bg-blueprint-grid border border-black/[0.08] text-center max-w-4xl mx-auto space-y-6 shadow-sm">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F0F17]">
              Need a Domain-Specific Architecture Assessment?
            </h2>
            <p className="text-sm text-[#50506A] max-w-xl mx-auto leading-relaxed">
              Connect directly with our Lead Architects to run a system readiness audit for your specific regulatory compliance standards.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm text-sm font-semibold text-white bg-brand-primary hover:bg-[#0099D4] transition-all shadow-sm hover:shadow-md cursor-pointer"
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
