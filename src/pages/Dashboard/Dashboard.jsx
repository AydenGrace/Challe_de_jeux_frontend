import React from "react";
import styles from "./Dashboard.module.scss";
import { Outlet, useNavigation, NavLink, Link } from "react-router-dom";
import Loading from "../../components/Loader/V2/Loading";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function Dashboard() {
  const { state } = useNavigation();
  useDocumentTitle("Panel Administrateur");

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="Dashboard" className={`f-center mh-100 w-100 ${styles.Page}`}>
      <nav
        className={`d-flex flex-column h-100 align-items-center p-10 gap-10 ${styles.NavArea}`}
      >
        <div className="headersep"></div>
        <Link className="btn-nav btn-primary w-100 f-center" to={"/dashboard"}>
          Panel
        </Link>
        <Link
          className="btn-nav btn-primary w-100 f-center"
          to={"/dashboard/manage_sessions"}
        >
          Gestion des sessions
        </Link>
        <Link
          className="btn-nav btn-primary w-100 f-center"
          to={"/dashboard/manage_rooms"}
        >
          Gestion des salles
        </Link>
        <Link
          className="btn-nav btn-primary w-100 f-center"
          to={"/dashboard/manage_users"}
        >
          Gestion des utilisateurs
        </Link>
        <Link
          className="btn-nav btn-primary w-100 f-center"
          to={"/dashboard/manage_cats"}
        >
          Gestion des résidents
        </Link>
      </nav>
      <div className={`d-flex flex-fill mh-100 ${styles.bgWhite}`}>
        <Outlet />
      </div>
    </section>
  );
}
