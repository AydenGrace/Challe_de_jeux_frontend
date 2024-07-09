/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Residents.module.scss";
import Catcard from "./components/Catcard";
// import CatList from "../../../../datas/cats.json";
import Slider from "react-slick";
import Button from "./../../../../components/Buttons";
import { url } from "../../../../url";
import { Link, useLoaderData } from "react-router-dom";
import GenericSlider from "../../../../components/Slider/GenericSlider";
import { Carousel } from "react-responsive-carousel";

export default function Residents() {
  const settings = {
    // className: "slider variable-width",
    // lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };
  const [allCats, setAllCats] = useState(useLoaderData());

  return (
    <section
      id="Residents"
      className={`w-100 d-flex flex-column ${styles.Residents} align-items-center`}
    >
      <h2>Nos Résidents</h2>

      <div className={`${styles.slider}`}>
        <Slider {...settings} className={`${styles.sliderContent}`}>
          {allCats.map((cat, i) => (
            <Catcard key={`Cat_${i}`} cat={cat} hover={false} />
          ))}
        </Slider>
      </div>
      <Link to={"/cats"} className={`btn-nav btn-primary`}>
        Rencontrez les !
      </Link>
    </section>
  );
}
