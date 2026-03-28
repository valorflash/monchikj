import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCTS, getInstagramOrderURL } from "../../lib/products"

export default function AboutSection() {
  const featured = PRODUCTS.filter((p) => p.featured)

  return (
    <section className="py-20 px-4 bg-[#020617]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Collection
          </p>

          <h2 className="text-3xl font-bold text-white">
            Featured Scrubs
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden bg-[#0B0F14] border border-white/5 hover:border-cyan-500/30 transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/40 to-transparent" />

                {/* VIEW DETAILS */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex items-center gap-2 text-cyan-400 text-sm font-medium cursor-pointer hover:gap-3 transition-all"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
             </div>

              {/* CONTENT */}
              <div className="p-5 bg-gradient-to-b from-[#020617] to-[#020617]/80">
                
                <div className="flex justify-between mb-2">
                  <span className="text-cyan-400 text-xs uppercase">
                    Sets
                  </span>

                  <span className="text-cyan-400 font-bold">
                    ${product.price}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {product.name}
                </h3>

                {/* BUTTON */}
                <a
                  href={getInstagramOrderURL(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 py-3 rounded-xl hover:bg-cyan-500/20"
                >
                  📸 Order via Instagram
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-4 transition-all duration-300"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}