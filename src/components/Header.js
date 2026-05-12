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
            className="logo-button"
            onClick={handleLogoClick}
            aria-label="Reddit Client - Home"
            title="Reset filters and go home"
          >
            <svg className="logo-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff4500', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#fd5700', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Outer circle background */}
              <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" opacity="0.1" />
              {/* Main face circle */}
              <circle cx="24" cy="24" r="20" fill="url(#logoGradient)" />
              {/* Eyes */}
              <circle cx="16" cy="18" r="3" fill="white" />
              <circle cx="32" cy="18" r="3" fill="white" />
              {/* Smile */}
              <path d="M 16 26 Q 24 32 32 26" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="logo-text">Reddit Client</span>
          </button>
          <nav className="header-nav">
            <a href="#explore" className="header-link">
              Explore
            </a>
            <a href="#support" className="header-link">
              Support
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
