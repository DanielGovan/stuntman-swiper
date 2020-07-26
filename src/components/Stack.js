import React, { useState } from "react";
import styles from "./Stack.module.css";
import SwipeCard from "./SwipeCard";

function Stack({ data }) {
  const [storedData, setStoredData] = useState(data);
  const [dragging, setDragging] = useState(false);
  // changes styles when dragging to make it look like the card is moving

  const handleDragStart = (e) => {
    console.log("Drag started");
    e.target.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = (e) => {
    console.log("Drag ended");
    setDragging(false);
  };

  return (
    <div className={styles.stack}>
      {storedData
        .map((item) => (
          <SwipeCard
            draggable
            dragging={dragging}
            key={item.id}
            name={item.name}
            image={item.image}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))
        .reverse()}
    </div>
  );
}

export default Stack;
