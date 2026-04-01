"use client";
import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 👑 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          GitHub Insights
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          A snapshot of my coding activity, contributions, and consistency
          across projects and technologies.
        </p>
      </div>

      {/* 🚀 Stats Grid */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 relative z-10">

        {/* 📊 Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl"
        >
          <img
            className="rounded-xl w-full"
            src="https://github-readme-stats-sigma-five.vercel.app/api?username=Satyaranjan424&show_icons=true&theme=tokyonight"
            alt="GitHub stats"
          />
        </motion.div>

        {/* 🔥 Streak */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl"
        >
          <img
            className="rounded-xl w-full"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Satyaranjan424&theme=tokyonight"
            alt="GitHub streak"
          />
        </motion.div>

      </div>

      {/* 💡 Languages + Contribution */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 mt-10 relative z-10">

        {/* 🧠 Top Languages */}
        <div className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl">
          <img
            className="rounded-xl w-full"
            src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Satyaranjan424&layout=compact&theme=tokyonight"
            alt="Top languages"
          />
        </div>

        {/* 🟩 Contribution Graph */}
        <div className="p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
          <img
            className="rounded-xl w-full"
            src="https://github-readme-activity-graph.vercel.app/graph?username=Satyaranjan424&theme=tokyo-night"
            alt="Contribution graph"
          />
        </div>

      </div>

      {/* 🔻 Bottom Statement */}
      <div className="mt-20 text-center max-w-2xl mx-auto px-6 relative z-10">
        <p className="text-[#e8dcc8]/60 font-jost text-sm tracking-wide">
          Consistent contributions, continuous learning, and a passion for
          building impactful software solutions.
        </p>
      </div>

    </section>
  );
}