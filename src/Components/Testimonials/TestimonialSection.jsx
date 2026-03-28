import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const testimonials = [
  {
    name: "Dr. Sarah M.",
    role: "Emergency Medicine",
    text: "The most comfortable scrubs I've ever worn. After 12-hour shifts, they still look and feel amazing.",
    rating: 5,
  },
  {
    name: "Nurse Amara K.",
    role: "Pediatric ICU",
    text: "Finally, scrubs that are both stylish and functional! I get compliments every shift.",
    rating: 5,
  },
  {
    name: "Dr. Fatima R.",
    role: "Surgeon",
    text: "Premium quality at a reasonable price. The fit is perfect and lasts long.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 sm:py-28 px-4 bg-[#020617]">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Loved by Professionals
          </h2>
        </AnimatedSection>

        {/* CARD */}
        <AnimatedSection>
          <div className="relative bg-[#0B0F14] border border-white/5 rounded-3xl p-8 sm:p-12">

            <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* STARS */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                {/* NAME */}
                <p className="text-base font-semibold text-white">
                  {testimonials[current].name}
                </p>

                <p className="text-sm text-cyan-400">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="flex items-center justify-center gap-4 mt-8">

              <button
                onClick={prev}
                className="p-2 rounded-full border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-cyan-400 w-6"
                        : "bg-gray-600/40 w-2"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}