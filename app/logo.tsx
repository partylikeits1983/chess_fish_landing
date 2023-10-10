"use client";

import React, { useState, useEffect, useRef } from "react";
import "./fadeEffect.css"; // Assuming you have fadeEffect.css for the styling

function Logo() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const image = imgRef.current;
    if (image) {
      const imageCenterX = image.offsetLeft + image.offsetWidth / 2;
      const imageCenterY = image.offsetTop + image.offsetHeight / 2;

      const angleX = (mouseY - imageCenterY) * 0.01;
      const angleY = (mouseX - imageCenterX) * -0.01;

      image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    // Check if image is already loaded when component mounts
    if (imgRef.current?.complete) {
      handleImageLoad();
    }
  }, []); // Run only once after initial render

  const imageUrl = new URL("../public/chessfish.png", import.meta.url);
  imageUrl.searchParams.set("v", Date.now().toString()); // add timestamp to url

  return (
    <div className="image-container">
      <img
        ref={imgRef}
        src={
          loaded
            ? imageUrl.toString()
            : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        }
        // Using a 1x1 transparent gif as placeholder
        alt="Chess Fish Icon"
        onMouseMove={handleMouseMove}
        onLoad={handleImageLoad}
        className={loaded ? "loaded" : ""}
      />
    </div>
  );
}

export default Logo;
