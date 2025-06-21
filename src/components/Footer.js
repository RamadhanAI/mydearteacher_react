// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <p>© 2025 <strong>#MyDearTeacher Movement</strong> | Founded by Amb. Beauty Tommy</p>
    <p>📧 <a href="mailto:mydearteacherletter@gmail.com">mydearteacherletter@gmail.com</a></p>
    <p>🌐 <a href="https://www.mydearteachermovement.org" target="_blank" rel="noreferrer">mydearteachermovement.org</a></p>

    <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
      <a href="https://facebook.com/share/199AeuoYb9/" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}><FaFacebook /></a>
      <a href="https://instagram.com/mydearteachermovement" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}><FaInstagram /></a>
      <a href="https://tiktok.com/@mydearteacher42" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}><FaTiktok /></a>
      <a href="https://www.youtube.com/@mydearteachermovement" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}><FaYoutube /></a>
    </div>
  </footer>
);

export default Footer;
