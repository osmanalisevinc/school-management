
"use client"
import React, { use, useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function DarkModeToggle() {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}

export default DarkModeToggle;
