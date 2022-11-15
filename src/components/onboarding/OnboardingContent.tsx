// import { OnboardingBar } from "./OnboardingBar.style";
import { Container } from "./Onboarding.style";
import { OnboardingButton } from "./OnboardingButton.style";
import ArrowLeft from "../../assets/images/ArrowLeft.png";

type OnBoardingContentProps = {
  page: number;
  onClick: () => void;
};

function OnBoardingContent(props: OnBoardingContentProps) {
  return (
    <Container className="d-flex flex-column align-items-center justity-content-center">
      <div className="row text-center">
        <div className="col md-6 ">
          <h1>O que você quer aprender hoje?</h1>
          <span>Toque em um dos instrumentos pra continuar</span>
        </div>
      </div>
      <p
        style={{
          margin: "30px 0",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga mollitia
        facere molestiae doloribus laudantium deserunt repellat fugiat inventore
        commodi minus nobis, quaerat voluptatibus aliquid alias voluptas, iure
        atque dolore accusantium.
      </p>
      <OnboardingButton onClick={props.onClick}>Próximo</OnboardingButton>
    </Container>
  );
}

export default OnBoardingContent;
