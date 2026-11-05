import purposeImage from "../Images/purpose.png";

const Purpose = () => {
  return (
    <section className="purpose-section">

      {/* Background Image */}
      <img
        src={purposeImage}
        alt="Creative business strategy illustration"
        className="purpose-bg-image"
      />

      {/* Dark Overlay */}
      <div className="purpose-overlay"></div>

      {/* Content */}
      <div className="purpose-container">

        <div className="purpose-content">

          {/* Section Label */}
          <div className="purpose-tag">
            <span className="purpose-dot"></span>
            OUR PURPOSE
          </div>

          {/* Heading */}
          <h1 className="purpose-heading">
            Why we
            <br />
            <span>do what we do.</span>
          </h1>

          {/* Description */}
          <div className="purpose-text">

            <p>
              Because businesses are more than logos, websites and campaigns.
            </p>

            <p>
              Behind every business is an idea someone believed in. A problem
              someone wanted to solve. A story someone wanted to tell.
            </p>

            <p>
              We create strategy, creativity and technology to turn business
              ambition into brands people can understand, connect with and
              remember.
            </p>

            <p>
              We don't create for applause.
            </p>

            <p className="purpose-highlight">
              We create to make a difference.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Purpose;
