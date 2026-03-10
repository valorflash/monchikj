import React from 'react';
import { motion } from 'framer-motion';
import foodImage from '../../assets/spring-roll.jpg'
import chinImage from '../../assets/chin-image.jpeg'
import cakez from '../../assets/birthday-cake.jpeg'
import cakew from '../../assets/wedding-cake.jpeg'
import chops from '../../assets/party-tray.jpeg'
import chopz from '../../assets/chop-plate.jpeg'
import meat from '../../assets/meat-pie.jpeg'

const products = [
  { name: "Birthday Cakes", description: "Custom designed cakes to make your special day unforgettable", image: cakez, price: "From ₦15,000" },
  { name: "Wedding Cakes", description: "Elegant multi-tiered masterpieces for your perfect day", image: cakew, price: "From ₦50,000" },
  { name: "Small Chops", description: "Bite-sized delights perfect for any occasion", image: chopz, price: "₦2500 each" },
  { name: "Chin Chin", description: "Crispy, crunchy Nigerian snack made with love", image: chinImage, price: " ₦23,000" },
  { name: "Meat-pie", description: "Soft, fluffy Nigerian pie that melt in your mouth", image: meat, price: "₦14,000" },
  { name: "Samosas", description: "Crispy pastry filled with savory goodness", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop", price: "From ₦2500 each" },
  { name: "Spring Rolls", description: "Golden crispy rolls with delicious fillings,yummy", image: foodImage, price: "From ₦2500 " },
  { name: "Party Chops Pack", description: "Assorted small chops perfect for your events", image: chops, price: "From ₦50,000" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductsSection() {
  const generateWhatsAppLink = (productName) => {
    const message = encodeURIComponent(`Hello Prissy Treats, I would like to order ${productName}.`);
    return `https://wa.me/2349033419815?text=${message}`;
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-500 font-medium mb-4 bg-pink-50 px-4 py-2 rounded-full">Our Menu</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Delicious{' '}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">Treats</span>{' '}
            Await You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From heavenly cakes to savory small chops, explore our collection of handcrafted delights made fresh for every order.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.name} variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-pink-600">{product.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <motion.a
                    href={generateWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-3 font-medium shadow-md shadow-green-200/50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order via WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
