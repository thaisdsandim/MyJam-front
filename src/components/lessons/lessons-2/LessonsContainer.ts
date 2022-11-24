import styled from "styled-components";

export const LessonContainer = styled.div`
  color: white;
  height: 100vh;
  padding-top: 35px;
  width: 100%;
  background-color: #222b35;

  h1 {
    margin: 20px 0px 40px 0px;
  }

  .img-center {
    width: 1080px;
    border: 1px solid #6c5ece;
    border-radius: 40px;
    height: 390px;
  }

  .progress-container {
    width: 1080px;
  }

  .info-page {
    margin-top: 50px;
    margin: 0 auto;
    width: 1080px;
    justify-content: space-around;
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
  
  hr {
    color: #000;
    width: 100%;
    background-image: linear-gradient(#6c5ece, #6c5ece);
    box-shadow: 0px 0px 2px 0px #000;
    -webkit-box-shadow: 0px 1px #000;
  }
  .line-bottom{
    margin-top: 210px;
    margin-bottom: 30px;
  }
`;
