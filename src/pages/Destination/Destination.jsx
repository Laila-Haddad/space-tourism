import React, { useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import { fetchDestinations } from "../../data/api";
import "./Destination.css";

const Destination = () => {
  const destinations = fetchDestinations();
  const active = useState(0);

  return (
    <div className="container">
      <h5>
        <span>01</span> Pick your destination
      </h5>
      {destinations.map(
        (destination, index) =>
          index === active[0] && (
            <div className="content" key={index}>
              <img src={`/src/${destination.images.webp}`} height='100%'></img>
              <div className="planetDesc">
                <Tabs
                  tabs={destinations.map((destination) => destination.name)}
                  activeTab={active}
                ></Tabs>
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <hr />
                <div className="planetInfo">
                  <div>
                    <h6 className="subHeading2">AVG. DISTANCE</h6>
                    <p className="subHeading">{destination.distance}</p>
                  </div>
                  <div>
                    <h6 className="subHeading2">Est. travel time</h6>
                    <p className="subHeading">{destination.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Destination;