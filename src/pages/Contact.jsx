import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Mail } from 'lucide-react'; // ❌ removed MapPin

const contactInfo = [
  { icon: Phone, title: "Phone", details: "+234 903 341 9815", link: "tel:+2349033419815" },
  { icon: Clock, title: "Business Hours", details: "Mon - Sat: 9am - 7pm", link: null },
  { icon: Mail, title: "Email", details: "micheadah@gmail.com", link: "mailto:micheadah@gmail.com" } // ✅ fixed mail link
];

export default function ContactSection() {
  const whatsappLink = "https://wa.me/2349033419815?text=Hi%20there%20I%20want%20to%20order";
  const instagramLink = "https://www.instagram.com/monchikj?igsh=MXg0bGxvcmN4bHA0YQ==";

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create{" "}
            <span className="text-cyan-400">Something Great</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to order? Have questions? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* CONTACT CARDS */}
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
                whileHover={{ y: -5 }}
                className="bg-[#0B0F14] border border-white/5 hover:border-cyan-500/30 rounded-2xl p-6 transition"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="font-semibold text-white mb-1">
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.details}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B0F14] border border-white/5 rounded-3xl overflow-hidden"
          >
            <div className="p-8 text-center">

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl mb-6"
              >
                💬
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Place an Order?
              </h3>

              <p className="text-gray-400 mb-8">
                Chat with us instantly on WhatsApp for fast responses and orders.
              </p>

              <div className="space-y-4">

                {/* WhatsApp */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center w-full bg-cyan-500 text-[#020617] hover:bg-cyan-400 rounded-xl py-4 text-lg font-semibold transition"
                >
                  Chat on WhatsApp
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center w-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-xl py-4 text-lg font-semibold transition"
                >
                  Follow us on Instagram
                </motion.a>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}