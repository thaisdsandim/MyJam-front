import styled from "styled-components";
import background from "../../assets/images/aulas/backgound.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 7rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: 800px) {
    text-align: center;
 
  }
  .logoMyJam {
    display: flex;
    margin-bottom: 4rem;
    align-items: center;
    justify-content: center;
    padding: 0px;
    width: 64px;
    height: 64px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  position: relative;
  font-size: 64px;
  @media only screen and (max-width: 800px) {
    font-size: 32px;
    margin-bottom: 7rem;
  }

  .linha {
    display: flex;
  }

  .type2 {
    color: #6c5ece;
    margin-left: 15px;
  }

  img {
    position: absolute;
    right: -100px;
    @media only screen and (max-width: 800px) {
      bottom: -90px;
      right: auto;
    }
  }
`;

export const Buttons = styled.div`
  .cadastrar {
    margin-bottom: 30px;
    background: #6c5ece;
    border: none;
    box-shadow: 0px 5px 4px 0px #8321b1;
    border-radius: 20px;
    width: 300px;
    height: 65px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    -webkit-box-shadow: 0px 5px #8321b1;

    &:hover {
      background-color: #6154b9;
    }
    &:active {
      padding-bottom: 10px;
      box-shadow: none;
    }
  }

  .logar {
    margin-bottom: 30px;
    margin-left: 40px;
    border-color: #6c5ece;
    border-width: 3px;
    border-radius: 20px;
    border-style: solid;
    width: 300px;
    height: 65px;
    color: #ffffff;
    font-weight: 700;
    background: transparent;
    font-size: 24px;

    &:hover {
      background-color: #6154b9;
    }
    &:active {
      padding-bottom: 10px;
      box-shadow: none;
    }
    @media only screen and (max-width: 800px) {
      margin-left: 0px;
    }
  }
`;
