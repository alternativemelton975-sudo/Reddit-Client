import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../store/filtersSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(resetFilters());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <button
            className="logo"
            onClick={handleLogoClick}
            aria-label="Reddit Client - Home"
            title="Reset filters and go home"
          >
            <span className="logo-icon">📱</span>
            <span className="logo-text">Reddit Client</span>
          </button>
          <nav className="header-nav">
            <a href="#about" className="header-link">
              Explore
            </a>
            <a href="#contact" className="header-link">
              Support
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
