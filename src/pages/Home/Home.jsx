import { FaSearch, FaBullhorn, FaLaptopCode, FaShareAlt, FaCheckCircle, FaCog, FaHeadset, FaArrowRight } from 'react-icons/fa';
import GradientButton from '../../components/GradientButton/GradientButton';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import StatCard from '../../components/StatCard/StatCard';
import FAQItem from '../../components/FAQItem/FAQItem';
import BlogCard from '../../components/BlogCard/BlogCard';
import LogoMarquee from '../../components/LogoMarquee/LogoMarquee';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import './Home.css';

const stats = [
  { number: 10, suffix: '+', label: 'Years of Experience' },
  { number: 2000, suffix: '+', label: 'Successful Projects' },
  { number: 1900, suffix: '+', label: 'Happy Clients' },
  { number: 267, suffix: '+', label: '5 Star Reviews' },
];

const services = [
  {
    icon: <FaSearch />,
    title: 'SEO (Search Engine Optimization)',
    description: 'We don\'t just "rank" websites; we occupy the digital high ground. Our team hunts down the most competitive keywords in the USA and dominates them, dragging your brand out of the shadows and onto page one. It\'s high-velocity growth that turns searchers into loyal customers.',
    link: '/search-engine-optimization',
  },
  {
    icon: <FaBullhorn />,
    title: 'Google Ads',
    description: 'Why wait for the algorithm when you can jump the line? We build surgical PPC campaigns that hit your target audience right where they live. No wasted spend, no "fluff" metrics just high-intent clicks and a relentless focus on your North American ROI.',
    link: '/google-ads',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Website Design & Development',
    description: 'A pretty site is useless if it doesn\'t sell. We build high-performance digital storefronts that look stunning and convert like crazy. From sleek UX to lightning-fast backend code, we ensure your first impression is a knockout punch for every visitor.',
    link: '/web-design-development',
  },
  {
    icon: <FaShareAlt />,
    title: 'Social Media Marketing',
    description: 'Stop shouting into the void. We create thumb-stopping content that turns casual scrollers into a dedicated community. Whether it\'s TikTok trends or LinkedIn leadership, we manage your voice across the States to make sure your brand is the only one worth talking about.',
    link: '/social-media-marketing',
  },
];

const solutionCards = [
  { title: 'Data-Driven ROI', desc: 'We swap "gut feelings" for hard analytics. Every move we make is engineered to move the needle on your bottom line.', color: 'rose' },
  { title: 'Precision Engineering', desc: 'We don\'t just "fix" websites, we build digital powerhouses. From technical SEO to high-converting designs.', color: 'purple' },
  { title: 'Scalable Growth', desc: 'Our strategies don\'t plateau. We build marketing engines that compound results month after month.', color: 'orange' },
  { title: 'Total Transparency', desc: 'No smoke. No mirrors. You see every metric, every decision, every dollar — because trust is earned.', color: 'blue' },
];

const teamPills = [
  'Radical Transparency',
  'Competitive Counter-Intelligence',
  'High-Velocity Execution',
];

const serviceBoxes = [
  {
    icon: <FaCog />,
    title: 'Website Operations',
    features: [
      'We detect and resolve issues in real-time',
      'Direct access to human experts, not bots',
      'Hands-off updates for speed & security',
      'Secure daily snapshots at the edge',
      'Built-in ssl, caching, and advanced shields',
    ],
    description: 'Keep your website running smoothly and performing at its best with our full-service maintenance solutions.',
    ctaText: 'Hire Us',
    ctaLink: '/contact-us',
  },
  {
    icon: <FaHeadset />,
    title: 'Flexible Support, Scaled to You',
    features: [
      'Strategic leadership rooted in performance',
      'Digital strategy, funnels & scalability roadmaps',
      'Budget stewardship, audits & creative direction',
      'Direct partnership with your internal or external teams',
      'Expert Email, SMS, CRM & CRO Execution',
    ],
    description: 'Receive actionable, strategic guidance across your entire digital landscape — from ads and analytics to growth — delivered by marketers who\'ve led at the highest level.',
    ctaText: "Let's Chat",
    ctaLink: '/contact-us',
  },
];

