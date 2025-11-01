"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/PartnersSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import TeamSection from "../components/TeamSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // durée du loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar />
      <HeroSection showHero={!loading} />
      <AboutSection />
      <ServiceSection />
      <TestimonialsSection />
      <PartnersSection />
      <SuccessStoriesSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}
