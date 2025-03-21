import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const Contact = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        Email us at <a href="mailto:info@ecobox.com">info@ecobox.com</a> to get
        started.
      </p>
      {selectedPlan && (
        <p>
          <strong>You’re interested in the {selectedPlan}.</strong> We’ll help
          you subscribe!
        </p>
      )}
    </div>
  );
};

export default Contact;
