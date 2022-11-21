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

  img {
    border: 1px solid #6c5ece;
    border-radius: 40px;
    height: 440px;
    width: 1300px;
  }
  .info-page {
    margin-top: 50px;
    margin: 0 auto;
    width: 1300px;
    justify-content: space-between;
  }
  .info-col {
    margin-left: 0px;
  }
  .line-bottom {
    margin-top: 210px;
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
