import React from "react";
import styles from "./SwipeCard.module.css";

function Card({ dragging, image, name, handleDragStart }) {
  return (
    <div
      draggable
      className={styles.card + " " + `${dragging ? styles.dragging : ""}`} // this haunts me
      onDragStart={(e) => handleDragStart(e)}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}

export default Card;
