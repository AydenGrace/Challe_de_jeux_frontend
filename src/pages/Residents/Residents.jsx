import React, { useState } from "react";
import styles from "./Residents.module.scss";
import { useLoaderData } from "react-router-dom";
import Catcard from "../Homepage/components/residents/components/Catcard";

export default function Residents() {
  const [allCats, setAllCats] = useState(useLoaderData());
  console.log(allCats);

  return (
    <div className={`w-100 d-flex flex-column mh-100 ${styles.page}`}>
      <div className="headersep"></div>
      <h1>Nos Résidents</h1>
      <div className="w-100 f-center flex-wrap h-100p">
        {allCats.map((item, idx) => (
          <Catcard key={idx} cat={item} />
        ))}
      </div>
    </div>
  );
}
