import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-btn${visible ? ' visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <span className="caret">&#60;/&#62;</span>
    </button>
  );
}

export default ScrollToTop; 