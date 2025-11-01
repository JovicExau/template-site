// app/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";
import MegaMenuServices from "./MegaMenuServices";

import MenuHamburger from "./MenuHamburger";


export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Gestion du hover pour mega menu (desktop uniquement)
  const handleServicesEnter = () => {
    // N'active le mega menu que si écran md+
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setServicesOpen(true);
    }
  };
  const handleServicesLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setServicesOpen(false);
    }
  };

  return (
    <>
      <Topbar />
      <header className="w-full bg-[var(--color-navy)] shadow-sm sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={32} />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold tracking-wider text-[var(--color-yellow)] uppercase">Cabinet</span>
              <span className="text-2xl md:text-3xl font-extrabold tracking-widest text-white">CEIPI</span>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-6 font-medium text-white relative">
            <li className="hover:text-[var(--color-yellow)] transition-colors">
              <Link href="#">Accueil</Link>
            </li>
            <li
              className="hover:text-[var(--color-yellow)] relative transition-colors"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button type="button" className="flex items-center gap-1 focus:outline-none">
                Services
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </li>
            <li className="hover:text-[var(--color-yellow)] transition-colors">
              <Link href="#">A propos</Link>
            </li>
            <li className="hover:text-[var(--color-yellow)] transition-colors">
              <Link href="#">Succes stories</Link>
            </li>
            <li className="hover:text-[var(--color-yellow)] transition-colors">
              <Link href="#">Actualités</Link>
            </li>
            <li className="hover:text-[var(--color-yellow)] transition-colors">
              <Link href="#">Contact</Link>
            </li>
          </ul>

          {/* Bouton Contacter notre équipe (desktop) */}
          <div className="hidden md:flex ml-6">
            <Link
              href="#"
              className="bg-[var(--color-yellow)] text-[var(--color-navy)] px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-[var(--color-mint)] hover:text-[var(--color-navy)] transition"
            >
              Contacter notre équipe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center focus:outline-none group"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Ouvrir le menu"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <rect y="8" width="36" height="4" rx="2" fill="white" />
              <rect y="16" width="36" height="4" rx="2" fill="var(--color-violet)" />
              <rect y="24" width="36" height="4" rx="2" fill="var(--color-yellow)" />
            </svg>
          </button>

          <MenuHamburger open={mobileMenu} onClose={() => setMobileMenu(false)} />
        </nav>
        {/* Mega menu en bande pleine largeur sous la navbar, affiché au hover (desktop uniquement) */}
        {servicesOpen && (
          <div
            className="hidden md:block fixed left-0 right-0 top-[72px] z-40"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <MegaMenuServices onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave} />
          </div>
        )}
      </header>
    </>
  );
}
