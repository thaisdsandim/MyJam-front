import { useState } from "react";
import {
  OnBoardingComponent,
  OnBoardingFinish,
  OnBoardingHome,
} from "../components/onboarding/OnboardingContent";
import { Container } from "../components/onboarding/Onboarding.style";
import { MyJamBar } from "../components/progressBar/MyJamBar";

export function OnBoarding() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  function previousPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);

    if (page >= 4) {
      setPage(page + 1);

      setTimeout(() => setIsFinish(true), 1000);
    }
  }

  if (isFinish) {
    return <OnBoardingFinish />;
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <MyJamBar
        onClick={previousPage}
        size={{ width: (page * 100) / 5 + "%" }}
      />
      {page === 0 && (
        <OnBoardingHome
          page={page}
          onClick={nextPage}
          title="O que você quer aprender hoje?"
          buttonTitle={["Nenhuma", "Alguma experiência"]}
        />
      )}

      {page === 1 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="Você já tem alguma experiência com o violão? "
          buttonTitle={["Nenhuma", "Alguma experiência"]}
        />
      )}

      {page === 2 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="Quantas vezes na semana você pode praticar?"
          buttonTitle={[
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
          title="Qual estilo musical você mais gosta?"
          buttonTitle={["Rock", "Pop", "Música brasileira", "Jazz", "Blues"]}
        />
      )}

      {page === 4 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="O que você quer aprender?"
          buttonTitle={[
            "Aprender o básico",
            "Todas as músicas que gosto",
            "Tocar em eventos",
            "O máximo possível",
          ]}
        />
      )}
    </Container>
  );
}
