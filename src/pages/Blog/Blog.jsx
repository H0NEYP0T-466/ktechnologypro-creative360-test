import SectionHeading from '../../components/SectionHeading/SectionHeading';
import BlogCard from '../../components/BlogCard/BlogCard';
import './Blog.css';

const blogPosts = [
  { title: 'Unveiling the Organic Powerhouse: Deep Diving into SEO with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!' },
  { title: 'Cultivating Connections: Strategic Social Media Marketing with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!' },
  { title: 'Navigating the Digital Frontier: Staying Ahead in the Evolving Landscape with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!' },
  { title: 'The Fusion of Power: Maximizing Impact Through the Synergy of SEO and Google Ads', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!' },
  { title: 'The Complete Guide to Local SEO in 2026', excerpt: 'Learn how to dominate local search results and attract more customers from your area.' },
  { title: 'Why Your Business Needs a Digital Marketing Strategy', excerpt: 'A comprehensive look at why every business needs a data-driven digital marketing approach.' },
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero" id="blog-hero">
        <div className="blog-hero__glow" />
        <div className="container">
          <h1 className="blog-hero__title">Our <span className="gradient-text">Blog</span></h1>
          <p className="blog-hero__sub">Worth A Read! Dive Into Our Collection Of Engaging Blog Posts.</p>
        </div>
      </section>

      <section className="blog-grid-section section" id="blog-grid">
        <div className="container">
          <SectionHeading label="Articles" title="Latest From Our Blog" />
          <div className="blog-page-grid">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} title={post.title} excerpt={post.excerpt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
