import chessImage from '../Images/chess.png'

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__intro">
        <div>
          <span className="services__eyebrow"><i /> SERVICES</span>
          <h2 id="services-title">We make<br /><strong>brands move.</strong></h2>
        </div>
        <div className="services__summary">
          <p>
            From the first thought to the final click, we bring strategy,
            creativity and technology together to build businesses that people
            want to engage with.
          </p>
          <a href="#services-list">Explore Our Services <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Strategy</h3>
          <p className="service-card__tagline">Think before you make it.</p>
          <p className="service-card__description">
            We turn business goals, market insights and ambitious ideas into clear
            strategy that drives brands and moves people.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Brand Strategy', 'Market Research', 'Competitive Analysis', 'Positioning', 'Creative Strategy', 'Content Strategy', 'Growth Strategy', 'Campaign Strategy'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>


      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Brand Making</h3>
          <p className="service-card__tagline">Be Where your audience looking</p>
          <p className="service-card__description">
          We create digital marketing that doesn't simply fill calendars-it builds visibility, conversations and long-term brand value.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Content Strategy', 'SMM', 'Paid Advertising', 'Perfomence Marketing', 'SEO', 'Influencer Marketing', 'Email Marketing', 'Campaign Marketing'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Performance Marketing</h3>
          <p className="service-card__tagline">Spend smarter. Grow stronger.</p>
          <p className="service-card__description">
           Campaigns built around real business outcomes, with the data, testing and optimisation needed to turn attention into action.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Paid Advertising', 'Google Ads', 'Meta Ads', 'Campaign Strategy ', 'Conversion Optimization', 'A/B Testing', 'Retargeting', 'Analytics & Reporting'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Strategy</h3>
          <p className="service-card__tagline">Think before you make it.</p>
          <p className="service-card__description">
            We turn business goals, market insights and ambitious ideas into clear
            strategy that drives brands and moves people.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Brand Strategy', 'Market Research', 'Competitive Analysis', 'Positioning', 'Creative Strategy', 'Content Strategy', 'Growth Strategy', 'Campaign Strategy'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Strategy</h3>
          <p className="service-card__tagline">Think before you make it.</p>
          <p className="service-card__description">
            We turn business goals, market insights and ambitious ideas into clear
            strategy that drives brands and moves people.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Brand Strategy', 'Market Research', 'Competitive Analysis', 'Positioning', 'Creative Strategy', 'Content Strategy', 'Growth Strategy', 'Campaign Strategy'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Strategy</h3>
          <p className="service-card__tagline">Think before you make it.</p>
          <p className="service-card__description">
            We turn business goals, market insights and ambitious ideas into clear
            strategy that drives brands and moves people.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Brand Strategy', 'Market Research', 'Competitive Analysis', 'Positioning', 'Creative Strategy', 'Content Strategy', 'Growth Strategy', 'Campaign Strategy'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
      <article className="service-card" id="services-list">
        <div className="service-card__copy">
          <h3>Strategy</h3>
          <p className="service-card__tagline">Think before you make it.</p>
          <p className="service-card__description">
            We turn business goals, market insights and ambitious ideas into clear
            strategy that drives brands and moves people.
          </p>
          <div className="service-card__tags" aria-label="Strategy services">
            {['Brand Strategy', 'Market Research', 'Competitive Analysis', 'Positioning', 'Creative Strategy', 'Content Strategy', 'Growth Strategy', 'Campaign Strategy'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="service-card__visual">
          <img src={chessImage} alt="Chess pieces, a target and an arrow representing strategic growth" />
          <span className="service-card__arrow" aria-hidden="true">↗</span>
        </div>
      </article>
    </section>
  )
}

export default Services