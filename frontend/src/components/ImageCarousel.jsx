import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import "./ImageCarousel.css";

export default function ImageCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-image">
        <img
          alt="qatar"
          className="swiper-lazy-loaded"
          src="./src/assets/qatar.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">
        <img
          alt="nfl"
          className="swiper-lazy-loaded"
          src="./src/assets/nfl3.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">
        <img
          alt="mlb"
          className="swiper-lazy-loaded"
          src="./src/assets/mlb3.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">
        <img
          alt="nfl"
          className="swiper-lazy-loaded"
          src="./src/assets/nfl4.jpg"
        />
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20" />
        </svg>
        <span ref={progressContent} />
      </div>
    </Swiper>
  );
}
