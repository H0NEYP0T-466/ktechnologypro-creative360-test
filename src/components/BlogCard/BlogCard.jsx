import './BlogCard.css';

export default function BlogCard({ tag = 'Blog', title, excerpt, image, link = '#' }) {
  return (
    <a href={link} className="blog-card" id={`blog-${title?.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="blog-card__image-wrap">
        <div className="blog-card__image" style={{ backgroundColor: '#1a1a2e' }}>
          {image && <img src={image} alt={title} loading="lazy" />}
        </div>
        <span className="blog-card__tag">{tag}</span>
      </div>
      <div className="blog-card__content">
        <h4 className="blog-card__title">{title}</h4>
        <p className="blog-card__excerpt">{excerpt}</p>
      </div>
    </a>
  );
}
