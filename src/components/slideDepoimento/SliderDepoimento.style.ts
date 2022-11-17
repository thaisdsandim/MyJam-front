// Import Swiper styles
import styled from "styled-components";

export const SliderD = styled.div`
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #14131b;
  width: 100%;
  height: 500px;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;

  .swiper {
    width: 100%;
    height: 100%;
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
 
  
  img{
  overflow: hidden;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  margin-right: 0px;

}
  }
  
`;
export const Informacoes = styled.div`
margin-left: 10px;
p{
    color: green;
}
span {
    color :red;
}
`
export const Depoimento = styled.div`

`

