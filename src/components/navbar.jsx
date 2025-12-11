import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h2 className="navbar__logo">SaludManager</h2>
        <div className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={closeMenu}>Dashboard</Link>
          </li>
          
          <li className="navbar__item">
            <Link to="/pacientes" className="navbar__link" onClick={closeMenu}>Pacientes</Link>
          </li>
          
          <li className="navbar__item">
            <Link to="/profile" className="navbar__link" onClick={closeMenu}>Mi Perfil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;