import React from "react";

import styles from "@components/Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";

export interface ILinkProps {
  link: string;
  title: string;
}

const LinkNavbar = ({ link, title }: ILinkProps) => {
  return (
    <Link to={link} className={styles.link}>
      {title}
    </Link>
  );
};

export default LinkNavbar;
