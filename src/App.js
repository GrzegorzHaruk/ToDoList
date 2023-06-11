import React from "react";
import MainContainer from "./Components/MainContainer/MainContainer"
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.appBackground}>
      <MainContainer/>
    </div>
  );
}

export default App;
