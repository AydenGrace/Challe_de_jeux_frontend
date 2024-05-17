import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Informations from "./components/informations/Informations";
import Landing from "./components/landing/Landing";
import Residents from "./components/residents/Residents";
import { useNavigation } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Homepage() {
  const { state } = useNavigation();
  return state === "loading" ? (
    <Loading />
  ) : (
    <>
      <Landing />
      <Residents />
      <Informations />
      <Contact />
    </>
  );
}
