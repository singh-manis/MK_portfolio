import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarHeight = () => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const height = style.getPropertyValue('--navbar-height');
    return parseInt(height) || 64;
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - getNavbarHeight() - 8;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar glassy-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo logo-prompt" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <div className="logo-icon" style={{
            background: '#007bff',
            color: 'white',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 22,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>MK</div>
          <span className="logo-text">Portfolio</span>
        </a>
        <button className="mobile-menu-btn" aria-label="Open menu" onClick={() => setMobileMenuOpen(m => !m)}>
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
        {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />}
        <ul className={`nav-links${mobileMenuOpen ? ' open' : ''}`}>
          <li><a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a></li>
          <li><a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a></li>
          <li><a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          >
            Skills
          </a></li>
          <li><a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a></li>
          <li><a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header; 