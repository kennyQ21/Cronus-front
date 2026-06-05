"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesPreview() {
  return (
    <section className="py-32 border-y border-white/5 bg-[#020617]/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#00D4FF] font-mono text-sm tracking-widest uppercase mb-4 block">Global Operations Map</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
          Operating Systems for<br/>Every Industry
        </h2>
        <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto mb-12">
          We don&apos;t build generic SaaS. We build the core operating networks that run healthcare, finance, and manufacturing at global scale.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Healthcare", "Finance", "Manufacturing", "Retail", "Logistics", "Energy"].map((industry, i) => (
            <div key={i} className="px-6 py-3 border border-white/10 rounded-sm bg-[#050816] text-[#F8FAFC] font-mono text-xs uppercase tracking-widest hover:border-[#00D4FF] transition-colors cursor-pointer">
              {industry}
            </div>
          ))}
        </div>

        <Link href="/industries" className="btn-solid inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-bold">
          Access Global Operations Map <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
