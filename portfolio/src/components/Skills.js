"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "GitHub", "VS Code"],
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
          Skills & Technologies
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          A comprehensive toolkit enabling me to build scalable, efficient,
          and visually engaging applications.
        </p>
      </div>

      {/* 🧠 Skill Categories */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20 relative z-10">

        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-8 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Category Title */}
            <h3 className="text-[#c5a161] font-cormorant text-2xl mb-6">
              {group.title}
            </h3>

            {/* Skills List */}
            <div className="flex flex-wrap gap-3 justify-center">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-xs tracking-wide uppercase text-[#e8dcc8] border border-[#c5a161]/30 rounded-lg bg-[#0a0a0a]/60 hover:bg-[#c5a161]/10 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

      {/* 🚀 Bottom Highlight Section */}
      <div className="mt-20 text-center max-w-2xl mx-auto relative z-10 px-6">
        <p className="text-[#e8dcc8]/60 font-jost text-sm tracking-wide">
          Continuously learning and adapting to new technologies to stay ahead
          in the ever-evolving world of software development.
        </p>
      </div>

    </section>
  );
}