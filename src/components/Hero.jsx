import React, { useState, useEffect, useRef } from 'react';

const roles = [
  'Computer Science Student',
  'Web Developer',
  'Tech Enthusiast',
  'Programmer',
];

function Hero() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, languages: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const name = 'Manish Kumar';
  const typingSpeed = 90;
  const flickerRef = useRef(null);

  // Typewriter effect for name
  useEffect(() => {
    let i = 0;
    setTypedName('');
    const type = () => {
      if (i <= name.length) {
        setTypedName(name.slice(0, i));
        i++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);

  // Flicker cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(interval);
  }, []);

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Animated counters
  useEffect(() => {
    const targets = { projects: 5, years: 2, languages: 4 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        languages: Math.floor(targets.languages * progress)
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content hero-flex-col">
        <div className="hero-badge-row">
          <span className="hero-badge">
            <span role="img" aria-label="wave">👋</span> Hello, I'm
          </span>
        </div>
        <h1 className="hero-title typewriter-glow">
          {typedName}
          <span className="type-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </h1>
        <p className="hero-subtitle role-cycle">{roles[roleIndex]}</p>
        <p className="hero-description">
          I'm a passionate Information Science student with a love for software development and learning new technologies. 
          I'm eager to apply my knowledge and contribute to innovative projects.
        </p>
        <div className="hero-buttons">
          <a 
            href="#projects" 
            className="cta-button primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="cta-button secondary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">{counts.projects}</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.years}</span>
          <span className="stat-label">Years Learning</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{counts.languages}</span>
          <span className="stat-label">Languages</span>
        </div>
      </div>
    </section>
  );
}

export default Hero; 