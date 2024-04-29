/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Catcard.module.scss";

export default function Catcard({ cat }) {
  return (
    <div
      className={`d-flex card flex-column align-items-center m-20 ${styles.catcard}`}
    >
      <img src={`../../../.${cat.img}`} alt={cat.name} className={``} />
      <h3>{cat.name}</h3>
      <p>{cat.overview}</p>
    </div>
  );
}