const metricCards = [
  { number: '85%', description: 'Websites That Simplify. Decisions That Accelerate.' },
  { number: '4X', description: 'Faster Lead Flow. Smooth User Journey.' },
  { number: '90%', description: 'Higher-Quality Leads. Smarter Targeting. Stronger Results.' },
  { number: '100+', description: 'Brands Elevated Through Performance Marketing.' },
];

const valueProps = [
  { title: 'Wordpress', desc: 'We have built a reputation as a trusted and reliable partner in achieving business success.' },
  { title: 'Tailored Solutions', desc: 'We offer personalized solutions tailored to your specific goals, audience, and industry.' },
  { title: 'Client-Centric Focus', desc: 'Your success is our priority. We prioritize understanding your business goals.' },
];

const trustBadges = [
  'Experienced Team', 'Dedicated Support', 'Positive Client Experiences',
  'Commitment to Excellence', 'Affordable Prices', 'Customer Satisfaction',
  'Customized Strategies', 'Transparency',
];

const caseStudies = [
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

const faqs = [
  { question: 'What Is Local SEO?', answer: 'Local SEO is a strategy that helps your business appear in local search results on Google. It involves optimizing your online presence to attract more business from relevant local searches, including Google Maps and local pack results.' },
  { question: 'How Long Does It Take For SEO To Show Results?', answer: 'SEO is a long-term strategy. Typically, you can start seeing meaningful results within 3-6 months, though some competitive industries may take longer.' },
  { question: 'Why Is Social Media Marketing Important For My Business?', answer: 'Social media marketing helps build brand awareness, engage with your audience, and drive traffic to your website. It\'s essential for modern businesses.' },
  { question: 'Why Choose Our SEO Agency?', answer: 'We are a results-driven agency with over 10 years of experience, 267+ 5-star reviews, and a proven track record.' },
  { question: 'How Much Does Digital Marketing Cost?', answer: 'Digital marketing costs vary based on your goals, industry, and the services you need. We offer customized packages. Contact us for a free consultation.' },
  { question: 'What Makes Creative 360 Pro Different From Other Digital Marketing and Web Design Agencies?', answer: 'We combine technical expertise with creative strategy, backed by real data. Our 50+ specialist in-house team delivers transparent, scalable solutions with a 100% satisfaction guarantee.' },
];

const blogPosts = [
  { title: 'Unveiling the Organic Powerhouse: Deep Diving into SEO with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/seo.png' },
  { title: 'Cultivating Connections: Strategic Social Media Marketing with Creative 360 Pro', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/social.png' },
  { title: 'Navigating the Digital Frontier: Staying Ahead in the Evolving Landscape', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/digital.png' },
  { title: 'The Fusion of Power: Maximizing Impact Through the Synergy of SEO and Google Ads', excerpt: 'Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact\'s tailored SEO strategy!', image: '/images/blog/ads.png' },
];

const marqueeItems1 = ['Best Marketing Agency', 'Digital Strategy', 'Website Design', 'Content'];
const marqueeItems2 = ['SEO That Ranks & Scales', 'Conversion-Focused Design', 'Website Design', 'Performance-Driven Marketing'];

export default function Home() {
  return (
    <div className="home">
      {/* ════════ HERO ════════ */}
      <section className="hero" id="hero-section">
        <div className="hero__bg-lines" />
        <div className="hero__world-map" />
        <div className="hero__top-glow" />
        <div className="container hero__container">
          <div className="hero__content">
            <ScrollReveal animation="fade-up" duration={800}>
              <h1 className="hero__heading">
                <span className="hero__line-stop">STOP SEARCHING —</span>
                <span className="hero__line-found">YOU'VE FOUND THE TOP</span>
                <span className="hero__line-agency">DIGITAL MARKETING AGENCY</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200} duration={800}>
              <p className="hero__subtext">
                Most agencies are great at sending monthly reports full of
                "vanity metrics" that don't pay the bills. We're different. We
                operate like a pack of wolves-calculated, aggressive, and
                hitting your market from every possible angle to ensure
                your competitors never see you coming.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400} duration={800}>
              <GradientButton to="/contact-us" size="lg" id="hero-cta" className="hero__cta">
                BOOK A CALL WITH US <FaArrowRight />
              </GradientButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ TEAM / STORY ════════ */}
      <section className="team-section section" id="team-section">
        <div className="container">
          <div className="team-section__grid">
            <ScrollReveal animation="fade-right" className="team-section__left">
              <div className="team-section__pills">
                {teamPills.map((pill, i) => (
                  <ScrollReveal key={i} animation="fade-right" delay={i * 150} as="div" className={`team-pill team-pill--${i + 1}`}>
                    {pill}
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200} className="team-section__right">
              <span className="section-label">Our Story</span>
              <h2>The Team Behind the Results</h2>
              <p>
                With a powerhouse team of over 50 specialists based in the United States, we provide cutting-edge digital marketing strategies to a diverse portfolio of 400+ American businesses. As the top-rated SEO agency on Google, we maintain a stellar 5-star rating backed by more than 450 verified client reviews.
              </p>
              <p>
                Statistics are great, but what actually matters is your ROI. Our mission is straightforward: we amplify your online visibility to directly increase your revenue. We don't just promise results; we deliver them. By navigating the most competitive search landscapes in the country, we've generated millions in additional profit for our partners, moving them from page ten to the #1 spot.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ END-TO-END SOLUTIONS ════════ */}
      <section className="solutions-section section" id="solutions-section">
        <div className="container">
          <div className="solutions-section__grid">
            <ScrollReveal animation="fade-right" className="solutions-section__left-wrap">
              <h2 className="solutions-section__title">End-to-End Solutions</h2>
              <p className="solutions-section__text">
                Our Methodology Claiming to master every facet of the search landscape is a big swing, but it's one we knock out of the park daily. We operate like a pack of wolves, attacking your competition from every possible flank. We leave no stone unturned.
              </p>
              <p className="solutions-section__text">
                From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As leaders in the American SEO space, we're already deploying the next-gen strategies other agencies are still trying to figure out.
              </p>
              <GradientButton href="https://meetings-na2.hubspot.com/alex-gray" size="md" className="solutions-section__cta">
                Get 30 Min FREE CONSULTATION <FaArrowRight />
              </GradientButton>
            </ScrollReveal>
            <div className="solutions-section__cards">
              {solutionCards.map((card, i) => (
                <ScrollReveal key={i} animation="scale" delay={i * 100} duration={600}>
                  <div className={`solution-card solution-card--${card.color}`}>
                    <h4 className="solution-card__title">{card.title}</h4>
                    <p className="solution-card__desc">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ MARQUEE 1 ════════ */}
      <LogoMarquee items={marqueeItems1} speed={25} />

      {/* ════════ STATS ════════ */}
      <section className="stats-section section" id="stats-section">
        <div className="container">
          <div className="stats-section__grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <StatCard number={s.number} suffix={s.suffix} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="services-section section" id="services-section">
        <div className="container">
          <ScrollReveal animation="fade-up" className="services-section__intro">
            <SectionHeading label="Our Best Services" />
            <p className="services-section__desc">
              Let's be real, most "full-service" agencies in the USA are just collections of freelancers in a trench coat. We're different. We've built a coordinated strike team that hits your market from every conceivable angle. Whether we're rebuilding your digital storefront from the studs up or hunting down the top spot on Google, our approach is relentless, data-backed, and dare we say a little bit obsessed. We don't just offer "services", we provide the high-caliber ammunition your brand needs to blow the competition out of the water.
            </p>
            <GradientButton to="/services" size="lg" className="services-section__view-all">
              VIEW ALL SERVICES <FaArrowRight />
            </GradientButton>
          </ScrollReveal>
          <div className="services-section__grid">
            {services.map((s, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <div className={`service-card-home service-card-home--${i % 2 === 0 ? 'purple' : 'orange'}`}>
                  <div className="service-card-home__icon">
                    {s.icon}
                  </div>
                  <h3 className="service-card-home__title">{s.title}</h3>
                  <p className="service-card-home__desc">{s.description}</p>
                  <span className="service-card-home__link">Learn More <FaArrowRight /></span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICE BOXES ════════ */}
      <section className="service-boxes-section section" id="service-boxes-section">
        <div className="container">
          <div className="service-boxes-section__grid">
            {serviceBoxes.map((box, i) => (
              <ScrollReveal key={i} animation={i === 0 ? 'fade-right' : 'fade-left'} delay={i * 150} duration={700}>
                <div className="service-box">
                  <div className="service-box__icon">{box.icon}</div>
                  <h2 className="service-box__title">{box.title}</h2>
                  <ul className="service-box__features">
                    {box.features.map((f, j) => (
                      <li key={j}><FaCheckCircle className="service-box__check" /> {f}</li>
                    ))}
                  </ul>
                  <p className="service-box__desc">{box.description}</p>
                  <GradientButton to={box.ctaLink} size="md">
                    {box.ctaText}
                  </GradientButton>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ MARQUEE 2 ════════ */}
      <LogoMarquee items={marqueeItems2} speed={30} reverse />

      {/* ════════ BOOST YOUR SALES CTA ════════ */}
      <section className="boost-section section" id="boost-section">
        <div className="container">
          <div className="boost-section__inner">
            <ScrollReveal animation="scale" duration={800}>
              <div className="boost-section__content">
                <span className="boost-section__label">✳ Turn Visitors Into Customers</span>
                <h2 className="boost-section__heading">BOOST<br/>Your Sales</h2>
                <p>Gain a fresh perspective on your most important touchpoints. Let's connect today.</p>
                <GradientButton to="/contact-us" size="lg">
                  Book A Discovery Call <FaArrowRight />
                </GradientButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ METRICS ════════ */}
      <section className="metrics-section section" id="metrics-section">
        <div className="container">
          <div className="metrics-section__grid">
            {metricCards.map((m, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100} duration={600}>
                <div className="metric-card">
                  <span className="metric-card__number">{m.number}</span>
                  <p className="metric-card__desc">{m.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ VALUE PROPS ════════ */}
      <section className="value-section section" id="value-section">
        <div className="container">
          <div className="value-section__grid">
            <div className="value-section__cards">
              {valueProps.map((v, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                  <div className="value-card">
                    <h3 className="value-card__title">{v.title}</h3>
                    <p className="value-card__desc">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="value-section__badges">
                {trustBadges.map((b, i) => (
                  <span key={i} className="value-badge">
                    <FaCheckCircle /> {b}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDIES ════════ */}
      <section className="cases-section section" id="case-studies-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Case Studies" title="Sneak Peek Of Our Work" />
          </ScrollReveal>
          <div className="cases-section__grid">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={i} animation="scale" delay={i * 80} duration={600}>
                <div className="case-card">
                  <div className="case-card__image">
                    <img src={study.image} alt={study.name} loading="lazy" />
                  </div>
                  <div className="case-card__overlay">
                    <h4 className="case-card__name">{study.name}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STRATEGIES CTA ════════ */}
      <section className="strategies-section section" id="strategies-section">
        <div className="container">
          <div className="strategies-section__inner">
            <ScrollReveal animation="fade-right" className="strategies-section__left">
              <span className="strategies-section__label">Let's talk about</span>
              <p className="strategies-section__subtext">Your next level starts with a strategy built to perform. Let's make it happen.</p>
              <GradientButton to="/contact-us" size="lg" className="strategies-section__btn">
                BOOK A DISCOVERY CALL <FaArrowRight />
              </GradientButton>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200} className="strategies-section__right">
              <div className="strategies-section__winning-box">
                <span>WINNING</span>
              </div>
              <div className="strategies-section__strategies-text">
                STRATEGIES
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="faq-section section" id="faq-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeading label="Frequently Asked Questions" title="Got Questions? We've Got Answers!" />
          </ScrollReveal>
          <div className="faq-section__list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={500}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BLOG ════════ */}
      <section className="blog-section section" id="blog-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="blog-section__header">
              <SectionHeading label="Worth A Read!" align="left" />
              <GradientButton to="/articles" variant="secondary" size="sm">
                View All Blogs
              </GradientButton>
            </div>
          </ScrollReveal>
          <div className="blog-section__grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120} duration={600}>
                <BlogCard title={post.title} excerpt={post.excerpt} image={post.image} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
