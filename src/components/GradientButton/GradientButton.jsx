import { Link } from 'react-router-dom';
import './GradientButton.css';

export default function GradientButton({ children, to, href, onClick, variant = 'primary', size = 'md', className = '', ...props }) {
  const classes = `gradient-btn gradient-btn--${variant} gradient-btn--${size} ${className}`.trim();

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>{children}</a>;
  }

  return <button className={classes} onClick={onClick} {...props}>{children}</button>;
}
