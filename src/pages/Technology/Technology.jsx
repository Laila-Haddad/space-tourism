import React, { useState } from "react";
import { fetchTech } from "../../data/api";
import "./Technology.css";
import Slider from "../../components/Slider/Slider";
import { useWindowSize } from "../../hooks/useWindowSize";

const Technology = () => {
  const tech = fetchTech();
  const active = useState(0);
  const { width, _ } = useWindowSize();

  return (
    <div className="container">
      <h5>
        <span>03</span> Space launch 101
      </h5>

      <div className="content">
        {tech.map(
          (element, index) =>
            index === active[0] && (
              <>
                {width <= 1220 && (
                  <img
                    src={`/src/${element.images.landscape}`}
                    className="landscapeImg"
                  ></img>
                )}
                <div className="slider">
                  <Slider activeSlide={active} number={tech.length}></Slider>
                </div>

                <div className="techDesc" key={index}>
                  <p className="subHeading2">THE TERMINOLOGy...</p>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>

                {width > 1220 && (
                  <img
                    src={`/src/${element.images.portrait}`}
                    height="100%"
                    className="portImg"
                  ></img>
                )}
              </>
            )
        )}
      </div>
    </div>
  );
};

export default Technology;
