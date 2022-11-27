import { useState } from "react";
import api from "../services/api";
import { OnBoardingFinish } from "../components/onboarding/OnboardingFinish";
import {
  OnBoardingComponent,
  OnBoardingHome,
} from "../components/onboarding/OnboardingContent";
import { Container } from "../components/onboarding/Onboarding.style";
import { MyJamBar } from "../components/progressBar/MyJamBar";

export function OnBoarding() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [instrumentId, setInstrumentId] = useState(1);
  const [experienceId, setExperienceId] = useState(1);
  const [practiceId, setPracticeId] = useState(1);
  const [styleId, setStyleId] = useState(1);
  const [learnId, setLearnId] = useState(1);

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
    return (
      <OnBoardingFinish
        experienceId={experienceId}
        instrumentId={instrumentId}
        learnId={learnId}
        practiceId={practiceId}
        styleId={styleId}
      />
    );
  }
  console.log(experienceId);
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
          buttons={[
            {
              value: 1,
              onClick: (value: number) => setInstrumentId(value),
            },
          ]}
        />
      )}

      {page === 1 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="Você já tem alguma experiência com o violão? "
          buttons={[
            {
              title: "Nenhuma",
              value: 1,
              onClick: (value: number) => setExperienceId(value),
            },
            {
              title: "Alguma experiência",
              value: 2,
              onClick: (value: number) => setExperienceId(value),
            },
          ]}
        />
      )}

      {page === 2 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="Quanto tempo por dia você pode praticar?"
          buttons={[
            {
              title: "10 minutos ao dia",
              value: 1,
              onClick: (value: number) => setPracticeId(value),
            },
            {
              title: "20 minutos ao dia",
              value: 2,
              onClick: (value: number) => setPracticeId(value),
            },
            {
              title: "30 minutos ao dia",
              value: 3,
              onClick: (value: number) => setPracticeId(value),
            },
            {
              title: "1 hora por dia",
              value: 4,
              onClick: (value: number) => setPracticeId(value),
            },
          ]}
        />
      )}

      {page === 3 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="Qual estilo musical você mais gosta?"
          buttons={[
            {
              title: "Rock",
              value: 1,
              onClick: (value: number) => setStyleId(value),
            },
            {
              title: "Pop",
              value: 2,
              onClick: (value: number) => setStyleId(value),
            },
            {
              title: "Música brasileira",
              value: 3,
              onClick: (value: number) => setStyleId(value),
            },
            {
              title: "Jazz",
              value: 4,
              onClick: (value: number) => setStyleId(value),
            },
            {
              title: "Blues",
              value: 5,
              onClick: (value: number) => setStyleId(value),
            },
          ]}
        />
      )}

      {page === 4 && (
        <OnBoardingComponent
          page={page}
          onClick={nextPage}
          title="O que você quer aprender?"
          buttons={[
            {
              title: "Aprender o básico",
              value: 1,
              onClick: (value: number) => setLearnId(value),
            },
            {
              title: "Todas as músicas que gosto",
              value: 2,
              onClick: (value: number) => setLearnId(value),
            },
            {
              title: "Tocar em eventos",
              value: 3,
              onClick: (value: number) => setLearnId(value),
            },
            {
              title: "O máximo possível",
              value: 4,
              onClick: (value: number) => setLearnId(value),
            },
          ]}
        />
      )}
    </Container>
  );
}
