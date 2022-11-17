// Import Swiper styles
import styled from "styled-components";

export const SliderD = styled.div`

background-image: url("src/assets/images/backgroundDep.png") !important;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .swiper {
    width: 70%;
    height: 60%;
    margin: 0 auto;
    
    
  }

  .swiper-slide {
    text-align: center;
    font-size: 30px;
        color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  
  }

  .fotoDepoimento {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    width: 100%;
    height: 100%;
    img {
      overflow: hidden;
      border: 3px solid #6c5ece;
      border-radius: 50%;
      width: 88px;
      height: 88px;
      margin-right: 0px;
    }
  }
`;
export const Informacoes = styled.div`
  text-align: left;
  margin-left: 5px;
  padding: 10px;
  line-height: 20px;
  align-content: flex-start;
  
  p {
    margin-top: 1px;
    margin-bottom: 0px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  span {
    margin-top: 0px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #6c5ece;
  }
`;
export const Depoimento = styled.div`
  width: 640px;
  height: 114px;
  margin-bottom: 40px;
  h3 {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }
`;
