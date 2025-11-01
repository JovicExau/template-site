"use client";
import Link from "next/link";
import { Layout, X, Home, Info, Star, Newspaper, Phone, Settings, FileCheck2, GraduationCap } from "lucide-react";
import React, { useState } from "react";

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

export default function MenuHamburger({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex md:hidden">
      <div className="bg-white w-72 h-full p-6 flex flex-col gap-3 shadow-2xl animate-fade-in">
        <button className="self-end mb-4" onClick={onClose} aria-label="Fermer le menu">
          <X size={28} className="text-[var(--color-navy)]" />
        </button>
        <Link href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold hover:bg-[var(--color-violet)]/10 transition">
          <Home size={20} /> Accueil
        </Link>
        <div>
          <button
            type="button"
            className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold w-full hover:bg-[var(--color-violet)]/10 transition"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <Layout size={20} /> Services
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className={`ml-auto transition-transform ${servicesOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {servicesOpen && (
            <div className="mt-2 bg-[var(--color-gray-light)] rounded-xl shadow p-3 flex flex-col gap-3">
              {servicesMenu.map((cat, idx) => (
                <div key={idx} className="mb-2 last:mb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <cat.icon size={18} style={{ color: cat.color }} />
                    <span className="font-bold text-[var(--color-navy)] text-xs uppercase">{cat.title}</span>
                  </div>
                  <ul className="space-y-1 ml-5">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-[var(--color-navy)] hover:text-[var(--color-violet)] cursor-pointer transition">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold hover:bg-[var(--color-violet)]/10 transition">
          <Info size={20} /> A propos
        </Link>
        <Link href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold hover:bg-[var(--color-violet)]/10 transition">
          <Star size={20} /> Succes stories
        </Link>
        <Link href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold hover:bg-[var(--color-violet)]/10 transition">
          <Newspaper size={20} /> Actualités
        </Link>
        <Link href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg text-[var(--color-navy)] font-bold hover:bg-[var(--color-violet)]/10 transition">
          <Phone size={20} /> Contact
        </Link>
        <Link
          href="#"
          className="mt-4 bg-[var(--color-yellow)] text-[var(--color-navy)] px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[var(--color-mint)] hover:text-[var(--color-navy)] transition"
        >
          Contacter notre équipe
        </Link>
      </div>
    </div>
  );
} 