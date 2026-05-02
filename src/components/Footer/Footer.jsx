import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle, FaTiktok } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import './Footer.css';

const menuLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/case-studies' },
  { label: 'Blog', path: '/articles' },
  { label: 'Review', path: '/review' },
  { label: 'Contact', path: '/contact-us' },
];

const serviceLinks = [
  { label: 'SEO', path: '/search-engine-optimization' },
  { label: 'Google Ads', path: '/google-ads' },
  { label: 'Website Design', path: '/web-design-development' },
  { label: 'Social Media Marketing', path: '/social-media-marketing' },
];

const otherLinks = [
  { label: 'Refund Policy', path: '/refund-policy' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cancellation Policy', path: '/cancellation-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
];

const socialIcons = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaGoogle, href: '#', label: 'Google' },
  { Icon: FaTiktok, href: '#', label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer id="site-footer" className="footer">
      <div className="container">
        {/* Contact Bar */}
        <div className="footer__contact-bar">
          <a href="mailto:Hello@creative360pro.com" className="footer__contact-item">
            <FaEnvelope /> Hello@creative360pro.com
          </a>
          <a href="tel:+19735631729" className="footer__contact-item">
            <FaPhone /> (973) 563-1729
          </a>
          <a
            href="https://www.google.com/maps/place/Creative+360+Pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-item"
          >
            <FaLocationDot /> 51 Frances St, Clifton, NJ 07014, US
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="footer__grid">
          <div className="footer__col">
            <h5 className="footer__heading">Menu</h5>
            <ul className="footer__link-list">
              {menuLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Services</h5>
            <ul className="footer__link-list">
              {serviceLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Other Pages</h5>
            <ul className="footer__link-list">
              {otherLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Follow us:</h5>
            <div className="footer__socials">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-icon"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright © {new Date().getFullYear()} Creative 360 Pro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
