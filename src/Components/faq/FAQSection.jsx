import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why do people buy from us?",
    answer:
      "At MonChikJ, we prioritize quality, comfort, and style. Our ready-to-wear clothing and scrubs are crafted from premium fabrics, ensuring durability and a perfect fit for everyday wear.",
  },
  {
    question: "How reliable are we?",
    answer:
      "We are committed to excellence in every detail. Our products go through strict quality checks, and we provide a seamless shopping experience with secure payments and responsive customer support.",
  },
  {
    question: "How long does our delivery take?",
    answer:
      "Delivery times vary depending on location. Typically, orders within Canada arrive in 3–7 business days, while international shipping takes 7–14 business days. Express shipping options are available.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#021018] text-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-2">
            Everything you need to know about MonChikJ
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-[#031a24] overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-sm md:text-base font-medium">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-cyan-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}