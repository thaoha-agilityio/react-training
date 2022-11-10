import React from 'react';
import './index.css';

const Footer = (): React.ReactElement => (
  <footer className="footer">
    <div className="about-web">
      <p className="web-info">
        &#169; 2022, Made with <span className="heart"> &hearts;</span> by
        <a href=""> nidves.com</a>
      </p>
      <p className="contact-web">
        <a href="">Documentation</a>
        <a href=""> Support</a>
      </p>
    </div>
  </footer>
);

export default Footer;
