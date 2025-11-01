'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partenaire 1", logo: "/partenaires/1.png" },
  { name: "Partenaire 2", logo: "/partenaires/2.jpg" },
  { name: "Partenaire 3", logo: "/partenaires/3.png" },
  { name: "Partenaire 4", logo: "/partenaires/4.png" },
  { name: "Partenaire 5", logo: "/partenaires/5.png" },
  { name: "Partenaire 6", logo: "/partenaires/6.jpg" },
  { name: "Partenaire 7", logo: "/partenaires/7.png" },
  { name: "Partenaire 8", logo: "/partenaires/8.png" },
  { name: "Partenaire 10", logo: "/partenaires/10.jpg" },
  { name: "Partenaire 11", logo: "/partenaires/11.jpg" },
  { name: "Partenaire 12", logo: "/partenaires/12.png" },
];

export default function PartnersSection() {
  return (
    <section className="w-full py-20 bg-[var(--color-gray-light)] flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-10 text-[var(--color-navy)] text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Nos partenaires & certifications
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center px-4">
        {partners.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-5 flex items-center justify-center w-36 h-24 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group border-2 border-transparent hover:border-[var(--color-mint)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
          >
            <Image src={p.logo} alt={p.name} width={100} height={60} className="object-contain max-h-12 transition duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 