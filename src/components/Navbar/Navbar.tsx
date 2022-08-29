import * as React from "react";

import { Link } from "react-router-dom";

import Basket from "../../assets/svg/Basket";
import Logo from "../../assets/svg/Logo";
import User from "../../assets/svg/User";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
        <p className={styles.logo__title}>Lalasia</p>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Product
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Services
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            Article
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            About Us
          </Link>
        </li>
      </ul>
      <div className={styles.login}>
        <Basket />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
