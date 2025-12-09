import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h2 className="navbar__logo">SaludManager</h2>
        
        <ul className="navbar__menu">
          {/* Elemento del menú */}
          <li className="navbar__item">
            <Link to="/" className="navbar__link">Dashboard</Link>
          </li>
          
          <li className="navbar__item">
            <Link to="/pacientes" className="navbar__link">Pacientes</Link>
          </li>
          
          <li className="navbar__item">
            <Link to="/profile" className="navbar__link">Mi Perfil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;