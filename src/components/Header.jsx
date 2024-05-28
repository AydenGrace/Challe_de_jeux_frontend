/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import Button from "./Buttons";
import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Header({
  handlePage = () => {},
  connectPopupDisplay = () => {},
  // user,
  // setUser,
}) {
  const [dropdown, setDropdown] = useState(false);
  const { user, logoutConnectedUser } = useContext(UserContext);

  function Disconnect() {
    setDropdown(false);
    logoutConnectedUser();
    // setUser(null);
  }
  return (
    <header className={`d-flex justify-content-sb align-items-center`}>
      <div className="d-flex g-20">
        <Link to={"/"}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/logos%2FChalle_de_jeux_logo_horizontal_sombre.webp?alt=media&token=07f8eae2-4f8e-49b4-855c-c6452a90e0b7"
            alt="La Challe de Jeux"
            className={`${styles.logo}`}
          />
        </Link>

        <nav className={`d-flex align-items-center`}>
          <NavLink to={"/"} className={`btn-nav-reverse-primary btn-nav`}>
            Accueil
          </NavLink>
          <NavLink
            to={"/concept"}
            className={`btn-nav-reverse-primary btn-nav`}
          >
            Concept
          </NavLink>
          <NavLink to={"/rooms"} className={`btn-nav-reverse-primary btn-nav`}>
            Nos Salles
          </NavLink>
          <NavLink to={"/cats"} className={`btn-nav-reverse-primary btn-nav`}>
            Nos Résidents
          </NavLink>
          <NavLink
            to={"/contact"}
            className={`btn-nav-reverse-primary btn-nav`}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {user ? (
        <Button
          message="Mon Compte"
          handleClick={() => {
            setDropdown(!dropdown);
          }}
        />
      ) : (
        <Button
          message="Connexion/Inscription"
          handleClick={() => connectPopupDisplay(true)}
        />
      )}
      {dropdown && (
        <ul
          className={`d-flex align-items-end flex-column card ${styles.dropdown}`}
        >
          <NavLink
            className={`btn-nav-reverse-primary btn-nav`}
            to={"/profile"}
          >
            Mon profil
          </NavLink>
          <NavLink
            className={`btn-nav-reverse-primary btn-nav`}
            to={"/history"}
          >
            Mes réservations
          </NavLink>
          <button
            className={`btn-nav-reverse-primary btn-nav c-r`}
            onClick={Disconnect}
          >
            Déconnexion
          </button>
        </ul>
      )}
    </header>
  );
}
