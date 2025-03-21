import React, { useState } from "react";
import "../index.css";

const productsWithVideos = [
  {
    name: "Kasa Smart Plug",
    image: "/images/kasa-smart-plugs.jpg",
    videoUrl: "https://www.youtube.com/embed/zdwKfO9nFjA",
    description: "How to install and connect your Kasa Smart Plug.",
  },
  {
    name: "Kasa Smart Light Switch",
    image: "/images/kasa-smart-light-switch.jpg",
    videoUrl: "https://www.youtube.com/embed/WcJt7hnMFnw",
    description: "How to install your Kasa Smart Light Switch safely.",
  },
  {
    name: "Philips Hue Bulb",
    image: "/images/philips-hue-white-bulb.jpg",
    videoUrl: "https://www.youtube.com/embed/L0MPDq6UNVQ",
    description: "Setting up your Philips Hue smart bulbs.",
  },
  {
    name: "Google Nest Thermostat",
    image: "/images/smart-thermostat.jpg",
    videoUrl: "https://www.youtube.com/embed/NK1G1uJt2GA",
    description: "Installing and configuring your Nest Thermostat.",
  },
];

const SetupVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(productsWithVideos[0]);

  return (
    <div className="container">
      <h2 className="page-title">Setup & Installation Videos</h2>
      <p className="page-description">
        Click a product below to watch its setup tutorial.
      </p>

      {/* Featured video player */}
      <div className="video-player">
        <iframe
          src={selectedVideo.videoUrl}
          title={selectedVideo.name}
          className="video-frame"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h3>{selectedVideo.name}</h3>
        <p>{selectedVideo.description}</p>
      </div>

      {/* Product thumbnails */}
      <div className="video-thumbnail-grid">
        {productsWithVideos.map((product, index) => (
          <div
            key={index}
            className="video-thumbnail-card"
            onClick={() => setSelectedVideo(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="video-thumbnail"
              onError={(e) => (e.target.src = "/images/placeholder.png")}
            />
            <p className="video-label">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupVideos;
