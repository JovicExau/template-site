'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Migration Cloud pour Groupe Alpha",
    image: "/images/communication-globale.jpg",
    description: "Migration de l'infrastructure vers Azure, réduction des coûts de 30% et amélioration de la sécurité.",
    result: "+30% de productivité",
  },
  {
    title: "Déploiement d'une solution SaaS pour Innovatech",
    image: "/images/conception-de-fond-de-cercles-et-de-carres.jpg",
    description: "Développement d'une plateforme SaaS sur AWS, montée en charge x10 et satisfaction client accrue.",
    result: "+10K utilisateurs",
  },
  {
    title: "Sécurisation des données pour SunAfrica",
    image: "/images/formes-de-papier-psychedelique-bleu.jpg",
    description: "Mise en place d'une politique de sécurité et conformité RGPD, audit et formation des équipes.",
    result: "0 incident majeur",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="w-full py-24 bg-[var(--color-gray-light)] flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-[var(--color-navy)] text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Success stories
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-xl p-0 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden border-2 border-transparent hover:border-[var(--color-mint)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          >
            <div className="w-full h-48 relative">
              <Image src={s.image} alt={s.title} fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-navy)]">{s.title}</h3>
              <p className="text-[var(--color-gray-medium)] text-base mb-4">{s.description}</p>
              <span className="inline-block bg-[var(--color-yellow)]/20 text-[var(--color-navy)] font-semibold rounded-full px-4 py-1 text-sm mt-auto">{s.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 