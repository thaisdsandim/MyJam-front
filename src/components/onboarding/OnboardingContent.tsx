import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { OnboardingButton } from "./OnboardingButton.style";
import {
  Bass,
  Drums,
  Eguitar,
  Guitar,
  Keyb,
  OnboardingAnimation,
} from "../../assets/onboarding";
import { OnboardingContainer } from "./OnboardingContainer";

type OnBoardingContentProps = {
  page: number;
  onClick: () => void;
  buttonTitle?: string[];
  title: string,
};

export function OnBoardingComponent(props: OnBoardingContentProps) {
  function onClick(text: string) {
    // console.log("valor" + text);
    props.onClick();
  }

  return (
    <OnboardingContainer title={props.title}>
      {props?.buttonTitle?.map((item, index) => (
        <OnboardingButton key={index} onClick={() => onClick(item)}>
          {item}
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
export function OnBoardingFinish() {
  return (
    <div
      className="d-flex flex-column  align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <h1 className="text-white" style={{marginTop:"50px"}}>
        Seu plano de aulas foi criado com sucesso!
      </h1>
      <img src={OnboardingAnimation} alt="Transition image" />
      <OnboardingButton>Finalizar</OnboardingButton>
    </div>
  );
}
