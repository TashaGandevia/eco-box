import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SetupVideos from "./pages/HowTo";
import FAQ from "./components/FAQ";
import Subscriptions from "./pages/Subscriptions";
import SignUp from "./pages/SignUp";

import "./index.css"; // Import styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/products" element={<Products />} />
        <Route path="/videos" element={<SetupVideos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/subscribe" element={<Subscriptions />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
