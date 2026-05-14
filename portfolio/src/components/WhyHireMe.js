"use client";
import { motion } from "framer-motion";

export default function WhyHireMe() {
  const points = [
    {
      title: "Problem Solver",
      desc: "I dig into the root of every challenge before writing a single line of code — turning complex requirements into clean, scalable architecture.",
    },
    {
      title: "Clean & Scalable Code",
      desc: "Every component I write is structured for the long run — readable, modular, and built to scale without becoming technical debt.",
    },
    {
      title: "Fast Learner",
      desc: "I've picked up new frameworks, tools, and paradigms on the fly throughout my career — and I treat every new stack as an opportunity, not an obstacle.",
    },
    {
      title: "Performance Focused",
      desc: "From lazy loading to optimized queries, I think about speed and efficiency at every layer — frontend, backend, and everything in between.",
    },
    {
      title: "Team Collaboration",
      desc: "I thrive in cross-functional teams. Clear communication, timely updates, and a no-blame culture are things I actively bring to every project.",
    },
    {
      title: "Ownership Mindset",
      desc: "I treat every feature like it's my product. From planning to deployment, I take full accountability for quality, deadlines, and outcomes.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 👑 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Why Hire Me?
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-2xl mx-auto font-jost text-sm tracking-wide leading-relaxed">
          I don't just ship features — I take ownership of outcomes. As a Full
          Stack Developer, I bring end-to-end thinking, a bias for clean
          execution, and the drive to make every product better than I found it.
        </p>
      </div>

      {/* 🧠 Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20 relative z-10">

        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:scale-[1.02] hover:border-[#c5a161]/40 transition-all duration-300"
          >
            <h3 className="text-[#c5a161] font-cormorant text-xl mb-3">
              {item.title}
            </h3>
            <p className="text-[#e8dcc8]/60 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* 🚀 Bottom Statement */}
      <div className="mt-20 text-center max-w-2xl mx-auto px-6 relative z-10">
        <p className="text-[#e8dcc8]/60 font-jost text-sm tracking-wide">
          Not just another developer on the team — someone who cares about
          the product, the people, and the craft behind every line of code.
        </p>
      </div>

    </section>
  );
}