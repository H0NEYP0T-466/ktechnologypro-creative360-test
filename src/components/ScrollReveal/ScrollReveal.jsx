import useScrollReveal from '../../hooks/useScrollReveal';
import './ScrollReveal.css';

/**
 * Wrapper component for scroll-triggered reveal animations.
 *
 * @param {'fade-up'|'fade-down'|'fade-left'|'fade-right'|'scale'|'fade'} animation
 * @param {number} delay - Delay in ms before animation starts
 * @param {number} duration - Duration of the animation in ms
 * @param {number} threshold - IntersectionObserver threshold
 * @param {string} className - Additional class names
 * @param {string} as - HTML element to render (default: 'div')
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  style = {},
  ...props
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
