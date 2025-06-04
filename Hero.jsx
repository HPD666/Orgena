// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated BG shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-20 -z-10"
        style={{ top: "-200px", left: "-200px" }}
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-3 text-center">
        Meet Orgena AI
      </h1>
      <p className="text-xl md:text-2xl text-white/80 mb-8 text-center">
        Turn your imagination into images in seconds.
      </p>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="#features"
        className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg text-xl transition hover:bg-purple-200"
      >
        Try Now
      </motion.a>
    </section>
  );
}
