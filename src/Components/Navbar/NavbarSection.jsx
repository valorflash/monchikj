import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
    const whatsappLink =
  "https://wa.me/2349033419815?text=Hi%20I%20want%20to%20make%20order";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href__="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 cursor-pointer"
            >
              Prissy Treats
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href__={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/2349033419815?text=Hello%20Prissy%20Treats%2C%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white rounded-full px-6 py-2 text-sm font-medium shadow-md shadow-pink-200/50 cursor-pointer"
              >
                Order Now
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-pink-50 text-pink-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-md shadow-xl mx-4 rounded-2xl p-6 border border-pink-100">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 hover:text-pink-500 font-medium py-2 border-b border-pink-50 last:border-0 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white rounded-xl py-3.5 text-base font-semibold shadow-md transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207"/>
                </svg>

                Order on WhatsApp
              </motion.a>

                
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}