import styled from "styled-components";

export const LessonsButton = styled.button`
  color: #fff;
  width: 255px;
  height: 75px;
  background-color: #6c5ece;
  margin-right: 25px;
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
  }
  
`;
export const LessonsVoltar = styled.button`
  margin-right: 25px;
  background: #222b35;
  border: 1px solid #6c5ece;
  border-radius: 20px;
  width: 255px;
  height: 75px;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;

  &:hover {
    background-color: #6154b9;
  }
  &:active {
    padding-bottom: 10px;
    box-shadow: none;
  }
`;
