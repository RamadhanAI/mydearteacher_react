import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src="/images/dearteacher-logo.png"
          alt="MyDearTeacher Logo"
          className="nav-logo"
        />
        <span style={{
          fontWeight: 'bold',
          color: 'white',
          marginLeft: '0.5rem',
          fontSize: '1.1rem'
        }}>#MyDearTeacher</span>
      </Link>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/join">Join Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
