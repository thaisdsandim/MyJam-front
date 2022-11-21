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
import Elipse from "../../assets/images/Ellipse.png";
import Avatar from "../../assets/images/Avatar-maker.png";

const Slider = () => {
  return (
    <>
     <div>
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
          <SwiperSlide>
            <div>
              <Depoimento>
                <h3>
                “Depois que meu amigo zeca me apresentou esse site nunca mais
                  deixei de tocar”
                </h3>
              </Depoimento>
              <div className="fotoDepoimento">
                <img src={Icon} />
                <Informacoes>
                  <p>Juliana silva e silva</p>
                  <span>Mineradodora de bitcons</span>
                </Informacoes>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Depoimento>
                <h3>
                  “Muito louco meu! Nunca tinha visto um jeito tao simples para
                  tocar. Como ninguem pensou nisso antes”
                </h3>
              </Depoimento>
              <div className="fotoDepoimento">
                <img src={Avatar} />
                <Informacoes>
                  <p>Enzo Valentyn Mackenzie</p>
                  <span>Tradi e Faria Limer</span>
                </Informacoes>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Depoimento>
                <h3>
                  “Poder aprender sem medo de errar e sem me sentir julgada foi
                  a melhor coisa que poderia ter acontecido!”
                </h3>
              </Depoimento>
              <div className="fotoDepoimento">
                <img src={Elipse} />
                <Informacoes>
                  <p>Jose Daniel</p>
                  <span>Somelie de wisky</span>
                </Informacoes>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SliderD>
      </div>
    </>
    
  );
};

export default Slider;
