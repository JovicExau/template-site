'use client'
import Image from "next/image";
import { Layout, Settings, FileCheck2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  { icon: Layout, color: "bg-[var(--color-violet)]/10 text-[var(--color-violet)]", label: "Digitalisation des procédures", desc: "Dématérialisation des flux, automatisation, gestion documentaire, processus métiers sur-mesure." },
  { icon: Settings, color: "bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]", label: "Développement ERP/USSD", desc: "ERP sur-mesure, solutions USSD, intégration applicative, déploiement cloud." },
  { icon: FileCheck2, color: "bg-[var(--color-emerald)]/10 text-[var(--color-emerald)]", label: "Audit & Conseil SI", desc: "Audit de sécurité, conseil en transformation digitale, optimisation, conformité RGPD." },
  { icon: GraduationCap, color: "bg-[var(--color-navy)]/10 text-[var(--color-navy)]", label: "Formation & Certification ISO", desc: "Formations ISO, accompagnement à la certification, sensibilisation sécurité, coaching digital." },
];

export default function ServiceSection() {
  return (
    <section className="relative w-full px-0 py-16 md:py-32 flex flex-col items-center overflow-hidden">
      {/* Background image avec blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/3312919.jpg"
          alt="Background services"
          fill
          className="object-cover object-center blur-sm"
          priority
        />
      </div>
      <motion.h2
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 text-[var(--color-navy)] text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Nos services
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-[var(--color-navy)] max-w-2xl text-center mb-8 md:mb-14 font-medium drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Découvrez l&apos;expertise de Tech Template à travers une offre complète : digitalisation, ERP/USSD, audit & conseil SI, formation & certification ISO.
      </motion.p>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-10 md:mb-16 z-10">
        {icons.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="bg-white/90 rounded-2xl shadow-xl p-5 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            >
              <div className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-3 md:mb-4 text-2xl md:text-3xl shadow-md transition-colors duration-300 group-hover:bg-[var(--color-cyan)]/20 group-hover:text-[var(--color-navy)] ${item.color}`}>
                <Icon size={30} className="md:w-9 md:h-9" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[var(--color-navy)]">{item.label}</h3>
              <p className="text-[var(--color-gray-medium)] text-sm md:text-base leading-snug">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
} 