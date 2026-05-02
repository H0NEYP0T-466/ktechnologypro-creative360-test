import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import './Header.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/case-studies' },
  { label: 'Reviews', path: '/review' },
  { label: 'Blog', path: '/articles' },
  { label: 'Contact', path: '/contact-us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header id="site-header" className={`header ${isScrolled ? 'header--scrolled' : ''} ${isHome ? 'header--home' : 'header--inner'}`}>
      <div className="header__inner container">
        {/* Logo */}
        <Link to="/" className="header__logo" id="header-logo">
          <span className="header__logo-creative">creative</span>
          <span className="header__logo-360">360</span>
          <span className="header__logo-pro">pro</span>
        </Link>

        {/* Center Hamburger (homepage) or Nav Links (inner pages) */}
        {isHome ? (
          <button
            className="header__center-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            id="hamburger-btn"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        ) : (
          <nav className="header__nav-desktop" id="main-navigation-desktop">
            <ul className="header__nav-list">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`header__nav-link ${location.pathname === path ? 'header__nav-link--active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Right CTA */}
        <a href="tel:+19735631729" className="header__cta-btn" id="header-call-btn">
          CALL US NOW <FaArrowRight className="header__cta-arrow" />
        </a>

        {/* Mobile hamburger for inner pages */}
        {!isHome && (
          <button
            className="header__mobile-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        )}
      </div>

      {/* Full-screen mobile nav overlay */}
      <nav className={`header__mobile-nav ${mobileOpen ? 'header__mobile-nav--open' : ''}`}>
        <ul className="header__mobile-list">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`header__mobile-link ${location.pathname === path ? 'header__mobile-link--active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:+19735631729" className="header__mobile-call">
          <FaPhone /> (973) 563-1729
        </a>
      </nav>

      {mobileOpen && <div className="header__overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
