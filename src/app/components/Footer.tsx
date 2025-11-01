'use client'
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-navy)] text-white pt-16 pb-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + nom */}
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Image src="/images/logo.jpg" alt="Logo CEIPI" width={48} height={48} className="rounded-full shadow" />
          <span className="text-xl font-bold tracking-wider">
            Cabinet <span className="text-[var(--color-yellow)] font-extrabold">CEIPI</span>
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[var(--color-yellow)] transition">Accueil</a>
          <a href="#" className="hover:text-[var(--color-yellow)] transition">Services</a>
          <a href="#" className="hover:text-[var(--color-yellow)] transition">Réalisations</a>
          <a href="#" className="hover:text-[var(--color-yellow)] transition">Équipe</a>
          <a href="#" className="hover:text-[var(--color-yellow)] transition">Contact</a>
        </nav>
        {/* Réseaux sociaux */}
        <div className="flex gap-4">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-violet)] text-white hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)] transition" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-violet)] text-white hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)] transition" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-violet)] text-white hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)] transition" aria-label="Linkedin"><Linkedin size={20} /></a>
          <a href="mailto:contact@cab-ceipi.com" className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-violet)] text-white hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)] transition" aria-label="Mail"><Mail size={20} /></a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} CEIPI. Tous droits réservés.
      </div>
    </footer>
  );
} 