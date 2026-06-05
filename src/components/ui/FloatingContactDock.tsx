"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Mail, FileText, X, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function FloatingContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-[#050816]/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-[0_10px_40px_rgba(0,212,255,0.1)] flex flex-col gap-1 w-64"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-2">
              <span className="font-mono text-[10px] text-[#A0A0B8] uppercase tracking-widest">Connect</span>
              <button onClick={() => setIsOpen(false)} className="text-[#A0A0B8] hover:text-white transition-colors">
                <X size={14} />
              </button>
            </div>

            <Link href="/contact?type=architecture-review" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
              <div className="text-[#00D4FF] group-hover:text-white transition-colors">
                <FileText size={16} />
              </div>
              <span className="text-xs font-semibold text-white">Architecture Review</span>
            </Link>

            <Link href="/contact?type=meeting" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
              <div className="text-[#00D4FF] group-hover:text-white transition-colors">
                <Calendar size={16} />
              </div>
              <span className="text-xs font-semibold text-white">Schedule Meeting</span>
            </Link>

            <a href="mailto:info@i-cronus.com" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
              <div className="text-[#00D4FF] group-hover:text-white transition-colors">
                <Mail size={16} />
              </div>
              <span className="text-xs font-semibold text-white">Send Inquiry</span>
            </a>

            <a href="tel:+919986247282" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors group">
              <div className="text-[#00D4FF] group-hover:text-white transition-colors">
                <Phone size={16} />
              </div>
              <span className="text-xs font-semibold text-white">Call Us</span>
            </a>

          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 px-6 bg-white text-black rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Talk To An Architect</span>
        {isOpen ? <X size={16} /> : <ChevronUp size={16} />}
      </button>
    </div>
  );
}
