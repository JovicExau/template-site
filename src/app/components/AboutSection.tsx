'use client'
import Image from "next/image";
import { Users, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background image géométrique blanc white1 sur toute la largeur */}
      <div className="absolute inset-0 left-0 right-0 w-full h-full -z-10">
        <Image src="/images/white1.jpg" alt="Fond géométrique blanc" fill className="object-cover object-center opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Bloc texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="mb-3 inline-block px-4 py-1 rounded-full bg-[var(--color-cyan)]/20 text-xs font-bold uppercase tracking-widest text-[var(--color-navy)]">À propos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[var(--color-navy)] drop-shadow">Qui sommes-nous&nbsp;?</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-[var(--color-navy)] mb-8 max-w-2xl leading-relaxed"
          >
            <span className="font-bold text-[var(--color-navy)]">Tech Template</span> est un cabinet d&apos;experts en solutions cloud et transformation digitale. Nous accompagnons les entreprises dans leur évolution technologique, en proposant des services innovants, sécurisés et adaptés à chaque besoin métier.
          </motion.p>
          <ul className="space-y-4 sm:space-y-5">
            {[{
              icon: <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-violet)]/10 text-[var(--color-violet)] shadow"><Users size={28} /></span>,
              text: "Équipe pluridisciplinaire et passionnée"
            }, {
              icon: <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-emerald)]/10 text-[var(--color-emerald)] shadow"><Award size={28} /></span>,
              text: "Expertise certifiée et reconnue"
            }, {
              icon: <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] shadow"><ShieldCheck size={28} /></span>,
              text: "Engagement pour la sécurité et la qualité"
            }].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-[var(--color-navy)]"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Bloc image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--color-gray-medium)]/10 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/person-working-html-computer.jpg"
              alt="Équipe Tech Template"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 320px, 420px"
              priority
            />
          </div>
        </motion.div>
      </div>
      {/* Bloc Pourquoi nous recruter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 md:mt-20">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-10 text-[var(--color-navy)] drop-shadow">Pourquoi nous recruter&nbsp;!</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {[
            {
              icon: <Users size={32} className="text-[var(--color-violet)]" />,
              title: "Des équipes dédiées.",
              text: "Bénéficiez d'équipes évolutives à temps plein de consultants informatiques de confiance."
            },
            {
              icon: <Award size={32} className="text-[var(--color-yellow)]" />,
              title: "Consultants informatiques motivés.",
              text: "Nos consultants sont soutenus par notre communauté inégalée et énergisante."
            },
            {
              icon: <ShieldCheck size={32} className="text-[var(--color-mint)]" />,
              title: "Assistance dédiée.",
              text: "Obtenez un gestionnaire de compte dédié, disponible à tout moment."
            },
            {
              icon: <Users size={32} className="text-[var(--color-violet)]" />,
              title: "Contrat flexible.",
              text: "Des contrats évolutifs avec une facturation mensuelle simple."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg p-5 md:p-7 flex flex-col items-center text-center hover:shadow-2xl transition group border border-[var(--color-gray-medium)]/10 hover:border-[var(--color-cyan)]/40"
            >
              <span className="mb-2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[var(--color-cyan)]/10 group-hover:bg-[var(--color-emerald)]/10 transition">{item.icon}</span>
              <span className="font-bold text-base sm:text-lg md:text-xl mb-1 md:mb-2 text-[var(--color-navy)]">{item.title}</span>
              <span className="text-[var(--color-navy)]/80 text-sm sm:text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 