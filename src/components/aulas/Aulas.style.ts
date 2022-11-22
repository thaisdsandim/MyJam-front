import styled from "styled-components";
// import background from '../../assets/images/aulas/background.jpg';

export const LightBG = styled.div `
  background: #2A3341;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* background-size: cover; */
  /* display: block; */
  height: 70%;
  
`

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
    align-items: center;
    height: 100%;
    width: 100%;
    
  }

  .listas ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px 0px;
    @media only screen and (max-width: 750px){
      
    }
    
  }
  li{
    margin: 0px;
    padding: 0px;
    
    /* border: 1px solid #6c5ece; */
  }
`;
