
import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Navbar.css';
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#pages">Pages</a>
        <a href="#blog">Our Blog</a>
        <a href="#gallery">Gallery</a>
        <a href="#contacts">Contacts</a>
      </div>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
