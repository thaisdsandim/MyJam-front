import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/";
import { OnboardingTaste } from "../../components/Onboarding/OnboardingTaste";
import { Main } from "../../styles/onboarding.style";
// import { OnboardingPractice } from "../../components/Onboarding/OnboardingPractice";
// import { OnboardingExperience } from "../../components/Onboarding/OnboardingExperience";

export function Onboarding() {
  return (
    <Main className="container">
      {/* <OnboardingPractice/> */}
      {/* <OnboardingExperience/> */}
      <OnboardingTaste/>
    </Main>
  );
}
