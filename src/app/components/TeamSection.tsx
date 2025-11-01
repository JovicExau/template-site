'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Amadou Diop",
    role: "CEO & Cloud Architect",
    photo: "/images/bel-homme-noir.jpg",
  },
  {
    name: "Sophie Martin",
    role: "Lead Développeuse",
    photo: "/images/person-working-html-computer.jpg",
  },
  {
    name: "Jean Dupuis",
    role: "Expert Sécurité",
    photo: "/images/homme-portant-des-lunettes-intelligentes-touchant-un-remix-numerique-de-technologie-futuriste-d-ecran-virtuel.jpg",
  },
  {
    name: "Fatou Ndiaye",
    role: "Consultante Transformation Digitale",
    photo: "/images/3511749.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-24 bg-[var(--color-gray-light)] flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-[var(--color-navy)] text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Notre équipe
      </motion.h2>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {team.map((m, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group border-2 border-transparent hover:border-[var(--color-yellow)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          >
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[var(--color-yellow)] shadow">
              <Image src={m.photo} alt={m.name} width={96} height={96} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-[var(--color-navy)]">{m.name}</h3>
            <p className="text-[var(--color-gray-medium)] text-sm">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 