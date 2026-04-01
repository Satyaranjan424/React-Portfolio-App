"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Float, OrbitControls, Stars } from "@react-three/drei";

/* 🎯 Tech Stack (memoized to prevent re-renders) */
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
          MongoDB
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
          dpr={[1, 1.5]}                 // ✅ GPU safe
          gl={{ preserveDrawingBuffer: true }} // ✅ prevents context loss
        >
          <ambientLight intensity={1} />

          {/* ✨ Stars */}
          <Stars radius={50} depth={50} count={800} factor={3} fade />

          {/* 🚀 Tech Stack */}
          <TechStack />

          {/* 🎯 Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.7}
          />
        </Canvas>
      </div>

      {/* 🔻 Extra Content */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 px-6 md:px-20 relative z-10">
        <div className="p-6 border border-[#c5a161]/20 rounded-xl bg-white/5 backdrop-blur-xl">
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            Frontend
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            Building responsive, interactive UIs using React, Tailwind CSS,
            and modern JavaScript frameworks.
          </p>
        </div>

        <div className="p-6 border border-[#c5a161]/20 rounded-xl bg-white/5 backdrop-blur-xl">
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            Backend
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            Developing scalable APIs and server-side logic using Node.js,
            Express, and database technologies.
          </p>
        </div>

        <div className="p-6 border border-[#c5a161]/20 rounded-xl bg-white/5 backdrop-blur-xl">
          <h3 className="text-[#c5a161] font-cormorant text-xl mb-2">
            Tools & DevOps
          </h3>
          <p className="text-[#e8dcc8]/60 text-sm">
            Version control, deployment pipelines, and modern tooling to
            ensure efficient and reliable workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ✅ Prevent re-render */
export default memo(Scene3D);