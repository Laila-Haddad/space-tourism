import React, { useState } from "react";
import { fetchTech } from "../../data/api";
import "./Technology.css";
import Slider from "../../components/Slider/Slider";
import { useWindowSize } from "../../hooks/useWindowSize";
import PageTransition from "../../components/PageTransition/PageTransition";

const Technology = () => {
  const tech = fetchTech();
  const active = useState(0);
  const { width, _ } = useWindowSize();

  return (
    <div className="container">
      <h5>
        <span>03</span> Space launch 101
      </h5>

      <div >
        {tech.map(
          (element, index) =>
            index === active[0] && (
              <div className="content" key={index}>
                {width <= 1220 && (
                  <img
                    src={element.images.landscape}
                    className="landscapeImg"
                  ></img>
                )}
                <div className="slider">
                  <Slider activeSlide={active} nSlides={tech.length} numbered={true}></Slider>
                </div>

                <PageTransition direction="up">
                <div className="techDesc">

                  <p className="subHeading2">the terminology...</p>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </div>

                </PageTransition>

                <PageTransition direction="up">

                {width > 1220 && (
                  <img
                    src={element.images.portrait}
                    height="100%"
                    className="portImg"
                  ></img>
                  
                )}
                </PageTransition>
                </div>
            )
        )}
      </div>
    </div>
  );
};

export default Technology;
