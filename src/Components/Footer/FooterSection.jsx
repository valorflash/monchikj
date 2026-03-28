import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Heart } from "lucide-react";
import { INSTAGRAM_USERNAME, INSTAGRAM_DM_URL } from "@/lib/products";
import navMan from "../../assets/nav-img1.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={navMan}
              alt="MonChikJ"
              className="h-16 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
            />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium medical scrubs designed for healthcare heroes. Care in every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Shop", path: "/shop" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Connect
            </h4>

            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <div className="p-2 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </div>

              <span className="text-sm">@{INSTAGRAM_USERNAME}</span>
            </a>

            <p className="text-xs text-gray-500 mt-4">
              All orders are placed via Instagram DM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MonChikJ. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-cyan-400" /> for healthcare heroes
          </p>
        </div>
      </div>
    </footer>
  );
}