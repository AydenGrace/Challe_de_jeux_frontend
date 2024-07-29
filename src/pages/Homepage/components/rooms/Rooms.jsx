import React, { useState } from "react";
import styles from "./Rooms.module.scss";
import { Link, useLoaderData } from "react-router-dom";
import Roomcard from "../../../../components/RoomCard/Roomcard";

export default function Rooms() {
  const [allRooms, setAllRooms] = useState(useLoaderData().rooms);
  // console.log(allRooms);
  return (
    <section
      id="Salles"
      className={`w-100 f-center flex-column align-items-center ${styles.RoomsArea}`}
    >
      <h2>Réservez une session d'escape game</h2>
      <div
        className={`w-100 f-center flex-wrap ${styles.Rooms} align-items-center`}
      >
        {allRooms.map((room, idx) => (
          <Roomcard key={`Room_${idx}`} room={room} />
        ))}
        {/* <Roomcard /> */}
      </div>
      <Link to={"/rooms"} className="btn-nav btn-primary mt-10">
        Découvrez toutes les salles
      </Link>
    </section>
  );
}
