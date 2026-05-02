import ConsultationForm from '../ConsultationForm/ConsultationForm';
import './ConsultationSection.css';

export default function ConsultationSection() {
  return (
    <section className="consultation-section" id="consultation-section">
      <div className="container">
        <div className="consultation-section__inner">
          <div className="consultation-section__left">
            <div className="consultation-section__lets-talk">
              <span className="consultation-section__lets">Let's</span>
              <span className="consultation-section__talk">Talk!</span>
            </div>
          </div>
          <div className="consultation-section__right">
            <h2 className="consultation-section__title">Claim Your Free Consultation</h2>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
