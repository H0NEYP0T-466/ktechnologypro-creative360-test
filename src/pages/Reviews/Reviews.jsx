import { FaStar } from 'react-icons/fa';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Reviews.css';

const reviews = [
  { name: 'John M.', rating: 5, text: 'Creative 360 Pro transformed our online presence. Our organic traffic increased by 300% in just 6 months. Highly recommend their SEO services!' },
  { name: 'Sarah K.', rating: 5, text: 'The team at Creative 360 Pro is exceptional. They built us a beautiful website that converts visitors into customers. Best investment we\'ve made.' },
  { name: 'Michael R.', rating: 5, text: 'We\'ve been working with Creative 360 Pro for over 2 years now. Their Google Ads campaigns consistently deliver a 5X ROI. Incredible team!' },
  { name: 'Emily T.', rating: 5, text: 'From SEO to social media management, Creative 360 Pro handles everything. Our revenue has doubled since we started working with them.' },
  { name: 'David L.', rating: 5, text: 'Professional, responsive, and results-driven. Creative 360 Pro is the best digital marketing agency we\'ve ever worked with. Period.' },
  { name: 'Lisa W.', rating: 5, text: 'The ROI we\'ve seen from their marketing campaigns has been phenomenal. They truly understand how to drive results for small businesses.' },
];

export default function Reviews() {
  return (
    <div className="reviews-page">
      <section className="reviews-hero" id="reviews-hero">
        <div className="reviews-hero__glow" />
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="reviews-hero__title">Client <span className="gradient-text">Reviews</span></h1>
            <p className="reviews-hero__sub">267+ 5-Star Reviews — Our clients love working with us.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="reviews-grid-section section" id="reviews-grid">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Testimonials" title="What Our Clients Say" />
          </ScrollReveal>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <div className="review-card">
                  <div className="review-card__stars">
                    {[...Array(r.rating)].map((_, j) => (
                      <FaStar key={j} className="review-card__star" />
                    ))}
                  </div>
                  <p className="review-card__text">"{r.text}"</p>
                  <div className="review-card__author">
                    <div className="review-card__avatar">{r.name[0]}</div>
                    <span className="review-card__name">{r.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
