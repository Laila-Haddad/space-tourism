import React, { act } from "react";
import "./Tabs.css";
import { NavLink } from "react-router-dom";

const Tabs = ({ tabs, numbering, isNav, activeTab, hamburger, closeMenu  }) => {
  return (
    <div className="tab-group">
      {tabs.map((tab, index) =>
        isNav ? (
          <NavLink className={`${hamburger && 'hamburger'}  navLink`} to={`/${tab.toLowerCase()}`} key={index} onClick={closeMenu} >
            {numbering && `0${index} `}
            {tab}
          </NavLink>
        ) : (
          <p
            className={`${activeTab[0] === index && "active"} navLink`}
            onClick={() => activeTab[1](index)}
            key={index}
          >
            {tab}
          </p>
        )
      )}
    </div>
  );
};

export default Tabs;
