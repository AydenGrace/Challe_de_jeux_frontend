import React from "react";
import style from "./Profile_Security.module.scss";
import { useNavigation } from "react-router-dom";
import useDocumentTitle from "../../../../components/UseDocumentTitle/UseDocumentTitle";

export default function Profile_Security() {
  const { state } = useNavigation();
  useDocumentTitle("Mes informations de connexion");

  const handleback = () => {
    history.back();
  };

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="Profile" className={`d-flex flex-column mh-100 ${style.page}`}>
      <div className="headersep"></div>
      <h2>Connexion et Sécurité</h2>
      <div className="w-100 d-flex flex-column">
        <a className={`d-flex ${style.backArea}`} onClick={handleback}>
          <i className={`fa-solid fa-circle-arrow-left fa-2xl c-p`}></i>
          <p>Retour</p>
        </a>
      </div>
      <div className="d-flex gap-10 w-100 flex-fill">
        
      </div>
    </section>
  );
}
