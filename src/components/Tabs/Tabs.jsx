import React, { act } from "react";
import "./Tabs.css";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = ({ tabs, numbering, isNav, activeTab, hamburger, closeMenu }) => {
  return (
    <div className="tab-group">
      {tabs.map((tab, index) =>
        isNav ? (
          <NavLink
            className={`${hamburger && "hamburger"}  navLink`}
            to={`/${tab.toLowerCase()}`}
            key={index}
            onClick={() => {
              !hamburger && activeTab[1](index);
              hamburger && closeMenu();
            }}
          >
            {numbering && `0${index} `}
            {tab}
            {!hamburger && index === activeTab[0] ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </NavLink>
        ) : (
          <p
            className={`${activeTab[0] === index && "active"} navLink`}
            onClick={() => activeTab[1](index)}
            key={index}
          >
            {tab}
            {index === activeTab[0] ? (
              <motion.span className="underline" layoutId="underlin" />
            ) : null}
          </p>
        )
      )}
    </div>
  );
};

export default Tabs;
