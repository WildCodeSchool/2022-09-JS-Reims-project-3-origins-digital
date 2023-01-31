import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function ImageCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      pagination
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-image">
        <img alt="qatar" src="./src/assets/qatar.png" />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">
        <img alt="qatar" src="./src/assets/nfl3.jpg" />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">
        {" "}
        <img alt="qatar" src="./src/assets/mlb3.jpg" />
      </SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 4</SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 5</SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 6</SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 7</SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 8</SwiperSlide>
      <SwiperSlide className="swiper-image">Slide 9</SwiperSlide>
    </Swiper>
  );
}
