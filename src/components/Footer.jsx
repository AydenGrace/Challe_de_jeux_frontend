/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer({ handlePage = () => {} }) {
  return (
    <footer className={`d-flex`}>
      <div className={`${styles.sections_div}`}>
        <div className={`${styles.footer_div}`}>
          <NavLink to={"/"}>
            <img
              src="./img/CdJ_Logo-min.webp"
              alt="La Challe de Jeux"
              className={`${styles.logo}`}
            />
          </NavLink>
          <h2>Nos Partenaires</h2>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-20 mb-20`}
          >
            <a href="https://www.la-spa.fr/" target="_blank">
              <img src="./img/Spa-min.webp" alt="Spa partner" />
            </a>
            <a href="https://www.zooplus.fr/" target="_blank">
              <img src="./img/Zooplus-min.webp" alt="Zooplus partner" />
            </a>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10 mb-20 ${styles.icons}`}
          >
            <i className={`fa-solid fa-credit-card fa-xl`}></i>
            <i className={`fa-brands fa-cc-paypal fa-xl`}></i>
            <i className={`fa-brands fa-cc-visa fa-xl`}></i>
            <i className={`fa-brands fa-cc-stripe fa-xl`}></i>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10  ${styles.icons}`}
          >
            <i className={`fa-solid fa-shield-halved fa-xl`}></i>
            <p>Payement sécurisé</p>
          </div>
        </div>

        <div className={`${styles.footer_div}`}>
          <h2>Informations</h2>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10 ${styles.icons}`}
          >
            <i className={`fa-solid fa-mobile-screen fa-xl`}></i>
            <p>06.44.80.21.65</p>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10 ${styles.icons}`}
          >
            <i className={`fa-solid fa-paper-plane fa-xl`}></i>
            {/* <img src="./img/Gmail-min.webp" alt="Email" /> */}
            <p>contact@lachalledejeux.fr</p>
          </div>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-10 ${styles.icons}`}
          >
            <i className={`fa-solid fa-location-dot fa-xl`}></i>
            <p>19 rue des Arts, 59000 Lille, France</p>
          </div>
          <nav>
            <NavLink to={"/rgpd"}>Politique de confidentialité</NavLink>
            <NavLink to={"/legals"}>Mentions légales</NavLink>
            <NavLink to={"/cgv"}>Condition générales de vente</NavLink>
            <NavLink to={"/cgr"}>Conditions générales de remboursement</NavLink>
            <NavLink to={"/plan"}>Plan du site</NavLink>
          </nav>
        </div>
        <div className={`${styles.footer_div}`}>
          <h2>Horaires</h2>
          <p>Lundi - Fermé</p>
          <p>Mardi - Fermé</p>
          <p>Mercredi - De 9H à 22H</p>
          <p>Jeudi - De 9H à 22H</p>
          <p>Vendredi - De 9H à Minuit</p>
          <p>Samedi - De 9H à Minuit</p>
          <p>Dimanche - De 9H à 22H</p>
        </div>
        <div className={`${styles.footer_div}`}>
          <h2>Navigation</h2>
          <nav>
            <NavLink to={"/"}>Accueil</NavLink>
            <NavLink to={"/concept"}>Concept</NavLink>
            <NavLink to={"/rooms"}>Nos Salles</NavLink>
            <NavLink to={"/cats"}>Nos Résidents</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/account"}>Mon compte</NavLink>
          </nav>
          <div
            className={`d-flex p-10 w-100 justify-content-center g-10 ${styles.socials_footer}`}
          >
            <a onClick={() => handlePage(-1)}>
              <i className={`fa-brands fa-facebook-f`}></i>
            </a>
            <a onClick={() => handlePage(-1)}>
              <i className={`fa-brands fa-instagram`}></i>
            </a>
            <a onClick={() => handlePage(-1)}>
              <i className={`fa-brands fa-tiktok`}></i>
            </a>
          </div>
        </div>
      </div>
      <p className={`${styles.Copyright}`}>
        La Challe de Jeux © Copyrights 2024
      </p>
    </footer>
  );
}
