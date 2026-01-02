import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h2>Bear Scene</h2>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className='paragraph'>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Menu</li>
            <li onClick={toggleMenu}>About Us</li>
            <li onClick={toggleMenu}>Contact Us</li>
          </ul>
        </nav> 
        
        <div className={`login-btn paragraph ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={toggleMenu}>Sign In</a>
          <button onClick={toggleMenu}>Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;