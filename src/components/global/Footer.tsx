"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-8 px-6 overflow-hidden z-10">
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - CTA */}
        <div ref={ref} className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-xs font-semibold text-[#00D4FF] tracking-[0.2em] uppercase mb-4"
            >
              Start The Transformation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.1] max-w-xl uppercase"
            >
              Ready to engineer the intelligent enterprise?
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/contact" className="btn-solid inline-flex items-center gap-3 !px-8 !py-4 text-sm tracking-widest uppercase font-bold">
              Talk To An Architect
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Middle Section - 5 Columns mega footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Column 1 - Company */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo width={200} height={40} className="text-white" />
            </Link>
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-4 mt-2">Company</h4>
            <ul className="space-y-4">
              {['Mission', 'Overview', 'Brand'].map(item => (
                <li key={item}><Link href={`/about#${item.toLowerCase()}`} className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <div>
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['Enterprise AI', 'Data Platforms', 'Cloud Modernization', 'Automation', 'Digital Experience'].map(item => (
                <li key={item}><Link href="/solutions" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              {['AI Engineering', 'Cloud Engineering', 'Data Engineering', 'Automation', 'Software Development', 'Web & Mobile'].map(item => (
                <li key={item}><Link href="/services" className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Insights', 'Case Studies', 'Architecture Guides', 'About', 'Careers'].map(item => (
                <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-xs text-[#A0A0B8] hover:text-[#00D4FF] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-white tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-xs text-[#A0A0B8]">
              <li><a href="tel:+919986247282" className="hover:text-[#00D4FF] transition-colors">+91 99862 47282</a></li>
              <li><a href="mailto:info@i-cronus.com" className="hover:text-[#00D4FF] transition-colors">info@i-cronus.com</a></li>
              <li><a href="mailto:careers@i-cronus.com" className="hover:text-[#00D4FF] transition-colors">careers@i-cronus.com</a></li>
              <li><a href="https://www.linkedin.com/company/icronus-software-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D4FF] transition-colors flex items-center gap-2"><LinkedinIcon size={12} /> LinkedIn</a></li>
              <li className="pt-2 border-t border-white/10 mt-4 leading-relaxed">
                Novel Tech Park,<br/>
                46/4 Hosur Road,<br/>
                Kudlu Gate,<br/>
                Krishna Reddy Industrial Area,<br/>
                Hosapalaya,<br/>
                Muneshwara Nagar,<br/>
                Bengaluru, Karnataka 560068
              </li>
            </ul>
          </div>

        </div>

        {/* Enterprise Trust Center */}
        <div className="bg-[#050816] border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#10B981]" size={20} />
            <div>
              <h4 className="font-mono text-[10px] text-[#10B981] tracking-widest uppercase">Enterprise Trust Center</h4>
              <p className="text-[10px] text-[#A0A0B8] mt-1">Information Security, Compliance, and Data Governance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Security', 'Compliance', 'Privacy', 'Responsible AI', 'Data Governance', 'Accessibility'].map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-mono text-[#A0A0B8] uppercase hover:text-white transition-colors tracking-wider">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-[#A0A0B8] text-[10px] font-mono uppercase tracking-widest">
            <span>© {new Date().getFullYear()} i-Cronus Software Labs</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
