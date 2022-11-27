import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { OnboardingButton } from "./OnboardingButton.style";
import { Bass, Drums, Eguitar, Guitar, Keyb } from "../../assets/onboarding";
import { OnboardingContainer } from "./OnboardingContainer";
import api from "../../services/api";

type OnBoardingContentProps = {
  page: number;
  onClick: () => void;
  buttons?: {
    title?: string;
    value: number;
    onClick: (value: number) => void;
  }[];
  title: string;
  // user_questions/5
};

export function OnBoardingComponent(props: OnBoardingContentProps) {
  const handleClick = (
    itemValue: number,
    itemClick: (value: number) => void
  ) => {
    itemClick(itemValue);
    props.onClick();
  };

  return (
    <OnboardingContainer title={props.title}>
      {props?.buttons?.map((item, index) => (
        <OnboardingButton
          key={index}
          onClick={() => handleClick(item.value, item.onClick)}
        >
          {item.title}
        </OnboardingButton>
      ))}
    </OnboardingContainer>
  );
}
export function OnBoardingHome(props: OnBoardingContentProps) {
  return (
    <OnboardingContainer title={props.title}>
      <div className="onboarding-home d-flex">
        <img
          src={Guitar}
          alt="Guitar"
          onClick={props.onClick}
          style={{ cursor: "pointer" }}
        />
        <img src={Eguitar} alt="Eletric Guitar" />
        <img src={Bass} alt="Bass" />
        <img src={Keyb} alt="Eletric Keyboard" />
        <img src={Drums} alt="Drums" />
      </div>
    </OnboardingContainer>
  );
}
