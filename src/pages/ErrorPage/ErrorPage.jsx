import React from "react";
import styles from "./ErrorPage.module.scss";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import Connect from "../Popups/Connect/Connect";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../components/Footer";
import { useState } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  const [connectDisplay, setConnectdisplay] = useState(false);

  return (
    <>
      <Header connectPopupDisplay={setConnectdisplay} />

      <div className="f-center w-100 flex-column mh-100">
        <h1>Error {error.status}</h1>
        <h2 className="mb-20">Cat {error.statusText}</h2>
        <NavLink className={`btn-nav btn-nav-primary`} to={"/"}>
          Revenir à l'accueil
        </NavLink>
      </div>
      <Socials />
      {connectDisplay && <Connect setDisplay={setConnectdisplay} />}
      <ScrollToTop
        className={`${styles.up}`}
        smooth
        component={<i className={`fa-solid fa-angles-up fa-2xl`}></i>}
      />
      <Footer />
    </>
  );
}
