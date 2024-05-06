/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Informations.module.scss";
import Section from "./components/Section";

export default function Informations() {
  return (
    <section
      id="Informations"
      className={`w-100 d-flex flex-column mh-100 ${styles.Informations} align-items-center`}
    >
      <Section
        btn_text={"En savoir plus"}
        text={
          "Venez rencontrer nos résidents lors d’un moment de détente et de simplicité. Profitez de votre séjour en câlinant vos animaux favoris ! Tous nos résidents sont disponibles à l’adoption sous certaines conditions."
        }
        title={"Des rencontres félines en toute simplicité !"}
        img={"chat_1-min.webp"}
        isReversed={false}
        url="/concept"
      />
      <Section
        btn_text={"Découvrez notre carte"}
        text={
          "Envie d’un café ? D’un thé peut-être ? Ou encore d’un petit dessert ? Découvrez nos produits qui sauront ravir vos babines ! Tous nos produits sont fait sur place et nos ingrédients sont issus du commerce local et biologique. Rien de tel qu’un bon chocolat chaud avec un chat ronronnant sur les genoux !"
        }
        title={"Des gourmandises locales"}
        img={"patisserie-min.webp"}
        isReversed={true}
        url="/menu"
      />
      <Section
        btn_text={"Rencontrez les !"}
        text={
          "Nous sommes fières de nos partenaires sans qui ce projet n’aurait pas pu voir le jour ! Tous nos résidents sont des chats recueillis dans un refuge pour diverses raisons. Nous souhaitons leurs offrir une seconde vie remplie de câlins et de grattouilles !"
        }
        title={"Nos Partenaires"}
        img={"chat_2-min.webp"}
        isReversed={false}
        url="/partners"
      />
    </section>
  );
}
