import React from "react";
import styles from "./Header.module.css";
import Link from "../Link";

const Header = () => (
  <div className={styles.navbar}>
    <div className={styles.left}>
      <Link to="/">Home</Link>
    </div>
    <div className={styles.right}>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  </div>
);

export default Header;
