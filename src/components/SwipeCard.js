import React from "react";
import styles from "./SwipeCard.module.css";

function Card({ image, name }) {
  return (
    <div
      draggable
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}

export default Card;
