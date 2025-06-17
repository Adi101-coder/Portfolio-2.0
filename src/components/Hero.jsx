import React, { useEffect, useState } from 'react';
import '../Stylesheets/Hero.css';

const TITLES = [
  'Full Stack Developer',
  'ML Enthusiast',
  'Competitive Programmer'
];

const Hero = ({ theme }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setFade(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-background ${theme === 'light' ? 'light-dots' : ''}`}>
        <div className="grain-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm Adit<br />
          <span
            className={`hero-animated-title fade-effect${fade ? ' fade-in' : ' fade-out'}`}
          >
            {TITLES[titleIndex]}
          </span>
        </h1>
        <p className="hero-description">

          
        Passionate about building impactful digital solutions at the intersection of Full Stack Development, Machine Learning, and Competitive Programming.
        </p>
        <div className="hero-actions">
          <button className="download-resume-btn">
            Download Resume <i className="fas fa-download"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;