import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-col">
        <img src="/images/dearteacher-logo.png" alt="Logo" className="footer-logo" />
        <p><strong>#MyDearTeacher Movement</strong></p>
        <p>Founded by Amb. Beauty Tommy</p>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <p>📧 <a href="mailto:mydearteacherletter@gmail.com">Email Us</a></p>
        <p>🌐 <a href="https://www.mydearteachermovement.org" target="_blank" rel="noreferrer">Our Website</a></p>
      </div>

      <div className="footer-col">
        <h4>Follow Us</h4>
        <div className="footer-socials">
          <a href="https://facebook.com/share/199AeuoYb9/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/mydearteachermovement" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com/@mydearteacher42" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://www.youtube.com/@mydearteachermovement" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      © 2025 #MyDearTeacher Movement. All rights reserved.
    </div>
  </footer>
);

export default Footer;
