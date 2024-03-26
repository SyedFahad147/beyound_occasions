import React from "react";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return <Router>
    <Navbar />
    <HeroSection />
    <About />
    <Services />
    <Contact />
    <Footer />
    <Toaster />

  </Router>;
};

export default App;
