"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Property Management System",
      desc: "A full-stack platform to manage properties, tenants, and lease cycles — featuring role-based access, automated payment tracking, and a responsive dashboard built for property owners and managers.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/Satyaranjan424",
      live: "#",
    },
    {
      title: "Restaurant Management System",
      desc: "An end-to-end restaurant operations platform handling live order management, dynamic menu configuration, and table tracking — designed for speed, reliability, and a smooth staff experience.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Satyaranjan424",
      live: "#",
    },
    {
      title: "Job Board Application",
      desc: "A full-featured job portal with advanced filtering, role-based profiles for recruiters and applicants, and a clean UI backed by efficient REST API integration for real-time job listings.",
      tech: ["React", "Redux", "REST API"],
      github: "https://github.com/Satyaranjan424",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#050505] overflow-hidden"
    >

      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 👑 Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Projects
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          Real-world applications built from the ground up — each one a
          reflection of full-stack thinking, clean architecture, and
          attention to what actually matters to users.
        </p>
      </div>

      {/* 🚀 Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group p-6 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-3 hover:border-[#c5a161]/40 transition-all duration-300"
          >

            {/* Title */}
            <h3 className="text-[#c5a161] font-cormorant text-xl mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#e8dcc8]/60 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-[#c5a161]/30 rounded-md text-[#e8dcc8] bg-[#0a0a0a]/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#c5a161] border border-[#c5a161]/30 px-4 py-2 rounded-lg hover:bg-[#c5a161]/10 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest px-4 py-2 rounded-lg bg-gradient-to-r from-[#c5a161] to-[#e8d5a3] text-black hover:scale-105 transition"
              >
                Live Demo
              </a>
            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔻 Bottom CTA */}
      <div className="mt-20 text-center relative z-10">
        <a
          href="https://github.com/Satyaranjan424"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 text-xs tracking-[0.3em] uppercase text-[#c5a161] border border-[#c5a161]/30 rounded-xl hover:bg-[#c5a161]/10 transition"
        >
          View More on GitHub
        </a>
      </div>

    </section>
  );
}