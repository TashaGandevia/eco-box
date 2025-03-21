import React from "react";
import "../index.css"; // Import styles
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url("/images/hero-banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          position: "relative",
        }}
      >
        {/* Optional dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.61)",
            zIndex: 1,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1>Save Energy, Save Money</h1>
          <p>Effortless Efficiency, Delivered Monthly.</p>

          <Link to="/plans">
            <button className="button">
              Join the Smart Energy Revolution!
            </button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container">
        <h2>How EcoBox Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Subscribe</h3>
            <p>
              Choose a plan that fits your energy-saving goals and fits your
              budget.
            </p>
          </div>
          <div className="step">
            <h3>2. Unbox</h3>
            <p>Get hand-picked smart home devices delivered to your door.</p>
          </div>
          <div className="step">
            <h3>3. Install</h3>
            <p>
              Monthly boxes contain easy, plug-and-play devices that start
              saving energy effortlessly.
            </p>
          </div>
          <div className="step">
            <h3>4. Save</h3>
            <p>
              Install the devices and start reducing your electricity bill
              instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container benefits">
        <h2>Why Choose EcoBox?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>💡 Reduce Energy Bills</h3>
            <p>Smart home automation lowers your electricity costs.</p>
          </div>
          <div className="benefit">
            <h3>🌱 Eco-Friendly</h3>
            <p>Lower your carbon footprint with energy-efficient devices.</p>
          </div>
          <div className="benefit">
            <h3>📦 Big-Savings, Zero Hassle.</h3>
            <p>New devices delivered monthly, no research needed.</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta">
        <h2>Ready to Start Saving?</h2>
        <Link to="/plans">
          <button className="button">Subscribe Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
