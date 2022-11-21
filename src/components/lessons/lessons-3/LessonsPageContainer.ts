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
`;
