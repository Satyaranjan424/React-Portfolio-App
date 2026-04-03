"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ROLES = ["Full Stack Developer","React Architect","Node.js Engineer","UI / UX Craftsman"];
const STATS = [
  { value:10,  suffix:"+", label:"Projects"    },
  { value:1,   suffix:"y+", label:"Experience"  },
  { value:99,  suffix:"%", label:"Satisfaction"},
];

function useCounter(target, duration=1.6, start=false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const ctrl = animate(0, target, { duration, ease:[0.22,1,0.36,1], onUpdate:(v)=>setVal(Math.round(v)) });
    return ctrl.stop;
  }, [target, duration, start]);
  return val;
}

function Typewriter() {
  const [idx, setIdx]         = useState(0);
  const [text, setText]       = useState("");
  const [deleting, setDelete] = useState(false);
  const [paused, setPaused]   = useState(false);
  useEffect(() => {
    if (paused) { const t=setTimeout(()=>{setPaused(false);setDelete(true);},1800); return ()=>clearTimeout(t); }
    const cur = ROLES[idx];
    if (!deleting) {
      if (text.length < cur.length) { const t=setTimeout(()=>setText(cur.slice(0,text.length+1)),68); return ()=>clearTimeout(t); }
      else setPaused(true);
    } else {
      if (text.length > 0) { const t=setTimeout(()=>setText(text.slice(0,-1)),40); return ()=>clearTimeout(t); }
      else { setDelete(false); setIdx((i)=>(i+1)%ROLES.length); }
    }
  }, [text,deleting,paused,idx]);
  return (
    <span className="font-mono-tech" style={{ color:"#c5a161" }}>
      {text}
      <span style={{ display:"inline-block",width:2,height:"1em",background:"#c5a161",marginLeft:3,verticalAlign:"middle",animation:"blink .8s step-end infinite" }} />
    </span>
  );
}

function DotGrid() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; };
    resize();
    const GAP=48;
    let dots=[];
    const buildDots = () => {
      const cols=Math.ceil(canvas.width/GAP), rows=Math.ceil(canvas.height/GAP);
      dots=Array.from({length:cols*rows},(_,i)=>({
        x:(i%cols)*GAP+GAP/2, y:Math.floor(i/cols)*GAP+GAP/2,
        phase:Math.random()*Math.PI*2, speed:.003+Math.random()*.003,
      }));
    };
    buildDots();
    let mx=-9999,my=-9999;
    const onMouse=(e)=>{ const r=canvas.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; };
    window.addEventListener("mousemove",onMouse);
    const draw=()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      dots.forEach(d=>{
        d.phase+=d.speed;
        const dist=Math.hypot(d.x-mx,d.y-my), prox=Math.max(0,1-dist/150);
        const alpha=.07+Math.sin(d.phase)*.03+prox*.5, r=.8+prox*1.6;
        ctx.beginPath(); ctx.arc(d.x,d.y,r,0,Math.PI*2);
        ctx.fillStyle=`rgba(197,161,97,${alpha})`; ctx.fill();
      });
      raf=requestAnimationFrame(draw);
    };
    draw();
    const onResize=()=>{ resize(); buildDots(); };
    window.addEventListener("resize",onResize);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("mousemove",onMouse); window.removeEventListener("resize",onResize); };
  },[]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex:1 }} />;
}

