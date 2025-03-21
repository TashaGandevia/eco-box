import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      {/* Hero Image with Overlay */}
      <section
        className="hero"
        style={{
          backgroundImage: 'url("/images/about-hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
            Empowering Smart, Sustainable Living
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px" }}>
            EcoBox delivers energy-saving tech that’s easy, effective, and
            eco-friendly.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container">
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Our Mission</h2>
          <p>
            We make energy efficiency effortless. EcoBox delivers curated smart
            home devices monthly to help households reduce their electricity
            consumption, save money, and lower their carbon footprint — no
            research, no stress.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Why It Matters</h2>
          <p>
            The average household wastes hundreds of dollars each year on
            energy. Our mission is to change that — one plug, bulb, and smart
            device at a time. By making energy-saving tech easy and accessible,
            we empower more people to live sustainably.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>How It Works</h2>
          <ul className="styled-list">
            <li>
              📦 <strong>Subscribe:</strong> Pick a monthly plan tailored to
              your energy goals.
            </li>
            <li>
              🚚 <strong>Receive:</strong> Get curated devices delivered right
              to your door.
            </li>
            <li>
              🔌 <strong>Install:</strong> Simple, plug-and-play setups — no
              technician needed.
            </li>
            <li>
              💰 <strong>Save:</strong> Watch your energy bills go down, month
              after month.
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Our Core Values</h2>
          <ul className="styled-list">
            <li>🌿 Sustainability first, always</li>
            <li>⚡ Practical innovation over hype</li>
            <li>🛠️ Simple, accessible tools</li>
            <li>📊 Measurable energy impact</li>
          </ul>
        </motion.section>
      </div>
    </>
  );
};

export default About;
