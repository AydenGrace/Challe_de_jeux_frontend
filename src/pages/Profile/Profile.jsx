import React from "react";
import { useNavigation } from "react-router-dom";
import Loading from "../../components/Loader/V2/Loading";

export default function Profile() {
  const { state } = useNavigation();
  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section id="Profile" className={`f-center h-100 `}>
      <h1>Profile</h1>
    </section>
  );
}
