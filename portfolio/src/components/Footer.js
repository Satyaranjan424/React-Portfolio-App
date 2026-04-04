"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "Facebook",
    code: "01",
    href: "https://www.facebook.com/satyaranjan.das.795464",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    code: "02",
    href: "https://www.instagram.com/being_satyaranjan/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    code: "03",
    href: "https://github.com/Satyaranjan424",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    code: "04",
    href: "https://linkedin.com/in/das-satyaranjan",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    code: "05",
    href: "https://twitter.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.742-8.855L1.91 2.25h6.944l4.255 5.637L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About",      href: "#Scene3D",    code: "01" },
  { label: "Projects",   href: "#projects",   code: "02" },
  { label: "Experience", href: "#experience", code: "03" },
  { label: "Education",  href: "#education",  code: "04" },
  { label: "Contact",    href: "#contact",    code: "05" },
];

/* ── Particle canvas ── */
function FooterParticles() {
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

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.pulse += 0.018;
        const a = 0.15 + 0.12 * Math.sin(p.pulse);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, `rgba(197,161,97,${a})`);
        grad.addColorStop(1, `rgba(197,161,97,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
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

export default function Footer() {
  const [time, setTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);

  /* live clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* spotlight follow */
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        .footer-scanline::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(197,161,97,0.012) 2px,
            rgba(197,161,97,0.012) 4px
          );
          pointer-events: none;
          z-index: 0;
        }
        .footer-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(
            380px circle at var(--mx, 50%) var(--my, 50%),
            rgba(197,161,97,0.045) 0%,
            transparent 70%
          );
        }
        .footer-wrap:hover .footer-spotlight { opacity: 1; }

        .footer-social-btn {
          position: relative;
          overflow: hidden;
        }
        .footer-social-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(197,161,97,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .footer-social-btn:hover::before { opacity: 1; }

        .footer-nav-link {
          position: relative;
        }
        .footer-nav-link .f-link-bar {
          position: absolute;
          bottom: -2px; left: 50%; right: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c5a161, transparent);
          transition: left 0.35s cubic-bezier(0.4,0,0.2,1), right 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-nav-link:hover .f-link-bar { left: 0; right: 0; }
        .footer-nav-link:hover { color: #c5a161; }

        .footer-corner {
          position: absolute;
          width: 10px; height: 10px;
          border-color: rgba(197,161,97,0.35);
          border-style: solid;
          border-width: 0;
        }
        .f-corner-tl { top: 8px; left: 8px;  border-top-width: 1px; border-left-width: 1px; }
        .f-corner-tr { top: 8px; right: 8px; border-top-width: 1px; border-right-width: 1px; }
        .f-corner-bl { bottom: 8px; left: 8px;  border-bottom-width: 1px; border-left-width: 1px; }
        .f-corner-br { bottom: 8px; right: 8px; border-bottom-width: 1px; border-right-width: 1px; }

        @keyframes status-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.65); }
        }
        .f-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #c5a161;
          animation: status-pulse 2s ease-in-out infinite;
          display: inline-block; flex-shrink: 0;
        }

        .footer-cta-btn {
          position: relative;
          overflow: hidden;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .footer-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
        }
        .footer-cta-btn:hover::before { transform: translateX(200%); }
      `}</style>

      <footer
        id="footer"
        ref={footerRef}
        className="footer-wrap footer-scanline relative bg-[#060606] overflow-hidden"
        style={{
          borderTop: "1px solid transparent",
          borderImage: "linear-gradient(90deg, transparent 0%, rgba(197,161,97,0.3) 30%, rgba(232,213,163,0.5) 50%, rgba(197,161,97,0.3) 70%, transparent 100%) 1",
        }}
      >
        {/* Spotlight */}
        <div
          className="footer-spotlight"
          style={{ "--mx": `${mousePos.x}px`, "--my": `${mousePos.y}px` }}
        />

        {/* Corner accents */}
        <span className="footer-corner f-corner-tl" />
        <span className="footer-corner f-corner-tr" />
        <span className="footer-corner f-corner-bl" />
        <span className="footer-corner f-corner-br" />

        {/* Particle field */}
        <FooterParticles />

        {/* Top glow divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#c5a161]/30 to-transparent" />

        {/* ── MAIN FOOTER CONTENT ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-14 pb-6">

          {/* ── TOP ROW — 3 equal columns with dividers ── */}
          <div className="grid md:grid-cols-3 mb-12 divide-x divide-[#c5a161]/10">

            {/* ── Column 1: Identity ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 pr-10"
            >
              <p className="font-mono-tech text-[0.6rem] text-[#c5a161]/50 tracking-[0.35em] uppercase mb-[5px]">
                Identity
              </p>

              <div
                className="cursor-pointer w-fit"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <p className="font-cormorant text-[1.28rem] font-medium text-[#e8dcc8] tracking-[0.1em] leading-none mb-[5px]">
                  Satya Ranjan Das
                </p>
                <div className="flex items-center gap-2">
                  <span className="f-status-dot" />
                  <p className="font-mono-tech text-[0.5rem] text-[#c5a161] tracking-[0.3em] uppercase leading-none">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <p className="font-jost text-[#e8dcc8]/40 text-xs leading-relaxed tracking-wide">
                Building scalable, optimized, and production grade web applications from frontend to backend technologies — one clean commit at a time.
              </p>

              {/* Live clock */}
              <div className="flex items-center gap-2 w-fit px-3 py-1.5 border border-[#c5a161]/12 bg-[#c5a161]/[0.04]">
                <span className="f-status-dot" style={{ animationDelay: "0.5s" }} />
                <span className="font-mono-tech text-[0.6rem] text-[#c5a161]/55 tracking-[0.15em]">
                  {time}
                </span>
              </div>
            </motion.div>

            {/* ── Column 2: Navigation ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-1 px-10"
            >
              <p className="font-mono-tech text-[0.6rem] text-[#c5a161]/50 tracking-[0.35em] uppercase mb-4">
                Navigation
              </p>
              {navLinks.map(({ label, href, code }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-nav-link group font-jost text-[0.72rem] font-light tracking-[0.2em] uppercase text-[#e8dcc8]/45 no-underline py-1.5 w-fit transition-colors duration-300 flex items-center gap-3"
                >
                  <span className="font-mono-tech text-[0.52rem] text-[#c5a161]/30 group-hover:text-[#c5a161]/60 transition-colors duration-300">
                    {code}
                  </span>
                  {label}
                  <span className="f-link-bar" />
                </a>
              ))}
            </motion.div>

            {/* ── Column 3: Connect ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-1 pl-10"
            >
              <p className="font-mono-tech text-[0.6rem] text-[#c5a161]/50 tracking-[0.35em] uppercase mb-4">
                Connect
              </p>
              {socialLinks.map(({ label, code, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="footer-social-btn group flex items-center gap-3 font-jost text-[0.72rem] font-light tracking-[0.2em] uppercase text-[#e8dcc8]/45 no-underline py-1.5 px-3 border border-transparent hover:border-[#c5a161]/20 hover:text-[#c5a161] rounded-lg transition-all duration-300 w-fit"
                >
                  <span className="font-mono-tech text-[0.52rem] text-[#c5a161]/30 group-hover:text-[#c5a161]/60 transition-colors duration-300">
                    {code}
                  </span>
                  <span className="text-[#c5a161]/50 group-hover:text-[#c5a161] transition-colors duration-300">
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── DIVIDER ── */}
          <div
            className="w-full h-[1px] mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(197,161,97,0.2) 30%, rgba(197,161,97,0.35) 50%, rgba(197,161,97,0.2) 70%, transparent)" }}
          />

          {/* ── BOTTOM ROW ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-[0.6rem] tracking-[0.25em] text-[#e8dcc8]/25 uppercase">
                © 2026 Satya Ranjan Das
              </span>
              <span className="w-[1px] h-3 bg-[#c5a161]/20" />
              <span className="font-mono-tech text-[0.6rem] tracking-[0.2em] text-[#e8dcc8]/20 uppercase">
                All rights reserved
              </span>
            </div>

            <div className="flex items-center gap-3 text-[#e8dcc8]/20">
              <div className="w-6 h-[1px] bg-[#c5a161]/25" />
              <span className="font-mono-tech text-[0.6rem] tracking-[0.3em] uppercase">
                Crafted with precision
              </span>
              <div className="w-6 h-[1px] bg-[#c5a161]/25" />
            </div>

            <a href="#contact">
              <button
                className="footer-cta-btn font-jost text-[0.68rem] tracking-[0.3em] uppercase text-[#0a0a0a] px-6 py-[0.52rem] cursor-pointer border-0 font-medium hover:-translate-y-px transition-transform duration-200"
                style={{ background: "linear-gradient(135deg, #c5a161 0%, #e8d5a3 55%, #c5a161 100%)" }}
              >
                Hire Me
              </button>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}