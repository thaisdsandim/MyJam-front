import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { OnboardingButton } from "./OnboardingButton.style";

type OnBoardingContentProps = {
  page: number;
  onClick: () => void;
};

export function OnBoardingHome(props: OnBoardingContentProps) {
  function Teste(text: string) {
    console.log("Qq coisa" + text);
    props.onClick();
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">
            Você já tem alguma experiência com o violão?
          </h1>
        </div>
      </div>
      <OnboardingButton onClick={() => Teste("Nenhuma")}>
        Nenhuma
      </OnboardingButton>
      <OnboardingButton  onClick={() => Teste("Alguma experiência")}>
        Alguma experiência
      </OnboardingButton>
    </div>
  );
}
export function OnBoardingExperience(props: OnBoardingContentProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">
            Você já tem alguma experiência com o violão?
          </h1>
        </div>
      </div>
      <OnboardingButton onClick={props.onClick}>Nenhuma</OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Alguma experiência
      </OnboardingButton>
    </div>
  );
}
export function OnBoardingPractice(props: OnBoardingContentProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">
            Quantas vezes na semana você pode praticar?
          </h1>
        </div>
      </div>
      <OnboardingButton onClick={props.onClick}>
        Uma vez na semana
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Apenas nos fins de semana
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Duas vezes na semana
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Apenas nos fins de semana
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>Todos os dias</OnboardingButton>
    </div>
  );
}
export function OnBoardingMusicalStyle(props: OnBoardingContentProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">
            Qual estilo musical você mais gosta?
          </h1>
        </div>
      </div>
      <OnboardingButton onClick={props.onClick}>Rock</OnboardingButton>
      <OnboardingButton onClick={props.onClick}>Pop</OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Música Brasileira
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>Jazz</OnboardingButton>
      <OnboardingButton onClick={props.onClick}>Blues</OnboardingButton>
    </div>
  );
}
export function OnBoardingLearn(props: OnBoardingContentProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">O que você quer aprender?</h1>
        </div>
      </div>
      <OnboardingButton onClick={props.onClick}>
        Aprender o básico
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Tocar as músicas que gosto
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        Tocar em eventos
      </OnboardingButton>
      <OnboardingButton onClick={props.onClick}>
        O máximo possível
      </OnboardingButton>
    </div>
  );
}
