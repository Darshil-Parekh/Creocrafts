import arrow from "../Images/airrow.png";
import bulb from "../Images/bulb.png";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">

        {/* Decorative Images */}
        <img
          loading="lazy"
          decoding="async"
          src={arrow}
          alt=""
          className="subscribe-arrow"
        />

        <img
          loading="lazy"
          decoding="async"
          src={bulb}
          alt=""
          className="subscribe-bulb"
        />

        {/* Main Content */}
        <div className="subscribe-content">

          {/* Tag */}
          <div className="subscribe-tag">
            <span className="subscribe-dot"></span>
            SUBSCRIBE
          </div>

          {/* Heading */}
          <h1 className="subscribe-heading">
            Good ideas,
            <br />
            <span>occasionally delivered.</span>
          </h1>

          {/* Description */}
          <p className="subscribe-subheading">
            No inbox noise. No endless promotions.
          </p>

          <p className="subscribe-description">
            Just useful ideas, interesting perspectives, creative inspiration
            and things worth
            <br className="desktop-break" />
            knowing about branding, marketing and the digital world.
          </p>

          {/* Email Form */}
          <form
            className="subscribe-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Email*"
              aria-label="Enter your email"
              required
            />

            <button type="submit" aria-label="Subscribe">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.5 20.5 23 12 2.5 3.5l.1 6.6L17 12 2.6 13.9z" />
              </svg>
            </button>
          </form>

          {/* Terms */}
          <label className="subscribe-terms">
            <input type="checkbox" required />
            <span>
              Agree our Terms &amp; Condition
            </span>
          </label>

        </div>
      </div>
    </section>
  );
};

export default Subscribe;
