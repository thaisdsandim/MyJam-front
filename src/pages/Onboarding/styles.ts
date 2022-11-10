import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  color: #fff;
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  width: 440px;
  position: relative;
  max-height: 76px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    width: 0;
  }
`;

export const Main = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
`;
