import styled from "styled-components";

export const Container = styled.button`
  background: #000;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  width: 440px;
  position: relative;
  height: 66px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    width: 0;
  }
  p {
    margin-top: 10px;
  }
`;
