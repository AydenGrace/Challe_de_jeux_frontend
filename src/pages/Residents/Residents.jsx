import React, { useState } from "react";
import styles from "./Residents.module.scss";
import { useLoaderData, useNavigation } from "react-router-dom";
import Catcard from "../Homepage/components/residents/components/Catcard";
import Loading from "../../components/Loading";

export default function Residents() {
  const { state } = useNavigation();
  const [allCats, setAllCats] = useState(useLoaderData());
  // console.log(allCats);

  return state !== "idle" ? (
    <Loading />
  ) : (
    <div className={`w-100 d-flex flex-column mh-100 ${styles.page}`}>
      <div className="headersep"></div>
      <h1>Nos Résidents</h1>
      <div className="w-100 f-center flex-wrap h-100p flex-fill">
        {allCats.map((item, idx) => (
          <Catcard key={idx} cat={item} hover={true} />
        ))}
      </div>
    </div>
  );
}
