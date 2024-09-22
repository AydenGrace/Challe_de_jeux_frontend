/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Residents.module.scss";
import Catcard from "../../../../components/CatCard/Catcard";
// import CatList from "../../../../datas/cats.json";
import Slider from "react-slick";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
  const [allCats, setAllCats] = useState(useLoaderData().cats);

  return (
    <section
      id="Residents"
      className={`w-100 d-flex flex-column ${styles.Residents} align-items-center`}
    >
      <h2>Nos Résidents</h2>

      <div className={`${styles.slider}`}>
        {/* <Slider {...settings} className={`${styles.sliderContent}`}>
          {allCats.map((cat, i) => (
            <Catcard key={`Cat_${i}`} cat={cat} hover={false} />
          ))}
        </Slider> */}
        <Swiper
        slidesPerView={'auto'}
          spaceBetween={30}
          centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allCats.map((cat, i) => (
          <SwiperSlide style={{maxWidth:'300px'}}>
            <Catcard key={`Cat_${i}`} cat={cat} hover={false} />
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
      <Link to={"/cats"} className={`btn-nav btn-primary`}>
        Rencontrez les !
      </Link>
    </section>
  );
}
