import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./Onboarding.style";
import { OnboardingButton } from "./OnboardingButton.style";
import ArrowLeft from "../../assets/images/ArrowLeft.png";

type OnBoardingContentProps = {
  page: number;
  title: string[];
  onClick: () => void;
};

function OnBoardingContent(props: OnBoardingContentProps) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <div className="row  align-items-center">
        <div className="col-1">
          <img src={ArrowLeft} alt="Arrow, previous page." />
        </div>
        <div className="col-11 ">
          <div className="progress d-flex align-items-center">
            <div className="percent"></div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1>Você já tem alguma experiência com o violão? </h1>
        </div>
      </div>
      <OnboardingButton onClick={props.onClick}>{props.title}</OnboardingButton>
      <OnboardingButton onClick={props.onClick}>{props.title}</OnboardingButton>
    </Container>
  );
}

export default OnBoardingContent;
