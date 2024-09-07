import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
      <img src="/images/pic1.jpeg" alt="Left Side" className="left-image" />
      <img src="/images/pic2.webp" alt="Right Side" className="right-image" />
      <div className="hero" >
      <div className="hero-content">
        <h1>Harvest</h1>
        <div className='heroborder'>
        <p className='cultivate'>Cultivating new crops to make farmers increase profits</p>
        <button>Discover Our Company</button>
        </div>
      </div>
    </div>
      
    </div>
    </div>
  );
}

export default App;
