/* eslint-disable no-unused-vars */
import React from "react";
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
  return (
    <div className={`d-flex w-100 align-items-center ${styles.container}`}>
      {!isReversed && (
        <div
          className={`${styles.img}`}
          style={{ backgroundImage: `url(./img/${img})` }}
        ></div>
      )}
      <div className={`${styles.desc}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="d-flex w-100 justify-content-center">
          <Link to={`${url}`} className="btn-nav btn-primary">
            {btn_text}
          </Link>
        </div>
      </div>
      {isReversed && (
        <div
          className={`${styles.img}`}
          style={{ backgroundImage: `url(./img/${img})` }}
        ></div>
      )}
    </div>
  );
}
