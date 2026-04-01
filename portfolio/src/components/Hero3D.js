"use client";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#050505]">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >

        {/* 👑 Heading */}
        <h1 className="font-cormorant text-5xl md:text-7xl text-[#e8dcc8] tracking-wide leading-tight mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#c5a161] to-[#e8d5a3] bg-clip-text text-transparent">
            Satya
          </span>
        </h1>

        {/* ⚡ Subtext */}
        <p className="font-jost text-sm md:text-base text-[#e8dcc8]/60 max-w-xl mx-auto tracking-wide mb-8">
          Full Stack Developer crafting scalable, high-performance web
          applications with modern technologies and elegant user experiences.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href="/resume.pdf"
            className="relative px-8 py-3 font-jost text-xs tracking-[0.25em] uppercase text-black bg-gradient-to-br from-[#c5a161] to-[#e8d5a3] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-3 font-jost text-xs tracking-[0.25em] uppercase text-[#c5a161] border border-[#c5a161]/30 rounded-xl hover:bg-[#c5a161]/10 transition-all duration-300"
          >
            View Work
          </a>

        </div>

      </motion.div>

      {/* 🔻 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#c5a161] to-transparent" />
        <span className="text-[10px] tracking-[0.3em] text-[#c5a161]/60 mt-2 font-jost uppercase">
          Scroll
        </span>
      </motion.div>

    </section>
  );
}