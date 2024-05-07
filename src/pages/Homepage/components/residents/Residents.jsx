/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Residents.module.scss";
import Catcard from "./components/Catcard";
// import CatList from "../../../../datas/cats.json";
import Slider from "react-slick";
import Button from "./../../../../components/Buttons";
import { url } from "../../../../url";
import { Link, useLoaderData } from "react-router-dom";

export default function Residents() {
  const settings = {
    className: "slider variable-width",
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
  };
  const [allCats, setAllCats] = useState(useLoaderData());

  // useEffect(() => {
  //   async function getCats() {
  //     try {
  //       const response = await fetch(`${url}/api/cats`);
  //       if (response.ok) {
  //         const cats = await response.json();
  //         setAllCats(cats);
  //         console.log(cats);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getCats();
  // }, []);

  return (
    <section
      id="Residents"
      className={`w-100 d-flex flex-column ${styles.Residents} align-items-center`}
    >
      <h2>Nos Résidents</h2>
      <div className={`${styles.slider}`}>
        <Slider {...settings}>
          {allCats.map((cat, i) => (
            <Catcard key={`Cat_${i}`} cat={cat} />
          ))}
        </Slider>
      </div>
      <Link to={"/cats"} className={`btn-nav btn-primary`}>
        Rencontrez les !
      </Link>
    </section>
  );
}
