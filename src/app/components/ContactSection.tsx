'use client'
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-[var(--color-gray-light)] flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-12 text-[var(--color-navy)] text-center uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Contact
      </motion.h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Formulaire */}
        <motion.form
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[var(--color-gray-medium)]/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          onSubmit={e => e.preventDefault()}
        >
          <input type="text" placeholder="Nom" className="border border-[var(--color-yellow)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]" required />
          <input type="email" placeholder="Email" className="border border-[var(--color-yellow)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]" required />
          <textarea placeholder="Votre message" rows={5} className="border border-[var(--color-yellow)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-violet)]" required />
          <button type="submit" className="bg-[var(--color-yellow)] text-[var(--color-navy)] font-semibold rounded-full py-3 mt-2 hover:bg-[var(--color-mint)] hover:text-[var(--color-navy)] transition">Envoyer</button>
        </motion.form>
        {/* Coordonnées + carte */}
        <motion.div
          className="flex flex-col gap-6 justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[var(--color-navy)] font-semibold">
              <Mail size={20} /> contact@cab-ceipi.com
            </div>
            <div className="flex items-center gap-3 text-[var(--color-navy)] font-semibold">
              <Phone size={20} /> +33 1 23 45 67 89
            </div>
            <div className="flex items-center gap-3 text-[var(--color-navy)] font-semibold">
              <MapPin size={20} /> 10 rue de l&apos;Innovation, Paris
            </div>
          </div>
          <div className="w-full h-56 rounded-2xl overflow-hidden shadow-lg border border-[var(--color-yellow)]">
            <iframe
              title="CEIPI Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3522%2C48.8566%2C2.3622%2C48.8666&amp;layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 