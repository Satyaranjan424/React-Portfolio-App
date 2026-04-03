"use client";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { label: "About",      href: "#Scene3D",    code: "01" },
  { label: "Projects",   href: "#projects",   code: "02" },
  { label: "Experience", href: "#experience", code: "03" },
  { label: "Contact",    href: "#contact",    code: "04" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [menuOpen,   setMenuOpen]  = useState(false);
  const [activeLink, setActive]    = useState("");
  const [mousePos,   setMousePos]  = useState({ x: 0, y: 0 });
  const [time,       setTime]      = useState("");
  const logoRef = useRef(null);
  const navRef  = useRef(null);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── live clock ── */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* ── navbar spotlight follow ── */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  /* ── body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── magnetic logo ── */
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      el.style.transform = `translate(${x * 0.14}px, ${y * 0.14}px)`;
    };
    const onLeave = () => { el.style.transform = "translate(0,0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Jost:wght@200;300;400;500&family=Share+Tech+Mono&display=swap');

        :root {
          --gold:        #c5a161;
          --gold-light:  #e8d5a3;
          --gold-pale:   #f0e8d0;
          --dark:        #060606;
          --dark-mid:    #0d0d0d;
          --cream:       #e8dcc8;
        }

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }

        /* ── scanline texture overlay ── */
        .nav-scanline::before {
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

        /* ── mouse spotlight ── */
        .nav-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(
            280px circle at var(--mx, 50%) var(--my, 50%),
            rgba(197,161,97,0.055) 0%,
            transparent 70%
          );
        }
        .nav-wrap:hover .nav-spotlight { opacity: 1; }

        /* ── corner accents ── */
        .corner-accent {
          position: absolute;
          width: 10px; height: 10px;
          border-color: rgba(197,161,97,0.4);
          border-style: solid;
          border-width: 0;
        }
        .corner-tl { top: 8px; left: 8px;  border-top-width: 1px; border-left-width: 1px; }
        .corner-tr { top: 8px; right: 8px; border-top-width: 1px; border-right-width: 1px; }
        .corner-bl { bottom: 8px; left: 8px;  border-bottom-width: 1px; border-left-width: 1px; }
        .corner-br { bottom: 8px; right: 8px; border-bottom-width: 1px; border-right-width: 1px; }

        /* ── gold underline with code number ── */
        .nav-link-gold {
          position: relative;
        }
        .nav-link-gold .link-bar {
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          transition: left 0.35s cubic-bezier(0.4,0,0.2,1), right 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-gold:hover .link-bar,
        .nav-link-gold.active .link-bar {
          left: 8px; right: 8px;
        }
        .nav-link-gold .link-code {
          position: absolute;
          top: 6px; right: 6px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.42rem;
          color: rgba(197,161,97,0);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
          line-height: 1;
        }
        .nav-link-gold:hover .link-code,
        .nav-link-gold.active .link-code {
          color: rgba(197,161,97,0.55);
        }

        /* ── logo line ── */
        .logo-line {
          position: absolute;
          bottom: -4px; left: 0;
          height: 1px; width: 0;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          transition: width 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .logo-wrap:hover .logo-line { width: 100%; }

        /* ── logo bracket accents ── */
        .logo-bracket {
          position: absolute;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: rgba(197,161,97,0.2);
          transition: color 0.35s ease, transform 0.35s ease;
          top: 50%; transform: translateY(-50%);
          line-height: 1;
        }
        .logo-bracket-left  { left: -14px; }
        .logo-bracket-right { right: -14px; }
        .logo-wrap:hover .logo-bracket { color: rgba(197,161,97,0.6); }
        .logo-wrap:hover .logo-bracket-left  { transform: translateY(-50%) translateX(-2px); }
        .logo-wrap:hover .logo-bracket-right { transform: translateY(-50%) translateX(2px); }

        /* ── CTA button ── */
        .cta-btn {
          position: relative;
          overflow: hidden;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: translateX(-100%);
          transition: transform 0.55s ease;
        }
        .cta-btn:hover::before { transform: translateX(200%); }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 60%, var(--gold) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-btn:hover::after { opacity: 0.15; }

        /* ── status dot pulse ── */
        @keyframes pulse-gold {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse-gold 2s ease-in-out infinite;
          display: inline-block;
          margin-right: 5px;
          vertical-align: middle;
        }

        /* ── hamburger ── */
        .ham-line {
          display: block;
          height: 1px;
          background: var(--gold);
          transform-origin: center;
          transition: transform 0.38s ease, opacity 0.3s ease, width 0.3s ease;
        }

        /* ── mobile drawer ── */
        .mobile-link {
          transform: translateX(48px);
          opacity: 0;
          transition: transform 0.55s ease, opacity 0.55s ease, color 0.3s ease, letter-spacing 0.3s ease;
        }
        .drawer-open .mobile-link              { transform: translateX(0); opacity: 1; }
        .drawer-open .mobile-link:nth-child(1) { transition-delay: 0.08s; }
        .drawer-open .mobile-link:nth-child(2) { transition-delay: 0.16s; }
        .drawer-open .mobile-link:nth-child(3) { transition-delay: 0.24s; }
        .drawer-open .mobile-link:nth-child(4) { transition-delay: 0.32s; }

        /* ── drawer grid bg ── */
        .drawer-grid {
          background-image:
            linear-gradient(rgba(197,161,97,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,161,97,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* ── glitch flicker on logo hover ── */
        @keyframes glitch-flicker {
          0%,100% { clip-path: none; transform: none; }
          20% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translateX(-2px); }
          40% { clip-path: none; transform: translateX(1px); }
          60% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translateX(2px); }
          80% { clip-path: none; transform: none; }
        }
        .logo-wrap:hover .logo-glitch { animation: glitch-flicker 0.6s step-end 1; }

        /* ── nav enter animation ── */
        @keyframes nav-slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        .nav-enter { animation: nav-slide-down 0.7s cubic-bezier(0.4,0,0.2,1) forwards; }

        /* ── bottom border glow ── */
        @keyframes border-glow {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.6; }
        }
        .border-glow { animation: border-glow 4s ease-in-out infinite; }
      `}</style>

      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <nav
        ref={navRef}
        className="nav-wrap nav-enter nav-scanline fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 backdrop-blur-2xl transition-all duration-500"
        style={{
          height: scrolled ? "60px" : "74px",
          background: scrolled
            ? "rgba(6,6,6,0.97)"
            : "rgba(10,10,10,0.82)",
          borderBottom: "1px solid transparent",
          borderImage: "linear-gradient(90deg, transparent 0%, rgba(197,161,97,0.3) 30%, rgba(232,213,163,0.5) 50%, rgba(197,161,97,0.3) 70%, transparent 100%) 1",
        }}
      >
        {/* spotlight layer */}
        <div
          className="nav-spotlight"
          style={{ "--mx": `${mousePos.x}px`, "--my": `${mousePos.y}px` }}
        />

        {/* corner accents */}
        <span className="corner-accent corner-tl" />
        <span className="corner-accent corner-tr" />
        <span className="corner-accent corner-bl" />
        <span className="corner-accent corner-br" />

        {/* ── LOGO ── */}
        <div
          ref={logoRef}
          className="logo-wrap relative cursor-pointer pl-5 transition-transform duration-200 ease-out select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ zIndex: 1 }}
        >
          <span className="logo-bracket logo-bracket-left">&lt;</span>
          <span className="logo-bracket logo-bracket-right">/&gt;</span>

          <p className="font-cormorant logo-glitch text-[1.28rem] font-medium text-[#e8dcc8] tracking-[0.1em] leading-none m-0 relative">
            Satya Ranjan Das
          </p>
          <div className="flex items-center gap-2 mt-[5px]">
            <span className="status-dot" />
            <p className="font-mono-tech text-[0.5rem] text-[#c5a161] tracking-[0.3em] uppercase m-0 leading-none">
              Full Stack Developer
            </p>
          </div>
          <span className="logo-line" />
        </div>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden md:flex items-center gap-1" style={{ zIndex: 1 }}>

          {/* live clock */}
          <div className="flex items-center gap-2 mr-4 px-3 py-1 border border-[#c5a161]/12 bg-[#c5a161]/[0.04]">
            <span
              style={{ width: 4, height: 4, borderRadius: "50%", background: "#c5a161", opacity: 0.6, display: "inline-block" }}
            />
            <span className="font-mono-tech text-[0.52rem] text-[#c5a161]/55 tracking-[0.15em]">
              {time}
            </span>
          </div>

          {navLinks.map(({ label, href, code }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(href)}
              className={`nav-link-gold font-jost text-[0.72rem] font-light tracking-[0.24em] uppercase px-4 py-2 no-underline transition-colors duration-300 ${
                activeLink === href
                  ? "text-[#c5a161] active"
                  : "text-[#e8dcc8]/50 hover:text-[#c5a161]"
              }`}
            >
              <span className="link-code">{code}</span>
              {label}
              <span className="link-bar" />
            </a>
          ))}

          {/* divider */}
          <span
            className="block w-px mx-3"
            style={{ height: 22, background: "linear-gradient(180deg, transparent, rgba(197,161,97,0.35), transparent)" }}
          />

          {/* Hire Me */}
          <a href="#contact">
            <button className="cta-btn font-jost text-[0.68rem] tracking-[0.3em] uppercase text-[#0a0a0a] px-6 py-[0.52rem] cursor-pointer border-0 font-medium transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
              style={{ background: "linear-gradient(135deg, #c5a161 0%, #e8d5a3 55%, #c5a161 100%)" }}
            >
              Hire Me
            </button>
          </a>
        </div>

        {/* ── HAMBURGER ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[6px] items-end p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Toggle menu"
          style={{ zIndex: 1 }}
        >
          <span className="ham-line w-[22px]"
            style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span className="ham-line w-[13px]"
            style={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? "22px" : undefined }} />
          <span className="ham-line w-[18px]"
            style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", width: menuOpen ? "22px" : undefined }} />
        </button>
      </nav>

      {/* ═══════════════════ MOBILE DRAWER ═══════════════════ */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col drawer-grid bg-[#080808] transition-transform duration-[580ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? "translate-x-0 drawer-open" : "translate-x-full"
        }`}
      >
        {/* diagonal gold accent line */}
        <div
          style={{
            position: "absolute", top: 0, right: 0,
            width: "60%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(197,161,97,0.4))",
            transform: "translateY(80px)",
            pointerEvents: "none"
          }}
        />

        {/* top bar */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#c5a161]/[0.12]">
          <div className="flex items-center gap-3">
            <span className="status-dot" style={{ animationDelay: "0.5s" }} />
            <span className="font-mono-tech text-[0.55rem] tracking-[0.4em] text-[#c5a161]/70 uppercase">
              Navigation
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="font-mono-tech text-[0.58rem] tracking-[0.18em] uppercase text-[#c5a161] bg-transparent border border-[#c5a161]/25 px-4 py-[6px] cursor-pointer hover:border-[#c5a161]/70 hover:bg-[#c5a161]/5 transition-all duration-300"
          >
            [ Close ]
          </button>
        </div>

        {/* links */}
        <nav className="flex-1 px-10 pt-12 flex flex-col">
          {navLinks.map(({ label, href, code }) => (
            <a
              key={label}
              href={href}
              className="mobile-link group font-cormorant text-[2.6rem] font-light text-[#e8dcc8]/18 hover:text-[#c5a161] py-3 border-b border-[#c5a161]/[0.07] no-underline flex items-baseline gap-4 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-mono-tech text-[0.52rem] text-[#c5a161]/30 group-hover:text-[#c5a161]/70 transition-colors duration-300 mb-1">
                {code}
              </span>
              {label}
            </a>
          ))}
        </nav>

        {/* bottom */}
        <div className="px-10 py-8 border-t border-[#c5a161]/[0.08]">
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button
              className="cta-btn w-full font-jost text-[0.7rem] tracking-[0.3em] uppercase text-[#0a0a0a] py-4 cursor-pointer border-0 font-medium"
              style={{ background: "linear-gradient(135deg, #c5a161 0%, #e8d5a3 55%, #c5a161 100%)", clipPath: "none" }}
            >
              Hire Me
            </button>
          </a>
          <div className="flex items-center justify-between mt-6">
            <span className="font-mono-tech text-[0.5rem] tracking-[0.2em] text-[#e8dcc8]/18 uppercase">
              © 2025 Satya Ranjan Das
            </span>
            <span className="font-mono-tech text-[0.5rem] text-[#c5a161]/35 tracking-[0.15em]">
              {time}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}