"use client";
import { motion } from "framer-motion";

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
          Let’s collaborate and build something impactful. I’m open to
          opportunities, freelance projects, and meaningful conversations.
        </p>
      </div>

      {/* 🚀 Contact Options */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20 relative z-10">

        {/* 📧 Email */}
        <motion.a
          href="mailto:dassatyaranjan424@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl text-center hover:border-[#c5a161]/40 transition"
        >
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            Email
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            dassatyaranjan424@gmail.com
          </p>
        </motion.a>

        {/* 💼 LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/das-satyaranjan"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl text-center hover:border-[#c5a161]/40 transition"
        >
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            LinkedIn
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            Connect professionally
          </p>
        </motion.a>

        {/* 💻 GitHub */}
        <motion.a
          href="https://github.com/Satyaranjan424"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl text-center hover:border-[#c5a161]/40 transition"
        >
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            GitHub
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            Explore my code
          </p>
        </motion.a>

      </div>

      {/* 📬 Contact Form (OPTIONAL BUT POWERFUL) */}
      <div className="mt-20 max-w-2xl mx-auto px-6 relative z-10">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-white outline-none focus:border-[#c5a161]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-white outline-none focus:border-[#c5a161]"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/20 text-white outline-none focus:border-[#c5a161]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c5a161] to-[#e8d5a3] text-black font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* 🔻 Bottom Note */}
      <div className="mt-16 text-center relative z-10">
        <p className="text-[#e8dcc8]/50 text-sm">
          Available for full-time roles, internships, and freelance work.
        </p>
      </div>

    </section>
  );
}