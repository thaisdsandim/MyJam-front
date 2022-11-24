import styled from "styled-components";

export const Container = styled.div`
  color: white;
  height: 100vh;
  padding-top: 45px;
  background-color: #222b35;

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

  .onboarding-home  {
    gap: 50px;
    img{
      max-width:190px;
      max-height: 420px;
    }
  }
`;
