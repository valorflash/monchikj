import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PRODUCTS, getInstagramOrderURL } from "../lib/products";

const categories = ["All", "Sets", "Premium"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 px-4 min-h-screen bg-gradient-to-br from-[#021018] via-[#031a24] to-[#021018] text-white">
      
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Shop
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Our Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-lg mx-auto"
          >
            Premium scrubs designed for comfort, durability, and style.
          </motion.p>
        </div>

        {/* 🔥 FILTERS */}
        <div className="flex items-center justify-center gap-4 mb-14 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`relative px-6 py-2 rounded-full text-sm font-medium border transition ${
                  isActive
                    ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* 🔥 PRODUCT GRID */}
        <motion.div
          layout
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group rounded-2xl overflow-hidden bg-[#0B0F14] border border-white/5 hover:border-cyan-500/30 transition relative"
            >
              {/* 🔥 GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/10 blur-xl"></div>

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/40 to-transparent" />

                {/* VIEW DETAILS */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-gradient-to-b from-[#020617] to-[#020617]/80 relative z-10">
                <div className="flex justify-between mb-2">
                  <span className="text-cyan-400 text-xs uppercase">
                    {product.category}
                  </span>

                  <span className="text-cyan-400 font-bold">
                    ${product.price}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {product.name}
                </h3>

                {/* 🔥 GLOW BUTTON */}
                <a
                    href={getInstagramOrderURL(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block text-center py-3 rounded-xl font-medium 
                              bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 
                              hover:bg-cyan-500/20 hover:border-cyan-400 
                              transition-all duration-300"
                  >
                    Order via Instagram
                  </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="text-center mt-20 text-gray-400">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}