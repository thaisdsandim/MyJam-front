import styled from "styled-components";

interface OnboardingBarProps {
  size: {
    width: number;
  };
}

export const OnboardingBar = styled.div<OnboardingBarProps>`
  .progress {
    width: 1080px;
    height: 30px;
    background-color: #fff;
    border-radius: 30px;
    padding: 5px;
  }

  .percent {
    width: ${(props) => props.size.width}%;
    height: 20px;
    background-color: #333;
    border-radius: 20px;
  }
`;
