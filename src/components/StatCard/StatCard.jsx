import { useEffect, useRef, useState } from 'react';
import './StatCard.css';

export default function StatCard({ number, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = parseInt(number);
    if (isNaN(target)) { setCount(number); return; }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-card__circle">
        <span className="stat-card__number">
          {typeof count === 'number' ? count : number}
          <span className="stat-card__suffix">{suffix}</span>
        </span>
      </div>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}
