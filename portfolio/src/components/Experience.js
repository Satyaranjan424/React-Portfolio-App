"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Appman Technologies Pvt. Ltd.",
    duration: "05/2025 – Present",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Designed and delivered enterprise-grade web applications using React, HTML5, CSS3, and JavaScript — ensuring cross-browser compatibility, responsive layouts, and smooth user experiences.",
      "Built and integrated RESTful APIs with .NET and Node.js backed by SQL and PostgreSQL, contributing to a 30% improvement in application performance.",
      "Operated in a full Agile workflow using Git, Docker, Azure DevOps, and Postman — maintaining code quality through peer reviews, documentation, and continuous delivery practices.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Appman Technologies Pvt. Ltd.",
    duration: "12/2024 – 05/2025",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Built responsive, accessible web interfaces using React, HTML5, CSS3, and JavaScript — translating designs into production-ready components.",
      "Assisted in developing and consuming RESTful APIs, bridging frontend and backend services with clean integration logic.",
      "Managed version control with Git and validated API contracts using Postman across multiple development sprints.",
    ],
  },
  {
    role: "ServiceNow Trainee",
    company: "ServiceNow Technical Training Program",
    duration: "06/2024 – 12/2024",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Completed ServiceNow Administration Fundamentals — covering instance configuration, user roles, access controls, and workflow automation.",
      "Built application forms, business rules, and scripted workflows through the Application Development Fundamentals module.",
      "Gained hands-on experience with App Engine Studio and Mobile Development, following ServiceNow platform best practices throughout.",
    ],
  },
];

const stats = [
  { value: "1+", label: "Year of Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2", label: "Roles at Appman" },
  { value: "Full Stack", label: "Specialisation" },
];

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 🧠 Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Experience
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm">
          A focused journey in building scalable web applications — from intern
          to engineer, one deployment at a time.
        </p>
      </div>

      {/* 📊 Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6 mb-16 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-4 rounded-xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl"
          >
            <p className="font-cormorant text-3xl text-[#c5a161] mb-1">
              {stat.value}
            </p>
            <p className="text-[#e8dcc8]/50 text-xs tracking-wide font-jost uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🧵 Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">

        {/* Static vertical line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#c5a161]/20 transform -translate-x-1/2" />

        {/* Scroll-driven golden indicator */}
        <motion.div
          className="absolute left-1/2 top-0 w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-[#c5a161] to-[#e8d5a3] rounded-full"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />

        {/* Glowing dot that travels down */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c5a161] shadow-[0_0_12px_#c5a161] z-20"
          style={{ top: indicatorY }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-[45%]">
              <div className="p-6 border border-[#c5a161]/20 rounded-xl bg-white/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-lg">

                {/* Role */}
                <h3 className="text-[#c5a161] font-cormorant text-xl mb-1">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="text-[#e8dcc8] text-sm mb-1">
                  {exp.company}
                </p>

                {/* Duration */}
                <p className="text-[#e8dcc8]/50 text-xs">
                  {exp.duration}
                </p>

                {/* Location */}
                <p className="text-[#e8dcc8]/40 text-xs mb-3">
                  {exp.location}
                </p>

                {/* Points */}
                <ul className="text-[#e8dcc8]/60 text-sm space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 bg-[#c5a161] rounded-full shadow-[0_0_10px_#c5a161] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}