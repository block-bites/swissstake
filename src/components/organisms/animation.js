import React, { useRef, useEffect, useState } from "react";
import First from "../../assets/First-animation.png";
import Second from "../../assets/Second-animation.png";
import Third from "../../assets/Third-animation.png";
import Fourth from "../../assets/Fourth-animation.png";

const images = [First, Second, Third, Fourth];

const Imageslider = () => {
  const sliderBoxRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleWheel = (event) => {
    if (isHovering) {
      let newIndex = activeIndex;

      if (event.deltaY > 0 && activeIndex < images.length - 1) {
        newIndex = activeIndex + 1;
      } else if (event.deltaY < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        event.preventDefault();
      }
    }
  };

  const handleScroll = () => {
    if (sliderBoxRef.current) {
      const scrollPosition = sliderBoxRef.current.scrollTop;
      const newIndex = Math.floor(scrollPosition / 900);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {}, [activeIndex]);

  useEffect(() => {
    if (sliderBoxRef.current) {
      sliderBoxRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
      sliderBoxRef.current.addEventListener("scroll", handleScroll);

      return () => {
        sliderBoxRef.current.removeEventListener("wheel", handleWheel);
        sliderBoxRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHovering, activeIndex]);

  return (
    <div className="slider-container">
      <div
        className="slider-box"
        ref={sliderBoxRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-slide ${index === activeIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        <div className="hidden-content"></div>
      </div>
    </div>
  );
};

export default Imageslider;
