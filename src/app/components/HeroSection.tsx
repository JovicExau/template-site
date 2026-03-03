"use client";
// app/components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ showHero = true }: { showHero?: boolean }) {
  return (
    <section
      className="relative bg-[var(--color-navy)] text-white min-h-[70vh] flex items-center"
    >
      {/* Overlay image de fond avec opacité */}
      <div className="absolute inset-0">
        <Image src="/images/background.jpg" alt="Fond Tech Template" fill className="object-cover object-center opacity-30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          {/* Badge Cabinet */}
          <motion.div
            className="inline-block mb-6 px-4 py-1 rounded-full bg-[var(--color-cyan)]/20 text-xs font-bold uppercase tracking-widest text-[var(--color-navy)] shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tech Template
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl text-[var(--color-cyan)]"
            initial={{ opacity: 0, y: -40 }}
            animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            L&rsquo;ingénierie numérique<br />
            <span className="inline-block text-[var(--color-white)]">au service de la transformation africaine</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-[var(--color-gray-medium)] font-medium drop-shadow-lg max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Des solutions innovantes, performantes et sécurisées pour accélérer la digitalisation des entreprises africaines.
          </motion.p>
          <motion.button
            className="mt-8 flex items-center gap-2 bg-[var(--color-cyan)] text-[var(--color-navy)] px-6 py-3 rounded-full font-bold text-base md:text-lg shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[var(--color-emerald)] hover:text-[var(--color-navy)] border-2 border-transparent hover:border-[var(--color-cyan)] focus:outline-none"
            initial={{ opacity: 0, y: 30 }}
            animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <CalendarCheck size={24} className="-ml-1" />
            Consultation gratuite
          </motion.button>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <motion.div
            className="transition-transform duration-300 hover:scale-105 rotate-2 hover:rotate-0 shadow-2xl max-w-[340px] md:max-w-[420px] lg:max-w-[520px]"
            initial={{ opacity: 0, x: 60 }}
            animate={showHero ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/images/hero.png"
              alt="Hero Person"
              width={520}
              height={520}
              className="rounded-3xl shadow-2xl object-cover border-4 border-white/10 w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
