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

    justify-content: center;
    align-items: center;
  }

  .Row {
    display: flex;
    border: 1px solid red;
  }

  .Col {
    display: block;
    border: 1px solid red;
  }

  p {
    background: #161C20;
border-radius: 10px;
    padding: 50px;
    margin: 30px;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
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
  margin-bottom: -70px;
`;
