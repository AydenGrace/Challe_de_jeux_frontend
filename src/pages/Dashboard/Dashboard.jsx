import React from "react";
import styles from "./Dashboard.module.scss";
import { useNavigation } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Dashboard() {
  const { state } = useNavigation();

  return state !== "idle" ? (
    <Loading />
  ) : (
    <section id="Dashboard" className={`f-center h-100 ${styles.Page}`}>
      <h1>Dashboard</h1>
    </section>
  );
}
