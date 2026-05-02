import { Link } from 'react-router-dom';
import { FaPhone, FaTrophy } from 'react-icons/fa';
import GradientButton from '../GradientButton/GradientButton';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="container">
        <div className="cta-banner__inner">
          <p className="cta-banner__guarantee">
            100% Satisfaction Guarantee — Love your site or we revise it free.
          </p>
          <div className="cta-banner__actions">
            <GradientButton to="/contact-us" size="md">
              Get My Free Strategy Call
            </GradientButton>
            <a href="tel:+19735631729" className="cta-banner__call">
              <FaPhone /> Call Now: (973) 563-1729
            </a>
          </div>
          <div className="cta-banner__badges">
            <span className="cta-banner__badge">Response within 1 business hour</span>
            <span className="cta-banner__badge">No contracts, no commitments</span>
            <span className="cta-banner__badge cta-banner__badge--award">
              <FaTrophy /> Best Agency Passaic County NJ 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
