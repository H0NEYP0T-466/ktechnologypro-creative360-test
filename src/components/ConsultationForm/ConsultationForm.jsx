import { useState } from 'react';
import GradientButton from '../GradientButton/GradientButton';
import './ConsultationForm.css';

const inquiryOptions = [
  'SEO',
  'Google Ads',
  'Website Design',
  'Social Media Marketing',
  'Content Marketing',
  'Other',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    inquiringAbout: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — no backend
    alert('Thank you! We\'ll be in touch soon.');
  };

  return (
    <form className="consultation-form" onSubmit={handleSubmit} id="consultation-form">
      <div className="consultation-form__row">
        <div className="consultation-form__field">
          <label htmlFor="cf-firstName">First Name</label>
          <input
            type="text"
            id="cf-firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="consultation-form__field">
          <label htmlFor="cf-lastName">Last Name</label>
          <input
            type="text"
            id="cf-lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="consultation-form__row">
        <div className="consultation-form__field">
          <label htmlFor="cf-phone">Phone Number</label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="consultation-form__field">
          <label htmlFor="cf-email">Email</label>
          <input
            type="email"
            id="cf-email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="consultation-form__row">
        <div className="consultation-form__field">
          <label htmlFor="cf-inquiring">Inquiring About</label>
          <select
            id="cf-inquiring"
            name="inquiringAbout"
            value={formData.inquiringAbout}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="consultation-form__field">
          <label htmlFor="cf-company">Company Name</label>
          <input
            type="text"
            id="cf-company"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <GradientButton type="submit" size="lg" className="consultation-form__submit">
        Submit
      </GradientButton>
    </form>
  );
}
