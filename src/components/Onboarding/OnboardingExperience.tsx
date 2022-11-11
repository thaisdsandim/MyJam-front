import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-bootstrap/";
import ArrowLeft from "../../assets/ArrowLeft.png";
import { OnboardingButton } from "./OnboardingButton";

export function OnboardingExperience() {
  return (
    <main>
      <div className=" progress-container d-flex justify-content-center">
        <div>
          <img className="arrow-left" src={ArrowLeft} alt="" />
          {/* <BsArrowLeft className="arrow-left" /> */}
        </div>
        <div>
          <ProgressBar className="progressbar" variant="black" now={25} />
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <h1 className="title text-center">
          Você já tem alguma experiência com o violão?
        </h1>
        <div className="d-flex flex-column gap-5 align-items-center">
          <OnboardingButton title="Nenhuma" children="" />
          <OnboardingButton title="Já tenho alguma experiência" children="" />
        </div>
      </div>
    </main>
  );
}
