"use client";

import React, { useState, useEffect } from "react";
import { useEngineStore } from "@/store/engineStore";
import EnterpriseMap from "@/components/contact/EnterpriseMap";
import { Clock, MapPin, ShieldCheck, Mail, Phone, Code, Cloud, Database, Cpu, Users } from "lucide-react";

export default function ContactPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.03)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* =========================================
            SECTION 1: HERO & PRIMARY FORM
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left: Hero Text */}
          <div className="lg:col-span-5 flex flex-col pt-8">
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Initiate Engagement</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase leading-[1.05] mb-6">
              Architect The Next Era Of Your Enterprise
            </h1>
            <p className="text-[#A0A0B8] text-sm leading-relaxed mb-8">
              Skip the sales pitch. Speak directly with senior architects to evaluate your infrastructure, design deterministic AI platforms, or modernize your legacy cloud topology.
            </p>
            <div className="flex items-center gap-3 bg-[#050816] p-4 border border-[#10B981]/20 rounded mt-auto">
              <ShieldCheck className="text-[#10B981] shrink-0" size={20} />
              <div>
                <p className="text-[10px] text-white font-bold uppercase tracking-widest mb-1">Secure Communications</p>
                <p className="text-[10px] text-[#A0A0B8]">Protected by strict NDA. Zero data sharing prior to evaluation.</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#050816] border border-white/10 p-8 rounded-xl relative">
              <div className="mb-8 border-b border-white/5 pb-6">
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">Request Briefing</h3>
                <p className="text-[#A0A0B8] text-xs">Direct routing to our principal architecture group.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center min-h-[400px]">
                  <div className="w-16 h-16 border-2 border-[#00D4FF] rounded-full flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-[#00D4FF] rounded-full animate-ping" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 uppercase">Request Received</h3>
                  <p className="text-[#A0A0B8] font-mono text-xs">An architect will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Name</label>
                      <input required type="text" className="w-full bg-[#020617] border border-white/10 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00D4FF] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Work Email</label>
                      <input required type="email" className="w-full bg-[#020617] border border-white/10 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00D4FF] transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Company</label>
                    <input required type="text" className="w-full bg-[#020617] border border-white/10 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00D4FF] transition-colors" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Engagement Type</label>
                    <select className="w-full bg-[#020617] border border-white/10 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none">
                      <option>Architecture Review</option>
                      <option>AI Strategy Session</option>
                      <option>Cloud Assessment</option>
                      <option>Data Platform Review</option>
                      <option>Dedicated Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-[#A0A0B8] uppercase tracking-widest mb-2">Transformation Goals</label>
                    <textarea required rows={4} className="w-full bg-[#020617] border border-white/10 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#00D4FF] transition-colors resize-none" placeholder="Briefly describe your objectives..." />
                  </div>

                  <button type="submit" className="w-full bg-white text-black hover:bg-[#00D4FF] hover:text-black transition-colors py-4 uppercase tracking-widest text-xs font-bold mt-2">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: GLOBAL DELIVERY PRESENCE
            ========================================= */}
        <div className="border-t border-white/10 pt-20">
          <div className="mb-12">
            <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Operations</span>
            <h2 className="font-display text-3xl font-bold text-white uppercase">Global Delivery Presence</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: HQ & Engagement Options */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Bengaluru Headquarters */}
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                  Bengaluru Headquarters
                </h3>
                <div className="bg-[#050816] border border-white/5 p-6 rounded-xl space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#A0A0B8] shrink-0 mt-0.5" size={16} />
                    <p className="text-white text-xs leading-relaxed">
                      Novel Tech Park, 46/4 Hosur Road,<br/>
                      Kudlu Gate, Krishna Reddy Industrial Area,<br/>
                      Hosapalaya, Muneshwara Nagar,<br/>
                      Bengaluru, Karnataka 560068
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <Phone className="text-[#A0A0B8] shrink-0" size={16} />
                    <a href="tel:+919986247282" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">+91 99862 47282</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#A0A0B8] shrink-0" size={16} />
                    <a href="mailto:info@i-cronus.com" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">info@i-cronus.com</a>
                  </div>
                  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <Clock className="text-[#00D4FF] shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase mb-1">Response SLA</p>
                      <p className="text-xs text-[#A0A0B8]">&lt; 24 Business Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Options */}
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
                  Engagement Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
                    <Code className="text-[#A0A0B8]" size={16} />
                    <span className="text-xs text-white uppercase font-bold tracking-wider">Architecture Reviews</span>
                  </div>
                  <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
                    <Cpu className="text-[#A0A0B8]" size={16} />
                    <span className="text-xs text-white uppercase font-bold tracking-wider">AI Strategy</span>
                  </div>
                  <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
                    <Cloud className="text-[#A0A0B8]" size={16} />
                    <span className="text-xs text-white uppercase font-bold tracking-wider">Cloud Assessments</span>
                  </div>
                  <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3">
                    <Database className="text-[#A0A0B8]" size={16} />
                    <span className="text-xs text-white uppercase font-bold tracking-wider">Data Platforms</span>
                  </div>
                  <div className="bg-[#050816] border border-white/5 p-4 rounded flex items-center gap-3 sm:col-span-2">
                    <Users className="text-[#A0A0B8]" size={16} />
                    <span className="text-xs text-white uppercase font-bold tracking-wider">Dedicated Engineering Teams</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Branded Map (Secondary Focus) */}
            <div className="lg:col-span-7 h-[350px] lg:h-auto lg:min-h-[400px]">
               <EnterpriseMap />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
