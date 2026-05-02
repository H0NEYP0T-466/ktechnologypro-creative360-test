import { FaSearch, FaChartLine, FaDatabase, FaRocket, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import StatCard from '../../components/StatCard/StatCard';
import FAQItem from '../../components/FAQItem/FAQItem';
import GradientButton from '../../components/GradientButton/GradientButton';
import LogoMarquee from '../../components/LogoMarquee/LogoMarquee';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './About.css';

const coreValues = [
  { icon: <FaSearch />, title: 'Dominate Search Results', desc: 'Stop being invisible. We use advanced SEO and algorithmic insights to put your brand where your customers are looking.' },
  { icon: <FaChartLine />, title: 'Optimize User Experience', desc: 'A pretty site isn\'t enough. We design intuitive, high-speed interfaces that keep users moving toward the "checkout" button.' },
  { icon: <FaDatabase />, title: 'Data-driven Insights', desc: 'Stop guessing. We turn complex analytics into clear action plans, ensuring every dollar of your budget is working for you.' },
  { icon: <FaRocket />, title: 'Future-proof Scale', desc: 'Your business is growing. We provide the technical infrastructure and marketing agility to scale without hitting a ceiling.' },
];

const stats = [
  { number: 10, suffix: '+', label: 'Years of Industry Excellence' },
  { number: 100, suffix: '%', label: 'Data-Driven Strategies' },
  { number: 15000, suffix: '+', label: 'High-Volume Keywords Ranked' },
  { number: 500, suffix: '+', label: 'Global Growth Partners' },
];

const perspectives = [
  { title: 'Our Mission', desc: 'At Creative 360 Pro, we believe in long-term success — not just quick wins. Our mission is to empower businesses with strategic digital marketing solutions that drive real growth.' },
  { title: 'Our Vision', desc: 'To be the leading Digital Marketing Company in the world, helping businesses of all sizes achieve their online goals and reach their maximum potential.' },
  { title: 'Our Expertise', desc: 'Our expertise plays a vital role in the success of your business. We craft high-quality digital marketing solutions, working smarter, harder, and collaboratively.' },
  { title: 'Our History', desc: "We're a leader in digital marketing, offering a comprehensive suite of services to empower your brand. Our transparent and sustainable approach delivers results that last." },
];

const marqueeItems = [
  'Quality', 'Personalization', 'Reliability', 'Collaboration',
  'Innovation', 'Customer Focus', 'Long-Term Relationships',
  'Positive Experience', 'Trustworthiness', 'Passion', 'Customer Support',
];

const faqs = [
  { question: 'What Is Local SEO?', answer: 'Local SEO is a strategy that helps your business appear in local search results on Google. It involves optimizing your online presence to attract more business from relevant local searches.' },
  { question: 'How Long Does It Take For SEO To Show Results?', answer: 'SEO is a long-term strategy. Typically, you can start seeing meaningful results within 3-6 months.' },
  { question: 'Why Is Social Media Marketing Important For My Business?', answer: "Social media marketing helps build brand awareness, engage with your audience, and drive traffic to your website." },
  { question: 'Why Choose Our SEO Agency?', answer: 'We are a results-driven agency with over 10 years of experience and 267+ 5-star reviews.' },
  { question: 'How Much Does Digital Marketing Cost?', answer: 'Digital marketing costs vary based on your goals, industry, and the services you need. Contact us for a free consultation.' },
  { question: 'What Makes Creative 360 Pro Different From Other Digital Marketing and Web Design Agencies?', answer: 'We combine technical expertise with creative strategy, backed by real data and results.' },
];

export default function About() {
  return (
    <div className="about">
      {/* ════════ HERO ════════ */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero__glow" />
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="about-hero__title">About <span className="gradient-text">Creative 360 Pro</span></h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ FOUNDER ════════ */}
      <section className="about-founder section" id="about-founder">
        <div className="container">
          <div className="about-founder__grid">
            <ScrollReveal animation="fade-right">
              <div className="about-founder__image">
                <div className="about-founder__image-inner" />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200} className="about-founder__content">
              <p>
                Alex Gray is the visionary founder of Creative 360 Pro, a distinguished marketing firm headquartered in New Jersey. His professional trajectory is defined by a rigorous six-year tenure in the IT sector, complemented by multiple advanced technical certifications.
              </p>
              <blockquote className="about-founder__quote">
                "Our mission is to spearhead digital dominance for our clients through unrivaled technical precision and aggressive, data-driven growth strategies."
              </blockquote>
              <p>
                Creative 360 Pro holds the prestigious status of a Google Premier Partner, awarded three consecutive times for industry-leading results. While our digital footprint is nationwide, we maintain a firm physical presence in New Jersey.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="about-why section" id="about-why">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              label="Why Creative 360 Pro"
              title="Why Choose Creative 360 Pro?"
              subtitle="Rather than lean on hyperbole or grand claims, we prefer to let the data speak for itself."
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="about-why__content">
              <p>
                We are trusted by over 400 businesses across the USA. We have generated millions in additional revenue for our partners. We dominate the search rankings ourselves, proving our methods work.
              </p>
              <p>
                Our USA headquarters houses over 50 in-house experts, and we maintain a 4.8/5-star rating from over 450 verified reviews. We are results-obsessed — if we don't deliver on our promises, you don't pay.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ CORE VALUES ════════ */}
      <section className="about-values section" id="about-values">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              label="Strategic Solutions For The Modern Economy"
              title="We Don't Just Build Websites We Build Digital Legacies"
            />
          </ScrollReveal>
          <div className="about-values__grid">
            {coreValues.map((v, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div className="about-value-card">
                  <div className="about-value-card__icon">{v.icon}</div>
                  <h3 className="about-value-card__title">{v.title}</h3>
                  <p className="about-value-card__desc">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className="about-stats section" id="about-stats">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              label="Statistics"
              title="We Empower Brands To Dominate The Digital Landscape"
            />
          </ScrollReveal>
          <div className="about-stats__grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <StatCard number={s.number} suffix={s.suffix} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ VALUES MARQUEE ════════ */}
      <LogoMarquee items={marqueeItems} speed={35} />

      {/* ════════ STRATEGIES CTA ════════ */}
      <section className="about-strategies section" id="about-strategies">
        <div className="container">
          <div className="about-strategies__inner">
            <ScrollReveal animation="fade-right">
              <div className="about-strategies__decorative">
                <span>WINNING</span>
                <span>STRATEGIES</span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200} className="about-strategies__content">
              <span className="about-strategies__label">Let's talk about</span>
              <h2 className="gradient-text">STRATEGIES</h2>
              <p>Your next level starts with a strategy built to perform. Let's make it happen.</p>
              <GradientButton to="/contact-us" size="lg">
                Book A Discovery Call
              </GradientButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ COMPANY PERSPECTIVE ════════ */}
      <section className="about-perspective section" id="about-perspective">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              label="Our Company Perspective"
              subtitle="Creative 360 Pro provides many ways to market your business or brand. We provide effective ways for our customers to reach a more targeted audience and brand visibility."
            />
          </ScrollReveal>
          <div className="about-perspective__grid">
            {perspectives.map((p, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="perspective-card">
                  <span className="perspective-card__badge">CREATIVE 360 PRO</span>
                  <h3 className="perspective-card__title">{p.title}</h3>
                  <p className="perspective-card__desc">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="about-faq section" id="about-faq">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Frequently Asked Questions" title="Got Questions? We've Got Answers!" />
          </ScrollReveal>
          <div className="about-faq__list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={500}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
