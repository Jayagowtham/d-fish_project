"use client"

import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-logo">
              <img src={require("../images/logo/d-fish_logo.jpeg")} alt="D-Fish Logo" />
            </div>
            <h3>Get In Touch</h3>
            <p>
              Have questions about our fish or delivery services? Contact us through any of the following methods.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <i className="icon-location"></i>
              </div>
              <div className="info-content">
                <h4>Our Store</h4>
                <p>Online Store - Serving Fresh Fish Across Tamil Nadu</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>+91 97908 01551</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="icon-email"></i>
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>dfish0479@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="icon-hours"></i>
              </div>
              <div className="info-content">
                <h4>Working Hours</h4>
                <p>24/7 - Always at Your Service</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <i className="icon-facebook"></i>
              </a>
              <a href="https://www.instagram.com/_d_fish_?igsh=cG9tcHI4OXlqc3d3" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
