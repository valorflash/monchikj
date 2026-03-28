import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import { getInstagramOrderURL } from "@/lib/products";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
        {/* Image */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <span className="flex items-center gap-2 text-sm font-medium text-primary">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Info */}
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-primary/80 font-medium uppercase tracking-wider">{product.category}</p>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
            </div>
            <span className="text-lg font-bold text-primary">${product.price}</span>
          </div>

          <a
            href={getInstagramOrderURL(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Order via Instagram
          </a>
        </div>
      </div>
    </motion.div>
  );
}