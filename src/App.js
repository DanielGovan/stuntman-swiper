import React from "react";
import styles from "./App.module.css";
import Stack from "./components/Stack";

import { workers } from "./data";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.AppHeader}>
        <h1>Holliwood Blockbuster</h1>
        <h2>Position: Stunt Double</h2>
      </header>
      <Stack data={workers} />
      <footer>
        <span>No</span>
        <span>Yes</span>
      </footer>
    </div>
  );
}

export default App;
