import React from "react";

import styles from "@components/Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";

export interface ILinkProps {
  link: string;
  title: string;
}

const LinkNavbar = ({ link, title }: ILinkProps) => {
  return (
    <li className={styles.item}>
      <Link to={link} className={styles.link}>
        {title}
      </Link>
    </li>
  );
};

export default LinkNavbar;
