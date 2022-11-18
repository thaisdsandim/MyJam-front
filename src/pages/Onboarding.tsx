import { useState } from "react";
import {
  OnBoardingComponent,
  OnBoardingFinish,
  OnBoardingHome,
} from "../components/onboarding/OnboardingContent";
import { Container } from "../components/onboarding/Onboarding.style";
import { OnboardingBar } from "../components/progressBar/MyJamBar";

export function OnBoarding() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  function previousPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);

    if (page >= 5) {
      setPage(page + 1);

      setTimeout(() => setIsFinish(true), 1000);
    }
  }

  if (isFinish) {
    return <OnBoardingFinish />;
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <OnboardingBar
        onClick={previousPage}
        size={{ width: (page * 100) / 6 + "%" }}
      />
      {page === 0 && (
        <OnBoardingHome
          page={page}
          onClick={nextPage}
          title={["Nenhuma", "Alguma experiência"]}
        />
      )}

      {page === 1 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title={["Nenhuma", "Alguma experiência"]}
        />
      )}

      {page === 2 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title={[
            "Uma vez na semana",
            "Duas vezes na semana",
            "Apenas nos fins de semana",
            "Todos os dias",
          ]}
        />
      )}

      {page === 3 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title={["Rock", "Pop", "Música brasileira", "Jazz", "Blues"]}
        />
      )}

      {page === 4 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title={[
            "Uma vez na semana",
            "Duas vezes na semana",
            "Apenas nos fins de semana",
            "Todos os dias",
          ]}
        />
      )}

      {page === 5 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title={["Aprender o básico", "Tocar em eventos", "O máximo possível"]}
        />
      )}
    </Container>
  );
}
