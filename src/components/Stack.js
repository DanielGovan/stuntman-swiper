import React from "react";
import styles from "./Stack.module.css";
import Card from "./Card";

function Stack() {
  return (
    <div className={styles.wrap}>
      Stack!
      <Card />
    </div>
  );
}

export default Stack;
