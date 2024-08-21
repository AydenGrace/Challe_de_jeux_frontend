import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown({ text, date, children }) {
  const random_Id = Math.round(Math.random()*10000);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    if (open) {
      document.getElementById(`${text}_${random_Id}_icon`).style.transform =
        "rotate(180deg)";
      document.getElementById(`${text}_${random_Id}_lower`).style.maxHeight = "100vh";
    } else {
      document.getElementById(`${text}_${random_Id}_icon`).style.transform = "rotate(0deg)";
      document.getElementById(`${text}_${random_Id}_lower`).style.maxHeight = "0";
    }
    setOpen(!open);
  };

  return (
    <div className={`d-flex w-100 flex-column`}>
      <div
        className={`d-flex w-100 justify-content-sb align-items-center p-10 ${styles.upper}`}
        onClick={handleClick}
      >
        <div className={`d-flex flex-fill ${styles.mwThree}`}><h2>{text}</h2></div>
        <div className={`f-center flex-fill ${styles.mwThree}`}><p>{date}</p></div>
        <div className={`d-flex flex-fill ${styles.mwThree} justify-content-end`}><i
          className={`fa-solid fa-chevron-down c-p fa-2xl ${styles.icon}`}
          id={`${text}_${random_Id}_icon`}
        ></i></div>
        
      </div>
      <div className={`d-flex w-100 ${styles.lower}`} id={`${text}_${random_Id}_lower`}>
        {children}
      </div>
    </div>
  );
}
