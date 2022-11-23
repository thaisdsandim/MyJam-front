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
  img {
    border: 1px solid #6c5ece;
    border-radius: 40px;
  }
  .img-home {
    width: 420px;
    height: 600px;
  }
  .container {
    gap: 100px;
  }
  .text-home .d-flex {
    margin-left: 0px;
    gap: 10px;
  }
  .text-home p {
    max-width: 650px;
  }
  .text-home span {
    text-align: center;
    margin: 0px;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background: #6c5ece;
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
  .line-bottom {
    margin-top: 200px;
    margin-bottom: 30px;
  }
  .line-bottom-home {
    margin-bottom: 30px;
  }

  .bg-image {
    /* The image used */
    /* background-image: url("../../../assets/lessons/finish.png"); */

    /* Add the blur effect */
    filter: blur(8px);
    -webkit-filter: blur(8px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const FinishContainer = styled.div`
  .bg-image {
    /* The image used */
        /* Add the blur effect */
    filter: blur(10px);
    -webkit-filter: blur(10px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* Position text in the middle of the page/image */
  .bg-text {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }
`;
