import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RemarkablePosition from './Components/RemarkablePosition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RemarkablePosition></RemarkablePosition>
  </React.StrictMode>
);

reportWebVitals();
