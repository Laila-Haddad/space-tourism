import React from "react";
import "./ExploreButton.css"
import { Link } from "react-router-dom";

const ExploreButton = () => {
  return (
    <div id="explore-button">
      <Link to="/destination">Explore</Link>
    </div>
  );
};

export default ExploreButton;
