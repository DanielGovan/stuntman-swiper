import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.AppHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
