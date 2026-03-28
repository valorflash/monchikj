import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, ArrowLeft, Check } from "lucide-react";
import { PRODUCTS, getInstagramOrderURL } from "../lib/products";

export default function ProductDetail() {
  const pathParts = window.location.pathname.split("/");
  const productId = pathParts[pathParts.length - 1];

  const product = PRODUCTS.find((p) => p.id === productId);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 text-center text-white bg-[#021018] min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="text-cyan-400 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4 min-h-screen bg-gradient-to-br from-[#021018] via-[#031a24] to-[#021018] text-white">
      <div className="max-w-6xl mx-auto">

        {/* 🔥 BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* 🔥 IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl aspect-[4/5] group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* 🔥 DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {product.category}
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-cyan-400 mb-6">
              ${product.price}
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* 🔥 SIZES */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3">
                Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => {
                  const active = selectedSize === size;

                  return (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                        active
                          ? "border-cyan-400 text-cyan-400 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                          : "border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                      }`}
                    >
                      {size}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 🔥 COLORS */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3">
                Color
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => {
                  const active = selectedColor === color;

                  return (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition ${
                        active
                          ? "border-cyan-400 text-cyan-400 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                          : "border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                      }`}
                    >
                      {active && <Check className="w-3 h-3" />}
                      {color}
                    </motion.button>
                  );
                })}
              </div>
            </div>

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

            <p className="text-xs text-gray-500 text-center mt-4">
              Orders are placed through Instagram DM for a personalized experience
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}