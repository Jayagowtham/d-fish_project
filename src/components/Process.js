import React from 'react';
import './Process.css';

const Process = () => {
  const processes = [
    {
      id: 1,
      title: "FISHING",
      image: require("../images/process/fishing.jpeg"),
      description: "Fresh catch from local waters"
    },
    {
      id: 2,
      title: "CATCHING",
      image: require("../images/process/catching.png"),
      description: "Quality fish selection"
    },
    {
      id: 3,
      title: "CUTTING",
      image: require("../images/process/cutting.jpg"),
      description: "Professional cleaning and cutting"
    },
    {
      id: 4,
      title: "CLEANING",
      image: require("../images/process/cleaning.jpg"),
      description: "Thorough cleaning process"
    },
    {
      id: 5,
      title: "PACKING",
      image: require("../images/process/packing.jpg"),
      description: "Hygienic packaging"
    },
    {
      id: 6,
      title: "DELIVERY",
      image: require("../images/process/delivery.jpg"),
      description: "Quick home delivery"
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-description">From Catch to Your Doorstep</p>

        <div className="process-container">
          {processes.map((process, index) => (
            <div className="process-card" key={process.id}>
              <div className="process-image">
                <img src={process.image} alt={process.title} />
              </div>
              <div className="process-content">
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
              {index !== processes.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;