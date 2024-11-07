// src/App.jsx
import React from "react";
import "./index.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Contact/>
    </div>
  );
}

export default App;



