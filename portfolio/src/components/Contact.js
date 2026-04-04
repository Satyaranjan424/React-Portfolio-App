"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* 🌐 Floating 3D Orbs Canvas */
function FloatingOrbs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const dist = Math.hypot(orbs[i].x - orbs[j].x, orbs[i].y - orbs[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(orbs[i].x, orbs[i].y);
            ctx.lineTo(orbs[j].x, orbs[j].y);
            ctx.strokeStyle = `rgba(197, 161, 97, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw orbs
      orbs.forEach((o) => {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 3);
        grad.addColorStop(0, `rgba(197, 161, 97, ${o.alpha})`);
        grad.addColorStop(1, `rgba(197, 161, 97, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Move
        o.x += o.dx;
        o.y += o.dy;
        if (o.x < 0 || o.x > canvas.width) o.dx *= -1;
        if (o.y < 0 || o.y > canvas.height) o.dy *= -1;
      });

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

/* Contact cards data */
const contactCards = [
  {
    title: "Email",
    value: "dassatyaranjan424@gmail.com",
    sub: "Best for project inquiries",
    href: "mailto:dassatyaranjan424@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "das-satyaranjan",
    sub: "Connect professionally",
    href: "https://linkedin.com/in/das-satyaranjan",
  },
  {
    title: "GitHub",
    value: "Satyaranjan424",
    sub: "Browse my repositories",
    href: "https://github.com/Satyaranjan424",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 👑 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Get In Touch
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          Whether it's a full-time role, a freelance project, or just a good
          conversation about tech — my inbox is always open.
        </p>
      </div>

      {/* 🚀 Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20 relative z-10">
        {contactCards.map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            target={card.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl text-center hover:border-[#c5a161]/40 transition group"
          >
            <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
              {card.title}
            </h3>
            <p className="text-[#e8dcc8]/80 text-sm mb-1 break-all">
              {card.value}
            </p>
            <p className="text-[#e8dcc8]/40 text-xs font-jost tracking-wide">
              {card.sub}
            </p>
          </motion.a>
        ))}
      </div>

      {/* ✨ 3D Orbs + Form wrapper */}
      <div className="relative mt-20 max-w-2xl mx-auto px-6">

        {/* Floating orbs canvas fills the blank space */}
        <div className="relative h-24 mb-4 overflow-hidden rounded-xl">
          <FloatingOrbs />
          <p className="relative z-10 text-center text-[#e8dcc8]/30 text-xs font-jost tracking-[0.3em] uppercase pt-9">
            Send a direct message
          </p>
        </div>

        {/* 📬 Contact Form */}
        <div className="p-8 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl relative z-10">
          <form className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#e8dcc8]/50 text-xs font-jost tracking-widest uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Satyaranjan Das"
                  className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-[#e8dcc8] placeholder:text-[#e8dcc8]/20 outline-none focus:border-[#c5a161] transition text-sm"
                />
              </div>
              <div>
                <label className="block text-[#e8dcc8]/50 text-xs font-jost tracking-widest uppercase mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-[#e8dcc8] placeholder:text-[#e8dcc8]/20 outline-none focus:border-[#c5a161] transition text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#e8dcc8]/50 text-xs font-jost tracking-widest uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Job opportunity / Project / Just saying hi"
                className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-[#e8dcc8] placeholder:text-[#e8dcc8]/20 outline-none focus:border-[#c5a161] transition text-sm"
              />
            </div>

            <div>
              <label className="block text-[#e8dcc8]/50 text-xs font-jost tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project, role, or idea..."
                className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-[#e8dcc8] placeholder:text-[#e8dcc8]/20 outline-none focus:border-[#c5a161] transition text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c5a161] to-[#e8d5a3] text-black font-semibold hover:scale-105 transition text-sm tracking-widest uppercase"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* 🔻 Bottom Note */}
      <div className="mt-16 text-center relative z-10 px-6">
        <p className="text-[#e8dcc8]/40 text-sm font-jost">
          Currently open to full-time roles and freelance projects.
          <span className="text-[#c5a161] mx-2">·</span>
          Response time: within 24 hours.
        </p>
      </div>

    </section>
  );
}