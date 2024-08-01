import React from "react";
import styles from "./Mentions.module.scss";
import useDocumentTitle from "../../../components/UseDocumentTitle/UseDocumentTitle";

export default function Mentions() {
  useDocumentTitle("Mentions légales");
  return (
    <div className={`d-flex flex-column ${styles.page}`}>
      <div className={`${styles.headerSeparator}`}></div>
      <h1>MENTIONS LÉGALES</h1>
      <section
        className={`d-flex flex-column justify-content-start ${styles.section}`}
      >
        <h2>SOCIÉTÉ ÉDITRICE DU SITE</h2>
        <p>La CHALLE DE JEUX SARL</p>
        <p>Siret 804 392 793 00010</p>
        <p>Siège social : 19 rue des Arts, 59000 Lille, France</p>
      </section>

      <section
        className={`d-flex flex-column justify-content-start ${styles.section}`}
      >
        <h2>CONTACT </h2>
        <p>Tel.: +33 (0)3 62 65 40 56</p>
        <p>Directeur de la publication : M Pierre-Alexandre CRABB֤É</p>
        <p>Ce site web est hébergé par : Vercel</p>
      </section>

      <section
        className={`d-flex flex-column justify-content-start ${styles.section}`}
      >
        <h2>PROPRIÉTÉ INTELLECTUELLE </h2>
        <p>
          La Société éditrice du site est titulaire de tous les droits de
          propriété intellectuelle relatifs au site ou détient les droits
          d’usage y afférents.
        </p>
        <p>
          L’accès au site ne vous confère aucun droit sur les droits de
          propriété intellectuelle relatifs au site qui restent la propriété
          exclusive de la Société éditrice du Site.
        </p>
        <p>
          Les éléments accessibles sur le site, notamment sous forme de textes,
          photographies, images, icônes, sons, vidéos, logiciels, base de
          données, données sont également protégés par des droits de propriété
          intellectuelle et industrielle et autres droits privatifs que la
          Société éditrice du site.
        </p>
        <p>
          Sauf dispositions explicites signalées dans le site (exclusivement
          celles vous invitant expressément à télécharger un document disponible
          sur le site), vous ne pouvez, en aucun cas, reproduire, représenter,
          modifier, transmettre, publier, adapter, sur quelque support que ce
          soit, par quelque moyen que ce soit, ou exploiter de quelque manière
          que ce soit, tout ou partie du site sans l’autorisation écrite
          préalable de la Société éditrice du site.
        </p>
        <p>
          L’exploitation non préalablement autorisée par la Société éditrice du
          site, à quelque titre que ce soit, de tout ou partie du site pourra
          faire l’objet de toute action appropriée, notamment d’une action en
          contrefaçon. Seul est autorisé l’usage d’une partie qualitativement ou
          quantitativement non substantielle du Site à des fins strictement
          privées et non commerciales.
        </p>
      </section>

      <section
        className={`d-flex flex-column justify-content-start ${styles.section}`}
      >
        <h2>LIMITATIONS DE RESPONSABILITÉ</h2>
        <p>
          Vous reconnaissez utiliser les informations disponibles sur le site
          sous votre responsabilité exclusive et assumez pleinement les risques
          liés au crédit que vous leur accordez.
        </p>
        <p>
          A ce titre, la Société éditrice du site ne saurait être tenue pour
          responsable des dommages directs ou indirects résultant de
          l’utilisation des dites Informations et plus largement de
          l’utilisation de son site, des erreurs, d’une absence de disponibilité
          des informations et/ou de la présence de virus sur son site.
        </p>
        <p>
          De même, la Société éditrice du site ne saurait être tenue pour
          garante de l’exhaustivité, de l’exactitude, de la complétude et de
          l’actualité, des informations diffusées sur son site.
        </p>
      </section>

      <section
        className={`d-flex flex-column justify-content-start ${styles.section}`}
      >
        <h2>DONNÉES PERSONNELLES</h2>
        <p>
          Les données recueillies dans le cadre des formulaires de candidatures
          (nom, prénom(s), e-mail, téléphone, adresse) font l’objet d’un
          traitement informatique destiné à des fins d’informations. Ces
          traitements sont indispensables pour répondre aux demandes
          d’information des utilisateurs du présent site internet.
        </p>
        <p>
          Le destinataire des dites données est LA CHALLE DE JEUX. Ces données
          concernant les utilisateurs du présent site internet sont traitées de
          manière strictement confidentielle.
        </p>
        <p>
          Conformément à la loi « informatique et libertés » du 6 janvier 1978
          modifiée en 2004, tout utilisateur du présent site internet bénéficie
          d’un droit d’accès, de rectification et de suppression des données qui
          le concerne, qu’il peut exercer en s’adressant à la Direction de LA
          CHALLE DE JEUX. Tout utilisateur du présent site internet peut
          également, pour des motifs légitimes, s’opposer au traitement des
          données le concernant.
        </p>
      </section>
    </div>
  );
}
