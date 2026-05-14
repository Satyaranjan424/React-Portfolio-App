"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function FloatingOrbs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

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

      for (let i = 0; i < orbs.length; i += 1) {
        for (let j = i + 1; j < orbs.length; j += 1) {
          const dist = Math.hypot(orbs[i].x - orbs[j].x, orbs[i].y - orbs[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(orbs[i].x, orbs[i].y);
            ctx.lineTo(orbs[j].x, orbs[j].y);
            ctx.strokeStyle = `rgba(103, 232, 249, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      orbs.forEach((orb) => {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r * 3);
        grad.addColorStop(0, `rgba(240, 212, 136, ${orb.alpha})`);
        grad.addColorStop(1, "rgba(217, 70, 239, 0)");
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        orb.x += orb.dx;
        orb.y += orb.dy;
        if (orb.x < 0 || orb.x > canvas.width) orb.dx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.dy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none" />;
}

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

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim();
  const canUseEmailJs = [serviceId, templateId, publicKey].every(
    (value) => value && !value.startsWith("your_")
  );

  useEffect(() => {
    if (!status.message) return undefined;

    const timer = setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 4000);

    return () => clearTimeout(timer);
  }, [status.message]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const openMailClient = () => {
    const mailSubject = encodeURIComponent(
      formData.subject || `Portfolio inquiry from ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Satya,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    window.location.href = `mailto:dassatyaranjan424@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please add your name, email, and message before sending.",
      });
      return;
    }

    setIsSending(true);

    try {
      if (canUseEmailJs) {
        emailjs.init(publicKey);
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject || "Portfolio inquiry",
            message: formData.message,
            to_email: "dassatyaranjan424@gmail.com",
          },
          publicKey
        );

        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
        setFormData(initialForm);
      } else {
        openMailClient();
        setStatus({
          type: "success",
          message: "Your mail app is ready with the message. Hit send there to contact me.",
        });
      }
    } catch (error) {
      const emailError =
        error?.text ||
        error?.message ||
        "EmailJS rejected the request. Check your service, template, and public key.";
      setStatus({
        type: "error",
        message: `EmailJS error: ${emailError}. Your mail app will open as a backup.`,
      });
      openMailClient();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-luxe-section relative overflow-hidden bg-[#050505] py-24">
      <div className="absolute left-0 top-0 h-[400px] w-[400px] bg-indigo-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/20 blur-[120px]" />
      <div className="absolute inset-x-0 top-12 h-32 bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-amber-300/10 blur-3xl" />

      <div className="relative z-10 mb-16 text-center">
        <h2 className="mb-4 font-cormorant text-4xl text-[#e8dcc8] md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-xl font-jost text-sm tracking-wide text-[#e8dcc8]/60">
          Whether it's a full-time role, a freelance project, or just a good
          conversation about tech — my inbox is always open.
        </p>
      </div>

      <div className="relative z-10 grid gap-8 px-6 md:grid-cols-3 md:px-20">
        {contactCards.map((card, index) => (
          <motion.a
            key={card.title}
            href={card.href}
            target={card.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="luxe-card group rounded-2xl p-6 text-center transition"
          >
            <h3 className="mb-2 font-cormorant text-xl text-[#c5a161]">
              {card.title}
            </h3>
            <p className="mb-1 break-all text-sm text-[#e8dcc8]/80">{card.value}</p>
            <p className="font-jost text-xs tracking-wide text-[#e8dcc8]/40">{card.sub}</p>
          </motion.a>
        ))}
      </div>

      <div className="relative mx-auto mt-20 max-w-2xl px-6">
        <div className="relative mb-4 h-24 overflow-hidden rounded-xl border border-cyan-300/10 bg-white/[0.03]">
          <FloatingOrbs />
          <p className="relative z-10 pt-9 text-center font-jost text-xs uppercase tracking-[0.3em] text-[#e8dcc8]/40">
            Send a direct message
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="luxe-card relative z-10 rounded-2xl p-8"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-jost text-xs uppercase tracking-widest text-[#e8dcc8]/50">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Satyaranjan Das"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full rounded-lg border border-[#c5a161]/20 bg-[#0a0a0a]/60 p-3 text-sm text-[#e8dcc8] outline-none transition placeholder:text-[#e8dcc8]/20 focus:border-cyan-300/70"
                />
              </div>
              <div>
                <label className="mb-2 block font-jost text-xs uppercase tracking-widest text-[#e8dcc8]/50">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-[#c5a161]/20 bg-[#0a0a0a]/60 p-3 text-sm text-[#e8dcc8] outline-none transition placeholder:text-[#e8dcc8]/20 focus:border-cyan-300/70"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-jost text-xs uppercase tracking-widest text-[#e8dcc8]/50">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Job opportunity / Project / Just saying hi"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#c5a161]/20 bg-[#0a0a0a]/60 p-3 text-sm text-[#e8dcc8] outline-none transition placeholder:text-[#e8dcc8]/20 focus:border-cyan-300/70"
              />
            </div>

            <div>
              <label className="mb-2 block font-jost text-xs uppercase tracking-widest text-[#e8dcc8]/50">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project, role, or idea..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-lg border border-[#c5a161]/20 bg-[#0a0a0a]/60 p-3 text-sm text-[#e8dcc8] outline-none transition placeholder:text-[#e8dcc8]/20 focus:border-cyan-300/70"
              />
            </div>

            {status.message && (
              <p
                className={`rounded-lg border px-4 py-3 font-jost text-sm ${
                  status.type === "success"
                    ? "border-emerald-300/25 bg-emerald-400/10 text-emerald-100"
                    : "border-rose-300/25 bg-rose-400/10 text-rose-100"
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-xl bg-gradient-to-r from-[#c5a161] via-[#f0d488] to-[#67e8f9] py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 px-6 text-center">
        <p className="font-jost text-sm text-[#e8dcc8]/40">
          Currently open to full-time roles and freelance projects.
          <span className="mx-2 text-[#c5a161]">·</span>
          Response time: within 24 hours.
        </p>
      </div>
    </section>
  );
}
