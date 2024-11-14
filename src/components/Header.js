import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
       <div className="logo">
        {/* Reference the logo directly from the public folder */}
        <img src="/logo.png" alt="Kaushik Consulting Logo" className="logo-image" />
       
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>ABOUTUS </li>
          <li>Services</li>
          <li>Differentiators</li>
          <li>RESOURCES</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <button className="trial-button">Contact</button>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};

export default Header;
