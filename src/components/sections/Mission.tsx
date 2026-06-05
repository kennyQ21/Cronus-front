"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6">
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between items-end p-8">
        <div className="text-[#00E5FF] font-mono text-[10px] tracking-[0.2em] uppercase space-y-1 text-right">
          <span>SYS.CMD // RECONNECT_SEQUENCE</span>
          <span>INITIATING CORE PROTOCOLS</span>
        </div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto w-full z-20 text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-end"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#00E5FF] font-mono text-sm tracking-widest uppercase">The Mission</span>
            <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-8">
            COMMAND
            <br />
            STATION
          </h2>
          <p className="max-w-xl text-[#A0A0B8] text-lg font-mono">
            We bring order to chaos. Deploying autonomous AI command centers to reroute data streams, reestablish secure uplinks, and architect resilient planetary-scale infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
