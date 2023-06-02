'use client'

import React, { useState, useEffect, useRef } from 'react';

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

      const angleX = (mouseY - imageCenterY) * 0.014;
      const angleY = (mouseX - imageCenterX) * -0.013;

      image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
  }

  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    // Check if image is already loaded when component mounts
    if (imgRef.current?.complete) {
      handleImageLoad();
    }
  }, []); // Run only once after initial render

  const imageUrl = new URL("../public/stockfish.png", import.meta.url);
  imageUrl.searchParams.set('v', Date.now().toString()); // add timestamp to url

  return (
    <div>
      <img
        ref={imgRef}
        src={imageUrl.toString()}
        alt="Stockfish Icon"
        onMouseMove={handleMouseMove}
        onLoad={handleImageLoad}
        style={loaded ? {} : { filter: 'blur(8px)' }}
      />
    </div>
  );
}

export default Logo;
