import logo from "./logo.svg";

import "./App.css";
import Navbar from "./Components/Navbar";
import NavbarMui from "./Components/NavbarMui";
function App() {
  return (
    <div className="App">
      <div className="containerr">
        <img src="/images/pic1.jpeg" alt="Left Side" className="left-image" />
        <img src="/images/pic2.webp" alt="Right Side" className="right-image" />
        <div className="hero">
          <div className="hero-content">
            <h1>
              Harves<span className="harvestLetter">t</span>
            </h1>
            <div className="heroborder">
              <p className="cultivate">
                Cultivating new crops to make farmers increase profits
              </p>
              <button type="button" className="cultivateBtn">
                Discover Our Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
