import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: white;
  height: 100vh;
  padding-top: 45px;
  overflow: hidden;
  background-color: #1e1e1e;
 

  .progress-container {
    width: 1080px;

  }

  .onboarding-title {
    margin-top: 50px;
    margin-bottom: 120px;
  }

  .progress {
    height: 25px;
    background-color: #fff;
    border-radius: 30px;
    padding: 5px;
  }

  .percent {
    margin-left: 0px;
    height: 20px;
    background-image: linear-gradient(
      -45deg,
      rgba(131, 33, 177, 1) 25%,
      rgba(199, 42, 37, 1) 75%
    );
    border-radius: 20px;
  }
`;
