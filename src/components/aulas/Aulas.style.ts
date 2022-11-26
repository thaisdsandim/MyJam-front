import styled from "styled-components";
// import background from '../../assets/images/aulas/background.jpg';

export const LightBG = styled.div`
background-color: #222b35;
  /* background: #2a3341; */
  background-size: cover;
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    height: 95vh;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    height: 80vh;
    width: 100%;
  }
  @media only screen and (max-width: 390px) {
    height: 105vh;
    width: 100%;
  }
  @media only screen and (max-width: 258px) {
    height: 155vh;
    width: 100%;
  }
`;

export const AulasC = styled.div`
  height: 60vh;
  width: 100%;
  padding: 0px;
  margin: 0px;
  align-items: center;
  text-align: center;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 47px;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
  }

  img {
    margin: 10px;
    padding: 10px;
    /* display: flex; */
    align-items: center;
    height: 220px;
    width: 220px;
    border-radius: 50px;
    :hover {
background: #03e9f4;
color: #fff;
border-radius: 50px;
box-shadow: 0 0 1px #03e9f4,

            0 0 5px #03e9f4,

            0 0 10px #03e9f4,

            0 0 20px #03e9f4;
}

    @media only screen and (max-width: 1200px) {
      height: 180px;
      width: 180px;
    }
    @media only screen and (max-width: 600px) {
      height: 150px;
      width: 150px;
    }
    @media only screen and (max-width: 470px) {
      height: 110px;
      width: 110px;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0px;
    margin: 0px 0px 0px 0px;
    flex-wrap: wrap;
  }
 
  .listas {
    width: 100%;
    height: 100%;
    /* justify-content: space-between;
    text-align: center;
    align-content: center;
    display: flex;
    padding: 0px;
    margin: 0px; */
  }

  .listas li {
    width: 220px;
    height: 220px;
    /* border: 1px solid #6c5ece; */
    @media only screen and (max-width: 1200px) {
      height: 180px;
      width: 180px;
    }
    @media only screen and (max-width: 600px) {
      height: 150px;
      width: 150px;
    }
    @media only screen and (max-width: 470px) {
      height: 110px;
      width: 110px;
    }
  }
`;
