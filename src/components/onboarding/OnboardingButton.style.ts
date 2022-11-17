import styled from "styled-components";

export const OnboardingButton = styled.button`
  margin-bottom: 30px;
  background: #6c5ece;
  border: none;
  box-shadow: 0px 5px 4px 0px #8321b1;
  border-radius: 20px;
  width: 520px;
  height: 65px;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  -webkit-box-shadow: 0px 5px #8321b1;

  &:hover {
    background-color: #6154b9;
  }
  &:active {
    padding-bottom: 10px;
    box-shadow: none;
  }
`;
