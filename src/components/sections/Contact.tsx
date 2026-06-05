"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    domain: "ai-genai",
    details: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      alert("Please fill in all required fields.");
      return;
    }

    setFormStatus("submitting");

    // Mock API submission latency
    setTimeout(() => {
      setFormStatus("success");
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white overflow-hidden px-6 border-t border-black/[0.06]">
      {/* Light Grid Background pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.4] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,174,239,0.025)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Connect
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                Initialize Your <br />
                Consultation
              </h2>
              <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed">
                Connect with our core engineering team to outline requirements, audit legacy systems, and size your digital systems project.
              </p>
            </div>

            {/* SLA Metrics */}
            <div className="space-y-4 pt-4 border-t border-black/[0.08]">
              <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <span className="font-semibold text-[#111111]">Average Response SLA: </span>
                  &lt; 2 Hours
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                <Calendar className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <span className="font-semibold text-[#111111]">Availability: </span>
                  Advisory sessions scheduled weekly
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <span className="font-semibold text-[#111111]">NDA Protection: </span>
                  Standard corporate mutual NDAs issued instantly
                </div>
              </div>
            </div>

            {/* Direct contact */}
            <div className="p-5 rounded-sm bg-[#F7F8FA] border border-black/[0.08] flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-sm bg-white border border-black/[0.08] flex items-center justify-center">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-[10px] text-[#5A5A5A] uppercase tracking-widest font-bold">
                  Corporate Advisory Office
                </p>
                <a href="mailto:solutions@i-cronus.com" className="text-sm font-semibold text-[#111111] hover:text-brand-primary transition-colors">
                  solutions@i-cronus.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm bg-white border border-black/[0.08] p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[490px] flex flex-col justify-center border-t-[3px] border-t-brand-primary">

              <AnimatePresence mode="wait">
                {formStatus === "idle" && (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold text-[#5A5A5A] uppercase tracking-widest">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Marcus Vance"
                          className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary rounded-sm px-4 py-3 outline-none transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold text-[#5A5A5A] uppercase tracking-widest">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. marcus@clearinghouse.com"
                          className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary rounded-sm px-4 py-3 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Organization input */}
                      <div className="space-y-1.5">
                        <label htmlFor="org" className="text-[10px] font-bold text-[#5A5A5A] uppercase tracking-widest">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="org"
                          name="org"
                          value={formData.org}
                          onChange={handleChange}
                          placeholder="e.g. ClearingHouse Corp"
                          className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary rounded-sm px-4 py-3 outline-none transition-colors"
                        />
                      </div>

                      {/* Domain Select dropdown */}
                      <div className="space-y-1.5">
                        <label htmlFor="domain" className="text-[10px] font-bold text-[#5A5A5A] uppercase tracking-widest">
                          Project Focus
                        </label>
                        <select
                          id="domain"
                          name="domain"
                          value={formData.domain}
                          onChange={handleChange}
                          className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary rounded-sm px-4 py-3 outline-none transition-colors cursor-pointer"
                        >
                          <option value="ai-genai">AI & Generative AI Solutions</option>
                          <option value="custom-software">Custom Software Systems</option>
                          <option value="cloud-eng">Cloud & Devops Automation</option>
                          <option value="data-eng">Data Warehouses & Pipelines</option>
                          <option value="consulting">Digital Architecture Advisory</option>
                        </select>
                      </div>
                    </div>

                    {/* Details input */}
                    <div className="space-y-1.5">
                      <label htmlFor="details" className="text-[10px] font-bold text-[#5A5A5A] uppercase tracking-widest">
                        Project Summary & System Goals *
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        required
                        placeholder="Briefly describe the challenge, existing codebase/infrastructure parameters, and integration goals..."
                        className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary rounded-sm px-4 py-3 outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <Magnetic strength={0.15}>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-4 rounded-sm text-sm font-semibold bg-brand-primary hover:bg-[#0099D4] text-white transition-colors cursor-pointer shadow-sm hover:shadow-md"
                      >
                        Initialize System Consultation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </Magnetic>
                  </motion.form>
                )}

                {/* Submitting state spinner */}
                {formStatus === "submitting" && (
                  <motion.div
                    key="submitting-spinner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-4 text-center"
                  >
                    <div className="w-10 h-10 rounded-full border-t-2 border-brand-primary animate-spin" />
                    <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wider">
                      Encrypting & Ingesting Form
                    </h3>
                    <p className="text-xs text-[#5A5A5A] max-w-[280px]">
                      Securing transmission layer and generating advisory ticket...
                    </p>
                  </motion.div>
                )}

                {/* Submission Success state screen */}
                {formStatus === "success" && (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-[#111111] leading-tight">
                        Consultation Initialized
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A5A5A] max-w-[420px] leading-relaxed mx-auto">
                        Inquiry received. A senior systems architect has been assigned to audit your requirements. We will follow up via email within 2 hours.
                      </p>
                    </div>

                    <div className="w-full max-w-[380px] p-4 rounded-sm bg-[#F7F8FA] border border-black/[0.08] text-left space-y-2">
                      <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest">
                        What&apos;s Next
                      </span>
                      <ol className="text-[11px] text-[#5A5A5A] space-y-1.5 list-decimal pl-4">
                        <li>System specs audit by Lead Architect.</li>
                        <li>Standard NDA document sent for verification.</li>
                        <li>Calendar link sent to schedule a 30-min discovery call.</li>
                      </ol>
                    </div>

                    <button
                      onClick={() => {
                        setFormStatus("idle");
                        setFormData({ name: "", email: "", org: "", domain: "ai-genai", details: "" });
                      }}
                      className="px-6 py-2.5 rounded-sm border border-black/[0.14] hover:border-brand-primary text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-brand-primary transition-all bg-[#F7F8FA] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
