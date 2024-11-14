import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/logo.png" alt="Kaushik Consulting Logo" className="logo-image" />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>ABOUT US</li>
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
