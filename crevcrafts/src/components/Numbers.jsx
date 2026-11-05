import shop from "../Images/shop.png";
import number2 from "../Images/number2.png";
import number3 from "../Images/number3.png";
import number4 from "../Images/number4.png";
import number5 from "../Images/number5.png";

const Numbers = () => {
  return (
    <section className="numbers-section">
      <div className="numbers-container">

        {/* Header */}
        <div className="numbers-header">

          <div className="numbers-heading">
            <div className="numbers-tag">
              <span className="numbers-dot"></span>
              OUR ACHIEVEMENTS
            </div>

            <h1>
              A few numbers.
              <br />
              <span>A lot of stories.</span>
            </h1>
          </div>

          <div className="numbers-description">
            <p>
              Every number represents a story, a challenge, and an idea
              brought to life.
            </p>

            <p>
              From building brands to creating meaningful experiences,
              these numbers reflect the people, partnerships and work
              that make us who we are.
            </p>
          </div>

        </div>

        {/* Achievement Cards */}
        <div className="numbers-grid">

          {/* Card 1 - Shop */}
          <div className="number-card shop-card">
            <div className="number-info">
              <h2>25+</h2>
              <span>STORIES CREATED</span>
            </div>

            <img
              loading="lazy"
              decoding="async"
              src={shop}
              alt="Creative storefront illustration"
              className="number-image shop-image"
            />
          </div>

          {/* Card 2 - Number 2 */}
          <div className="number-card green-card">
            <div className="number-info top-info">
              <h2>100+</h2>
              <span>CLIENTS & COUNTING</span>
            </div>

            <img
              loading="lazy"
              decoding="async"
              src={number2}
              alt="Achievement illustration"
              className="number-image number2-image"
            />
          </div>

          {/* Card 3 - Full Width */}
          <div className="number-card white-card">
            <div className="number-info">
              <h2>50+</h2>
              <span>GLOBAL REACH</span>
            </div>

            <img
              loading="lazy"
              decoding="async"
              src={number3}
              alt="Global network illustration"
              className="number-image number3-image"
            />
          </div>

          {/* Card 4 - Dark */}
          <div className="number-card dark-card">
            <div className="number-info top-info">
              <h2>35+</h2>
              <span>PROJECTS COMPLETED</span>
            </div>

            <img
              loading="lazy"
              decoding="async"
              src={number4}
              alt="Creative projects illustration"
              className="number-image number4-image"
            />
          </div>

          {/* Card 5 - Yellow */}
          <div className="number-card yellow-card">
            <img
              loading="lazy"
              decoding="async"
              src={number5}
              alt="Experience and achievement illustration"
              className="number-image number5-image"
            />

            <div className="number-info bottom-info">
              <h2>9+</h2>
              <span>YEARS OF EXPERIENCE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Numbers;
