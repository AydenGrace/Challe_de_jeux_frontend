import React from "react";
import styles from "./Dashboard.module.scss";
import { useNavigation } from "react-router-dom";
import Loading from "../../components/Loader/V2/Loading";

export default function Dashboard() {
  const { state } = useNavigation();

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="Dashboard" className={`f-center h-100 ${styles.Page}`}>
      <h1>Dashboard</h1>
    </section>
  );
}
