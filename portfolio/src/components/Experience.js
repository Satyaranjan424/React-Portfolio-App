"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Appman Technologies Pvt. Ltd.",
    duration: "05/2025 – Present",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Developed enterprise-level web applications using React with responsive UI components (HTML5, CSS3, JavaScript), ensuring cross-browser compatibility and smooth UX.",
      "Built and integrated RESTful APIs using .NET and Node.js with SQL & PostgreSQL, improving application performance by 30%.",
      "Worked in Agile environment using Git, Docker, and Postman, ensuring code quality through peer reviews and documentation.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Appman Technologies Pvt. Ltd.",
    duration: "12/2024 – 05/2025",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Built responsive web interfaces using React, HTML5, CSS3, and JavaScript.",
      "Assisted in developing RESTful APIs and integrating frontend with backend services.",
      "Used Git for version control and Postman for API testing.",
    ],
  },
  {
    role: "ServiceNow Trainee",
    company: "ServiceNow Technical Training Program",
    duration: "06/2024 – 12/2024",
    location: "Bhubaneswar, Odisha, India",
    points: [
      "Completed ServiceNow Administration Fundamentals including instance configuration and user management.",
      "Worked on Application Development Fundamentals (forms, workflows, scripting).",
      "Learned App Engine Studio, Mobile Development, and platform best practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 🧠 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Experience
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm">
          My journey in building scalable applications and modern web
          experiences.
        </p>
      </div>

      {/* 🧵 Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#c5a161]/30 transform -translate-x-1/2" />

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
                      <span className="w-2 h-2 mt-2 bg-[#c5a161] rounded-full shadow-[0_0_10px_#c5a161]" />
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