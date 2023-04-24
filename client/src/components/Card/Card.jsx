import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.imag} />
      <h2 className={styles.title}>{name}</h2>
    </div>
  );
};

export default Card;
