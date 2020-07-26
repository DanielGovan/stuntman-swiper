import React, { useState, useRef } from "react";
import styles from "./Stack.module.css";
import SwipeCard from "./SwipeCard";

function Stack({ data }) {
  const [currentCards, setCurrentCards] = useState(data);
  const [keptCards, setKeptCards] = useState([]);
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
      handleNextCard("discard");
    } else if (pickUp < e.clientX) {
      handleNextCard("keep");
    }
    //cleans up listener, ref and state
    dragCard.current.removeEventListener("dragend", handleDragEnd);
    dragCard.current = null;
    setDragging(false);
  };

  const handleNextCard = (pick) => {
    if (pick == "keep") {
      console.log("Card kept");
      //add top card to the kept cards
      setKeptCards([currentCards[0], ...keptCards]);
    } else if (pick == "discard") {
      console.log("Card discarded");
    }
    //removes the top card from current cards
    setCurrentCards([...currentCards.slice(1)]);
  };

  return (
    <div className={styles.stack}>
      {currentCards.length > 0 ? (
        //this should wait for the images to load
        currentCards
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
          .reverse()
      ) : (
        // if no more cards, show the ones picked, if any
        <>
          <p>You've seen all the cards!</p>
          {keptCards && (
            <>
              You picked
              {
                keptCards.map((item) => (
                  <p>{item.name}</p>
                ))
                // i would have liked to have shown thumbnails too
              }
            </>
          )}
        </>
      )}
      <footer>
        <div className={styles.buttonWrap}>
          <button
            className={styles.button}
            onClick={() => handleNextCard("discard")}
          >
            No
          </button>
          <button
            className={styles.button}
            onClick={() => handleNextCard("keep")}
          >
            Yes
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Stack;
