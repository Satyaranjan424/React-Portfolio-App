"use client";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { label: "About",      href: "#Scene3D"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [menuOpen,   setMenuOpen]  = useState(false);
  const [activeLink, setActive]    = useState("");
  const logoRef = useRef(null);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── magnetic logo effect ── */
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    };
    const onLeave = () => { el.style.transform = "translate(0, 0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/*
        NOTE: A few micro-animations (underline slide, shimmer, mobile stagger)
        require a tiny <style> block because Tailwind cannot express
        ::after pseudo-elements or nth-child delays via utility classes alone.
        Everything structural / layout / color is pure Tailwind.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }

        /* gold underline slide-in */
        .nav-link-gold::after {
          content: '';
          position: absolute;
          bottom: 0; left: 1rem; right: 1rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c5a161, transparent);
          transform: scaleX(0);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-gold:hover::after,
        .nav-link-gold.active::after { transform: scaleX(1); }

        /* logo line reveal */
        .logo-line {
          position: absolute;
          bottom: -3px; left: 0;
          height: 1px; width: 0;
          background: linear-gradient(90deg, #c5a161, #e8d5a3);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-wrap:hover .logo-line { width: 100%; }

        /* CTA button shimmer */
        .cta-shimmer { position: relative; overflow: hidden; }
        .cta-shimmer::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        .cta-shimmer:hover::before { left: 160%; }

        /* mobile link stagger entrance */
        .mobile-link {
          transform: translateX(40px);
          opacity: 0;
          transition: transform 0.5s ease, opacity 0.5s ease,
                      color 0.3s ease, letter-spacing 0.3s ease;
        }
        .drawer-open .mobile-link                { transform: translateX(0); opacity: 1; }
        .drawer-open .mobile-link:nth-child(1)   { transition-delay: 0.10s; }
        .drawer-open .mobile-link:nth-child(2)   { transition-delay: 0.18s; }
        .drawer-open .mobile-link:nth-child(3)   { transition-delay: 0.26s; }
        .drawer-open .mobile-link:nth-child(4)   { transition-delay: 0.34s; }

        /* hamburger lines */
        .ham-line {
          display: block;
          height: 1px;
          background: #c5a161;
          transform-origin: center;
          transition: transform 0.35s ease, opacity 0.3s ease, width 0.3s ease;
        }
      `}</style>

      {/* ═══════════════════════════════════════════ NAVBAR ══════════════════════════════════════════ */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 md:px-12
          backdrop-blur-xl
          transition-all duration-500
          ${scrolled
            ? "h-[62px] bg-[#060606]/95 border-b border-[#c5a161]/20"
            : "h-[76px] bg-[#0a0a0a]/75 border-b border-[#c5a161]/10"
          }
        `}
      >
        {/* Logo */}
        <div
          ref={logoRef}
          className="logo-wrap relative cursor-pointer transition-transform duration-200 ease-out"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <p className="font-cormorant text-[1.3rem] font-medium text-[#e8dcc8] tracking-[0.1em] leading-none m-0">
            Satya Ranjan Das
          </p>
          <p className="font-jost text-[0.56rem] font-light text-[#c5a161] tracking-[0.38em] uppercase mt-1 m-0">
            Full Stack Developer
          </p>
          <span className="logo-line" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(href)}
              className={`
                nav-link-gold relative
                font-jost text-[0.75rem] font-normal tracking-[0.22em] uppercase
                px-4 py-2 no-underline transition-colors duration-300
                ${activeLink === href
                  ? "text-[#c5a161] active"
                  : "text-[#e8dcc8]/55 hover:text-[#c5a161]"
                }
              `}
            >
              {label}
            </a>
          ))}

          {/* vertical divider */}
          <span className="block w-px h-[18px] bg-[#c5a161]/20 mx-2" />

          <a href="#contact">
            <button className="cta-shimmer font-jost text-[0.7rem] tracking-[0.28em] uppercase text-[#0a0a0a] bg-gradient-to-br from-[#c5a161] to-[#e8d5a3] px-6 py-[0.55rem] cursor-pointer transition-transform duration-200 hover:-translate-y-px active:translate-y-0 border-0">
              Hire Me
            </button>
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[6px] items-end p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className="ham-line w-[22px]"
            style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className="ham-line w-[14px]"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="ham-line w-[18px]"
            style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </nav>

      {/* ══════════════════════════════════════ MOBILE DRAWER ════════════════════════════════════════ */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 flex flex-col bg-[#080808]
          transition-transform duration-[550ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${menuOpen ? "translate-x-0 drawer-open" : "translate-x-full"}
        `}
      >
        {/* top bar */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#c5a161]/10">
          <span className="font-jost text-[0.6rem] tracking-[0.4em] text-[#c5a161] uppercase">
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="font-jost text-[0.65rem] tracking-[0.2em] uppercase text-[#c5a161] bg-transparent border border-[#c5a161]/25 px-3 py-1 cursor-pointer hover:border-[#c5a161]/60 transition-colors duration-300"
          >
            Close
          </button>
        </div>

        {/* nav links */}
        <nav className="flex-1 px-10 pt-12 flex flex-col">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="mobile-link font-cormorant text-[2.5rem] font-light text-[#e8dcc8]/20 hover:text-[#c5a161] hover:tracking-[0.08em] py-3 border-b border-[#c5a161]/[0.08] no-underline block"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* bottom */}
        <div className="px-10 py-8 border-t border-[#c5a161]/[0.08]">
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="cta-shimmer w-full font-jost text-[0.7rem] tracking-[0.28em] uppercase text-[#0a0a0a] bg-gradient-to-br from-[#c5a161] to-[#e8d5a3] py-4 cursor-pointer transition-transform duration-200 hover:-translate-y-px border-0">
              Hire Me
            </button>
          </a>
          <p className="font-jost text-[0.6rem] tracking-[0.25em] text-[#e8dcc8]/20 text-center mt-6 uppercase">
            © 2025 Satya Ranjan Das
          </p>
        </div>
      </div>
    </>
  );
}