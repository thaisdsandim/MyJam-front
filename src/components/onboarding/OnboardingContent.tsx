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
  title?: string[];
};

export function OnBoardingComponent(props: OnBoardingContentProps) {
  function onClick(text: string) {
    // console.log("valor" + text);
    props.onClick();
  }

  return (
    <OnboardingContainer title="Você tem alguma experiência com violão?">
      {props?.title?.map((item, index) => (
        <OnboardingButton key={index} onClick={() => onClick(item)}>
          {item}
        </OnboardingButton>
      ))}
    </OnboardingContainer>
  );
}
export function OnBoardingHome(props: OnBoardingContentProps) {
  return (
    <OnboardingContainer title="Você tem alguma experiência com violão?">
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
        background: "#1e1e1e",
        height: "100%",
        padding: "50px 0px 0px 0px",
      }}
    >
      <h1 className="text-white" style={{ margin: "0px 0px 100px 0px" }}>
        Seu plano de aulas foi criado com sucesso!
      </h1>
      <img src={OnboardingAnimation} alt="Transition image" />
      <OnboardingButton>Finalizar</OnboardingButton>
    </div>
  );
}
