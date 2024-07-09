import React from "react";
import { useNavigation } from "react-router-dom";

export default function Profile() {
  const { state } = useNavigation();
  return state !== "idle" ? (
    <Loading />
  ) : (
    <section id="Profile" className={`f-center h-100 `}>
      <h1>Profile</h1>
    </section>
  );
}
