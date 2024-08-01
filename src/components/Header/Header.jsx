/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import Button from "../Buttons";
import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Header({
  handlePage = () => {},
  connectPopupDisplay = () => {},
  // user,
  // setUser,
}) {
  const [dropdown, setDropdown] = useState(false);
  const [burgerCheck, setBurgerCheck] = useState(true);
  const [lineOneCheck, setLineOneCheck] = useState("");
  const [lineTwoCheck, setLineTwoCheck] = useState("");
  const [lineThreeCheck, setLineThreeCheck] = useState("");
  const [showMenu, setShowMenu] = useState("");
  const { user, logoutConnectedUser } = useContext(UserContext);

  function Disconnect() {
    setDropdown(false);
    logoutConnectedUser();
    // setUser(null);
  }

  const handleBurgerCheck = () => {
    setBurgerCheck(!burgerCheck);
    if (burgerCheck) {
      document.getElementById("lineOne").style.transform =
        " translateX(5px) rotate(45deg)";
      document.getElementById("lineTwo").style.transform = "scaleY(0)";
      document.getElementById("lineThree").style.transform =
        "  translateX(5px) rotate(-45deg)";
      document.getElementById("MobileNav").style.transform = " translateX(0px)";
      return;
    }
    document.getElementById("lineOne").style.transform = "rotate(0deg)";
    document.getElementById("lineTwo").style.transform = "scaleY(1)";
    document.getElementById("lineThree").style.transform = "rotate(0deg)";
    document.getElementById("MobileNav").style.transform = " translateX(150%)";
  };

  return (
    <header className={`d-flex justify-content-sb align-items-center`}>
      <Link to={"/"}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/challe-de-jeux.appspot.com/o/logos%2FChalle_de_jeux_logo_horizontal_sombre.webp?alt=media&token=07f8eae2-4f8e-49b4-855c-c6452a90e0b7"
          alt="La Challe de Jeux"
          className={`${styles.logo}`}
        />
      </Link>
      <div className={`${styles.Destop_Nav}`}>
        <div className="d-flex g-20">
          <nav className={`d-flex align-items-center`}>
            <NavLink
              to={"/"}
              className={`btn-nav-reverse-primary btn-nav`}
              onClick={handleBurgerCheck}
            >
              Accueil
            </NavLink>
            <NavLink
              to={"/concept"}
              className={`btn-nav-reverse-primary btn-nav`}
              onClick={handleBurgerCheck}
            >
              Concept
            </NavLink>
            <NavLink
              to={"/rooms"}
              className={`btn-nav-reverse-primary btn-nav`}
              onClick={handleBurgerCheck}
            >
              Nos Salles
            </NavLink>
            <NavLink
              to={"/cats"}
              className={`btn-nav-reverse-primary btn-nav`}
              onClick={handleBurgerCheck}
            >
              Nos Résidents
            </NavLink>
            <NavLink
              to={"/contact"}
              className={`btn-nav-reverse-primary btn-nav`}
              onClick={handleBurgerCheck}
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
            {user.role.power < 0 ? (
              <NavLink
                className={`btn-nav-reverse-primary btn-nav`}
                to={"/dashboard"}
              >
                Panel administratif
              </NavLink>
            ) : null}
            <button
              className={`btn-nav-reverse-primary btn-nav c-r`}
              onClick={Disconnect}
            >
              Déconnexion
            </button>
          </ul>
        )}
      </div>
      {/* MOBILE NAV */}
      <nav className={`${styles.mobile_navigation}`}>
        <div className={`${styles.navbar}`}>
          <div className={`${styles.container} ${styles.nav_container}`}>
            <input
              type="checkbox"
              id="burger_checkbox"
              className={`${styles.checkbox}`}
              onClick={handleBurgerCheck}
            />
            <div className={`${styles.hamburger_lines}`}>
              <span
                className={`${styles.line} ${styles.line1}`}
                id="lineOne"
              ></span>
              <span
                className={`${styles.line} ${styles.line2}`}
                id="lineTwo"
              ></span>
              <span
                className={`${styles.line} ${styles.line3}`}
                id="lineThree"
              ></span>
            </div>
            <div className={`${styles.menu_items}`} id="MobileNav">
              <div className={`d-flex flex-column ${styles.mobile_nav_menu}`}>
                <NavLink
                  to={"/"}
                  className={`btn-nav-reverse-primary btn-nav`}
                  onClick={handleBurgerCheck}
                >
                  Accueil
                </NavLink>
                <NavLink
                  to={"/concept"}
                  className={`btn-nav-reverse-primary btn-nav`}
                  onClick={handleBurgerCheck}
                >
                  Concept
                </NavLink>
                <NavLink
                  to={"/rooms"}
                  className={`btn-nav-reverse-primary btn-nav`}
                  onClick={handleBurgerCheck}
                >
                  Nos Salles
                </NavLink>
                <NavLink
                  to={"/cats"}
                  className={`btn-nav-reverse-primary btn-nav`}
                  onClick={handleBurgerCheck}
                >
                  Nos Résidents
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={`btn-nav-reverse-primary btn-nav`}
                  onClick={handleBurgerCheck}
                >
                  Contact
                </NavLink>
              </div>
              <div className="mb-20">
                {user ? (
                  <Link
                    to={"/profile"}
                    message="Mon Compte"
                    className="btn-nav btn-primary"
                    onClick={handleBurgerCheck}
                  >
                    Mon compte
                  </Link>
                ) : (
                  <Button
                    message="Connexion/Inscription"
                    handleClick={() => connectPopupDisplay(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
