"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, ShieldCheck, Clock, CheckCircle2, ArrowRight, Phone, Landmark } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Tilt from "@/components/ui/Tilt";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPageClient() {
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

  const offices = [
    {
      city: "New York",
      role: "Corporate Headquarters & Sales",
      address: "One World Trade Center, Suite 85, New York, NY 10007",
      phone: "+1 (212) 555-0190",
      email: "nyc@i-cronus.com",
    },
    {
      city: "London",
      role: "EMEA Delivery & Advisory",
      address: "30 St Mary Axe (The Gherkin), London EC3A 8EP, UK",
      phone: "+44 20 7946 0192",
      email: "ldn@i-cronus.com",
    },
    {
      city: "Bangalore",
      role: "APAC Delivery & Cloud Operations Hub",
      address: "Prestige Shantiniketan, Whitefield, Bangalore 560048, India",
      phone: "+91 80 4963 0194",
      email: "blr@i-cronus.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-brand-primary/10">
      <Navbar />

      <main className="pt-24 pb-24">
        
        {/* Contact Hero */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.08]">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">Contact Us</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mt-4 leading-tight">
              Consult with Our System Partners
            </h1>
            <p className="mt-6 text-base text-[#5A5A5A] leading-relaxed">
              Scale your engineering capability, orchestrate next-generation AI platforms, and secure critical corporate workloads. Reach out to coordinate an architect audit session.
            </p>
          </div>
        </section>

        {/* Form and SLA Section */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-b border-black/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context Info */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
                  Engagement Framework
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-tight">
                  High-Trust System Assessment
                </h2>
                <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
                  We start with a thorough alignment regarding system boundaries, interface contracts, and target performance parameters. Standard mutual NDAs are issued before we review any codebases or architecture layouts.
                </p>
              </div>

              {/* SLA Metrics */}
              <div className="space-y-4 pt-4 border-t border-black/[0.08]">
                <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                  <div><span className="font-semibold text-[#111111]">Response SLA: </span>&lt; 2 Hours</div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <Calendar className="w-5 h-5 text-brand-primary shrink-0" />
                  <div><span className="font-semibold text-[#111111]">Availability: </span>Advisory sessions scheduled weekly</div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                  <div><span className="font-semibold text-[#111111]">NDA Protection: </span>Standard mutual NDAs issued instantly</div>
                </div>
              </div>

              {/* Direct email card */}
              <div className="card p-5 flex items-center gap-4 border border-black/[0.08] bg-white rounded-sm shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F7F8FA] border border-black/[0.08] rounded-sm">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-[#5A5A5A] uppercase tracking-widest font-bold">Corporate Advisory Office</p>
                  <a href="mailto:solutions@i-cronus.com" className="text-sm font-semibold text-[#111111] hover:text-brand-primary transition-colors">
                    solutions@i-cronus.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-7">
              <div className="card p-6 sm:p-10 min-h-[490px] flex flex-col justify-center border border-black/[0.08] bg-white rounded-sm shadow-sm border-t-[3px] border-t-brand-primary">

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
                            <option value="cloud-eng">Cloud & DevOps Automation</option>
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
                          className="w-full text-sm text-[#111111] bg-[#F7F8FA] border border-black/[0.08] focus:bg-white focus:border-brand-primary px-4 py-3 outline-none transition-colors resize-none rounded-sm"
                        />
                      </div>

                      {/* Submit CTA */}
                      <Magnetic strength={0.15}>
                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-sm text-sm font-semibold bg-brand-primary hover:bg-[#0099D4] text-white transition-colors cursor-pointer shadow-sm hover:shadow-md"
                        >
                          Submit Consultation Request
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
                      className="flex flex-col items-center justify-center gap-4 text-center py-12"
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
                      className="flex flex-col items-center justify-center gap-6 text-center py-6"
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

                      <div className="w-full max-w-[380px] bg-[#F7F8FA] border border-black/[0.08] p-4 rounded-sm text-left space-y-2">
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
                        className="px-6 py-2.5 rounded-sm border border-black/[0.14] hover:border-brand-primary text-sm font-semibold text-[#111111] hover:text-brand-primary transition-all cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

        {/* Global Locations Map/Cards Section */}
        <section className="px-6 max-w-7xl mx-auto py-20 border-t border-black/[0.08]">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Global Presence
            </span>
            <h2 className="font-display text-3xl font-bold text-[#111111] mt-2">
              Our Advisory Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offices.map((office) => (
              <div key={office.city} className="h-full">
                <Tilt className="h-full p-6 flex flex-col justify-between min-h-[220px] bg-white border border-black/[0.08] rounded-sm shadow-sm hover:border-brand-primary/30 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-brand-primary" />
                      <h3 className="font-display text-base font-bold text-[#111111]">{office.city}</h3>
                    </div>
                    <p className="text-xs text-brand-primary font-semibold uppercase tracking-wide">{office.role}</p>
                    <p className="text-xs text-[#5A5A5A] leading-relaxed">{office.address}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/[0.08] space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
                      <Phone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
                      <Mail className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-brand-primary transition-colors">{office.email}</a>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
