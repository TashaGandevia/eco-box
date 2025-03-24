import React from "react";
import "../index.css";

const products = [
  "Kasa Smart Plug",
  "Kasa Smart Lightbulb",
  "Philips Hue Bulb",
  "Monster Light Strip",
  "Monster Light Bar",
  "Kasa Smart Power Strip",
  "Kasa Smart Light Switch",
  "Kasa Smart Power Outlet"
];

const WhatsInTheBox = () => {
  return (
    <div className="container">
      <h2>What's In the Box</h2>

      <section>
        <h3>Included Products</h3>
        <ul className="product-list">
  <li>🔌 Kasa Smart Plug</li>
  <li>💡 Kasa Smart Lightbulb</li>
  <li>💡 Philips Hue Bulb</li>
  <li>🎨 Monster Light Strip</li>
  <li>🎨 Monster Light Bar</li>
  <li>🔋 Kasa Smart Power Strip</li>
  <li>🔘 Kasa Smart Light Switch</li>
  <li>⚡ Kasa Smart Power Outlet</li>
  <li> ... and more!</li>
</ul>


        <div className="in-box-note">
          <h2>Also included in your Eco-Box:</h2>
          <ul>
            <li>
              <p>📱 QR-code for easy installation tips!</p>
              <img src="/images/qr-code.png" alt="QR Code for Installation Guides" className="qr-code-sample" />
            </li>
            <li>
              <p>🎁 Referral card to share!</p>
              <img src="/images/refer-a-friend.png" alt="Referral Card" className="referral-image" />
            </li>
            <li>
              <p>💡 Energy saving discounts, coupons, and tips!</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WhatsInTheBox;
