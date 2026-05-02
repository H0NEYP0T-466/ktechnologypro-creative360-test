import { Link } from 'react-router-dom';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, link = '#', features = [] }) {
  return (
    <Link to={link} className="service-card" id={`service-card-${title?.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="service-card__icon-wrap">
        <div className="service-card__icon">{icon}</div>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      {features.length > 0 && (
        <ul className="service-card__features">
          {features.map((f, i) => (
            <li key={i} className="service-card__feature">
              <span className="service-card__check">✓</span> {f}
            </li>
          ))}
        </ul>
      )}
      <span className="service-card__link">Learn More →</span>
    </Link>
  );
}
