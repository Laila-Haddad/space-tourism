import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/shared/logo.svg";
import Tabs from "../Tabs/Tabs";
import { useWindowSize } from "../../hooks/useWindowSize";

import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  const { width, _ } = useWindowSize();
  const active = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={styles.navBar}>
      <img src={Logo} width="35"></img>
      {width > 600 ? (
        <>
          <hr className={styles.hr} />
          <div className={styles.tabs}>
            <Tabs
              tabs={["Home", "Destination", "Crew", "Technology"]}
              numbering={!(width < 768)}
              isNav={true}
              activeTab={active}
            ></Tabs>
          </div>
        </>
      ) : (
        <div>
          <Menu
            right
            noOverlay
            isOpen={menuOpen}
            onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
          >
            <Tabs
              tabs={["Home", "Destination", "Crew", "Technology"]}
              numbering={true}
              isNav={true}
              hamburger={true}
              closeMenu={closeMenu}
            ></Tabs>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default NavBar;
