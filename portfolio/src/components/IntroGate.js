"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PARTICLE CANVAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.pulse += 0.02;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        // Glow orb
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(197,161,97,${a})`);
        grad.addColorStop(0.4, `rgba(197,161,97,${a * 0.3})`);
        grad.addColorStop(1, `rgba(197,161,97,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(197,161,97,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ROTATING GEOMETRIC RINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GeometricRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
      {/* Outer slow ring */}
      <div
        className="absolute rounded-full border border-[#c5a161]/10"
        style={{
          width: "700px",
          height: "700px",
          animation: "spin-slow 30s linear infinite",
          backgroundImage:
            "repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(197,161,97,0.04) 10deg 11deg)",
        }}
      />
      {/* Mid ring dashed */}
      <div
        className="absolute rounded-full"
        style={{
          width: "520px",
          height: "520px",
          border: "1px dashed rgba(197,161,97,0.12)",
          animation: "spin-slow 18s linear infinite reverse",
        }}
      />
      {/* Inner solid ring */}
      <div
        className="absolute rounded-full border border-[#c5a161]/20"
        style={{
          width: "360px",
          height: "360px",
          animation: "spin-slow 10s linear infinite",
        }}
      />
      {/* Tiny inner ring */}
      <div
        className="absolute rounded-full border border-[#c5a161]/30"
        style={{
          width: "220px",
          height: "220px",
          animation: "spin-slow 6s linear infinite reverse",
        }}
      />

      {/* Corner tick marks on inner ring */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute"
          style={{
            width: "220px",
            height: "220px",
            transform: `rotate(${deg}deg)`,
            animation: "spin-slow 6s linear infinite reverse",
          }}
        >
          <div
            className="absolute bg-[#c5a161]"
            style={{
              width: "6px",
              height: "1px",
              top: "-0.5px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.8,
            }}
          />
        </div>
      ))}

      {/* Orbit dot on mid ring */}
      <div
        className="absolute"
        style={{
          width: "520px",
          height: "520px",
          animation: "spin-slow 18s linear infinite reverse",
        }}
      >
        <div
          className="absolute rounded-full bg-[#c5a161] shadow-[0_0_10px_#c5a161]"
          style={{ width: "5px", height: "5px", top: "-2.5px", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      {/* Orbit dot on outer ring */}
      <div
        className="absolute"
        style={{
          width: "700px",
          height: "700px",
          animation: "spin-slow 30s linear infinite",
        }}
      >
        <div
          className="absolute rounded-full bg-[#c5a161]/60"
          style={{ width: "4px", height: "4px", bottom: "-2px", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GLITCH TEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GlitchName({ text }) {
  return (
    <div className="relative select-none">
      {/* Ghost layers for glitch */}
      <span
        aria-hidden="true"
        className="absolute inset-0 font-cormorant text-5xl md:text-7xl text-[#c5a161]/20 tracking-widest"
        style={{ animation: "glitch-1 4s infinite", clipPath: "inset(30% 0 50% 0)" }}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 font-cormorant text-5xl md:text-7xl text-[#e8dcc8]/10 tracking-widest"
        style={{ animation: "glitch-2 4s infinite", clipPath: "inset(60% 0 20% 0)" }}
      >
        {text}
      </span>
      {/* Real text */}
      <h1 className="relative font-cormorant text-5xl md:text-7xl text-[#e8dcc8] tracking-widest">
        {text}
      </h1>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN INTRO GATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function IntroGate({ onEnter }) {
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(true);

  const handleEnter = () => {
    setClicked(true);
    setTimeout(() => {
      setShow(false);
      setTimeout(onEnter, 600);
    }, 1400);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 h-screen flex flex-col justify-center items-center bg-[#050505] overflow-hidden text-white z-50"
        >
          {/* Global keyframes */}
          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes glitch-1 {
              0%,95%,100% { transform: translate(0); opacity: 0; }
              96%          { transform: translate(-3px, 1px); opacity: 1; }
              97%          { transform: translate(3px, -1px); opacity: 0.8; }
              98%          { transform: translate(-2px, 2px); opacity: 1; }
              99%          { transform: translate(0); opacity: 0; }
            }
            @keyframes glitch-2 {
              0%,93%,100% { transform: translate(0); opacity: 0; }
              94%          { transform: translate(3px, -2px); opacity: 0.9; }
              95%          { transform: translate(-3px, 1px); opacity: 0.6; }
              96%          { transform: translate(1px, -1px); opacity: 0.8; }
              97%          { transform: translate(0); opacity: 0; }
            }
            @keyframes scan-line {
              0%   { top: -4px; }
              100% { top: 100%; }
            }
            @keyframes flicker {
              0%,100% { opacity: 1; }
              92%      { opacity: 1; }
              93%      { opacity: 0.85; }
              94%      { opacity: 1; }
              96%      { opacity: 0.9; }
              97%      { opacity: 1; }
            }
          `}</style>

          {/* ✦ Background glow blobs */}
          <div className="absolute w-[600px] h-[600px] bg-indigo-500/15 blur-[180px] rounded-full top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-500/15 blur-[180px] rounded-full bottom-[-150px] right-[-150px]" />
          <div className="absolute w-[300px] h-[300px] bg-[#c5a161]/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* ✦ Particle field */}
          <ParticleField />

          {/* ✦ Geometric rings */}
          <GeometricRings />

          {/* ✦ Subtle scan line */}
          <div
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a161]/20 to-transparent pointer-events-none z-[2]"
            style={{ animation: "scan-line 8s linear infinite" }}
          />

          {/* ✦ Corner decorations */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className={`absolute w-8 h-8 border-[#c5a161]/30 ${cls}`}
            />
          ))}

          {/* ✦ Center content */}
          <AnimatePresence mode="wait">
            {!clicked ? (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center z-10 text-center px-6"
                style={{ animation: "flicker 6s infinite" }}
              >
                {/* Top label */}
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c5a161]/50" />
                  <span className="text-[#c5a161]/70 text-xs tracking-[0.4em] uppercase font-jost">
                    Portfolio 2026
                  </span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c5a161]/50" />
                </motion.div>

                {/* Glitch Name */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                >
                  <GlitchName text="Satya Ranjan Das" />
                </motion.div>

                {/* Role with animated dots */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex items-center gap-3 mt-4 mb-12"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a161] shadow-[0_0_8px_#c5a161]" />
                  <p className="text-[#e8dcc8]/60 text-xs tracking-[0.45em] uppercase font-jost">
                    Full Stack Developer
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a161] shadow-[0_0_8px_#c5a161]" />
                </motion.div>

                {/* Enter button */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(197,161,97,0.35)" }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleEnter}
                    className="group relative px-12 py-4 text-xs tracking-[0.4em] uppercase text-[#c5a161] border border-[#c5a161]/40 rounded-xl overflow-hidden font-jost"
                  >
                    {/* Shimmer sweep */}
                    <span
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#c5a161]/15 to-transparent"
                    />
                    {/* BG fill */}
                    <span className="absolute inset-0 bg-[#c5a161]/5 group-hover:bg-[#c5a161]/10 transition-colors duration-300 rounded-xl" />
                    <span className="relative z-10">Enter Portfolio</span>
                  </motion.button>
                </motion.div>

                {/* Scroll hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="mt-10 text-[#e8dcc8]/25 text-xs tracking-[0.3em] uppercase font-jost"
                >
                  JavaScript · React · Node.js
                </motion.p>
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center z-10 gap-6"
              >
                {/* Cinematic loader — expanding rings */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#c5a161]/20 animate-ping" style={{ animationDuration: "1.2s" }} />
                  <div className="absolute inset-2 rounded-full border border-[#c5a161]/30 animate-ping" style={{ animationDuration: "1.2s", animationDelay: "0.2s" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c5a161] shadow-[0_0_16px_#c5a161]" />
                </div>
                <p className="text-[#e8dcc8]/50 text-xs tracking-[0.4em] uppercase font-jost">
                  Entering
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✦ Bottom signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 flex items-center gap-3 text-[#e8dcc8]/30 text-xs tracking-[0.35em] uppercase font-jost z-10"
          >
            <div className="w-6 h-[1px] bg-[#c5a161]/30" />
            Crafted with precision
            <div className="w-6 h-[1px] bg-[#c5a161]/30" />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}