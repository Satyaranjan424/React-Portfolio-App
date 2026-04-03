import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ButterflyEffect({ active }) {
  const butterflyRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const el = butterflyRef.current;

    let pos = { x: 50, y: window.innerHeight - 100 };
    let target = { x: window.innerWidth - 150, y: 100 };
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // 🦋 ENTRY POSITION
    gsap.set(el, { x: pos.x, y: pos.y, opacity: 1 });

    // 🖱️ TRACK MOUSE
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 🎯 SECTION INTERACTION
    const sections = [
      { id: "hero", weight: 0.1 },
      { id: "projects", weight: 0.2 },
      { id: "contact", weight: 0.05 },
      { id: "education", weight: 0.02},
      { id: "experience", weight: 0.1},
    ];

    const handleScroll = () => {
      sections.forEach((sec) => {
        const secEl = document.getElementById(sec.id);
        if (!secEl) return;

        const rect = secEl.getBoundingClientRect();

        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          target.x = rect.left + rect.width / 2;
          target.y = rect.top + rect.height / 2;

          gsap.to(el, {
            filter: `drop-shadow(0 0 ${20 + sec.weight * 50}px gold)`,
            duration: 0.4,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // ✨ PARTICLE TRAIL
    const createParticle = (x, y) => {
    const particle = document.createElement("div");
    particle.className = "butterfly-particle";

    // 🔥 CRITICAL: use transform instead of x/y
    particle.style.left = "0px";
    particle.style.top = "0px";

    document.body.appendChild(particle);

    gsap.set(particle, {
        x: x,
        y: y,
        scale: 1,
        opacity: 1,
    });

    gsap.to(particle, {
        y: y - 40,
        x: x + (Math.random() - 0.5) * 50,
        opacity: 0,
        scale: 0.2,
        duration: 1,
        ease: "power2.out",
        onComplete: () => particle.remove(),
    });
    };

    // 🦋 SMOOTH MOTION LOOP
    const lerp = (start, end, t) => start + (end - start) * t;

    const tickerFn = () => {
        const cursorInfluence = 0.08;

        const mixX = target.x + (mouse.x - target.x) * cursorInfluence;
        const mixY = target.y + (mouse.y - target.y) * cursorInfluence;

        pos.x = lerp(pos.x, mixX, 0.05);
        pos.y = lerp(pos.y, mixY, 0.05);

        gsap.set(el, { x: pos.x, y: pos.y });

        // 🔥 ALWAYS CREATE TRAIL (no randomness now)
        createParticle(pos.x + 60, pos.y + 60);
        };

    gsap.ticker.add(tickerFn);

    // 🖱️ HOVER EFFECT
    const hoverItems = document.querySelectorAll("button, a, .card");

    const onEnter = () => gsap.to(el, { scale: 1.25, duration: 0.3 });
    const onLeave = () => gsap.to(el, { scale: 1, duration: 0.3 });

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
    });

    // 🧹 CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      gsap.ticker.remove(tickerFn);

      hoverItems.forEach((item) => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [active]);

  if (!active) return null;

  return (
    <div ref={butterflyRef} className="butterfly-live">
      <img src="/butterfly.png" alt="butterfly" />
    </div>
  );
}