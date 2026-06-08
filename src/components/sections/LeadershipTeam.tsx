import React from 'react';

export default function LeadershipTeam() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[#00D4FF] font-mono text-[10px] tracking-widest uppercase mb-4 block">Leadership & Delivery Team</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
          The Engineers Behind The Enterprise
        </h2>
        <p className="mt-4 text-base text-[#A0A0B8] leading-relaxed">
          The technologists and engineering leaders behind the intelligent systems, cloud platforms, automation solutions, and enterprise applications delivered by i-Cronus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
        
        {/* Shaik Maneesha */}
        <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group transition-all duration-500 hover:border-white/20">
          <div className="relative overflow-hidden bg-[#050816] aspect-[4/5]">
            <img 
              src="/team/shaik-maneesha.jpg" 
              alt="Shaik Maneesha" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-5 relative z-10 -mt-16">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1">ICS1113</p>
            <h3 className="font-display text-lg font-bold text-white mb-0.5 uppercase">Shaik Maneesha</h3>
            <p className="text-[#A0A0B8] text-xs">Tech Lead</p>
          </div>
        </div>

        {/* Gurram Hemanth (Featured) */}
        <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group transition-all duration-500 hover:border-white/20">
          <div className="relative overflow-hidden bg-[#050816] aspect-[4/5]">
            <img 
              src="/team/gurram-hemanth.jpg" 
              alt="Gurram Hemanth" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-5 relative z-10 -mt-16">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1">ICS1119</p>
            <h3 className="font-display text-lg font-bold text-white mb-0.5 uppercase">Gurram Hemanth</h3>
            <p className="text-[#A0A0B8] text-xs">Associate Engineer</p>
          </div>
        </div>

        {/* Kallepalli Lakshmi Devi */}
        <div className="bg-[#050816] border border-white/5 rounded-xl overflow-hidden relative group transition-all duration-500 hover:border-white/20">
          <div className="relative overflow-hidden bg-[#050816] aspect-[4/5]">
            <img 
              src="/team/kallepalli-lakshmi.jpg" 
              alt="Kallepalli Lakshmi Devi" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
          </div>
          <div className="p-5 relative z-10 -mt-16">
            <p className="text-[#00D4FF] font-mono text-[9px] tracking-widest uppercase mb-1">ICS1121</p>
            <h3 className="font-display text-lg font-bold text-white mb-0.5 uppercase">Kallepalli Lakshmi Devi</h3>
            <p className="text-[#A0A0B8] text-xs">Associate Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
