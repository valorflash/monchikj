import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pink-100/50 to-pink-200/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-2">
              Prissy Treats
            </h3>
            <p className="text-gray-600 text-sm">Sweetness in Every Bite</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/9033419815?text=Hello%20I%20want%20to%20order%20from%20Prissy%20Treats"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@prissy_treats?_r=1&_t=ZS-94TMu0Is9lI"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black"
              >
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-1.882V15.3a5.32 5.32 0 11-4.607-5.275v2.734a2.588 2.588 0 102.588 2.588V0h2.019a4.78 4.78 0 003.77 3.186v3.5z"/>
              </svg>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="+234 903 341 9815"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="w-5 h-5 text-pink-500" />
            </motion.a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-600 text-sm flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> in Nigeria
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © 2026 Prissy Treats. All rights reserved.
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}