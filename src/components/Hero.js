import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>D-FISH</h1>
        <p>Fresh countryside fish delivered across Tamil Nadu</p>
        <div className="hero-buttons">
          <a href="#fish" className="btn">
            Explore Our Fish
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Hero
