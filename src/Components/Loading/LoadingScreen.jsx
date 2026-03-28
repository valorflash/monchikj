import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#021018] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* OUTER RING */}
      <motion.div
        className="absolute w-40 h-40 rounded-full border border-cyan-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* INNER RING */}
      <motion.div
        className="absolute w-28 h-28 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-300"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* CONTENT */}
      <motion.div
        className="text-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* BRAND NAME */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent tracking-wide">
          MonChikJ
        </h1>

        {/* TAGLINE */}
        <motion.p
          className="text-cyan-400 text-sm mt-2 tracking-wide"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          Crafting Comfort
        </motion.p>
      </motion.div>
    </div>
  )
}