import logo from "../Images/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Main Footer Content */}
        <div className="footer-main">

          {/* Brand Column */}
          <div className="footer-brand">

          <div className="footer-logo">
            <img loading="lazy" decoding="async" src={logo} alt="CreovueCrafts" />
          </div>

            <p className="footer-tagline">
              Let's make something people
              <br />
              remember.
            </p>

            {/* Address and Email */}
            <div className="footer-contact">

              <div className="footer-contact-item">
                <span className="footer-yellow-text">India</span>
                <p>
                  Shivam Arcade, Dehgam Road, Naroda,
                  <br />
                  Ahmedabad, Gujarat 382330
                </p>
              </div>

              <div className="footer-contact-item">
                <span className="footer-yellow-text">Email</span>
                <a href="mailto:info@creovuecrafts@gmail.com">
                  info@creovuecrafts@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* International Presence */}
          <div className="footer-column">
            <h4>International Presence</h4>

            <ul>
              <li><a href="#usa">USA</a></li>
              <li><a href="#uk">UK</a></li>
              <li><a href="#australia">Australia</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Services</h4>

            <ul>
              <li><a href="#strategy">Strategy</a></li>
              <li><a href="#brand-marking">Brand Making</a></li>
              <li><a href="#digital-marketing">Digital Marketing</a></li>
              <li><a href="#performance-marketing">Performance Marketing</a></li>
              <li><a href="#design">Design</a></li>
              <li><a href="#web-ecommerce">Web &amp; E-Commerce</a></li>
              <li><a href="#video">Video</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-column footer-explore">
            <h4>Explore</h4>

            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-legal">
              <h4>Trust &amp; Legal</h4>
              <ul>
                <li><a href="#reviews">Google Reviews</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <div className="footer-socials">

            <a href="#x" aria-label="X" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18 3h3l-6.6 7.6L22 21h-6l-4.7-6.2L5.9 21H3l7.1-8.2L3 3h6.2l4.2 5.6L18 3Zm-1.1 16h1.7L8.1 4.9H6.3L16.9 19Z" />
              </svg>
            </a>

            <a href="#facebook" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
              </svg>
            </a>

            <a href="#instagram" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6.5 8.5H3.2V20h3.3V8.5ZM4.9 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.8 13.4c0-3.5-1.9-5.1-4.5-5.1-2.1 0-3.1 1.2-3.6 2V8.5H9.4V20h3.3v-5.7c0-1.5.3-3 2.2-3s1.9 1.7 1.9 3.1V20h3.3l.7-6.6Z" />
              </svg>
            </a>

          </div>

          <p className="footer-copyright">
            © 2026 Creovue Crafts. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
