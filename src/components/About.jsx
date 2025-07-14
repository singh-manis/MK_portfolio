import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm a passionate Information Science student with a love for software development and learning new technologies. 
            I'm eager to apply my knowledge and contribute to innovative projects.
          </p>
          <p className="about-description">
            When I'm not coding, you can find me exploring new technologies ,projects, or sharing knowledge with the developer community.
          </p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <span className="feature-text">Fast & Responsive</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <span className="feature-text">Modern Design</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span className="feature-text">Secure Code</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>📸</span>
            <p>Your Photo Here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 