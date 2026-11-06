import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { ArrowUpRight, Github, Instagram, LockKeyhole, Fingerprint, Radio, Cpu, Activity } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { tag:'SECURE COMMS', name:'VamoraChat', desc:'A private room-based communication platform for controlled conversations, with room identifiers, passphrases and auto-deletion.', icon:LockKeyhole, state:'ENCRYPTED' },
  { tag:'AI SECURITY / BETA', name:'Deepfake Detection', desc:'An AI system designed to analyse images and videos for signs of synthetic manipulation.', icon:Fingerprint, state:'BETA PHASE' },
  { tag:'IOT HARDWARE', name:'Women-Safety Node', desc:'ESP8266, N8N and Telegram integration. A connected device that sends emergency alerts to designated contacts.', icon:Radio, state:'ACTIVE' },
  { tag:'SECURITY RESEARCH', name:'Python Keylogger', desc:'Ethical input-monitoring research for authorised security testing in controlled lab environments.', icon:Activity, state:'LAB RESEARCH' },
  { tag:'RESEARCH', name:'IoT Hacking Lab', desc:'A controlled environment for studying IoT firmware security and defensive analysis.', icon:Cpu, state:'ONGOING' }
];

function App() {
 const root = useRef(null);
 useEffect(() => {
  const lenis = new Lenis({ duration:1.15, smoothWheel:true });
  let raf;
  const tick = t => { lenis.raf(t); raf=requestAnimationFrame(tick); };
  raf=requestAnimationFrame(tick);
  lenis.on('scroll', ScrollTrigger.update);
  const ctx = gsap.context(() => {
   const screen = gsap.to('.screen-page', { yPercent:-80, ease:'none', scrollTrigger:{ trigger:'.journey', start:'top top', end:'bottom bottom', scrub:1.15 } });
   gsap.from('.laptop-scene',{ opacity:0, y:55, rotateX:12, duration:1.35, ease:'power3.out', delay:.2 });
   gsap.to('.laptop-shell',{ rotateY:-7, rotateX:2, ease:'none', scrollTrigger:{trigger:'.journey',start:'top top',end:'bottom bottom',scrub:1.3}});
   gsap.from('.intro-copy > *',{y:25,opacity:0,stagger:.12,duration:.9,ease:'power3.out',delay:.3});
  },root);
  return()=>{ctx.revert();cancelAnimationFrame(raf);lenis.destroy();};
 },[]);
 return <main ref={root}>
  <div className="ambient-grid"/><div className="glow glow-a"/><div className="glow glow-b"/>
  <header className="nav"><a className="wordmark" href="#top">AMAR<span>XPLOIT</span><i>®</i></a><span className="nav-status"><b/> DIGITAL PORTFOLIO / 2026</span><a className="nav-contact" href="#contact">LET'S CONNECT <ArrowUpRight size={14}/></a></header>
  <section className="intro" id="top">
   <div className="intro-copy"><div className="eyebrow"><span/> INDEPENDENT RESEARCHER & DEVELOPER</div><h1>Ideas built<br/>to <em>exist.</em></h1><p>A closer look at the work, experiments and systems of <strong>Amarnath Nayak</strong>.</p><div className="scroll-hint"><span className="mouse"><i/></span> SCROLL TO EXPLORE THE PORTFOLIO</div></div>
   <div className="intro-side"><span>INTERACTIVE EXPERIENCE</span><strong>01 — 04</strong><small>CYBERSECURITY<br/>IOT SYSTEMS<br/>AI DEVELOPMENT</small></div>
  </section>
  <section className="journey" aria-label="3D portfolio presentation">
   <div className="laptop-sticky"><div className="laptop-scene">
    <div className="laptop-shell">
     <div className="screen-frame"><div className="camera-dot"/><div className="screen">
      <div className="browser-bar"><div className="browser-dots"><i/><i/><i/></div><div className="address">amarxploit.netlify.app</div><span>•••</span></div>
      <div className="screen-window"><div className="screen-page">
       <section className="screen-section screen-hero"><div className="screen-nav"><b>AX<span>.</span></b><span>PORTFOLIO&nbsp;&nbsp; / &nbsp;&nbsp;2026</span><span>AVAILABLE FOR PROJECTS</span></div><div className="screen-hero-copy"><small>CYBERSECURITY RESEARCHER / DEVELOPER</small><h2>AMARNATH<br/><em>NAYAK.</em></h2><p>Exploring WiFi security, IoT systems<br/>and intelligent software.</p><a href="#screen-about">EXPLORE PROFILE ↗</a></div><div className="hero-index">01 <i/> 04</div><div className="screen-crosshair">AX / 001</div></section>
       <section className="screen-section screen-about" id="screen-about"><div className="screen-label">01 / BACKGROUND & PHILOSOPHY</div><div className="about-screen-grid"><h2>Curiosity<br/>into <em>capability.</em></h2><div><p>I'm @amarxploit. I started exploring technology through ICT and developed a hands-on interest in cybersecurity, connected devices and AI.</p><p>I build practical tools, IoT safety systems and automation workflows, always learning through experiments and research.</p><div className="mini-stats"><span>CEH <b>IN PROGRESS</b></span><span>IOT <b>ACTIVE</b></span><span>AI <b>BETA</b></span></div></div></div><div className="section-watermark">PROFILE</div></section>
       <section className="screen-section screen-work"><div className="screen-label">02 / SELECTED WORK</div><div className="work-screen-head"><h2>Selected <em>projects.</em></h2><p>Experiments and systems<br/>across different domains.</p></div><div className="screen-projects">{projects.map((p,i)=><article className="screen-project" key={p.name}><div className="project-meta"><span>{p.tag}</span><span>0{i+1}</span></div><p.icon size={19}/><h3>{p.name}</h3><p>{p.desc}</p><b>{p.state} ↗</b></article>)}</div></section>
       <section className="screen-section screen-certs"><div className="screen-label">03 / CREDENTIALS</div><h2>Learning in<br/><em>progress.</em></h2><div className="credential"><span>01 / APR 2026</span><div><h3>WiFi Hacking & Penetration Testing</h3><p>M Cyber Academy · Certification</p></div><b>COMPLETED ↗</b></div><div className="credential"><span>02 / APR 2026</span><div><h3>Python For Hackers</h3><p>M Cyber Academy · Ethical Hacking</p></div><b>COMPLETED ↗</b></div><div className="cert-foot">CONTINUOUS LEARNING / PRACTICAL RESEARCH</div></section>
       <section className="screen-section screen-contact"><div className="screen-label">04 / ESTABLISH CONNECTION</div><small>HAVE A PROJECT IN MIND?</small><h2>Let's build<br/><em>what's next.</em></h2><p>Open to collaboration, ideas and meaningful projects.</p><div className="screen-socials"><a href="https://github.com/amarxploit" target="_blank" rel="noreferrer"><Github size={16}/> GITHUB ↗</a><a href="https://instagram.com/amarxploit" target="_blank" rel="noreferrer"><Instagram size={16}/> INSTAGRAM ↗</a></div><div className="screen-footer">© 2026 AMARNATH NAYAK <span>BUILT WITH INTENT ✳</span></div></section>
      </div></div>
     </div><div className="hinge"/><div className="laptop-base"><div className="base-shine"/><div className="trackpad"/></div>
    </div>
   </div><div className="journey-caption"><span>SCROLL-DRIVEN PRESENTATION</span><span>THE WORK SPEAKS / 01—04</span></div></div>
  </section>
  <footer className="outro" id="contact"><span>AMARXPLOIT / PERSONAL PORTFOLIO</span><a href="https://github.com/amarxploit" target="_blank" rel="noreferrer">VIEW SOURCE ON GITHUB <ArrowUpRight size={15}/></a><span>© 2026</span></footer>
 </main>;
}
export default App;