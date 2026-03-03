// app/components/Topbar.tsx
"use client";
import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="w-full bg-[#0b1437] text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap gap-y-2">
        {/* Gauche */}
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-white" />
            contact@tech-template.com
          </span>
          <span className="hidden md:inline-block">| Afrique</span>
          <span className="hidden md:inline-block">
            | MICROSOFT Partner - AWS Partner Network
          </span>
        </div>

        {/* Droite */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          {[
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
          ].map(({ icon: Icon, href }, i) => (
            <Link key={i} href={href} className="hover:scale-110 transition">
              <span className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition">
                <Icon size={16} className="text-white" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
