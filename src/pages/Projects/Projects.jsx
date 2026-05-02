import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Projects.css';

const projects = [
  { name: 'Trektek Technology Solutions', image: '/images/cases/trektek.png' },
  { name: 'Venus Vogue', image: '/images/cases/venus-vogue.png' },
  { name: 'MY RV Services LLC', image: '/images/cases/rv-services.png' },
  { name: 'Boney Auto Enhancement Center LLC', image: '/images/cases/boney-auto.png' },
  { name: 'Aum Cellars', image: '/images/cases/aum-cellars.png' },
  { name: 'Roofing and Siding Wi Pros', image: '/images/cases/roofing.png' },
  { name: 'Ben\'s 24 Hour Towing', image: '/images/cases/towing.png' },
  { name: 'Health Haven Concierge', image: '/images/cases/health-haven.png' },
  { name: 'Donation Separation', image: '/images/cases/donation.png' },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero" id="projects-hero">
        <div className="projects-hero__glow" />
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1 className="projects-hero__title">Our <span className="gradient-text">Projects</span></h1>
            <p className="projects-hero__sub">A sneak peek of the results we deliver for businesses across the USA.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="projects-grid-section section" id="projects-grid">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Case Studies" title="Sneak Peek Of Our Work" />
          </ScrollReveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={i} animation="scale" delay={i * 80} duration={600}>
                <div className="project-card">
                  <div className="project-card__image">
                    <img src={project.image} alt={project.name} loading="lazy" />
                  </div>
                  <div className="project-card__overlay">
                    <h3 className="project-card__name">{project.name}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
