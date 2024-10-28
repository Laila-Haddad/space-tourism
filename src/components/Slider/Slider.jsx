import React from "react";
import "./Slider.css";

const Slider = ({ number, activeSlide }) => {
  return (
    <div className="sliderWrapper">
      {Array.from({ length: number }, (_, index) => (
        <div
          key={index}
          onClick={() => activeSlide[1](index)}
          className={index === activeSlide[0] ? "active slider2" : "slider2"}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Slider;
