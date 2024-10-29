import React from "react";
import "./Slider.css";

const Slider = ({ nSlides, activeSlide : [active , setActive] , numbered  }) => {
  return (
    <div id={numbered? "nSlider": "dotSlider"}>
      {Array.from({ length: nSlides }, (_, index) => (
        <div
          key={index}
          onClick={() => setActive(index)}
          className={index === active ? "active" : null}
        >
          {numbered && index + 1}
        </div>
      ))}
    </div>
  );
};

export default Slider;
