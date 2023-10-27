import React, { useRef, useEffect, useState } from "react";
import First from "../../assets/First-animation.png";
import Second from "../../assets/Second-animation.png";
import Third from "../../assets/Third-animation.png";
import Fourth from "../../assets/Fourth-animation.png";

const images = [First, Second, Third, Fourth];

const Imageslider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (!scrolling && sliderRef.current) {
      const scrollHeight = sliderRef.current.scrollHeight;
      const scrollTop = sliderRef.current.scrollTop;
      const containerHeight = sliderRef.current.clientHeight;
      const imageHeight = containerHeight / images.length;

      const newIndex = Math.floor(scrollTop / imageHeight);
      setActiveIndex(newIndex);

      setScrolling(true);

      setTimeout(() => {
        setScrolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
      return () => {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-box" ref={sliderRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-slide ${index === activeIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
