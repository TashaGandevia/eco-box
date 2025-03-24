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
      <div className="references">
        <h3>References</h3>
        <ul>
          <li>
            Icons by <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>
          </li>
          <li>
            Product images from manufacturer websites: Kasa, Philips, Monster
          </li>
          <li>
            YouTube tutorial videos are embedded from their respective creators
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
