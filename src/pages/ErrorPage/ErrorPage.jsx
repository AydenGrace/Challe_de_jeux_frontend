import React from "react";
import styles from "./ErrorPage.module.scss";
import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import Connect from "../Popups/Connect/Connect";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { useEffect } from "react";
import UserProvider from "../../Providers/UserProvider";

export default function ErrorPage() {
  const error = useRouteError();
  const [connectDisplay, setConnectdisplay] = useState(false);

  return (
    <>
      <UserProvider>
        <Header connectPopupDisplay={setConnectdisplay} />

        <div className={`f-center w-100 flex-column mh-100 ${styles.page}`}>
          <div className={`d-flex card flex-column ${styles.errorCard}`}>
            <h1>Erreur 404</h1>
            <h2 className="mb-20">Chat perdu !</h2>
            <NavLink className={`btn-nav btn-nav-primary`} to={"/"}>
              Revenir à l'accueil
            </NavLink>
          </div>
        </div>
        <Socials />
        {connectDisplay && <Connect setDisplay={setConnectdisplay} />}
        <ScrollToTop
          className={`${styles.up}`}
          smooth
          component={<i className={`fa-solid fa-angles-up fa-2xl`}></i>}
        />
        {/* <Footer /> */}
      </UserProvider>
    </>
  );
}
