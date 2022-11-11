import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-bootstrap/";
import ArrowLeft from "../../assets/ArrowLeft.png";
import { OnboardingButton } from "./OnboardingButton";

export function OnboardingPractice() {
  return (
    <main>
      <div className=" progress-container d-flex justify-content-center">
        <div>
          <img className="arrow-left" src={ArrowLeft} alt="" />
          {/* <BsArrowLeft className="arrow-left" /> */}
        </div>
        <div>
          <ProgressBar className="progressbar" variant="black" now={50} />
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <h1 className="title text-center">
          Quantas vezes na semana você pode praticar?
        </h1>
        <div className="d-flex flex-column gap-5 align-items-center">
          <OnboardingButton type="submit" title="Uma vez na semana" children="" />
          <OnboardingButton type="submit" title="Duas vezes na semana" children="" />
          <OnboardingButton type="submit" title="Apenas nos fins de semana" children="" />
          <OnboardingButton type="submit" title="Todos os dias" children="" />
        </div>
      </div>
    </main>
  );
}
