/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import Button from "./Buttons";
import styles from "./Header.module.scss";

export default function Header({
  handlePage = () => {},
  connectPopupDisplay = () => {},
}) {
  return (
    <header className={`d-flex justify-content-sb align-items-center`}>
      <div className="d-flex g-20 flex-all-cont">
        <Link to={"/"}>
          <img
            src="./img/CdJ_Logo-min.webp"
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
          {/* <Button
            message="Accueil"
            reverseColor={true}
            handleClick={() => {
              handlePage(0);
            }}
            isDark={true}
          />
          <Button
            message="Concept"
            reverseColor={true}
            handleClick={() => {
              handlePage(1);
            }}
            isDark={true}
          />
          <Button
            message="Nos Salles"
            reverseColor={true}
            handleClick={() => {
              handlePage(2);
            }}
            isDark={true}
          />
          <Button
            message="Nos Résidents"
            reverseColor={true}
            handleClick={() => {
              handlePage(3);
            }}
            isDark={true}
          />
          <Button
            message="Contact"
            reverseColor={true}
            handleClick={() => {
              handlePage(4);
            }}
            isDark={true}
          /> */}
        </nav>
      </div>

      <Button
        message="Connexion/Inscription"
        handleClick={() => connectPopupDisplay(true)}
      />
    </header>
  );
}
