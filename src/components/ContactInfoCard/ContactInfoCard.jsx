import './ContactInfoCard.css';

export default function ContactInfoCard({ icon, label, value, href }) {
  return (
    <a href={href} className="contact-info-card" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
      <div className="contact-info-card__icon">{icon}</div>
      <h4 className="contact-info-card__label">{label}</h4>
      <p className="contact-info-card__value">{value}</p>
    </a>
  );
}
