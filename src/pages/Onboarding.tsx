import { useState } from "react";
import {
  OnBoardingHome,
  OnBoardingExperience,
  OnBoardingMusicalStyle,
  OnBoardingPractice,
  OnBoardingLearn,
} from "../components/onboarding/OnboardingContent";
import { OnboardingBar } from "../components/onboarding/OnboardingBar";
import { Container } from "../components/onboarding/Onboarding.style";
import ArrowLeft from "../assets/images/ArrowLeft.png";

export function OnBoarding() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  function voltarPagina() {
    setPage(page - 1);
  }

  function proximaPagina() {
    setPage(page + 1);

    if (page >= 3) {
      setIsFinish(true);
    }
  }

  if (isFinish) {
    return (
      <div>
        <h1>Completou</h1>
      </div>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      {/* <h1 style={{ color: "white" }}> {Number((page * 100) / 3).toFixed(2)}</h1> */}
      <div className="progress-container row">
        <div className=" col-1">
          <img src={ArrowLeft} alt="Arrow, previous page." />
        </div>
        <div className=" col-11 ">
          <div className="progress d-flex align-items-center">
            <div
              className="percent"
              style={{ color: "white", width: (page * 100) / 4 + "%" }}
            ></div>
          </div>
        </div>
      </div>

      {page === 0 && <OnBoardingHome page={page} onClick={proximaPagina} />}

      {page === 1 && (
        <OnBoardingExperience page={page} onClick={proximaPagina} />
      )}

      {page === 2 && (
        <OnBoardingMusicalStyle page={page} onClick={proximaPagina} />
      )}

      {page === 3 && <OnBoardingPractice page={page} onClick={proximaPagina} />}

      {page === 4 && <OnBoardingLearn page={page} onClick={proximaPagina} />}
    </Container>
  );
}
