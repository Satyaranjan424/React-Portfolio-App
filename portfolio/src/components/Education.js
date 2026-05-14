"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Siksha 'O' Anusandhan University",
    duration: "2020 – 2024",
    score: "CGPA: 7.5 / 10",
    desc: "Specialized in software engineering, algorithms, networking, and full-stack development. Built a strong foundation in both theoretical CS and practical application development.",
    icon: "🎓",
  },
  {
    degree: "Class 12th — Science (PCM)",
    institution: "Jupiter Science Higher Secondary School, Bhubaneswar",
    duration: "2018 – 2020",
    score: "80.33%",
    desc: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, laying the analytical groundwork for engineering.",
    icon: "📘",
  },
  {
    degree: "Class 10th — Secondary Education",
    institution: "Sri Aurobindo Purnanga Siksha Kendra, Jagatsinghpur",
    duration: "2010 – 2018",
    score: "80%",
    desc: "Completed foundational schooling with strong academic performance across core subjects.",
    icon: "📗",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 🧠 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Education
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          The academic foundation behind the code — from school to engineering,
          every step shaped how I think and build.
        </p>
      </div>

      {/* 🏛️ Education Cards */}
      <div className="relative max-w-5xl mx-auto px-6 z-10">

        {/* Vertical connector line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-[#c5a161]/15 -translate-x-1/2" />

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative mb-12 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Golden dot on timeline */}
            <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-[#c5a161] shadow-[0_0_14px_#c5a161] z-10" />

            <div className="w-full md:w-[46%]">
              <div className="group p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:bg-[#c5a161]/10 hover:border-[#c5a161]/45 hover:shadow-[0_20px_55px_rgba(197,161,97,0.14)] transition-all duration-300">

                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-[#c5a161] font-cormorant text-xl leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-[#e8dcc8]/80 text-sm mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-2xl mt-1 flex-shrink-0">{edu.icon}</span>
                </div>

                {/* Duration + Score badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-md border border-[#c5a161]/30 text-[#c5a161] bg-[#c5a161]/5 font-jost tracking-wide">
                    {edu.duration}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-md border border-[#e8dcc8]/20 text-[#e8dcc8]/70 bg-white/5 font-jost tracking-wide">
                    {edu.score}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#e8dcc8]/50 text-sm leading-relaxed">
                  {edu.desc}
                </p>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
