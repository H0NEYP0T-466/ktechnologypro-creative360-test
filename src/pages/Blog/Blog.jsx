import SectionHeading from '../../components/SectionHeading/SectionHeading';
import BlogCard from '../../components/BlogCard/BlogCard';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Blog.css';

const blogPosts = [
  { title: 'Unveiling the Organic Powerhouse: Deep Diving into SEO with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/seo.png' },
  { title: 'Cultivating Connections: Strategic Social Media Marketing with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/social.png' },
  { title: 'Navigating the Digital Frontier: Staying Ahead in the Evolving Landscape with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/digital.png' },
  { title: 'The Fusion of Power: Maximizing Impact Through the Synergy of SEO and Google Ads', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/ads.png' },
  { title: 'The Complete Guide to Local SEO in 2026', excerpt: 'Learn how to dominate local search results and attract more customers from your area.', image: '/images/blog/seo.png' },
  { title: 'Why Your Business Needs a Digital Marketing Strategy', excerpt: 'A comprehensive look at why every business needs a data-driven digital marketing approach.', image: '/images/blog/digital.png' },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero" id="blog-hero">
        <div className="blog-hero__glow" />
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="blog-hero__title">Our <span className="gradient-text">Blog</span></h1>
            <p className="blog-hero__sub">Worth A Read! Dive Into Our Collection Of Engaging Blog Posts.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="blog-grid-section section" id="blog-grid">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Articles" title="Latest From Our Blog" />
          </ScrollReveal>
          <div className="blog-page-grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <BlogCard title={post.title} excerpt={post.excerpt} image={post.image} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
