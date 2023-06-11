'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function SliderComp() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image width={300} height={300} src={"https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png"}/></SwiperSlide>
        <SwiperSlide><Image width={300} height={300} src={"https://png.pngtree.com/background/20230303/original/pngtree-green-sparkling-bg-picture-image_2079950.jpg"}/></SwiperSlide>
      </Swiper>
    </>
  );
}
