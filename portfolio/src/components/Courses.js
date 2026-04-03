"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const semesters = [
  {
    sem: "Sem 1",
    drive: "https://drive.google.com/drive/folders/1ABQ8RlWXXkHHqTb8M1q2c7VvVMS4oEHT?usp=drive_link",
    courses: [
      "Introduction to Computer Programming",
      "Critical Thinking & Communication",
      "Discrete Mathematics",
      "University Physics — Electricity & Magnetism",
      "Calculus I",
    ],
  },
  {
    sem: "Sem 2",
    drive: "https://drive.google.com/drive/folders/1GgxE55Wa7P8LeFOyJyG2oB5kf-4bD3KV?usp=drive_link",
    courses: [
      "Data Structures & Algorithms",
      "Introduction to Graph Theory",
      "Principles of Micro Economics",
      "University Physics — Electricity & Magnetism",
      "Calculus II",
    ],
  },
  {
    sem: "Sem 3",
    drive: "https://drive.google.com/drive/folders/1WsCN6QVqg_JeRKFt48wR2joO--S14W9Q?usp=drive_link",
    courses: [
      "Algorithm Design I",
      "Computer Science Workshop",
      "Digital Logic & Design",
      "Principles of Macroeconomics",
      "Probability & Statistics",
    ],
  },
  {
    sem: "Sem 4",
    drive: "https://drive.google.com/drive/folders/1GFMTproYhMAlONQOhtBAhCaFsrZ76_o5?usp=drive_link",
    courses: [
      "Algorithm Design II",
      "Applied Linear Algebra",
      "Computer Organization & Architecture",
      "Computer Science Workshop",
      "Universal Human Values",
    ],
  },
  {
    sem: "Sem 5",
    drive: "https://drive.google.com/drive/folders/1OiEHcuj15qbO-pN2g17a3-XcLtDBXiU-?usp=drive_link",
    courses: [
      "Advanced Discrete Mathematics",
      "Computer Networking",
      "Design of Operating Systems",
      "Operating System Workshops",
      "Programming in Python",
      "Theory of Computation",
    ],
  },
  {
    sem: "Sem 6",
    drive: "https://kaal-coder.github.io/6thSemester/",
    courses: [
      "Introduction to Database",
      "Computer Networking Workshop",
      "Cryptography & Network Security",
      "Introduction to Data Science Using Python",
      "Programming Languages & Compilers",
    ],
  },
  {
    sem: "Sem 7",
    drive: "#",
    courses: [
      "Coming Soon",
    ],
  },
  {
    sem: "Sem 8",
    drive: "#",
    courses: [
      "Coming Soon",
    ],
  },
];

export default function Courses() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="courses"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 right-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 left-0" />

      {/* 🧠 Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          B.Tech Curriculum
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          8 semesters of Computer Science & Engineering — every subject that
          shaped my problem-solving, design thinking, and technical depth.
        </p>
      </div>

      {/* 🗂️ Semester Tab Switcher */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {semesters.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-xs tracking-widest uppercase font-jost rounded-lg border transition-all duration-300 ${
                active === i
                  ? "bg-[#c5a161] text-black border-[#c5a161] shadow-[0_0_14px_#c5a16180]"
                  : "text-[#e8dcc8]/60 border-[#c5a161]/20 bg-white/5 hover:border-[#c5a161]/50 hover:text-[#e8dcc8]"
              }`}
            >
              {s.sem}
            </button>
          ))}
        </div>

        {/* Course content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-[#c5a161] font-cormorant text-2xl">
                  {semesters[active].sem} — Subjects
                </h3>
                <p className="text-[#e8dcc8]/40 text-xs font-jost mt-1 tracking-wide uppercase">
                  {semesters[active].courses.length} courses
                </p>
              </div>

              {semesters[active].drive !== "#" && (
                <a
                  href={semesters[active].drive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-black px-5 py-2 rounded-lg bg-gradient-to-r from-[#c5a161] to-[#e8d5a3] hover:scale-105 transition-all duration-300 font-jost"
                >
                  Study Materials ↗
                </a>
              )}
            </div>

            {/* Course list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {semesters[active].courses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/60 border border-[#c5a161]/10 hover:border-[#c5a161]/30 hover:bg-[#c5a161]/5 transition-all duration-300"
                >
                  <span className="w-2 h-2 mt-[6px] rounded-full bg-[#c5a161] shadow-[0_0_8px_#c5a161] flex-shrink-0" />
                  <span className="text-[#e8dcc8]/70 text-sm leading-snug">
                    {course}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Semester progress indicator */}
        <div className="flex gap-1.5 justify-center mt-8">
          {semesters.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-[#c5a161]" : "w-3 bg-[#c5a161]/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}