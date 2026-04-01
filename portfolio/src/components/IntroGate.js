"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function IntroGate({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-[#050505] overflow-hidden text-white">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* ✨ Center Content */}
      {!clicked ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center z-10"
        >

          {/* 👑 Name / Branding */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-cormorant text-4xl md:text-6xl text-[#e8dcc8] mb-4 tracking-wide"
          >
            Satya Ranjan Das
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#e8dcc8]/60 text-sm tracking-[0.3em] uppercase mb-10"
          >
            Full Stack Developer
          </motion.p>

          {/* 🚀 Enter Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(197,161,97,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setClicked(true);
              setTimeout(onEnter, 1200);
            }}
            className="relative px-10 py-4 text-xs tracking-[0.3em] uppercase text-[#c5a161] border border-[#c5a161]/40 rounded-xl overflow-hidden"
          >
            <span className="relative z-10">Enter Portfolio</span>

            {/* Glow Layer */}
            <span className="absolute inset-0 bg-[#c5a161]/10 opacity-0 hover:opacity-100 transition duration-300" />
          </motion.button>

        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center z-10"
        >

          {/* 🔄 Loading Animation */}
          <div className="w-10 h-10 border-2 border-[#c5a161]/30 border-t-[#c5a161] rounded-full animate-spin mb-6" />

          <p className="text-[#e8dcc8]/60 text-sm tracking-[0.3em] uppercase">
            Loading Experience
          </p>

        </motion.div>
      )}

      {/* 🔻 Bottom Signature */}
      <div className="absolute bottom-10 text-center text-[#e8dcc8]/40 text-xs tracking-[0.3em]">
        Crafted with precision
      </div>

    </div>
  );
}