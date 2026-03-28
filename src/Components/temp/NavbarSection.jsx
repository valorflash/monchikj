import React, { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import navMan from "../../assets/nav-img1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Smooth scroll function (reliable)
  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const handleClick = (link) => {
    if (link.path.includes("#")) {
      const sectionId = link.path.split("#")[1];

      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate("/");
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 400); // ✅ longer delay for mobile
      }
    } else {
      navigate(link.path);
    }

    // ✅ Close menu AFTER navigation (fix mobile bug)
    setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  };

  const isActive = (link) => {
    if (link.path === "/") return location.pathname === "/";
    if (link.path === "/shop") return location.pathname === "/shop";
    return false;
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#021018] via-[#031a24] to-[#021018] backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}
            <button onClick={() => navigate("/")} className="cursor-pointer">
              <img
                src={navMan}
                alt="MonChikJ Logo"
                className="h-10 sm:h-12 md:h-14 max-w-[200px] object-contain nav-logo"
              />
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link)}
                  className="relative cursor-pointer"
                >
                  <span
                    className={`text-sm font-medium transition ${
                      isActive(link)
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {isActive(link) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="https://www.instagram.com/monchikj?igsh=MXg0bGxvcmN4bHA0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-500/10 transition"
              >
                <Instagram size={18} />
                <span className="text-sm font-medium">Order Now</span>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden pointer-events-auto"
          >
            <div className="mx-4 mt-2 rounded-2xl bg-[#031a24]/95 backdrop-blur-xl p-6 shadow-xl border border-white/10">

              {/* LINKS */}
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleClick(link)}
                    className={`text-left text-base font-medium ${
                      isActive(link)
                        ? "text-cyan-400"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/monchikj?igsh=MXg0bGxvcmN4bHA0YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full border border-cyan-500 text-cyan-400 py-3 rounded-full hover:bg-cyan-500/10 transition"
              >
                <Instagram size={18} />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}