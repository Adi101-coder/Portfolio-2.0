import React, { useState } from 'react';
import '../Stylesheets/Hero.css';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="grain-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">Hi, I'm</span>
          <span className="line highlight">Your Name</span>
          <span className="line">Web Developer</span>
        </h1>
        <p className="hero-description">
          I create beautiful and functional websites with modern technologies.
        </p>
      </div>

      <div className="hero-footer">
        <button className="menu-btn" onClick={toggleMenu}>
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <ThemeToggle />
          <button className="close-menu-btn" onClick={closeMenu}>×</button>
        </div>
        <div className="mobile-nav-columns">
          <ul className="mobile-nav-left-column">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <ul className="mobile-nav-right-column">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
            <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;