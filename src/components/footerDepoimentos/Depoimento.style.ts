import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  border: 1px solid rgba(197, 197, 197, 1);
  min-height: 135px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .Titulo {
    display: flex;
    padding-left: 50%;
    padding-right: 50%;

    justify-content: center;
    align-items: center;
  }

  .Row {
    display: flex;
    border: 1px solid red;
      }

  .Col {
    display: block;
    border: 1px solid greenyellow;
  }

  p {
    background: #161C20;
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
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -80px;
  margin-top: 10px;
`;

export const Barra = styled.footer`
width: 100%;
height: 234px;
margin-top: 100px;


background: #161C20;
`