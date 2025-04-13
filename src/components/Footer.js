import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={require("../images/logo/d-fish_logo.jpeg")} alt="D-Fish Logo" />
              <div className="footer-logo-text">
                <h2>D-Fish</h2>
                <p>Fresh countryside fish delivered across Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#fish">Our Fish</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Fish Varieties</h3>
            <ul>
              <li>
                <a href="#fish">Jelebi</a>
              </li>
              <li>
                <a href="#fish">Kendai</a>
              </li>
              <li>
                <a href="#fish">Vavval</a>
              </li>
              <li>
                <a href="#fish">Rohu</a>
              </li>
              <li>
                <a href="#fish">Viral</a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new fish arrivals and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} D-Fish. All Rights Reserved. Made By Vetrivelan R</p>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="icon-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
