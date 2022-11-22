import styled from "styled-components";
// import background from '../../assets/images/aulas/background.jpg';

export const LightBG = styled.div`
  background: #2a3341;
  background-size: cover;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
  /* height: 70%; */
  flex-wrap: wrap;
  @media only screen and (max-width: 1230px){
        height: 100%;
      
  }
  @media only screen and (max-width: 600px){
        height: 80%;
  
    }
    @media only screen and (max-width: 390px){
        height: 100%;
    }
`;

export const AulasC = styled.div`
  height: 60vh;
  width: 100%;
  padding: 0px;
  margin: 0px;

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
    margin: 0px;
    padding: 0px;
    /* display: flex; */
    align-items: center;
    height: 240px;
    width: 240px;
    @media only screen and (max-width: 750px){
        height: 200px;
        width: 200px;
    }
    @media only screen and (max-width: 600px){
        height: 150px;
        width: 150px;
    }
    @media only screen and (max-width: 450px){
        height: 130px;
        width: 130px;
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
  .listas li {
    width: 240px;
    height: 240px;
        border: 1px solid #6c5ece;
        @media only screen and (max-width: 730px){
        height: 200px;
        width: 200px;
    }
    @media only screen and (max-width: 600px){
        height: 150px;
        width: 150px;
    }
    @media only screen and (max-width: 450px){
        height: 130px;
        width: 130px;
    }
  }
`;
