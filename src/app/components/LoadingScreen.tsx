// app/components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1000) {
          clearInterval(interval);
          setTimeout(() => setShowLogo(false), 1000); // petite pause après chargement
          return 1000;
        }
        return prev + 1;
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

  if (!showLogo) return null;

  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
        {/* Spinner tournant autour */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-transparent border-purple-500"></div>

        {/* Logo avec remplissage vertical */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden z-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
          {/* Masque de chargement (remplissage vers le haut) */}
          <div
            className="absolute bottom-0 left-0 w-full bg-white"
            style={{
              height: `${100 - progress}%`,
              transition: "height 0.1s ease",
              zIndex: 20,
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
