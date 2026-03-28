import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import LoadingScreen from './Components/Loading/LoadingScreen';
import Navbar from './Components/temp/NavbarSection';
import HeroSection from './Components/Hero/HeroSection';
import AboutSection from './Components/About/AboutSection';
import ProductsSection from './Components/product/ProductsSection';
import TestimonialsSection from './Components/Testimonials/TestimonialSection';
import ContactSection from './Components/Contact/ContactSection';
import Footer from './Components/footer/FooterSection';
import CTABanner from './Components/calltoaction/CTABanner';
import FAQSection from './Components/faq/FAQSection';
import About from './pages/About';
import Contact from './pages/Contact';


// 🔹 Home Page Component
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><HeroSection /></section>
        <AboutSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection/>
        <CTABanner/>
      </main>
    </>
  );
}


// 🔹 Main App with Routing
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <LoadingScreen key="loading" />
      </AnimatePresence>
    );
  }

  return (
   
      <div className="min-h-screen bg-white">

        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
           <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

      </div>
  
  );
}