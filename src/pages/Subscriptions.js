import React from "react";
import { useNavigate } from "react-router-dom";

const Subscriptions = () => {
  const navigate = useNavigate();

  const handleSelect = (plan) => {
    // You could also pass the plan name via state
    navigate("/subscribe/signup");
  };

  return (
    <div className="container" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Choose Your EcoBox Plan</h1>
      <p>Pick the perfect plan to fit your home and goals.</p>

      <div
        className="plans"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {["Starter", "Smart Home", "Eco Pro"].map((plan, i) => (
          <div
            key={plan}
            className="plan"
            style={{
              border: "1px solid #ccc",
              padding: "1.5rem",
              borderRadius: "8px",
              width: "250px",
            }}
          >
            <h3>{plan}</h3>
            <p>${[50, 75, 100][i]}/month</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>✔ Smart devices</li>
              <li>✔ Setup support</li>
              <li>✔ Energy-saving tips</li>
            </ul>
            <button
              className="button"
              onClick={() => handleSelect(plan)}
              style={{ marginTop: "1rem" }}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
