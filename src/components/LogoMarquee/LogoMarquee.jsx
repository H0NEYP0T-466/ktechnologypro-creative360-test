import './LogoMarquee.css';

export default function LogoMarquee({ items, reverse = false, speed = 30 }) {
  const list = [...items, ...items];

  return (
    <div className="logo-marquee" style={{ '--marquee-speed': `${speed}s` }}>
      <div className={`logo-marquee__track ${reverse ? 'logo-marquee__track--reverse' : ''}`}>
        {list.map((item, i) => (
          <span key={i} className="logo-marquee__item">
            {item}
            <span className="logo-marquee__separator">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
