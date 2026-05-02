import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Projects.css';

const projects = [
  'Trektek Technology Solutions', 'Venus Vogue', 'MY RV Services LLC',
  'Boney Auto Enhancement Center LLC', 'Aum Cellars', 'Roofing and Siding Wi Pros',
  'Ben\'s 24 Hour Towing', 'Health Haven Concierge', 'Donation Separation',
];

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero" id="projects-hero">
        <div className="projects-hero__glow" />
        <div className="container">
          <h1 className="projects-hero__title">Our <span className="gradient-text">Projects</span></h1>
          <p className="projects-hero__sub">A sneak peek of the results we deliver for businesses across the USA.</p>
        </div>
      </section>

      <section className="projects-grid-section section" id="projects-grid">
        <div className="container">
          <SectionHeading label="Case Studies" title="Sneak Peek Of Our Work" />
          <div className="projects-grid">
            {projects.map((name, i) => (
              <div key={i} className="project-card">
                <div className="project-card__image" />
                <div className="project-card__overlay">
                  <h3 className="project-card__name">{name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
