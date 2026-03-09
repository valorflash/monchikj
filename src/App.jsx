import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './Components/Loading/LoadingScreen';
import Navbar from './Components/Navbar/NavbarSection';
import HeroSection from './Components/Hero/HeroSection';
import AboutSection from './Components/About/AboutSection';
import ProductsSection from './Components/Products/ProductsSection';
import GallerySection from './Components/Gallery/GallerySection';
import TestimonialsSection from './Components/Testimonials/TestimonialSection';
import ContactSection from './Components/Contact/ContactSection';
import Footer from './Components/Footer/FooterSection';
import FloatingWhatsApp from './Components/Mega/MegaSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <section id="home"><HeroSection /></section>
            <AboutSection />
            <ProductsSection />
            <GallerySection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}
