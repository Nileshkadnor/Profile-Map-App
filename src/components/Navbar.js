import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="horizontal-navbar">
      <div className="navbar-profile">
        <img src="profile.jpeg" alt="Profile" />
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="navbar-logo">
        <Link to="/">Profile Viewer</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/admin" onClick={toggleMenu}>Admin Panel</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
