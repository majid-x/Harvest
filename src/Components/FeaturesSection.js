import React from "react";
import "../CSS/FeaturesSection.css"
const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature-card">
        <div className="image-container">
          <img
            src="/images/plant.jpg"
            alt="Agricultural Seeds"
            className="feature-image"
          />
          <div className="overlay">
            <h3>Agricultural <br></br>Seeds</h3>
          </div>
        </div>
      </div>

      <div className="feature-card">
        <div className="image-container">
          <img
            src="/images/watermelon.jpg"
            alt="Seed Traits & Technologies"
            className="feature-image"
          />
          <div className="overlay">
            <h3>Seed Traits & <br></br>Technologies</h3>
            
          </div>
        </div>
      </div>

      <div className="feature-card">
        <div className="image-container">
          <img
            src="/images/apple.jpg"
            alt="Water Conservation"
            className="feature-image"
          />
          <div className="overlay">
            <h3>Water <br></br>Conservation</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
