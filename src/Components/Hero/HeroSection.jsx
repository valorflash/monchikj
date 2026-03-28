import React from "react"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import heroImg from "../../assets/hero-img.jpg"

export default function HeroSection() {
  const instagramLink = "https://www.instagram.com/monchikj?igsh=MXg0bGxvcmN4bHA0YQ=="

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE (SCRUBS ON HANGER) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Scrubs on hanger"
          className="w-full h-full object-cover"
        />

        {/* DARK + TEAL OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black/60 to-teal-900/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300 text-lg mb-4"
        >
          Care in Every Stitch
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Premium Scrubs for{" "}
          <span className="text-cyan-400">
            Healthcare Heroes
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Designed for comfort, crafted for professionals. Experience the perfect
          blend of style and functionality.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
      
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-full font-semibold shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            Order on Instagram
          </a>

          <a
            href="/shop"
            className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Browse Collection
          </a>
        </motion.div>
      </div>

      
    </section>
  )
}