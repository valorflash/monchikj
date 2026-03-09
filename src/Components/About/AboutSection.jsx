import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award, ChefHat } from 'lucide-react';

const features = [
  { icon: Heart, title: "Made with Love", description: "Every treat is crafted with passion and care" },
  { icon: Leaf, title: "Fresh Ingredients", description: "We use only the finest, freshest ingredients" },
  { icon: Award, title: "Premium Quality", description: "Consistent excellence in every bite" },
  { icon: ChefHat, title: "Expert Bakers", description: "Skilled artisans bringing dreams to life" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=400&fit=crop" alt="Cupcakes" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=300&h=250&fit=crop" alt="Wedding Cake" className="w-full h-40 object-cover rounded-2xl shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=250&fit=crop" alt="Pastries" className="w-full h-40 object-cover rounded-2xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=300&h=400&fit=crop" alt="Birthday Cake" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <p className="text-3xl font-bold text-center">5+</p>
              <p className="text-sm">Years of Sweetness</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-pink-500 font-medium mb-4 bg-pink-50 px-4 py-2 rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Crafting Sweet Memories{' '}
              <span className="font-serif italic text-pink-500">Since 2019</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Prissy Treats was born from a passion for creating delicious moments.
              What started as a home kitchen dream has blossomed into a beloved brand
              known for exquisite cakes and irresistible small chops.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that every celebration deserves a treat that's as special as
              the occasion itself. From birthdays to weddings, from intimate gatherings
              to grand parties, we pour our hearts into every creation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-pink-50 to-orange-50 p-4 rounded-2xl border border-pink-100"
                >
                  <feature.icon className="w-8 h-8 text-pink-500 mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
