'use client'
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice IT, Groupe Alpha",
    avatar: "/images/person-working-html-computer.jpg",
    companyLogo: "/images/Logo tech-template#Ajour.jpg",
    text: "Tech Template a su comprendre nos enjeux et nous accompagner dans la migration cloud avec une grande expertise. Résultat : plus d'agilité et de sécurité pour notre SI !",
    rating: 5,
  },
  {
    name: "Jean Dupuis",
    role: "CTO, Innovatech",
    avatar: "/images/7036084.jpg",
    companyLogo: "/images/62377.jpg",
    text: "Une équipe à l'écoute, des solutions sur-mesure et un vrai sens du service. Nous recommandons Tech Template à tous nos partenaires.",
    rating: 5,
  },
  {
    name: "Fatou Ndiaye",
    role: "Responsable Digital, SunAfrica",
    avatar: "/images/8621.jpg",
    companyLogo: "/images/3511749.jpg",
    text: "Grâce à Tech Template, nous avons pu accélérer notre transformation digitale et sécuriser nos données. Un accompagnement de qualité !",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-24 bg-[var(--color-navy)] flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4 text-center text-[var(--color-yellow)] drop-shadow-lg font-sans"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
      >
        Témoignages
      </motion.h2>
      <p className="text-[var(--color-gray-medium)] text-lg text-center max-w-2xl mb-8 md:mb-10 font-sans" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        Ne vous fiez pas qu&apos;à notre parole&nbsp;: découvrez ce que nos clients disent vraiment de notre service.
      </p>
      <div className="w-full max-w-5xl px-2 md:px-4">
        <Swiper
          modules={[Navigation, A11y, Keyboard]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: 'Témoignage précédent',
            nextSlideMessage: 'Témoignage suivant',
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-12"
          grabCursor={true}
          simulateTouch={true}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-white/5 rounded-2xl shadow-xl p-7 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-white/10 min-h-[420px] focus-within:ring-2 focus-within:ring-[var(--color-cyan)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                tabIndex={0}
                aria-label={`Témoignage de ${t.name}, ${t.role}`}
              >
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-[var(--color-cyan)] shadow">
                  <Image src={t.avatar} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <div className="flex items-center justify-center gap-1 mb-2" aria-label={`Note : ${t.rating} étoiles`}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={18} className="text-[var(--color-cyan)] fill-[var(--color-cyan)]" />
                  ))}
                </div>
                <p className="text-white text-base mb-4 italic relative px-2 font-sans" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
                  <span className="text-3xl text-[var(--color-cyan)] font-serif absolute -left-3 -top-2 select-none">“</span>
                  {t.text}
                  <span className="text-3xl text-[var(--color-cyan)] font-serif absolute -right-3 -bottom-2 select-none">”</span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-white">{t.name}</span>
                  <span className="text-[var(--color-emerald)]">|</span>
                  <span className="text-sm text-[var(--color-gray-medium)]">{t.role}</span>
                </div>
                <div className="mt-3">
                  <Image src={t.companyLogo} alt="logo entreprise" width={40} height={40} className="rounded shadow" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)]" aria-label="Témoignage précédent">
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)]" aria-label="Témoignage suivant">
            <ChevronRight size={28} className="text-white" />
          </button>
        </Swiper>
      </div>
    </section>
  );
} 