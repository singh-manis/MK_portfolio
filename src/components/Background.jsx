import React, { useEffect, useRef } from 'react';
import './Background.css';

function Background() {
  const canvasRef = useRef(null);

  // Canvas particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `rgba(88,166,255,${Math.random() * 0.3 + 0.1})`
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Floating shapes + SVG code icons
  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="bg-grid" />
      <div className="floating-shapes">
        <div className="floating-shape shape1" />
        <div className="floating-shape shape2" />
        <div className="floating-shape shape3" />
        <div className="floating-shape shape4" />
        <div className="floating-shape shape5" />
        {/* SVG/code icons */}
        <span className="floating-icon icon1">&#60;/&#62;</span>
        <span className="floating-icon icon2">{`{}`}</span>
        <span className="floating-icon icon3">$</span>
        <span className="floating-icon icon4">%</span>
      </div>
    </>
  );
}

export default Background; 