import React from "react";

import styles from "./Card.module.scss";

type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  category?: React.ReactNode;
  onClick?: React.MouseEvent;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
  category,
  ...rest
}) => {
  return (
    <div onClick={onClick} className={styles.card} {...rest}>
      <img className={styles.image} src={image} alt="Description" />
      <p className={styles.category}>{category}</p>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default React.memo(Card);