function StatItem({ value, suffix, label, start, delay }) {
  const count = useCounter(value, 1.5, start);
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity:0, y:12 }} animate={start?{opacity:1,y:0}:{}}
      transition={{ delay, duration:.6 }}>
      <span className="font-cormorant leading-none" style={{ fontSize:"2.2rem", fontWeight:300,
        background:"linear-gradient(135deg,#c5a161,#e8d5a3,#c5a161)",
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
        {count}{suffix}
      </span>
      <span className="font-mono-tech mt-1"
        style={{ fontSize:".48rem", letterSpacing:".3em", color:"rgba(232,220,200,.35)", textTransform:"uppercase" }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero3D() {
  const [statsOn, setStatsOn] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useTransform(mouseY, [-300,300], [3,-3]);
  const rotY = useTransform(mouseX, [-300,300], [-3,3]);

  useEffect(() => { const t=setTimeout(()=>setStatsOn(true),1400); return ()=>clearTimeout(t); }, []);

  const onMove  = (e) => { const r=e.currentTarget.getBoundingClientRect(); mouseX.set(e.clientX-r.left-r.width/2); mouseY.set(e.clientY-r.top-r.height/2); };
  const onLeave = () => { animate(mouseX,0,{duration:.8}); animate(mouseY,0,{duration:.8}); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@200;300;400&family=Share+Tech+Mono&display=swap');
        .font-cormorant { font-family:'Cormorant Garamond',serif; }
        .font-jost      { font-family:'Jost',sans-serif; }
        .font-mono-tech { font-family:'Share Tech Mono',monospace; }

        @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer     { from{background-position:-200% center} to{background-position:200% center} }
        @keyframes marquee     { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes scrollpulse { 0%,100%{opacity:.45;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.18)} }
        @keyframes orb-drift   {
          0%   { transform:translate(0,0) scale(1); }
          33%  { transform:translate(30px,-20px) scale(1.05); }
          66%  { transform:translate(-20px,25px) scale(.97); }
          100% { transform:translate(0,0) scale(1); }
        }
        @keyframes hex-rotate  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes hex-counter { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes grid-fade   { 0%,100%{opacity:.35} 50%{opacity:.65} }

        .name-shimmer {
          background:linear-gradient(90deg,#c5a161 0%,#e8d5a3 30%,#f5ecd5 50%,#e8d5a3 70%,#c5a161 100%);
          background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          animation:shimmer 4s linear infinite;
        }
        .marquee-t { animation:marquee 22s linear infinite; }
        .scroll-ln { animation:scrollpulse 2.2s ease-in-out infinite; transform-origin:top; }

        .btn-gold { position:relative; overflow:hidden;
          clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
          background:linear-gradient(135deg,#c5a161,#e8d5a3 55%,#c5a161); transition:transform .25s; }
        .btn-gold:hover { transform:translateY(-2px); }
        .btn-gold::before { content:''; position:absolute; inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);
          transform:translateX(-100%); transition:transform .5s; }
        .btn-gold:hover::before { transform:translateX(200%); }

        .btn-outline { position:relative; overflow:hidden;
          clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
          border:1px solid rgba(197,161,97,.3); transition:border-color .3s, transform .25s; background:transparent; }
        .btn-outline:hover { border-color:rgba(197,161,97,.75); transform:translateY(-2px); }
        .btn-outline::before { content:''; position:absolute; inset:0;
          background:rgba(197,161,97,.06); opacity:0; transition:opacity .3s; }
        .btn-outline:hover::before { opacity:1; }

        .card-corner { position:absolute; border-color:rgba(197,161,97,.3); border-style:solid; border-width:0;
          transition:width .4s,height .4s,border-color .4s; pointer-events:none; }
        .card-corner.tl{top:0;left:0;width:14px;height:14px;border-top-width:1.5px;border-left-width:1.5px}
        .card-corner.tr{top:0;right:0;width:14px;height:14px;border-top-width:1.5px;border-right-width:1.5px}
        .card-corner.bl{bottom:0;left:0;width:14px;height:14px;border-bottom-width:1.5px;border-left-width:1.5px}
        .card-corner.br{bottom:0;right:0;width:14px;height:14px;border-bottom-width:1.5px;border-right-width:1.5px}
        .tilt-card:hover .card-corner { width:22px; height:22px; border-color:rgba(197,161,97,.65); }
        .stat-divider { display:inline-block; width:1px; height:30px;
          background:linear-gradient(180deg,transparent,rgba(197,161,97,.28),transparent); }
      `}</style>

      <section id="hero"
        className="relative flex flex-col justify-center items-center overflow-hidden"
        style={{
          minHeight:"100svh", paddingTop:"80px", paddingBottom:"40px",
          /* RICH BACKGROUND */
          background:`
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(197,161,97,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 60%,  rgba(197,161,97,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 40% 50% at 90% 80%,  rgba(197,161,97,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 75% 20%,  rgba(232,213,163,0.04) 0%, transparent 50%),
            linear-gradient(170deg, #0e0b07 0%, #090704 30%, #0c0906 60%, #080604 100%)
          `,
        }}
        onMouseMove={onMove} onMouseLeave={onLeave}
      >
        {/* dot grid */}
        <DotGrid />

        {/* subtle diagonal lines */}
        <div style={{
          position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
          backgroundImage:`
            repeating-linear-gradient(
              45deg,
              transparent 0px, transparent 80px,
              rgba(197,161,97,0.02) 80px, rgba(197,161,97,0.02) 81px
            )
          `,
        }} />

        {/* large hex ring — decorative */}
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width:700, height:700, borderRadius:"50%",
          border:"1px solid rgba(197,161,97,0.04)",
          transform:"translate(-50%,-50%)",
          animation:"hex-rotate 60s linear infinite",
          pointerEvents:"none", zIndex:0,
        }} />
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width:500, height:500, borderRadius:"50%",
          border:"1px solid rgba(197,161,97,0.055)",
          transform:"translate(-50%,-50%)",
          animation:"hex-rotate 40s linear infinite reverse",
          pointerEvents:"none", zIndex:0,
        }} />
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width:320, height:320, borderRadius:"50%",
          border:"1px solid rgba(197,161,97,0.07)",
          transform:"translate(-50%,-50%)",
          animation:"hex-rotate 25s linear infinite",
          pointerEvents:"none", zIndex:0,
        }} />

        {/* corner glow accents */}
        <div style={{ position:"absolute", top:0, left:0, width:300, height:300, pointerEvents:"none", zIndex:0,
          background:"radial-gradient(ellipse at 0% 0%, rgba(197,161,97,0.1) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:0, right:0, width:300, height:300, pointerEvents:"none", zIndex:0,
          background:"radial-gradient(ellipse at 100% 100%, rgba(197,161,97,0.08) 0%, transparent 70%)" }} />

        {/* MAIN CARD */}
        <motion.div
          className="tilt-card relative flex flex-col items-center text-center w-full px-6"
          style={{ maxWidth:680, zIndex:2, rotateX:rotX, rotateY:rotY, transformStyle:"preserve-3d", perspective:1200 }}
        >
          <span className="card-corner tl" /><span className="card-corner tr" />
          <span className="card-corner bl" /><span className="card-corner br" />

          {/* badge */}
          <motion.div className="flex items-center gap-3 mb-6"
            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.2, duration:.7 }}>
            <span style={{ display:"inline-block", height:1, width:28, background:"linear-gradient(90deg,transparent,rgba(197,161,97,.55))" }} />
            <span className="font-mono-tech" style={{ fontSize:".52rem", letterSpacing:".4em", color:"rgba(197,161,97,.65)", textTransform:"uppercase" }}>Available for Work</span>
            <span style={{ display:"inline-block", width:5, height:5, borderRadius:"50%", background:"#c5a161", animation:"blink 1.4s ease-in-out infinite" }} />
            <span style={{ display:"inline-block", height:1, width:28, background:"linear-gradient(90deg,rgba(197,161,97,.55),transparent)" }} />
          </motion.div>

          {/* greeting */}
          <motion.p className="font-jost m-0 mb-2"
            style={{ fontSize:".75rem", letterSpacing:".5em", color:"rgba(232,220,200,.38)", textTransform:"uppercase", fontWeight:300 }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.35, duration:.7 }}>
            Hello, World · I'm
          </motion.p>

          {/* name */}
          <motion.h1 className="font-cormorant name-shimmer m-0 leading-tight"
            style={{ fontSize:"clamp(3rem,8vw,6rem)", fontWeight:300, letterSpacing:".04em" }}
            initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ delay:.5, duration:.9, ease:[.22,1,.36,1] }}>
            Satya Ranjan
          </motion.h1>

          {/* typewriter */}
          <motion.div className="flex items-center gap-3 mt-5 mb-5"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.75, duration:.7 }}>
            <span style={{ display:"inline-block", height:1, width:36, background:"linear-gradient(90deg,transparent,rgba(197,161,97,.45))" }} />
            <span className="font-mono-tech" style={{ fontSize:".9rem", letterSpacing:".1em", minWidth:220, textAlign:"left" }}><Typewriter /></span>
            <span style={{ display:"inline-block", height:1, width:36, background:"linear-gradient(90deg,rgba(197,161,97,.45),transparent)" }} />
          </motion.div>

          {/* description */}
          <motion.p className="font-jost m-0 mb-8"
            style={{ fontSize:"1rem", lineHeight:1.75, maxWidth:460, color:"rgba(232,220,200,.5)", fontWeight:300, letterSpacing:".03em" }}
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:.95, duration:.8 }}>
            Crafting scalable web applications with elegant architecture and meticulously refined user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex gap-4 justify-center flex-wrap mb-10"
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1, duration:.8 }}>
            <a href="/resume.pdf">
              <button className="btn-gold font-jost cursor-pointer border-0 font-medium"
                style={{ fontSize:".72rem", letterSpacing:".28em", textTransform:"uppercase", color:"#0a0a0a", padding:".65rem 2.2rem" }}>
                Download Resume
              </button>
            </a>
            <a href="#projects">
              <button className="btn-outline font-jost cursor-pointer font-light"
                style={{ fontSize:".72rem", letterSpacing:".28em", textTransform:"uppercase", color:"#c5a161", padding:".65rem 2.2rem" }}>
                View Work
              </button>
            </a>
          </motion.div>

          {/* stats */}
          <motion.div className="flex items-center gap-8"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.25, duration:.8 }}>
            {STATS.map((s,i) => (
              <div key={s.label} className="flex items-center gap-8">
                <StatItem {...s} start={statsOn} delay={.1*i} />
                {i < STATS.length-1 && <span className="stat-divider" />}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* marquee */}
        <motion.div className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height:32, borderTop:"1px solid rgba(197,161,97,.09)", zIndex:10 }}
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.7, duration:1 }}>
          <div className="marquee-t flex items-center h-full whitespace-nowrap" style={{ width:"200%" }}>
            {Array.from({ length:14 }).map((_,i) => (
              <span key={i} className="font-mono-tech flex items-center gap-8 mx-4"
                style={{ fontSize:".43rem", letterSpacing:".38em", color:"rgba(197,161,97,.2)", textTransform:"uppercase" }}>
                <span>Full Stack Developer</span>
                <span style={{ width:3,height:3,borderRadius:"50%",background:"rgba(197,161,97,.28)",display:"inline-block" }} />
                <span>React · Node · TypeScript</span>
                <span style={{ width:3,height:3,borderRadius:"50%",background:"rgba(197,161,97,.28)",display:"inline-block" }} />
                <span>Open to Opportunities</span>
                <span style={{ width:3,height:3,borderRadius:"50%",background:"rgba(197,161,97,.28)",display:"inline-block" }} />
              </span>
            ))}
          </div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div className="absolute flex flex-col items-center gap-2"
          style={{ bottom:42, right:"4%", zIndex:10 }}
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2, duration:.8 }}>
          <span className="font-mono-tech"
            style={{ fontSize:".43rem", letterSpacing:".35em", color:"rgba(197,161,97,.38)", textTransform:"uppercase", writingMode:"vertical-lr" }}>
            Scroll
          </span>
          <div className="scroll-ln" style={{ width:1, height:38, background:"linear-gradient(180deg,rgba(197,161,97,.6),transparent)" }} />
        </motion.div>
      </section>
    </>
  );
}