import React, { useState, useRef } from "react";
import styles from "./Stack.module.css";
import SwipeCard from "./SwipeCard";

function Stack({ data }) {
  const [currentCards, setCurrentCards] = useState(data);
  const [chosen, setChosen] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [pickUp, setPickUp] = useState(0);

  const dragCard = useRef();

  const handleDragStart = (e) => {
    dragCard.current = e.target;
    dragCard.current.addEventListener("dragend", handleDragEnd);
    setPickUp(e.clientX);
    setTimeout(() => {
      // changes styles when dragging to make it look like the card is moving
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = (e) => {
    if (pickUp > e.clientX) {
      handleNextCard("no");
    } else if (pickUp < e.clientX) {
      handleNextCard("yes");
    }
    //resets listener and ref and state
    dragCard.current.removeEventListener("dragend", handleDragEnd);
    dragCard.current = null;
    setDragging(false);
  };

  const handleNextCard = (pick) => {
    if (pick == "yes") {
      console.log("keep");
      //setChosen([...chosen.push(currentCards[0])]);
      //Push to kept
    } else {
      console.log("discard");
    }
    setCurrentCards([...currentCards.slice(1)]); //removes the top card
    //console.log(chosen, currentCards[0]);
  };

  return (
    <div className={styles.stack}>
      {currentCards
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
