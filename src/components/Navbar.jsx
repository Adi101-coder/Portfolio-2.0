import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-links">
        {/* Removed all desktop navigation elements and mobile search icon */}
      </div>
    </nav>
  );
};

export default Navbar;
