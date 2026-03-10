import React from 'react';
import { motion } from 'framer-motion';
import cake_3 from "../../assets/cake3.jpeg";
import cake_4 from "../../assets/cake4.jpeg";
import foodImage from '../../assets/spring-roll.jpg'
import cake_5 from "../../assets/cake5.jpeg";
import cake_1 from "../../assets/cake1.jpeg";
import chops from '../../assets/party-tray.jpeg'
import cake_6 from "../../assets/cake6.jpeg";
import wedding from "../../assets/wedding-cake.jpeg";
import birthday from "../../assets/birthday-cake.jpeg";

const galleryImages = [
  { src: cake_6, alt: " birthday cake" },
  { src: cake_5, alt: "Elegant wedding cake" },
  { src: chops, alt: "Party chops tray" },
  { src: cake_4, alt: "Pink frosted cakes" },
  { src: cake_1, alt: "Strawberry cake" },
  { src: wedding, alt: "Vanilla drip cake" },
  { src: foodImage, alt: "Assorted pastries" },
  { src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop", alt: "Celebration cake" }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-pink-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-500 font-medium mb-4 bg-pink-100 px-4 py-2 rounded-full">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Glimpse of Our{' '}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">Creations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Every cake tells a story, every chop brings joy. See what we've been cooking up!</p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://www.tiktok.com/@prissy_treats?_r=1&_t=ZS-94TMu0Is9lI" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors">
            <span>See more on Tiktok</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
