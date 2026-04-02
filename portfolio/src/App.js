import { useState } from "react";
import IntroGate from "./components/IntroGate";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Scene3D from "./components/Scene3D";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubStats from "./components/GithubStats";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
// import Chatbot from "./components/Chatbot";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>

<div className="cursor-glow" style={{ left: pos.x, top: pos.y }} />
      <div className="spotlight" style={{ left: pos.x, top: pos.y }} />

      {!entered ? (
        <IntroGate onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Navbar />
          <Hero3D />
          <Scene3D />
          {/* <Skills /> */}
          <WhyHireMe />
          <Projects />
          <Experience/>
          <GithubStats />
          <Contact />
          {/* <Chatbot /> */}
        </>
      )}
    </div>
  );
}