import styled from "styled-components";

export const ButtonLg = styled.button`
color: #fff;
  width: 600px;
  height: 140px;
  background-color: #6c5ece;
  font-weight: 700;
  font-size: 24px;
  border: double 1px transparent;
  border-radius: 20px;
  background-image: linear-gradient(#6c5ece, #6c5ece),
    radial-gradient(farthest-corner at 0px 10px, #fff, #6c5ece);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0px 0px 2px 0px #8321b1;
  -webkit-box-shadow: 0px 2px #8321b1;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    padding-bottom: 10px;
    box-shadow: none;
  }`