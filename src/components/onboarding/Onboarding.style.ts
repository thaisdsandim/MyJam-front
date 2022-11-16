import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  color: white;
  height: 100vh;
  padding-top: 45px;

  h1 {
    margin-top: 50px;
    margin-bottom: 120px;
  }

  .progress {
    margin-right: 100px;
    width: 1080px;
    height: 25px;
    background-color: #fff;
    border-radius: 30px;
    padding: 5px;
  }

  .percent {
    margin-left: 0px;
    width: 25%;
    height: 20px;
    background-image: linear-gradient(
      -45deg,
      rgba(131, 33, 177, 1) 25%,
      rgba(199, 42, 37, 1) 75%
    );
    border-radius: 20px;
  }
`;
