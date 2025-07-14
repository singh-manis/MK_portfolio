import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate email-svg">
                  <rect x="3" y="6" width="22" height="16" rx="4" fill="#161b22" stroke="#58a6ff" strokeWidth="2"/>
                  <polyline points="3,8 14,17 25,8" fill="none" stroke="#7c3aed" strokeWidth="2"/>
                </svg>
              </span>
              <span className="contact-text">your.email@example.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate phone-svg">
                  <rect x="7" y="2" width="14" height="24" rx="4" fill="#161b22" stroke="#58a6ff" strokeWidth="2"/>
                  <circle cx="14" cy="22" r="2" fill="#7c3aed"/>
                </svg>
              </span>
              <span className="contact-text">+91 8809000000</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-animate location-svg">
                  <path d="M14 25 C18 19, 23 14, 14 4 C5 14, 10 19, 14 25 Z" fill="#7c3aed" stroke="#58a6ff" strokeWidth="2"/>
                  <circle cx="14" cy="12" r="3" fill="#161b22" stroke="#58a6ff" strokeWidth="2"/>
                </svg>
              </span>
              <span className="contact-text">Bengaluru, India</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">manishkumar200401@gmail.com</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            <span className="btn-text">
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
            </span>
            <span className="btn-icon">
              {isSubmitting ? '⏳' : isSubmitted ? '✓' : '→'}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 