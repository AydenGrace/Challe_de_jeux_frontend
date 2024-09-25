/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Residents.module.scss";
import Catcard from "../../../../components/CatCard/Catcard";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Residents() {
  const [allCats, setAllCats] = useState(useLoaderData().cats);

  return (
    <section
      id="Residents"
      className={`w-100 d-flex flex-column ${styles.Residents} align-items-center`}
    >
      <h2>Nos Résidents</h2>

      <div className={`${styles.slider}`}>
        <Swiper
          slidesPerView={"auto"}
          autoHeight={true}
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          style={{ paddingTop: "10px", paddingBottom: "30px" }}
        >
          {allCats.map((cat, i) => (
            <SwiperSlide key={`Cat_Slide_${i}`} style={{ maxWidth: "300px" }}>
              <Catcard key={`Cat_${i}`} cat={cat} hover={false} />
            </SwiperSlide>
          ))}
          {allCats.map((cat, i) => (
            <SwiperSlide
              key={`Cat_Slide_bis_${i}`}
              style={{ maxWidth: "300px" }}
            >
              <Catcard key={`Cat_bis_${i}`} cat={cat} hover={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to={"/cats"} className={`btn-nav btn-primary`}>
        Rencontrez-les !
      </Link>
    </section>
  );
}
