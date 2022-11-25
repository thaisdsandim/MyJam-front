import styled from "styled-components";

export const Container = styled.div`
  color: white;
  height: 100vh;
  padding-top: 45px;
  height: 100vh;

  .progress-container {
    width: 1080px;
  }

  .onboarding-title {
    margin-top: 50px;
    margin-bottom: 120px;
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
  .onboarding-finish {
    margin-top: 50px;
  }

  .onboarding-home {
    gap: 50px;
    img {
      max-width: 190px;
      max-height: 420px;
    }
  }
`;

export const FinishContainer = styled.div`
  

  .bg-image img{
    filter: blur(15px);
    -webkit-filter: blur(20px);
    width: 100%;
    height: 100vh;
    transition: rotate(90deg);
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
  }

  /* Position text in the middle of the page/image */
  .front-image {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .finish-button {
    margin-top: 40px;
  }
`;
