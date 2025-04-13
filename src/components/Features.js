import "./Features.css"

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "fish-water",
      title: "Daily Fresh Catches",
      description: "We catch fresh fish daily from local rivers and ponds across Tamil Nadu.",
    },
    {
      id: 2,
      icon: "quality-check",
      title: "Expert Quality Check",
      description: "Every fish undergoes a thorough quality inspection before delivery.",
    },
    {
      id: 3,
      icon: "premium",
      title: "Premium Products",
      description: "We offer only the finest quality countryside fish varieties.",
    },
    {
      id: 4,
      icon: "chemical-free",
      title: "Free From Chemicals",
      description: "Our fish are 100% natural with no preservatives or chemicals added.",
    },
    {
      id: 5,
      icon: "hygienic",
      title: "Hygienic Packing & Delivery",
      description: "Fish are cleaned and packed in hygienic conditions for safe delivery.",
    },
    {
      id: 6,
      icon: "no-storage",
      title: "No Storage",
      description: "We deliver fish on the same day they're caught for maximum freshness.",
    },
  ]

  // Split features into two rows
  const topRowFeatures = features.slice(0, 3)
  const bottomRowFeatures = features.slice(3, 6)

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="features-subtitle">Discover what makes our fish the freshest in Tamil Nadu</p>
        </div>

        <div className="features-grid">
          <div className="features-row">
            {topRowFeatures.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className={`feature-icon-circle ${feature.icon}-bg`}>
                  <div className={`feature-icon ${feature.icon}`}></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="features-row">
            {bottomRowFeatures.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className={`feature-icon-circle ${feature.icon}-bg`}>
                  <div className={`feature-icon ${feature.icon}`}></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
