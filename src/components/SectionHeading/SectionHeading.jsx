import './SectionHeading.css';

export default function SectionHeading({ label, title, highlight, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {label && <span className="section-heading__label">{label}</span>}
      {title && (
        <h2 className="section-heading__title">
          {highlight ? (
            <>
              {title.split(highlight)[0]}
              <span className="gradient-text">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </h2>
      )}
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
