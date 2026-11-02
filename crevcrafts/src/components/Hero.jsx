import bulbImage from '../Images/Image 2 (3) 1.png'
import shieldImage from '../Images/Image 2 (4) 1.png'
import dashboardImage from '../Images/Image 2 (1) 1.png'
import growthImage from '../Images/Image 2 (2) 1.png'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__illustration hero__illustration--bulb" src={bulbImage} alt="" />
      <img className="hero__illustration hero__illustration--shield" src={shieldImage} alt="" />
      <img className="hero__illustration hero__illustration--dashboard" src={dashboardImage} alt="" />
      <img className="hero__illustration hero__illustration--growth" src={growthImage} alt="" />

      <div className="hero__content">
        <h1 id="hero-title">
          Ideas that make
          <br />
          brands impossible
          <br />
          to <span>ignore.</span>
        </h1>
        <p>
          We build brands, experiences and digital growth that help businesses get
          noticed, remembered and chosen.
        </p>
        <div className="hero__actions">
          <a href="#contact">Start A Conversation</a>
          <a href="#portfolio">Explore Our Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero