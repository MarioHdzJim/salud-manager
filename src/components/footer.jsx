import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 SaludManager - By Mario Hdz</p>
      <div className="footer__links">
        <span>Privacidad</span>
        <span>Términos</span>
        <span>Soporte</span>
      </div>
    </footer>
  );
};

export default Footer;