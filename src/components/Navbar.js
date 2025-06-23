import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css'; // ✅ correct path to your global styles

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false); // Close menu on language switch
  };

  return (
    <nav className={`navbar ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src="/images/dearteacher-logo.png" alt="Logo" className="nav-logo" />
        <span>#MyDearTeacher</span>
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>{t('navHome')}</NavLink></li>
        <li><NavLink to="/mission" onClick={() => setMenuOpen(false)}>{t('navMission')}</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>{t('navAbout')}</NavLink></li>
        <li><NavLink to="/books" onClick={() => setMenuOpen(false)}>{t('navBooks')}</NavLink></li>
        <li><NavLink to="/join" onClick={() => setMenuOpen(false)}>{t('navJoin')}</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>{t('navContact')}</NavLink></li>
        <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>{t('navBlog')}</NavLink></li>

        {/* Language Switcher */}
        <li className="lang-switch">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <span>|</span>
          <button onClick={() => changeLanguage('ar')}>ع</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
