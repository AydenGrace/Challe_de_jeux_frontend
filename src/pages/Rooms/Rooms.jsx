import React, { useState } from "react";
import styles from "./Rooms.module.scss";
import { useLoaderData, useNavigation } from "react-router-dom";
import Roomcard from "../../components/RoomCard/Roomcard";
import Loading from "../../components/Loader/V2/Loading";
import useDocumentTitle from "../../components/UseDocumentTitle/UseDocumentTitle";

export default function Rooms() {
  const { state } = useNavigation();
  const [allRooms, setAllRooms] = useState(useLoaderData());
  useDocumentTitle("Escape Game");
  // console.log(allCats);

  return state !== "idle" ? (
    <div className=" f-center mh-100">
      <Loading />
    </div>
  ) : (
    <section className={`w-100 d-flex flex-column mh-100 ${styles.page}`}>
      <div className="headersep"></div>
      <h1>Nos Salles d'escape game</h1>
      <div className="w-100 f-center flex-wrap h-100p flex-fill">
        {allRooms.map((item, idx) => (
          <Roomcard key={idx} room={item} />
        ))}
      </div>
    </section>
  );
}
