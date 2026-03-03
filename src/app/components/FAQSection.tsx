'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont les avantages du cloud pour mon entreprise ?",
    answer:
      "Le cloud permet d'accéder à vos données et applications partout, de réduire les coûts d'infrastructure, d'améliorer la sécurité et de gagner en agilité.",
  },
  {
    question: "Comment se déroule un projet avec Tech Template ?",
    answer:
      "Nous commençons par un audit, puis nous définissons une stratégie sur-mesure, nous accompagnons la mise en œuvre et assurons le support et la formation.",
  },
  {
    question: "Proposez-vous des solutions adaptées aux PME ?",
    answer:
      "Oui, nous adaptons nos offres à la taille et aux besoins de chaque client, de la startup à la grande entreprise.",
  },
  {
    question: "Comment garantissez-vous la sécurité des données ?",
    answer:
      "Nous appliquons les meilleures pratiques du secteur, mettons en place des audits réguliers, et assurons la conformité RGPD.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-[var(--color-cyan)]/10 to-white flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-[var(--color-violet)] via-[var(--color-cyan)] to-[var(--color-emerald)] bg-clip-text text-transparent text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        FAQ
      </motion.h2>
      <div className="w-full max-w-3xl space-y-6 px-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 border-2 border-transparent hover:border-[var(--color-cyan)] transition">
            <button
              className="w-full flex justify-between items-center text-left text-[#3a336d] font-semibold text-lg focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.question}
              <span className="ml-4 bg-gradient-to-r from-[var(--color-violet)] via-[var(--color-cyan)] to-[var(--color-emerald)] bg-clip-text text-transparent text-2xl font-bold">{open === i ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-gray-600 text-base leading-relaxed">
                    {f.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
} 