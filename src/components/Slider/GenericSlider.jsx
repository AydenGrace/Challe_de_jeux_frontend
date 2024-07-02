import React from "react";
import styles from "./GenericSlider.module.scss";

export default function GenericSlider({ children }) {
  return (
    <div className={`${styles.slider}`}>
      <div className={`${styles.controllers}`}>
        <i
          className={`fa-solid fa-circle-arrow-left fa-2xl ${styles.arrow}`}
        ></i>
        <i
          className={`fa-solid fa-circle-arrow-right fa-2xl ${styles.arrow}`}
        ></i>
      </div>
      <div className={`${styles.slide_area}`}>{children}</div>
    </div>
  );
}
