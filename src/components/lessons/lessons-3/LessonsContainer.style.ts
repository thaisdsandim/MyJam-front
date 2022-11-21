import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #222b35;
  overflow: hidden;

  button {
    position: relative;
    margin-bottom: 0px;
    margin-top: 10px;
  }


  .text-home .col {
    gap: 40px;
  }
  .text-home .col p {
    margin-left: 0px;
  }
  .text-home .col span {
    text-align: center;
    margin: 0px;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background: #6c5ece;
  }
  .line-bottom {
    margin-top: 100px;
  }
  .line-top {
    margin-top: 40px;
  }

  hr {
    color: #000;
    width: 100%;
    background-image: linear-gradient(#6c5ece, #6c5ece);
    box-shadow: 0px 0px 2px 0px #000;
    -webkit-box-shadow: 0px 1px #000;
  }
  h1 {
    color: #fff;
    margin-bottom: 40px;
    margin-top: 60px;
  }
`;
