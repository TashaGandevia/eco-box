import React, { useState } from "react";
import "../index.css";

const productsWithVideos = [
  {
    name: "Kasa Smart Plug",
    image: "/images/kasa-smart-plugs.jpg",
    videoUrl: "https://www.youtube.com/embed/b6gGltujRhw?si=pHivfcOv_gr3_rdX",
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
    name: "Kasa Smart Power Strip",
    image: "/images/kasa-power-strip.jpg",
    videoUrl: "https://www.youtube.com/embed/mN7QXnWfL7Q", // Replace with actual embed link
    description: "How to set up your Kasa Smart Power Strip.",
  },
  {
    name: "Kasa Smart Lightbulb",
    image: "/images/kasa-lightbulb.jpg",
    videoUrl: "https://www.youtube.com/embed/ZJgA6GdY3h8", // Replace with actual embed link
    description: "Installing and configuring the Kasa Smart Lightbulb.",
  },
  {
    name: "Kasa Smart Power Outlet",
    image: "/images/kasa-smart-outlet.jpg",
    videoUrl: "https://www.youtube.com/embed/dpdeUnzT2KY?si=47nrT7ZDvIyyQ5_m", // Replace with actual embed link
    description: "Setting up a Kasa Smart Power Outlet.",
  },
  {
    name: "Monster Light Strip",
    image: "/images/monster-light-strip.jpg",
    videoUrl: "https://www.youtube.com/embed/R1B0YwCLv0k", // Replace with actual embed link
    description: "Install your Monster Light Strip with ease.",
  },
  {
    name: "Monster Light Bar",
    image: "/images/monster-light-bar.jpg",
    videoUrl: "https://www.youtube.com/embed/TVf6aygkwhc", // Replace with actual embed link
    description: "Setup guide for Monster Light Bar.",
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
