import React from "react";
import logo from "../logo.svg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <img src={logo} className={styles.reactLogo} alt="logo" />
    </header>
  );
}

export default Navbar;
