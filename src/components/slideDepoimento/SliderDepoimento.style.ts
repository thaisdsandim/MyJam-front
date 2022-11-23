// Import Swiper styles
import styled from "styled-components";


export const SliderTela = styled.div`
display: flex;
justify-content: space-between;
/* background: black; */
/* background-image: url("src/assets/images/backgroundDep.png") ; */
/* background-repeat: no-repeat;
background-size: 100%;
align-items: stretch; */
/* width: 100%;
height: 100%; */



.boxImagemE {
  /* background: white; */
  width: 20%;
  @media only screen and (max-width: 750px) {
    display: none;
  }
}
.boxImagemD {
  /* background: red; */
  width: 20%;
  @media only screen and (max-width: 750px) {
    display: none;
  }
}
`

export const SliderD = styled.div`

/* background-image: url("src/assets/images/backgroundDep.png") ; */
/* background-attachment: fixed;
background-origin: padding-box;
background-size: cover;
 object-fit: contain; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 60%;
  height: 100vh ;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  .swiper {
    align-items: center;
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display : flex;
    
    
    
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
      border: 2px solid #6c5ece;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      margin-right: 0px;
      @media only screen and (max-width: 450px) {
      width: 20%;
      height: 20%;
    }
    }
  }
`;
export const Informacoes = styled.div`
  text-align: left;
  margin-left: 5px;
  padding: 10px;
  line-height: 20px;
  /* align-content: flex-start; */
  
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
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  h3 {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    @media only screen and (max-width: 760px) {
    height: 100%;
    font-size: 25px;
    line-height: 25px;
  }
  }
  
`;
