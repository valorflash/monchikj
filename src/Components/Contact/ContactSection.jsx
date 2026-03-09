import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const contactInfo = [
  { icon: Phone, title: "Phone", details: "+234 903 341 9815", link: "tel:+234 903 341 9815" },
  { icon: MapPin, title: "Location", details: "Lagos, Nigeria", link: null },
  { icon: Clock, title: "Business Hours", details: "Mon - Sat: 9am - 7pm", link: null },
  { icon: Mail, title: "Email", details: "hello@prissytreats.com", link: "mailto:hello@prissytreats.com" }
];

export default function ContactSection() {
  const whatsappLink = "https://wa.me/2349033419815?text=Hi%20Prissy%20Treats%2C%20I%20would%20like%20to%20place%20an%20order.";
  const tiktokLink = "https://www.tiktok.com/@prissy_treats?_r=1&_t=ZS-94TMu0Is9lI";

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-rose-50/50 to-pink-100/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-500 font-medium mb-4 bg-white px-4 py-2 rounded-full shadow-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let's Create{' '}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-400">Sweet Moments</span>{' '}
            Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ready to order? Have questions? We'd love to hear from you!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                {info.link ? (
                  <a href__={info.link} className="text-gray-600 hover:text-pink-500 transition-colors">{info.details}</a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 shadow-2xl rounded-3xl overflow-hidden"
          >
            <div className="p-8 text-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl mb-6"
              >
                🎂
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Ready to Place an Order?</h3>
              <p className="text-pink-100 mb-8">Contact us on WhatsApp for quick responses, custom orders, and special requests.</p>
              <div className="space-y-4">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full bg-white text-pink-600 hover:bg-pink-50 rounded-xl py-4 text-lg font-semibold shadow-lg transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.a>
                <motion.a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full border-2 border-white/30 text-white hover:bg-white/10 rounded-xl py-4 text-lg font-semibold transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-1.882V15.3a5.32 5.32 0 11-4.607-5.275v2.734a2.588 2.588 0 102.588 2.588V0h2.019a4.78 4.78 0 003.77 3.186v3.5z"/>
                </svg>
                Follow on TikTok
        </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
