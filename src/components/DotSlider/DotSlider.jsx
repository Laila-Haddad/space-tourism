import React from "react";
import "./DotSlider.css";

const DotSlider = ({ dotNumber, activeDot }) => {
  return (
    <div id="slider1">
      {Array.from({ length: dotNumber }, (_, index) => (
        <div
          key={index}
          onClick={() => activeDot[1](index)}
          className={index === activeDot[0] ? "active": null}
        ></div>
      ))}
    </div>
  );
};

export default DotSlider;
