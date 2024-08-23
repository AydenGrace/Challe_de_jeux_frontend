import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../components/Loader/V2/Loading";
import style from "./Profile.module.scss";
import LinkCard from "./components/LinkCard";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function Profile() {
  const { state } = useNavigation();
  useDocumentTitle("Mon profil");

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="Profile" className={`d-flex flex-column mh-100 ${style.page}`}>
      <div className="headersep"></div>
      <h1 className="mb-20">Mon profil</h1>
      <div className={`w-100 f-center flex-wrap gap-20 p-10 ${style.wrapZone}`}>
        <LinkCard
          IconClasses="fa-regular fa-address-card fa-2xl c-p"
          LinkTo="/profile/personnal"
          Title="Informations personnelles"
          SubText="Fournissez des renseignements personnels et indiquez comment nous
              pouvons vous joindre"
        />
        <LinkCard
          IconClasses="fa-solid fa-shield-halved fa-2xl c-p"
          LinkTo="/profile/security"
          Title="Connexion et Sécurité"
          SubText="Mettez à jour votre mot de passe et sécurisez votre compte"
        />
        <LinkCard
          IconClasses="fa-solid fa-trophy fa-2xl c-p"
          LinkTo="/profile/archievements"
          Title="Trophées"
          SubText="Consultez les trophées que vous avez gagné"
        />
        <LinkCard
          IconClasses="fa-solid fa-book-open fa-2xl c-p"
          LinkTo="/profile/history"
          Title="Historique de résevration"
          SubText="Consultez l'historique des réservations effectués avec ce compte"
        />
      </div>
    </section>
  );
}
