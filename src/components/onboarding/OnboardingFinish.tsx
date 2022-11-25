import { Link } from "react-router-dom";
import Background from "../../assets/images/background2.png";
import OnboardingAnimation from "../../assets/onboarding/onboarding-animation.png";
import { FinishContainer } from "./Onboarding.style";
import { OnboardingButton } from "./OnboardingButton.style";

export function OnBoardingFinish() {
  return (
    <FinishContainer>
      <div className="bg-image">
        <img src={Background} alt="" />
      </div>
      <div className="front-image d-flex flex-column">
        <img src={OnboardingAnimation}></img>
        <div className="d-flex finish-button">
          <Link to={"/lessons/3"}>
            <OnboardingButton>Finalizar</OnboardingButton>
          </Link>
        </div>
      </div>
    </FinishContainer>
  );
}
