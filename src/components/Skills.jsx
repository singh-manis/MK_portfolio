import React, { useEffect, useRef } from 'react';

function Skills() {
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Animate progress bar
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
              const progress = progressBar.getAttribute('data-progress');
              setTimeout(() => {
                progressBar.style.width = progress + '%';
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    skillCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate react-svg">
          <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#58a6ff" strokeWidth="2"/>
          <ellipse cx="20" cy="20" rx="7" ry="18" stroke="#58a6ff" strokeWidth="2"/>
          <ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(60 20 20)" stroke="#58a6ff" strokeWidth="2"/>
          <ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(120 20 20)" stroke="#58a6ff" strokeWidth="2"/>
          <circle cx="20" cy="20" r="3.5" fill="#7c3aed"/>
        </svg>
      ),
      title: "Frontend Development",
      description: "Learning React, HTML/CSS, JavaScript, and modern web development frameworks",
      progress: 75
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate rocket-svg">
          <path d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z" fill="#7c3aed" stroke="#58a6ff" strokeWidth="2"/>
          <circle cx="20" cy="20" r="4" fill="#58a6ff"/>
        </svg>
      ),
      title: "Backend Development",
      description: "Exploring Node.js,Express.js, databases, and server-side programming concepts",
      progress: 65
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate disk-svg">
          <circle cx="20" cy="20" r="16" stroke="#58a6ff" strokeWidth="2" fill="#161b22"/>
          <circle cx="20" cy="20" r="8" stroke="#7c3aed" strokeWidth="2" fill="#21262d"/>
          <circle cx="20" cy="20" r="3" fill="#58a6ff"/>
        </svg>
      ),
      title: "Programming Languages",
      description: "Proficient in C++, Java, Python,C, and learning new languages and frameworks",
      progress: 80
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate gradcap-svg">
          <path d="M6 16 L20 8 L34 16 L20 24 Z" fill="#7c3aed" stroke="#58a6ff" strokeWidth="2"/>
          <rect x="16" y="24" width="8" height="6" fill="#161b22" stroke="#58a6ff" strokeWidth="2"/>
          <circle cx="34" cy="16" r="2" fill="#58a6ff"/>
        </svg>
      ),
      title: "Computer Science",
      description: "Data Structures, Algorithms, Software Engineering, and Computer Science fundamentals",
      progress: 85
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="skill-card"
            ref={el => skillCardsRef.current[index] = el}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-progress">
              <div 
                className="progress-bar" 
                data-progress={skill.progress}
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 