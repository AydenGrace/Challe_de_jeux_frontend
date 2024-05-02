/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Connect.module.scss";

export default function Connect({ setDisplay }) {
  return (
    <div
      className={`f-center flex-column ${styles.container}`}
      onClick={() => setDisplay(false)}
    >
      <div
        className="f-center card p-20"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Connexion / Inscription</h2>
      </div>
    </div>
  );
}
