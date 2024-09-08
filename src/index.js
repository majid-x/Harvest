import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RemarkablePosition from "./Components/RemarkablePosition";
import Equipment from "./Components/Equipment";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavbarMui from "./Components/NavbarMui";
import FeaturesSection from "./Components/FeaturesSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarMui></NavbarMui>
    <App />
    <RemarkablePosition></RemarkablePosition>
    <FeaturesSection></FeaturesSection>
    <Equipment></Equipment>
  </React.StrictMode>
);

reportWebVitals();
