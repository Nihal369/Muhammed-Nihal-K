import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="works"><Works /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
