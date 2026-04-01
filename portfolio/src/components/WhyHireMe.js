"use client";
import { motion } from "framer-motion";

export default function WhyHireMe() {
  const points = [
    {
      title: "Problem Solver",
      desc: "I focus on solving real-world problems, not just writing code. I break down complex challenges into scalable solutions.",
    },
    {
      title: "Clean & Scalable Code",
      desc: "I write maintainable, well-structured code that follows best practices and is easy to scale.",
    },
    {
      title: "Fast Learner",
      desc: "I quickly adapt to new technologies and tools, ensuring I stay relevant in fast-changing environments.",
    },
    {
      title: "Performance Focused",
      desc: "I build optimized applications with performance, responsiveness, and user experience in mind.",
    },
    {
      title: "Team Collaboration",
      desc: "I communicate effectively and work well in teams, ensuring smooth collaboration and project success.",
    },
    {
      title: "Ownership Mindset",
      desc: "I take responsibility for my work and ensure high-quality delivery from start to finish.",
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
          I don’t just build applications — I deliver scalable solutions that
          create real impact. With a strong foundation and a growth mindset,
          I bring both technical expertise and business value.
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
            className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:border-[#c5a161]/40 transition-all duration-300"
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
          Ready to contribute, learn, and grow while delivering impactful
          solutions from day one.
        </p>
      </div>

    </section>
  );
}