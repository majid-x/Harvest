
import React from 'react';
import "../CSS/Remarkable.css"
function RemarkableAndFeatures() {
  return (
    <section className="remarkable-features">
      <div className="remarkable-position">
        <h2>A Remarkable Position</h2>
        <h4>Among Agricultural Companies</h4>
        <p>
          We are a prominent leader in the agribusiness, specializing in the cultivation, production, and trading of natural food commodities such as cereals, fruits, and vegetables. Since our inception, we have achieved a remarkable position in the field of agriculture, continuously innovating and contributing toward sustainable farming practices and food production techniques.
        </p>
        <button>Read More</button>
      </div>

      <div className="feature-section">
        
        <div className="features">
          <div className="feature">
            <div className="image-container">
              <img src="/images/cereals.jpg" alt="Cereals" />
              <p className="image-text">Cereals</p>
            </div>
          </div>
          <div className="feature">
            <div className="image-container">
              <img src="/images/vegetables.jpg" alt="Vegetables" />
              <p className="image-text">Vegetables</p>
            </div>
          </div>
          <div className="feature">
            <div className="image-container">
              <img src="/images/berry.webp" alt="Fruits & Berries" />
              <p className="image-text">Fruits & Berries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RemarkableAndFeatures;
