import React, { useState } from "react";
import "./Crew.css";
import { fetchCrew } from "../../data/api";
import Slider from "../../components/Slider/Slider";
import PageTransition from "../../components/PageTransition/PageTransition";

const Crew = () => {
  const crew = fetchCrew();
  const active = useState(0);

  return (
    <div className="container">
      {crew.map(
        (person, index) =>
          index === active[0] && (
            <div className="content" key={index}>
              <div className="personDesc">
                <h5>
                  <span>02</span> Meet your crew
                </h5>
                <PageTransition direction="right">
                <div>
                  <h4>{person.role}</h4>
                  <h3>{person.name}</h3>
                </div>
                <p>{person.bio}</p>
                </PageTransition>


                <div className="dotSlider">
                  <Slider
                  activeSlide={active}
                    nSlides={crew.length}
                  ></Slider>
                </div>
              </div>

              <div className="imgWrapper">
              <PageTransition direction="right">
              <img src={person.images.webp}></img>
              </PageTransition>

              
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Crew;
