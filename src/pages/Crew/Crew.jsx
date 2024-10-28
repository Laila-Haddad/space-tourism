import React, { useState } from "react";
import "./Crew.css";
import { fetchCrew } from "../../data/api";
import DotSlider from "../../components/DotSlider/DotSlider";

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
                <div>
                  <h4>{person.role}</h4>
                  <h3>{person.name}</h3>
                </div>
                <p>{person.bio}</p>

                <div className="dotSlider">
                  <DotSlider
                    dotNumber={crew.length}
                    activeDot={active}
                  ></DotSlider>
                </div>
              </div>

              <div className="imgWrapper">
              <img src={`/src/${person.images.webp}`}></img>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Crew;
