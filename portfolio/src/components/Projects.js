"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    // {
    //   title: "Job Board Application",
    //   image: "/Images/WohaImg.png",
    //   desc: "A full-featured job portal with advanced filtering, role-based profiles for recruiters and applicants, and a clean UI backed by efficient REST API integration for real-time job listings and smooth experience for students in job findings.",
    //   tech: ["React", "Redux", "REST API"],
    //   github: "https://github.com/Satyaranjan424",
    //   live: "#",
    // },
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
            <div className="w-full rounded-2xl h-48 overflow-hidden mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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