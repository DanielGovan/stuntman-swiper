import React, { useState } from "react";
import styles from "./Stack.module.css";
import SwipeCard from "./SwipeCard";

function Stack({ data }) {
  const [storedData, setStoredData] = useState(data);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    console.log("Drag started");
  };

  const handleDragEnd = () => {
    console.log("Drag ended");
  };

  return (
    <div className={styles.stack}>
      Stack!
      {storedData
        .map((item) => (
          <SwipeCard
            draggable
            key={item.id}
            name={item.name}
            image={item.image}
            ondragstart={handleDragStart}
            ondragend={handleDragEnd}
          />
        ))
        .reverse()}
    </div>
  );
}

export default Stack;
