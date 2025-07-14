import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const revealSections = () => {
      document.querySelectorAll('.section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add('revealed');
        }
      });
    };
    revealSections();
    window.addEventListener('scroll', revealSections);
    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  return (
    <>
      <Background />
      <Header />
      <ScrollToTop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
