import styled from "styled-components";

export const LessonContainer = styled.div`
  color: white;
  height: 100vh;
  padding-top: 45px;
  overflow: hidden;
  width: 100%;
  background-color: #222b35;

  .img-content {
    width: 310px;
    height: 400px;
  }
  .img-home {
    max-width: 1080px;
    margin-bottom: 80px;
  }

  .progress-container {
    width: 1080px;
  }

  .progress {
    height: 25px;
    background-color: rgba(217, 217, 230, 0.8);
    border-radius: 30px;
    padding: 5px;
  }

  .percent {
    transition: width 500ms ease-in-out;
    margin-left: 0px;
    height: 20px;
    background-color: rgba(108, 94, 230, 0.8);
    border-radius: 20px;
    display: block;
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
    margin-top: 135px;
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
