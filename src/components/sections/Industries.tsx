"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="industries" className="relative min-h-[120vh] flex flex-col justify-start items-center py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto w-full z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold text-[#FFB800] tracking-[0.2em] uppercase mb-8"
        >
          Chapter 5: Industries
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8"
        >
          One unified ecosystem.
          <br />
          <span className="text-[#A0A0B8]">Infinite applications.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto text-sm text-[#60607A] mb-32"
        >
          The 3D Solar System rendering below represents our global reach across Healthcare, Finance, Manufacturing, Retail, and Logistics.
        </motion.p>
      </div>

      {/* The 3D solar system will render here via the GlobalCanvas underneath. We just provide space. */}
      {/* We can overlay UI labels that point to the 3D canvas objects, but for now we leave it clean. */}
    </section>
  );
}
