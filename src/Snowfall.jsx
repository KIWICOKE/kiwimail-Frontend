import React, { useEffect, useRef } from "react";
import "./Snowfall.css";

const Snowfall = () => {
  const flakesContainerRef = useRef(null);

  useEffect(() => {
    if (flakesContainerRef.current) {
      const numFlakes = 50;

      for (let i = 0; i < numFlakes; i++) {
        const flake = document.createElement("div");
        flake.classList.add("flake");
        flake.style.left = `${Math.random() * 100}vw`;
        flake.style.animationDelay = `${Math.random() * 5}s`;
        flakesContainerRef.current.appendChild(flake);
      }
    }
  }, []);

  return <div ref={flakesContainerRef} className="snowflakes-container" />;
};

export default Snowfall;
