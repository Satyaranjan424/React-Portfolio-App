"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Float, OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

/* 🎯 Tech Stack */
const TechStack = memo(function TechStack() {
  return (
    <>
      {/* FRONTEND */}
      <Float speed={2} rotationIntensity={1}>
        <Text position={[-3, 1.5, 0]} fontSize={0.5} color="#c5a161">
          React
        </Text>
      </Float>

      <Float speed={2}>
        <Text position={[-2, 0, 0]} fontSize={0.4} color="#e8dcc8">
          JavaScript
        </Text>
      </Float>

      <Float speed={2}>
        <Text position={[-3, -1.5, 0]} fontSize={0.4} color="#e8dcc8">
          Tailwind
        </Text>
      </Float>

      {/* BACKEND */}
      <Float speed={2}>
        <Text position={[3, 1.5, 0]} fontSize={0.5} color="#c5a161">
          Node.js
        </Text>
      </Float>

      <Float speed={2}>
        <Text position={[2, 0, 0]} fontSize={0.4} color="#e8dcc8">
          HTML/CSS
        </Text>
      </Float>

      <Float speed={2}>
        <Text position={[3, -1.5, 0]} fontSize={0.4} color="#e8dcc8">
          PostgreSQL
        </Text>
      </Float>

      {/* OTHER */}
      <Float speed={2}>
        <Text position={[0, 2.5, 0]} fontSize={0.45} color="#c5a161">
          Git
        </Text>
      </Float>

      <Float speed={2}>
        <Text position={[0, -2.5, 0]} fontSize={0.45} color="#c5a161">
          REST APIs
        </Text>
      </Float>
    </>
  );
});

/* 🚀 MAIN COMPONENT */
function Scene3D() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Hooks", "React Router", "Angular.Js" ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "MySQL", "REST APIs", ".NET", "JWT", "NPM", "Appwrite", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "Azure DevOps", "VS Code"],
    },
  ];

  return (
    <section
      id="Scene3D"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-0 left-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-0 right-0" />

      {/* 🧠 Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-cormorant text-4xl md:text-5xl text-[#e8dcc8] mb-4">
          Technical Expertise
        </h2>
        <p className="text-[#e8dcc8]/60 max-w-xl mx-auto font-jost text-sm tracking-wide">
          A blend of modern frontend, scalable backend, and tools that power
          high-performance applications.
        </p>
      </div>

      {/* 🎮 3D Canvas */}
      <div className="h-[400px] relative z-10 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 6] }}
          dpr={[1, 1.5]}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={1} />
          <Stars radius={50} depth={50} count={800} factor={3} fade />
          <TechStack />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.7}
          />
        </Canvas>
      </div>

      {/* 🧠 Skill Boxes (REPLACED CORRECTLY) */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20 mt-16 relative z-10">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-8 rounded-2xl border border-[#c5a161]/20 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-[#c5a161] font-cormorant text-2xl mb-6">
              {group.title}
            </h3>

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

      {/* 🚀 Tagline (FROM SKILLS) */}
      <div className="mt-20 text-center max-w-2xl mx-auto relative z-10 px-6">
        <p className="text-[#e8dcc8]/60 font-jost text-sm tracking-wide">
          Continuously learning and adapting to new technologies to stay ahead
          in the ever-evolving world of software development.
        </p>
      </div>
    </section>
  );
}

export default memo(Scene3D);