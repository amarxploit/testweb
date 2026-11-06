import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { ArrowUpRight, Github, Instagram, Activity, LockKeyhole, Cpu, Radio, Fingerprint, MoveUpRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { tag:'SECURE_COMMS', name:'VamoraChat', desc:'A private room-based communication platform designed for temporary and controlled conversations. Features room identifiers and passphrases with auto-deletion for maximum privacy.', icon:LockKeyhole, state:'ENCRYPTED' },
  { tag:'AI_SECURITY / BETA', name:'Deepfake Detection', desc:'A web-based AI system designed to detect deepfake images and videos. Uses ML models to analyze facial inconsistencies and manipulation artifacts.', icon:Fingerprint, state:'BETA PHASE' },
  { tag:'IOT_HARDWARE', name:'Women-Safety Node', desc:'ESP8266 + N8N + Telegram integration. IoT device that sends emergency alerts to designated contacts when triggered via hardware.', icon:Radio, state:'ACTIVE' },
  { tag:'PENTESTING', name:'Python Keylogger', desc:'Ethical keylogger research for authorized security testing in controlled lab environments.', icon:Activity, state:'RESEARCH' },
  { tag:'RESEARCH', name:'IoT Hacking Lab', desc:'Controlled environment for analyzing IoT firmware vulnerabilities and developing secure firmware analysis fixes.', icon:Cpu, state:'ONGOING' }
];

function App() {
  const root = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title, .hero-copy, .hero-actions', { y: 34, opacity: 0, duration: 1, stagger: .13, ease: 'power3.out', delay: .2 });
      gsap.utils.toArray('.reveal').forEach((el) => gsap.from(el, { y: 44, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
      gsap.utils.toArray('.project-card').forEach((el, i) => gsap.from(el, { y: 55, opacity: 0, duration: .8, delay: (i % 2) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' } }));
      gsap.to('.orb-one', { y: -65, x: 30, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.orb-two', { y: 55, x: -25, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, root);
    return () => { ctx.revert(); cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  return <main ref={root}>
    <div className="noise" /><div className="grid-bg" /><div className="orb orb-one" /><div className="orb orb-two" />
    <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>AMAR<span className="muted">XPLOIT</span></span></a><div className="session"><i /> SECURE_SESSION // ACTIVE</div><a className="menu-link" href="#contact">CONNECT <MoveUpRight size={14}/></a></header>
    <section className="hero" id="home">
      <div className="hero-left"><div className="hero-kicker mono"><span className="pulse" /> INDEPENDENT RESEARCHER / DEVELOPER</div>
        <h1 className="hero-title">Amarnath<br/><span>Nayak<span className="accent">.</span></span></h1>
        <p className="hero-copy">Cybersecurity researcher exploring the edges of <b>WiFi security</b>, <b>IoT systems</b> and <b>AI development</b>. Building practical tools, experiments and safety-focused technology.</p>
        <div className="hero-actions"><a className="primary-btn" href="#work">EXPLORE WORK <ArrowUpRight size={16}/></a><a className="text-btn" href="#about">ABOUT ME <span>↓</span></a></div>
      </div>
      <div className="hero-visual"><div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-cross h"/><div className="radar-cross v"/><div className="radar-sweep"/><div className="radar-core"><span>AX</span></div><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/></div><div className="visual-label mono"><span>NODE_01</span><span>ONLINE <i/></span></div></div>
      <div className="hero-bottom mono"><span>SCROLL TO EXPLORE</span><span>01 / 03</span><span>BUILD V3.0.0_AGENTIC</span></div>
    </section>
    <section className="about section" id="about"><div className="section-head reveal"><span className="number mono">01 / PROFILE</span><span className="section-line"/><span className="mono small">IDENTITY_LAYER</span></div><div className="about-grid"><h2 className="reveal">Curiosity<br/>into <em>capability.</em></h2><div className="about-content reveal"><p>I'm <b>@amarxploit</b>. Started ICT in class 5; 1.5 years hands-on in cybersecurity. I build IoT safety devices, automate flows with N8N, and use AI to speed product development.</p><div className="status-grid"><div><span className="mono">CEH STATUS</span><b>IN PROGRESS</b></div><div><span className="mono">IOT RESEARCH</span><b className="green">ACTIVE</b></div><div><span className="mono">AI MODELING</span><b>BETA PHASE</b></div></div></div></div></section>
    <section className="work section" id="work"><div className="section-head reveal"><span className="number mono">02 / SELECTED WORK</span><span className="section-line"/><span className="mono small">INTELLIGENCE_ASSETS</span></div><div className="work-intro reveal"><h2>Built to<br/><em>explore.</em></h2><p>A selection of experiments, tools and systems across secure communication, AI and connected devices.</p></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.name}><div className="card-top mono"><span>{p.tag}</span><span>0{i+1}</span></div><div className="project-icon"><p.icon size={22}/></div><h3>{p.name}</h3><p className="project-desc">{p.desc}</p><div className="card-bottom mono"><span>{p.state}</span><ArrowUpRight size={16}/></div></article>)}</div></section>
    <section className="certs section"><div className="section-head reveal"><span className="number mono">03 / CREDENTIALS</span><span className="section-line"/><span className="mono small">VERIFIED_LEARNING</span></div><div className="cert-list"><article className="cert-row reveal"><span className="cert-index mono">01</span><div><span className="mono cert-tag">PENETEST_CREDENTIAL</span><h3>Wifi Hacking &amp; Penetration Testing</h3><p>Completed professional certification at M Cyber Academy. Covers penetration testing methodologies on wireless networks, packet analysis and countermeasure deployment.</p></div><span className="cert-date mono">25 APR 2026</span></article><article className="cert-row reveal"><span className="cert-index mono">02</span><div><span className="mono cert-tag">AUTOMATION_SCRIPTING</span><h3>Python For Hackers: Mastering Python For Ethical Hacking</h3><p>Certified automation and security script developer from M Cyber Academy. Focuses on security auditing tools, network programming and threat mitigation automation.</p></div><span className="cert-date mono">25 APR 2026</span></article></div></section>
    <footer className="footer section" id="contact"><div className="section-head reveal"><span className="number mono">04 / ESTABLISH LINK</span><span className="section-line"/><span className="mono small">NEURAL_LINK</span></div><div className="footer-main reveal"><div><span className="mono footer-kicker">DIRECT COMMUNICATION SUBSYSTEM</span><h2>Let's build<br/><em>what's next.</em></h2><p>Ready for collaboration and research.</p></div><div className="socials"><a href="https://www.instagram.com/amarxploit" target="_blank" rel="noreferrer"><Instagram/> INSTAGRAM <ArrowUpRight/></a><a href="https://github.com/amarxploit" target="_blank" rel="noreferrer"><Github/> GITHUB <ArrowUpRight/></a></div></div><div className="footer-bottom mono"><span>© 2026 AMARNATH NAYAK</span><span>SECURE_LAYER: TLS_1.3</span><span>BUILT WITH INTENT <b>✳</b></span></div></footer>
  </main>;
}
export default App;