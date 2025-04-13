"use client"

import { useState, useEffect } from "react"
import "./FishDisplay.css"

const fishProducts = [
  {
    id: 1,
    name: "Fresh Salmon",
    image: "https://images.pexels.com/photos/248917/pexels-photo-248917.jpeg",
    price: "$24.99/lb"
  },
  {
    id: 2,
    name: "Red Snapper",
    image: "https://images.pexels.com/photos/2161626/pexels-photo-2161626.jpeg",
    price: "$19.99/lb"
  },
  {
    id: 3,
    name: "Tuna",
    image: "https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg",
    price: "$22.99/lb"
  },
  {
    id: 4,
    name: "Sea Bass",
    image: "https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg",
    price: "$26.99/lb"
  }
];

const FishDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const fishes = [
    {
      id: 1,
      name: "Jelebi",
      description: "A popular freshwater fish known for its sweet taste and unique shape.",
      image: require("../images/fish/jelebi.png"),
      price: "₹149/kg",
    },
    {
      id: 2,
      name: "Kendai",
      description: "A common carp variety found in Tamil Nadu rivers and ponds.",
      image: require("../images/fish/kandai.jpeg"),
      price: "₹249/kg",
    },
    {
      id: 3,
      name: "Vavval",
      description: "A delicious freshwater fish with a distinctive taste.",
      image: require("../images/fish/Vavval.jpg"),
      price: "₹229/kg",
    },
    {
      id: 4,
      name: "Rohu",
      description: "A major carp species popular for its taste and nutritional value.",
      image: require("../images/fish/rohu.jpg"),
      price: "₹229/kg",
    },
    {
      id: 5,
      name: "Viral",
      description: "A predatory freshwater fish known for its firm texture and taste.",
      image: require("../images/fish/Viral.jpg"),
      price: "₹399/kg",
    },
  ]

  const visibleFishes = () => {
    // For desktop, show 3 items, for mobile show 1
    const itemsToShow = window.innerWidth <= 768 ? 1 : 3

    const items = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % fishes.length
      items.push(fishes[index])
    }
    return items
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fishes.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fishes.length) % fishes.length)
  }

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section id="fish" className="fish-display section">
      <div className="container">
        <h2 className="section-title">Our Fresh Fishes</h2>
        <p className="section-description">
          We offer a variety of freshwater fishes caught from rivers and ponds across Tamil Nadu. All our fishes are cutted,
          cleaned and delivered fresh to your doorstep.
        </p>

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <i className="arrow left"></i>
          </button>

          <div className="carousel">
            {visibleFishes().map((fish) => (
              <div className="fish-card" key={fish.id}>
                <div className="fish-image-container">
                  <div className="fish-image" style={{ backgroundImage: `url(${fish.image})` }}></div>
                </div>
                <div className="fish-info">
                  <h3>{fish.name}</h3>
                  <p>{fish.description}</p>
                  <div className="fish-price">{fish.price}</div>
                  <div className="delivery-text">+plus delivery charges</div>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={nextSlide}>
            <i className="arrow right"></i>
          </button>
        </div>

        <div className="carousel-dots">
          {fishes.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FishDisplay
