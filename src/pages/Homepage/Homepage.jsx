import { useContext, useEffect } from "react";
import Contact from "./components/contact/Contact";
import Informations from "./components/informations/Informations";
import Landing from "./components/landing/Landing";
import Residents from "./components/residents/Residents";
import { useNavigation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Rooms from "./components/rooms/Rooms";
import Loading from "../../components/Loader/V2/Loading";
import DocumentMeta from "react-document-meta";

export default function Homepage() {
  const { state } = useNavigation();
  const { user } = useContext(UserContext);

  const meta = {
    title: "La Challe de jeux : Accueil",
    description:
      "Venez découvrir votre prochain lieu préféré ! Mélangeant escape game et bar à chat, venez rencontrer nos résidents poilus tout en profitant d'un cadre apaisant !",
    canonical: "http://localhost:5173",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "bar,chat,escape,game,lille,bar à chats,escape game,challe de jeux",
      },
    },
  };

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
      <DocumentMeta {...meta} />
    </div>
  ) : (
    <>
      <Landing />
      <Residents />
      <Informations />
      <Rooms />
      <Contact />
      <DocumentMeta {...meta} />
    </>
  );
}
