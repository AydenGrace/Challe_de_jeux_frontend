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
              src="https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/logos%2FChalle_de_jeux_logo_horizontal_sombre.webp?alt=media&token=07f8eae2-4f8e-49b4-855c-c6452a90e0b7"
              alt="La Challe de Jeux"
              className={`${styles.logo}`}
            />
          </NavLink>
          <h2>Nos Partenaires</h2>
          <div
            className={`d-flex w-100 justify-content-center align-items-center gap-20 mb-20`}
          >
            <a href="https://www.la-spa.fr/"  target="_blank">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/logos%2FSpa-min.webp?alt=media&token=3db48526-06b5-4eb0-8eaf-6e5d3d0288c5"
                alt="Spa partner"
              />
            </a>
            <a href="https://www.zooplus.fr/" target="_blank">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/logos%2FZooplus-min.webp?alt=media&token=1f891174-aff4-4b37-b10b-6b4b5289268d"
                alt="Zooplus partner"
              />
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
            <NavLink to={"/privacy"}>Politique de confidentialité</NavLink>
            <NavLink to={"/legals"}>Mentions légales</NavLink>
            <NavLink to={"/cgv"}>Condition générales de vente</NavLink>
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
            <a href="https://www.facebook.com/?locale=fr_FR" target="_blank" aria-label="Facebook">
              <i className={`fa-brands fa-facebook-f c-p`}></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
              <i className={`fa-brands fa-instagram c-p`}></i>
            </a>
            <a href="https://www.tiktok.com/fr/" target="_blank" aria-label="Tiktok">
              <i className={`fa-brands fa-tiktok c-p`}></i>
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
