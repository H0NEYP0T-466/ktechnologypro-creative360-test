import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle, FaTiktok } from 'react-icons/fa';
import ContactInfoCard from '../../components/ContactInfoCard/ContactInfoCard';
import GradientButton from '../../components/GradientButton/GradientButton';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Contact.css';

const contactCards = [
  {
    icon: <FaPhone />,
    label: 'Hotline:',
    value: '(973) 563-1729',
    href: 'tel:+19735631729',
  },
  {
    icon: <FaLocationDot />,
    label: 'Address:',
    value: '51 Frances St, Clifton, NJ 07014, US',
    href: 'https://www.google.com/maps/place/Creative+360+Pro/',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email:',
    value: 'Hello@creative360pro.com',
    href: 'mailto:Hello@creative360pro.com',
  },
];

const socialIcons = [
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaLinkedinIn, label: 'LinkedIn' },
  { Icon: FaInstagram, label: 'Instagram' },
  { Icon: FaGoogle, label: 'Google' },
  { Icon: FaTiktok, label: 'TikTok' },
];

export default function Contact() {
  return (
    <div className="contact-page">
      {/* ════════ CONTACT CARDS ════════ */}
      <section className="contact-cards-section section" id="contact-cards">
        <div className="contact-cards-section__glow" />
        <div className="container">
          <div className="contact-cards-section__grid">
            {contactCards.map((c, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <ContactInfoCard icon={c.icon} label={c.label} value={c.value} href={c.href} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ MAIN CONTACT ════════ */}
      <section className="contact-main section" id="contact-main">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="contact-main__inner">
              <div className="contact-main__info">
                <h2>Excited About The Project? <span className="gradient-text">Please Get In Touch.</span></h2>
                <p>
                  Looking for a data-driven, results-oriented approach to marketing? Contact us for a personalized approach tailored to help your business succeed.
                </p>
                <GradientButton href="https://meetings-na2.hubspot.com/alex-gray" size="lg">
                  Get 30 Min FREE CONSULTATION
                </GradientButton>
                <div className="contact-main__socials">
                  <h4>Follow Us:</h4>
                  <div className="contact-main__social-icons">
                    {socialIcons.map(({ Icon, label }) => (
                      <a key={label} href="#" className="contact-main__social-icon" aria-label={label}>
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
