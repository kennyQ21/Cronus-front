"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,229,255,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Magnetic strength={0.15}>
            <Link href="/" className="flex items-center group">
              <Logo width={200} height={40} className="text-white" />
            </Link>
          </Magnetic>

          <nav className="hidden md:flex items-center gap-8">
            {["Solutions", "Services", "Industries", "Case Studies", "Insights", "Resources", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-[#A0A0B8] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Magnetic strength={0.2}>
              <Link href="/contact" className="btn-solid inline-flex items-center gap-2 !py-2.5 !px-5 !text-sm">
                Initiate Contact <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Magnetic>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#050816]/95 backdrop-blur-3xl md:hidden">
          <div className="flex flex-col p-6 gap-6">
            {["Solutions", "Services", "Industries", "Case Studies", "Insights", "Resources", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-display font-bold text-white border-b border-white/5 pb-4"
              >
                {item}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-solid text-center w-full mt-4">
              Initiate Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
