"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Face Of Woha _ Women Empowerment",
      image: "/Images/WohaImg.png",
      desc: "A women empowerment platform built for an international client, celebrating stories and voices of women globally. Designed with elegant UI, visually rich layout with smooth interactions, and responsive design — a proud milestone from my time at Appman that defines my frontend growth.",
      tech: ["HTML5", "CSS3", "JavaScript", ".NET"],
      github: "https://github.com/Satyaranjan424",
      live: "https://woha.appman.in/",
    },
    {
      title: "Bondly _ Travel Discovery Platform",
      image: "/Images/BondlyImg.png",
      desc: "A full-stack travel platform where users create profiles, save visited places, and share travel stories with the community. Google Maps and Weather APIs for real-time destination insights. Features rich modules including trip planning, expense tracking, and photo galleries for an end-to-end experience.",
      tech: ["React", "Node", "Rest API", "PgSQL", "Redis"],
      github: "https://github.com/Satyaranjan424/Bondly--Travel-Discovery-Platform",
      live: "https://bondly-travel-discovery-platform.vercel.app/",
    },
    {
      title: "Learnova _ Smart Learnig Platform",
      image: "/Images/LearnovaImg.png",
      desc: "A production-ready e-learning platform with role-based dashboards for students, instructors, and admins, featuring course management, coding challenges, quizzes, progress tracking, and secure full-stack integration for modern learning experiences.",
      tech: ["React", "Node", "Express", "API", "PgSQL"],
      github: "https://github.com/Satyaranjan424/Learnova-Smart-E-Learning-Platform",
      live: "https://learnova-smart-e-learning-platform.vercel.app/",
    },
    {
      title: "SRD _ Social Platform App",
      image: "/Images/SRDImg.png",
      desc: "A full-stack social networking app enabling users to create profiles, post updates, edit or delete posts & engage in real-time discussions. Integrated with authentication, database management, and cloud functions, deployed for seamless performance and scalability.",
      tech: ["React", "Node.js", "Tailwind CSS", "Appwrite"],
      github: "https://github.com/Satyaranjan424/React-App-Project",
      live: "https://srd-social-platform.vercel.app/",
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
      <div className="absolute inset-x-0 top-1/3 h-40 bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-amber-300/10 blur-3xl" />

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
            className="project-glass-card group p-6 rounded-2xl transition-all duration-300"
          >
            <div className="relative w-full rounded-2xl h-48 overflow-hidden mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 font-jost text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-md">
                  Case Study
                </span>
                <span className="h-2 w-2 rounded-full bg-[#67e8f9] shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              </div>
            </div>

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
                  className="text-xs px-3 py-1 border border-[#c5a161]/30 rounded-md text-[#e8dcc8] bg-[#0a0a0a]/60 tech-chip"
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
                className="text-xs uppercase tracking-widest px-4 py-2 rounded-lg bg-gradient-to-r from-[#c5a161] via-[#e8d5a3] to-[#67e8f9] text-black hover:scale-105 transition"
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
