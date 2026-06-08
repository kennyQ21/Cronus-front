"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEngineStore } from "@/store/engineStore";
import { Shield, Zap, Target, GitMerge, Cpu } from "lucide-react";

const timeline = [
  { 
    year: "2018", 
    title: "The Genesis", 
    desc: "i-Cronus was born out of frustration with bloated consultancies. We wanted an engineering team that cared about the metal, the architecture, and the actual outcomes." 
  },
  { 
    year: "2020", 
    title: "Scaling the Cloud", 
    desc: "We led massive migrations for fortune 500s, transitioning monolithic, legacy financial mainframes into resilient, multi-region Kubernetes clusters." 
  },
  { 
    year: "2022", 
    title: "The Data Revolution", 
    desc: "Shifted enterprise focus towards real-time data streaming. We replaced nightly batch jobs with unified Kafka and Databricks lakehouses for millisecond latency." 
  },
  { 
    year: "2024 & Beyond", 
    title: "Autonomous Intelligence", 
    desc: "Pioneering deterministic generative AI architectures. We integrate strict state machines with LLMs to build secure, private agent swarms for mission-critical operations." 
  }
];

function TimelineItem({ item, index }: { item: typeof timeline[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center justify-between md:justify-normal mb-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Line Dot for Desktop */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#050816] z-10 shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
      
      {/* Mobile Dot */}
      <div className="md:hidden absolute left-0 top-8 w-3 h-3 rounded-full bg-[#00D4FF] z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}
      >
        <div className={`p-8 rounded-2xl bg-[#050816]/60 backdrop-blur-md border border-white/10 hover:border-[#00D4FF]/30 transition-colors ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
          <span className="text-xs font-mono text-[#00D4FF] tracking-widest block mb-3">{item.year}</span>
          <h3 className="font-display text-2xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-[#A0A0B8] text-sm leading-relaxed">{item.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const setActiveEngine = useEngineStore((state) => state.setActiveEngine);

  useEffect(() => {
    setActiveEngine("EVOLUTION");
    return () => setActiveEngine("GLOBAL_INFRA");
  }, [setActiveEngine]);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6">
        
        {/* HERO SECTION */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D4FF] font-mono text-xs tracking-[0.3em] uppercase mb-8 border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-5 py-2 rounded-full inline-block">
              About i-Cronus
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Engineering the <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00D4FF] to-white">
                Extraordinary
              </span>
            </h1>
            <p className="text-[#A0A0B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just write code; we architect systems that redefine what is possible for the modern enterprise. We exist to build the invisible infrastructure that prevents systemic collapse.
            </p>
          </motion.div>
        </div>

        {/* THE STORY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Our Narrative</h2>
          <div className="space-y-6 text-[#A0A0B8] text-base leading-relaxed">
            <p>
              i-Cronus was founded on a simple premise: enterprise engineering has become too complex, too bloated, and entirely disconnected from business realities.
            </p>
            <p>
              We saw global companies spending hundreds of millions on &quot;digital transformations&quot; that yielded nothing but presentation decks and technical debt. We decided to build a firm that actually touches the metal.
            </p>
            <p>
              Today, we act as an elite strike force for our clients. Whether we are migrating a global supply chain to the cloud, or orchestrating a secure network of autonomous AI agents, we measure our success in query latency, operational cost reduction, and perfect uptime.
            </p>
          </div>
        </motion.div>

        {/* CORE PRINCIPLES BENTO BOX */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Core Principles</h2>
            <p className="text-[#A0A0B8] text-base max-w-xl mx-auto">The unshakeable laws that govern how we design, write, and deploy software.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-10 rounded-2xl bg-[#050816]/60 backdrop-blur-md border border-white/10 hover:border-[#00D4FF]/30 transition-all flex flex-col justify-between group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#00D4FF]/10 transition-colors">
                <Target className="text-white group-hover:text-[#00D4FF] transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Determinism Over Magic</h3>
                <p className="text-[#A0A0B8] text-base leading-relaxed max-w-md">We do not trust probabilistic APIs for business logic. We wrap AI and LLMs in strict, deterministic state machines (like LangGraph) to ensure that every output is reproducible, safe, and audited.</p>
              </div>
            </motion.div>

            {/* Bento 2: Tall */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:row-span-2 p-10 rounded-2xl bg-[#050816]/60 backdrop-blur-md border border-white/10 hover:border-[#00D4FF]/30 transition-all flex flex-col group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#00D4FF]/10 transition-colors">
                <Shield className="text-white group-hover:text-[#00D4FF] transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Zero-Trust by Default</h3>
              <p className="text-[#A0A0B8] text-base leading-relaxed mb-auto">Every microservice must mutually authenticate. No implicit trust boundaries exist, even within our own private networks. We architect systems assuming the network is already compromised.</p>
            </motion.div>

            {/* Bento 3: Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-2xl bg-[#050816]/60 backdrop-blur-md border border-white/10 hover:border-[#00D4FF]/30 transition-all flex flex-col group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#00D4FF]/10 transition-colors">
                <GitMerge className="text-white group-hover:text-[#00D4FF] transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Architecture First</h3>
              <p className="text-[#A0A0B8] text-base leading-relaxed">Code is cheap; architecture is expensive. We spend intense cycles on topology design before writing code.</p>
            </motion.div>

            {/* Bento 4: Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-2xl bg-[#050816]/60 backdrop-blur-md border border-white/10 hover:border-[#00D4FF]/30 transition-all flex flex-col group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-[#00D4FF]/10 transition-colors">
                <Zap className="text-white group-hover:text-[#00D4FF] transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Infrastructure as Code</h3>
              <p className="text-[#A0A0B8] text-base leading-relaxed">If it cannot be destroyed and redeployed perfectly via Terraform in under 10 minutes, it is not production-ready.</p>
            </motion.div>
          </div>
        </div>

        {/* TIMELINE */}
        <div>
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">The Evolution</h2>
            <p className="text-[#A0A0B8] text-base max-w-xl mx-auto">Tracing our trajectory from legacy systems modernization to frontier artificial intelligence.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Vertical Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#60A5FA]/30 to-transparent -translate-x-1/2" />
            
            {/* Left Vertical Line (Mobile) */}
            <div className="md:hidden absolute left-[5px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[#60A5FA]/30 to-transparent" />

            {timeline.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
