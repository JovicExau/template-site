"use client";
import { Layout, Settings, FileCheck2, GraduationCap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const servicesMenu = [
  {
    icon: Layout,
    title: "Digitalisation des procédures",
    items: [
      "Dématérialisation des flux",
      "Automatisation des tâches",
      "Gestion documentaire",
      "Processus métiers sur-mesure",
    ],
    color: "#6d4e9c",
  },
  {
    icon: Settings,
    title: "Développement ERP/USSD",
    items: [
      "ERP sur-mesure",
      "Solutions USSD",
      "Intégration applicative",
      "Déploiement cloud",
    ],
    color: "#3a336d",
  },
  {
    icon: FileCheck2,
    title: "Audit & Conseil SI",
    items: [
      "Audit de sécurité",
      "Conseil en transformation digitale",
      "Optimisation des systèmes",
      "Conformité RGPD",
    ],
    color: "#f6b93b",
  },
  {
    icon: GraduationCap,
    title: "Formation & Certification ISO",
    items: [
      "Formations ISO 27001, 9001, 22301",
      "Accompagnement à la certification",
      "Sensibilisation sécurité",
      "Coaching digital",
    ],
    color: "#6d4e9c",
  },
];

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.18 } },
};

export default function MegaMenuServices({ onMouseEnter, onMouseLeave }: { onMouseEnter: () => void, onMouseLeave: () => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="hidden md:flex w-full bg-white rounded-b-2xl shadow-2xl justify-center p-8 gap-8 relative z-40 mega-menu-absolute border-t-4 border-[var(--color-yellow)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ minHeight: 220 }}
    >
      {servicesMenu.map((cat, idx) => (
        <div key={idx} className="flex flex-col flex-1 min-w-[200px] max-w-xs px-4">
          <div className="flex items-center gap-2 mb-4">
            <cat.icon size={32} style={{ color: cat.color }} />
            <span className="font-bold text-base uppercase text-[var(--color-navy)]">{cat.title}</span>
          </div>
          <ul className="space-y-3">
            {cat.items.map((item, i) => (
              <li
                key={i}
                className="text-sm text-[var(--color-navy)] hover:text-[var(--color-violet)] cursor-pointer transition pl-2 border-l-2 border-transparent hover:border-[var(--color-mint)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
} 