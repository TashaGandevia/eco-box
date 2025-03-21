import React from "react";
import "../index.css"; // Import global styles

const products = [
  {
    name: "Kasa Smart Power Strip",
    brand: "TP-Link Kasa",
    compatibility: "Google, Alexa",
    image: "/images/kasa-smart-power-strip.jpg",
    savings: { kWh: 50, dollars: 15 },
  },
  {
    name: "Pilips LED Bulb",
    brand: "Philips Hue",
    compatibility: "Google, Alexa, Apple",
    image: "/images/philips-hue-white-bulb.jpg",
    savings: { kWh: 80, dollars: 20 },
  },
  {
    name: "Monster Light Strip",
    brand: "Monster",
    compatibility: "Google, Alexa",
    image: "/images/monster-light-strip.jpg",
    savings: { kWh: 40, dollars: 13 },
  },
  {
    name: "Monster Light Strip",
    brand: "Monster",
    compatibility: "Google, Alexa",
    image: "/images/monster-light-strip.jpg",
    savings: { kWh: 40, dollars: 13 },
  },
  {
    name: "Monster Light Bar",
    brand: "Monster",
    compatibility: "Google, Alexa",
    image: "/images/monster-light-bar.jpg",
    savings: { kWh: 30, dollars: 10 },
  },
  {
    name: "Kasa Smart Light Bulb (Multicolor)",
    brand: "TP-Link Kasa",
    compatibility: "Google, Alexa",
    image: "/images/kasa-smart-light-bulb.jpg",
    savings: { kWh: 70, dollars: 18 },
  },
  {
    name: "Kasa Smart Light Switch",
    brand: "TP-Link Kasa",
    compatibility: "Google, Alexa",
    image: "/images/kasa-smart-light-switch.jpg",
    savings: { kWh: 100, dollars: 25 },
  },
  {
    name: "Kasa Smart Power Outlet",
    brand: "TP-Link Kasa",
    compatibility: "Google, Alexa",
    image: "/images/kasa-smart-outlet.jpg",
    savings: { kWh: 50, dollars: 15 },
  },
  {
    name: "Kasa Smart Plug",
    brand: "TP-Link Kasa",
    compatibility: "Google, Alexa",
    image: "/images/kasa-smart-plugs.jpg",
    savings: { kWh: 60, dollars: 18 },
  },
];

const Products = () => {
  return (
    <div className="container">
      <h2 className="page-title">Smart Devices for Energy Efficiency</h2>
      <p className="page-description">
        Explore our hand-picked smart home devices designed to reduce energy
        usage and lower your bills.
      </p>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onError={(e) => (e.target.src = "/images/placeholder.png")} // Fallback image
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="product-compatibility">
              <strong>Compatibility:</strong> {product.compatibility}
            </p>
            <div className="savings-box">
              <p>
                <strong>Estimated Annual Savings:</strong>
              </p>
              <p>
                {product.savings.kWh} kWh (~${product.savings.dollars} savings)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
