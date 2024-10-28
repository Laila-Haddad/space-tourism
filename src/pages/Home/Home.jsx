import React from "react";
import "./Home.css";
import ExploreButton from "../../components/ExploreButton/ExploreButton";

const Home = () => {
  return (
    <div className="container home">
      <div className="landing-text">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="exploreButton">
        <div className="placeholder"></div>
        <ExploreButton></ExploreButton>
      </div>
    </div>
  );
};

export default Home;
