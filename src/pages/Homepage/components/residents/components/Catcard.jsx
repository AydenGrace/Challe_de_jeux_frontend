/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Catcard.module.scss";
import { Link } from "react-router-dom";

export default function Catcard({ cat }) {
  return (
    <Link
      to={`/cat/${cat._id}`}
      className={`d-flex card flex-column align-items-center m-20 ${styles.catcard}`}
    >
      <img src={`${cat.img}`} alt={cat.name} className={``} />
      <div className="h-100p flex-fill">
        <h3>{cat.name}</h3>
        <p>{cat.overview}</p>
      </div>
    </Link>
  );
}
