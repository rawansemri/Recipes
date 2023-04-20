import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <p>
        FOOD <span className={styles.recipes}>RECIPES</span>
      </p>
      <div className={styles.home}>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};
