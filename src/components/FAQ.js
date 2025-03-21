import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

const faqData = [
  {
    question: "What is EcoBox, and how does it work?",
    answer:
      "EcoBox is a monthly subscription box that delivers energy-saving smart home devices directly to your door. You pick a plan, receive curated products, install them in minutes, and start saving on your electricity bill.",
  },
  {
    question: "What kind of smart devices will I receive in my box?",
    answer:
      "You’ll get a mix of smart plugs, LED light bulbs, light switches, sensors, thermostats, and other home automation tools — all focused on helping you reduce energy usage easily.",
  },
  {
    question: "Can I choose or customize the devices I get?",
    answer:
      "Each plan comes with a curated selection designed for maximum impact. However, we avoid duplicates and tailor future boxes based on what you’ve already received.",
  },
  {
    question: "Do I need any technical knowledge to install the products?",
    answer:
      "Not at all. Most devices are plug-and-play and come with simple setup guides or quick-start videos. If you can plug something in, you’re good to go!",
  },
  {
    question: "How much energy can I realistically expect to save?",
    answer:
      "It depends on your household and habits, but our users typically see savings of 10–30% on their electricity bills within the first few months.",
  },
  {
    question: "What happens if I already have one of the devices?",
    answer:
      "If you already have a specific product, we’ll make sure you don’t get duplicates. We track previous boxes and adapt future deliveries accordingly.",
  },
  {
    question: "Is there a minimum commitment or can I cancel anytime?",
    answer:
      "You can cancel or pause your subscription anytime — no contracts, no hidden fees.",
  },
  {
    question: "Do the devices work with Alexa, Google Home, or Apple HomeKit?",
    answer:
      "Yes! We only include products that are compatible with major smart home platforms like Alexa, Google Home, and (where possible) Apple HomeKit.",
  },
  {
    question: "Is there customer support if I need help setting up a device?",
    answer:
      "Absolutely. You can access our setup video library, chat with support, or email us for personalized assistance.",
  },
  {
    question: "How is EcoBox helping the environment?",
    answer:
      "By helping households cut down on wasted energy, EcoBox reduces overall carbon emissions. Plus, our packaging is minimal, recyclable, and planet-conscious.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      <h2 className="page-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-question">{item.question}</h3>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
