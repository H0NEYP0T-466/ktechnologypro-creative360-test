import { FaSearch, FaBullhorn, FaLaptopCode, FaShareAlt, FaComments, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import GradientButton from '../../components/GradientButton/GradientButton';
import './Services.css';

const services = [
  {
    icon: <FaSearch />,
    title: 'SEO (Search Engine Optimization)',
    description: 'We don\'t just "rank" websites; we occupy the digital high ground. Our team hunts down the most competitive keywords in the USA and dominates them, dragging your brand out of the shadows and onto page one.',
    link: '/search-engine-optimization',
  },
  {
    icon: <FaBullhorn />,
    title: 'Google Ads',
    description: 'Why wait for the algorithm when you can jump the line? We build surgical PPC campaigns that hit your target audience right where they live. No wasted spend, no "fluff" metrics — just high-intent clicks.',
    link: '/google-ads',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Website Design & Development',
    description: "A pretty site is useless if it doesn't sell. We build high-performance digital storefronts that look stunning and convert like crazy.",
    link: '/web-design-development',
  },
  {
    icon: <FaShareAlt />,
    title: 'Social Media Marketing',
    description: 'Stop shouting into the void. We create thumb-stopping content that turns casual scrollers into a dedicated community.',
    link: '/social-media-marketing',
  },
];

const trustCards = [
  { icon: <FaComments />, title: 'Transparent Communication', desc: 'We keep you in the loop at every step. No surprises, no hidden agendas — just honest, clear communication from day one.' },
  { icon: <FaUsers />, title: 'Dedicated Support', desc: 'Your success is backed by a dedicated team that is always available to answer questions, adjust strategies, and provide guidance.' },
  { icon: <FaStar />, title: 'Proven Expertise', desc: 'With 10+ years in the game and 267+ 5-star reviews, our track record speaks louder than any sales pitch ever could.' },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* ════════ HERO ════════ */}
      <section className="services-hero" id="services-hero">
        <div className="services-hero__glow" />
        <div className="container">
          <h1 className="services-hero__title">Our <span className="gradient-text">Services</span></h1>
          <p className="services-hero__subtitle">
            We deliver elite digital marketing solutions that drive measurable results for businesses across the USA.
          </p>
        </div>
      </section>

      {/* ════════ SERVICE GRID ════════ */}
      <section className="services-grid-section section" id="services-grid">
        <div className="container">
          <SectionHeading
            label="What We Offer"
            title="Full-Service Digital Marketing"
            subtitle="From SEO to social media, we've got every angle covered."
          />
          <div className="services-grid-section__grid">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TRUST SECTION ════════ */}
      <section className="services-trust section" id="services-trust">
        <div className="container">
          <div className="services-trust__grid">
            {trustCards.map((t, i) => (
              <div key={i} className="trust-card">
                <div className="trust-card__icon">{t.icon}</div>
                <h3 className="trust-card__title">{t.title}</h3>
                <p className="trust-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="services-cta section" id="services-cta">
        <div className="container">
          <div className="services-cta__inner">
            <h2>Ready To Dominate Your Market?</h2>
            <p>100% Satisfaction Guarantee — Love your site or we revise it free.</p>
            <div className="services-cta__actions">
              <GradientButton to="/contact-us" size="lg">
                Get My Free Strategy Call
              </GradientButton>
              <GradientButton href="tel:+19735631729" variant="secondary" size="lg">
                Call Now: (973) 563-1729
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
