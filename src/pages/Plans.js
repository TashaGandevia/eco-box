import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const plans = [
  {
    name: "Basic",
    subtitle: "Starter savings, simple setup",
    price: "$50/mo",
    features: ["LED Smart Bulbs", "Motion Sensors"],
    savings: { kWh: 100, dollars: 20 },
  },
  {
    name: "Standard",
    subtitle: "Balanced plan with top devices",
    price: "$75/mo",
    features: ["Smart Plugs", "Smart Thermostat"],
    savings: { kWh: 200, dollars: 40 },
  },
  {
    name: "Premium",
    subtitle: "Full control + AI optimization",
    price: "$100/mo",
    features: ["Smart Hub", "AI Energy Coach", "Advanced Scheduling"],
    savings: { kWh: 300, dollars: 60 },
  },
];

const Plans = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate("/signup", { state: { selectedPlan: plan.name } });
  };

  return (
    <div className="container">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your Plan
      </motion.h2>
      <p className="page-description">Flexible pricing, real savings.</p>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="plan-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-subtitle">{plan.subtitle}</p>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <div className="savings-box">
              <p>
                <strong>Estimated Annual Savings:</strong>
              </p>
              <p>
                {plan.savings.kWh} kWh (~${plan.savings.dollars})
              </p>
            </div>
            <button
              className="subscribe-button"
              onClick={() => handleSubscribe(plan)}
            >
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
