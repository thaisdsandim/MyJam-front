import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Depoimento, Informacoes, SliderD } from "./SliderDepoimento.style";
import Icon from "../../assets/images/avatarDepoimentos.png";

const Slider = () => {
  return (
    <SliderD>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>
          “Poder aprender sem medo de errar e sem me sentir julgada foi a melhor
          coisa que poderia ter acontecido!”
        </SwiperSlide> */}

        <SwiperSlide>
          <div>
            <Depoimento>
              <h3>
                “Poder aprender sem medo de errar e sem me sentir julgada foi a
                melhor coisa que poderia ter acontecido!”
              </h3>
            </Depoimento>
            <div className="fotoDepoimento">
              <img src= {Icon} />
              <Informacoes>
                <p>nome</p>
                <span>profissão</span>
              </Informacoes>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </SliderD>
  );
}

export default Slider;