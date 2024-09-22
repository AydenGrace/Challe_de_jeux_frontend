/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Catcard.module.scss";
import { Link } from "react-router-dom";

export default function Catcard({ cat, hover }) {
  const [cardClass, setCardClass] = useState("");

  useEffect(() => {
    if (hover) {
      setCardClass("cardHover");
    } else {
      setCardClass("");
    }
  }, []);

  return (
    <Link
      to={`/cat/${cat._id}`}
      className={`d-flex card flex-column align-items-center ${styles.catcard} ${cardClass}`}
    >
      <img src={`${cat.img}`} alt={cat.name} className={`${styles.Img}`} />
      <div className="h-100p flex-fill">
        <h3>{cat.name}</h3>
        <p>{cat.overview}</p>
      </div>
    </Link>
  );
}
