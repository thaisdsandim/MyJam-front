import styled from "styled-components";

export const ContainerD = styled.div`
  max-width: 100%;
  /* border: 1px solid rgba(197, 197, 197, 1); */
  min-height: 135px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #2A3341;

  .Titulo {
    display: block;
    color: #ffffff;

    justify-content: center;
    align-items: center;
  }

  .Row {
    display: flex;
    /* border: 1px solid red; */
    @media only screen and (max-width: 800px){
        display: table-row;
    }
      }

  .Col {
    display: block;
    /* border: 1px solid greenyellow; */
  }

  p {
    display: block;
    /* background: #161C20; */
    background: linear-gradient(150deg, grey, #161c20 50%);
border-radius: 10px;
padding-top: 80px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    margin: 10px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400px;
    line-height: 19px;
  }
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  /* overflow: hidden; */
  /* border: 3px solid black; */
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -80px;
  margin-top: 10px;
`;


