import "./About.css"
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About D-Fish</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg"
                alt="Fishing shop interior"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>Fresh Countryside Fish Delivered Across Tamil Nadu</h3>
            <p>
              D-Fish is a premier fish cleaning and delivery service based in Tamil Nadu, India. We specialize in
              sourcing the finest freshwater fish from rivers and ponds across the region.
            </p>
            <p>
              Our fish varieties include local favorites such as Jelebi, Kendai, Vavval, Rohu, and Viral fish - all
              known for their exceptional taste and quality.
            </p>
            <p>
              What sets us apart is our commitment to freshness and cleanliness. Each fish is carefully cleaned by our
              expert team before being delivered to your doorstep, ensuring you receive only the best quality product.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-fresh"></i>
                </div>
                <h4>Fresh Catch</h4>
                <p>All our fish are freshly caught from local water bodies</p>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-clean"></i>
                </div>
                <h4>Expert Cleaning</h4>
                <p>Professional cleaning service for ready-to-cook fish</p>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-delivery"></i>
                </div>
                <h4>Fast Delivery</h4>
                <p>Quick delivery to all parts of Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
