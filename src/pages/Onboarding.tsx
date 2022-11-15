import { useState } from "react";
import OnBoardingContent from "../components/onboarding/OnboardingContent";
// import { OnboardingBar } from "../components/onboarding/OnboardingBar.style";

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
      <div
        style={{
          maxWidth: 1200,
          margin: "30px auto",
        }}
      >
        <h1>Completou</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "30px auto",
      }}
    >
      {/* <h1><OnboardingBar/> {Number((page * 100) / 3).toFixed(2)}</h1> */}

      {page === 0 && <OnBoardingContent page={page} onClick={proximaPagina} />}

      {page === 1 && <OnBoardingContent page={page} onClick={proximaPagina} />}

      {page === 2 && <OnBoardingContent page={page} onClick={proximaPagina} />}

      {page === 3 && <OnBoardingContent page={page} onClick={proximaPagina} />}
    </div>
  );
}
