import { useContext, useEffect } from "react";
import Contact from "./components/contact/Contact";
import Informations from "./components/informations/Informations";
import Landing from "./components/landing/Landing";
import Residents from "./components/residents/Residents";
import { useNavigation } from "react-router-dom";
import Loading from "../../components/Loading";
import { UserContext } from "../../context/UserContext";

export default function Homepage() {
  const { state } = useNavigation();
  const { user } = useContext(UserContext);
  // console.log("HOMEPAGE");
  // console.log(user);
  return state !== "idle" ? (
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
