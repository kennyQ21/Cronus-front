"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function EnterpriseCommandNetwork() {
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      type: i % 3 === 0 ? 'agent' : i % 3 === 1 ? 'data' : 'cloud',
      connections: [
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 12)
      ]
    }));
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00D4FF]/30 rounded-full flex items-center justify-center bg-[#00D4FF]/5 z-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-2 border-r-2 border-[#00D4FF] rounded-full opacity-50"
        />
        <div className="w-16 h-16 bg-[#020617] rounded-full border border-white/20 flex items-center justify-center">
           <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-ping" />
        </div>
      </div>

      {/* Nodes & Connections */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {nodes.map(node => (
          node.connections.map((targetId, i) => {
            const target = nodes[targetId];
            if (!target) return null;
            return (
              <motion.line
                key={`line-${node.id}-${targetId}-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#line-grad)"
                strokeWidth="1"
                initial={{ strokeDasharray: "0 100", opacity: 0 }}
                animate={{ strokeDasharray: "100 100", opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: i * 0.5 }}
              />
            );
          })
        ))}
      </svg>

      {/* Render Node Elements */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className="absolute w-6 h-6 -ml-3 -mt-3 rounded border flex items-center justify-center text-[8px] font-mono z-20 backdrop-blur-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.id * 0.1 }}
          data-type={node.type}
        >
          {node.type === 'agent' && <div className="w-2 h-2 bg-[#A78BFA] rounded shadow-[0_0_10px_#A78BFA]" />}
          {node.type === 'data' && <div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full shadow-[0_0_10px_#60A5FA]" />}
          {node.type === 'cloud' && <div className="w-2 h-2 border border-[#10B981] bg-transparent shadow-[0_0_10px_#10B981]" />}
          
          {/* Node Labels */}
          <div className="absolute top-full mt-2 whitespace-nowrap text-[#A0A0B8] opacity-50 uppercase tracking-widest pointer-events-none">
            {node.type === 'agent' ? 'AI-NODE' : node.type === 'data' ? 'DATA-LAKE' : 'REGION-XYZ'}
          </div>
        </motion.div>
      ))}

      {/* Floating Telemetry Box */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 bg-[#050816]/90 border border-white/10 p-4 rounded backdrop-blur-md z-30"
      >
        <div className="text-[9px] font-mono text-[#10B981] uppercase tracking-widest flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
          Live Telemetry
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-[#A0A0B8]">Throughput</div>
            <div className="text-white font-mono">1.2M/s</div>
          </div>
          <div>
            <div className="text-[#A0A0B8]">Latency</div>
            <div className="text-white font-mono">12ms</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
