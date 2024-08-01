import React from "react";
import style from "./LinkCard.module.scss";
import { Link } from "react-router-dom";

export default function LinkCard({
  LinkTo = "/",
  IconClasses = "fa-regular fa-address-card fa-2xl",
  Title = "Informations personnelles",
  SubText = "Fournissez des renseignements personnels et indiquez comment nous pouvons vous joindre",
}) {
  return (
    <Link
      to={LinkTo}
      className={`d-flex flex-column card p-10 ${style.LinkCard}`}
    >
      <i className={IconClasses}></i>
      <div className={`d-flex flex-column ${style.CardText}`}>
        <h2>{Title}</h2>
        <p>{SubText}</p>
      </div>
    </Link>
  );
}
