import Hand from "../assets/lessons/hand-position-1.png";
import Guitar from "../assets/lessons/h-guitar.png";
import { useState } from "react";
import {
  LessonsContent,
  LessonsFinish,
  LessonsHome,
} from "../components/lessons/lessons-2/LessonsContent";
import { MyJamBar } from "../components/progressBar/MyJamBar";
import "../components/lessons/lessons-2/LessonsContainer.style";
import { LessonContainer } from "../components/lessons/lessons-2/LessonsPageContainer";

export function Lessons() {
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
    return <LessonsFinish />;
  }

  return (
    <LessonContainer className="d-flex flex-column align-items-center">
      <MyJamBar
        onClick={previousPage}
        size={{ width: (page * 100) / 5 + "%" }}
      />
      {page === 0 && (
        <LessonsHome
          page={page}
          onClick={nextPage}
          title="Contagem de dedos"
          buttonTitle={["Nenhuma", "Alguma experiência"]}
          description="Contagem de dedos"
          image=""
        />
      )}

      {page === 1 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual é esta casa?"
          buttonTitle={["1", "4", "5"]}
          description="Qual é esta casa?"
          image={Guitar}
        />
      )}

      {page === 2 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual é esta corda?"
          buttonTitle={["3", "6", "1"]}
          description="Qual é esta corda?"
          image={Guitar}
        />
      )}

      {page === 3 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual dedo está na corda 2?"
          buttonTitle={["1", "2", "4"]}
          description="Qual dedo está na corda 2?"
          image={Hand}
        />
      )}

      {page === 4 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Em qual corda e casa está o dedo 4?"
          buttonTitle={[
            "Corda 2, casa 5",
            "Corda 5, casa 2",
            "Corda 6, casa 3",
          ]}
          description="Em qual corda e casa está o dedo 4?"
          image={Hand}
        />
      )}
    </LessonContainer>
  );
}
