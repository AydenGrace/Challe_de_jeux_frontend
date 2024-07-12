/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Section.module.scss";
import Button from "./../../../../../components/Buttons";
import { Link } from "react-router-dom";

export default function Section({
  img,
  title,
  text,
  btn_text,
  btn_click,
  isReversed = false,
  url,
}) {
  const [reversed, setReversed] = useState("flex-row-m");
  useEffect(() => {
    if (isReversed) {
      setReversed("flex-row-r-m");
    } else {
      setReversed("flex-row-m");
    }
  }, []);

  return (
    <div
      className={`d-flex w-100 align-items-center ${styles.container} ${reversed}`}
    >
      <div className={`${styles.desc}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="d-flex w-100 justify-content-center">
          <Link to={`${url}`} className="btn-nav btn-primary">
            {btn_text}
          </Link>
        </div>
      </div>
      <div
        className={`${styles.img}`}
        style={{ backgroundImage: `url("${img}")` }}
      ></div>
    </div>
  );
}
