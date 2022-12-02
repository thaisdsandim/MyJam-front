import { Link } from "react-router-dom";
import Background from "../../assets/images/background2.png";
import OnboardingAnimation from "../../assets/onboarding/onboarding-animation.png";
import { FinishContainer } from "./Onboarding.style";
import { OnboardingButton } from "./OnboardingButton.style";
import api from "../../services/api";

interface OnBoardingFinishProps {
  instrumentId: number;
  experienceId: number;
  practiceId: number;
  styleId: number;
  learnId: number;
}

export function OnBoardingFinish({
  instrumentId,
  experienceId,
  learnId,
  practiceId,
  styleId,
}: OnBoardingFinishProps) {
  async function sendAnswers() {
    try {
      const payload = {
        instrumentId,
        experienceId,
        practiceId,
        styleId,
        learnId,
      };
      await api.post("users_questions/", {
        body: payload,
      });
      console.log(payload);
    } catch (error) {}
  }

  return (
    <FinishContainer>
      <div className="bg-image">
        <img src={Background} alt="" />
      </div>
      <div className="front-image d-flex flex-column">
        <img src={OnboardingAnimation}></img>
        <div className="d-flex finish-button">
          <Link to={"/listadelicoes"}>
            <OnboardingButton onClick={sendAnswers}>Finalizar</OnboardingButton>
          </Link>
        </div>
      </div>
    </FinishContainer>
  );
}
