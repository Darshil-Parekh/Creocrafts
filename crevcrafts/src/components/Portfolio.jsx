function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio__heading">
        <span className="portfolio__eyebrow"><i /> OUR PORTFOLIO</span>
        <h2 id="portfolio-title">Work speaks louder.<br /><strong>So we let ours speak.</strong></h2>
        <p>Every project starts with a different challenge.<br />Different audience. Different ambition. Different story.</p>
      </div>

      <div className="portfolio__summary" id="portfolio-work">
        <p>That's why we don't believe in making everything look the same.</p>
        <p>Here's a look at some of the brands, campaigns, experiences and ideas we've brought to life.</p>
        <a href="#portfolio-work">See Our Work <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default Portfolio