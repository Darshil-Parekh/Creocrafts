import humanBook from "../Images/hyumanbook.png";
import h from "../Images/h.png";
import vitalhunt from "../Images/vitalhunt.png";
import somesh from "../Images/somesh.png";
import ronak from "../Images/ronak.png";
import sunidhi from "../Images/sunidhi.png";
import ridgesend from "../Images/ridgesend.png";
import ruhee from "../Images/ruhee.png";
import shreeRam from "../Images/shreeram.png";

const clients = [
  {
    name: "Humanbook",
    icon: h,
    logo: humanBook,
  },
  {
    name: "VitalHunt Global",
    logo: vitalhunt,
  },
  {
    name: "Somesh",
    logo: somesh,
  },
  {
    name: "Ronak Buildwell",
    logo: ronak,
  },
  {
    name: "Sunidhi",
    logo: sunidhi,
  },
  {
    name: "Ridgesand",
    logo: ridgesend,
  },
  {
    name: "Ruhee",
    logo: ruhee,
  },
  {
    name: "Shree Ram Group",
    logo: shreeRam,
  },
];

const Portfolio = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">

        {/* Section Label */}
        <div className="clients-tag">
          <span className="tag-dot"></span>
          OUR CLIENTS
        </div>

        {/* Heading and Description */}
        <div className="clients-intro">
          <div className="clients-heading">
            <h1>
              Good people
              <br />
              <span>make good work.</span>
            </h1>

            <p>
              We work with founders, growing businesses and established
              organisations across industries and markets.
            </p>
          </div>

          <div className="clients-description">
            <p>
              Some come to us with a blank page.
              <br />
              Some come with a problem.
              <br />
              Some come with a brand that needs a new direction.
            </p>

            <p>
              Whatever brings them through the door, we believe the best work
              happens when the client and creative team become one team.
            </p>
          </div>
        </div>

        {/* Client Logo Grid */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>

              <div className="client-logo-wrapper">

                {/* Humanbook Icon */}
                {client.icon && (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={client.icon}
                    alt=""
                    className="client-icon"
                  />
                )}

                {/* Client Logo */}
                {client.logo && (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />
                )}

              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="clients-footer">
          Built together. Trusted beyond the brief.
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
