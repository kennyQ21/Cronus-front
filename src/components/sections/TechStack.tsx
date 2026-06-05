"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "AWS", "Microsoft Azure", "OpenAI", "Anthropic", "Databricks", 
  "Snowflake", "Kubernetes", "Terraform", "Kafka", "PostgreSQL"
];

export default function TechStack() {
  return (
    <section className="py-24 border-y border-white/5 bg-[#020617]/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/3">
            <h3 className="font-mono text-sm text-[#60A5FA] tracking-widest uppercase mb-2">Trusted Technology Stack</h3>
            <p className="text-[#A0A0B8] text-sm">We engineer with the most robust, scalable, and secure platforms in the enterprise ecosystem.</p>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap gap-4 justify-start md:justify-end">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 border border-white/10 rounded-sm bg-[#050816] text-[#F8FAFC] font-mono text-xs uppercase tracking-widest hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
