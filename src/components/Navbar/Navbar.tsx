import * as React from "react";

import LinkNavbar from "@components/LinkNavbar";

import Basket from "../../assets/svg/Basket";
import Logo from "../../assets/svg/Logo";
import User from "../../assets/svg/User";
import styles from "./Navbar.module.scss";

const config = [
  { link: "/", title: "Product" },
  { link: "/", title: "Services" },
  { link: "/", title: "Article" },
  { link: "/", title: "About Us" },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
        <p className={styles.logo__title}>Lalasia</p>
      </div>
      <ul className={styles.items}>
        {config.map(({ link, title }) => {
          return <LinkNavbar link={link} title={title} />;
        })}
      </ul>
      <div className={styles.login}>
        <Basket />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
