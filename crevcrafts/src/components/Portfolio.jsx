import brochureImage from '../Images/8.jpg'
import websiteImage from '../Images/9.jpg'
import socialImage from '../Images/10.jpg'
import brandImage from '../Images/11.jpg'
import websiteBlueImage from '../Images/12.jpg'
import campaignImage from '../Images/13.jpg'

const projects = [
  {
    title: 'Social Media Campaign & Creative Design',
    category: 'Social Media',
    image: socialImage,
  },
  {
    title: 'Corporate Website Design & Digital Experience',
    category: 'Web & E-Commerce',
    image: websiteBlueImage,
  },
  {
    title: 'Corporate Brochure & Company Profile Design',
    category: 'Design',
    image: brochureImage,
  },
  {
    title: 'Corporate Website Design & Digital Experience',
    category: 'Web & E-Commerce',
    image: websiteImage,
  },
  {
    title: 'Corporate Brand Identity & Visual Branding',
    category: 'Design',
    image: brandImage,
  },
  {
    title: 'Corporate Website Design & Digital Experience',
    category: 'Web & E-Commerce',
    image: campaignImage,
  },
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio__heading">
        <span className="portfolio__eyebrow"><i /> OUR PORTFOLIO</span>
        <h2 id="portfolio-title">Work speaks louder.<br /><strong>So we let ours speak.</strong></h2>
        <p>Every project starts with a different challenge.<br />Different audience. Different ambition. Different story.</p>
      </div>

      <div className="portfolio__summary">
        <p>That's why we don't believe in making everything look the same.</p>
        <p>Here's a look at some of the brands, campaigns, experiences and ideas we've brought to life.</p>
        <a href="#portfolio-work">See Our Work <span aria-hidden="true">↗</span></a>
      </div>

      <div className="portfolio__grid" id="portfolio-work">
        {projects.map((project) => (
          <article className="portfolio-card" key={`${project.title}-${project.image}`}>
            <div className="portfolio-card__image">
              <img src={project.image} alt="" />
            </div>
            <div className="portfolio-card__content">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio