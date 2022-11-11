import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-bootstrap/";
import ArrowLeft from "../../assets/ArrowLeft.png";
import { OnboardingButton } from "./OnboardingButton";

export function OnboardingTaste() {
  return (
    <main>
      <div className=" progress-container d-flex justify-content-center">
        <div>
          <img className="arrow-left" src={ArrowLeft} alt="" />
          {/* <BsArrowLeft className="arrow-left" /> */}
        </div>
        <div>
          <ProgressBar className="progressbar" variant="black" now={75} />
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <h1 className="title text-center">
        Qual estilo musical você mais gosta?
        </h1>
        <div className="d-flex flex-column gap-5 align-items-center">
          <OnboardingButton type="submit" title="Rock" children="" />
          <OnboardingButton type="submit" title="Pop" children="" />
          <OnboardingButton type="submit" title="Música Brasileira" children="" />
          <OnboardingButton type="submit" title="Jazz" children="" />
          <OnboardingButton type="submit" title="Blues" children="" />
        </div>
      </div>
    </main>
  );
}
