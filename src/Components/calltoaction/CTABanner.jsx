import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_DM_URL } from "@/lib/products";
import AnimatedSection from "../ui/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0F14] border border-white/5 p-10 sm:p-16 text-center">

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">

              {/* TITLE */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Upgrade Your Scrubs?
              </h2>

              {/* TEXT */}
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Message us on Instagram to place your order. We'll help you find the perfect fit.
              </p>

              {/* BUTTON */}
              <motion.a
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500 text-[#020617] font-semibold text-base hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
              >
                <Instagram className="w-5 h-5" />
                Order on Instagram
              </motion.a>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}