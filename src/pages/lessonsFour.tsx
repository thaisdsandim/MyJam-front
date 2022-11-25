import { useState } from "react";
import Cifra1 from "../assets/lessons/cifra-1.png";
import Cifra2 from "../assets/lessons/cifra-2.png";
import Cifra3 from "../assets/lessons/cifra-3.png";
import Cifra4 from "../assets/lessons/cifra-4.png";
import { LessonsFinish } from "../components/lessons/lessons-4/LessonsFinish";
import {
  LessonsContent,
} from "../components/lessons/lessons-4/LessonsContent";
import { MyJamBar } from "../components/progressBar/MyJamBar";
import { LessonContainer } from "../components/lessons/lessons-4/LessonsContainer";

export function LessonsFour() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  function previousPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);

    if (page >= 3) {
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
        size={{ width: (page * 100) / 4 + "%" }}
      />
      {page === 0 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Pratique"
          buttonTitle={["Entendi"]}
          description="Pratique, Nota: Dó Maior"
          image={Cifra1}
          cipherName="C (Dó Maior)"
        />
      )}

      {page === 1 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Pratique"
          buttonTitle={["Entendi"]}
          description="Pratique, Nota: Sol Maior?"
          image={Cifra2}
          cipherName="G (Sol Maior)"
        />
      )}

      {page === 2 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Pratique"
          buttonTitle={["Entendi"]}
          description="Pratique, Nota: Lá Menor"
          image={Cifra3}
          cipherName="Am (Lá Menor)"
        />
      )}

      {page === 3 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Pratique"
          buttonTitle={["Entendi"]}
          description="Pratique, Nota: Fá Maior"
          image={Cifra4}
          cipherName="F (Fá Maior)"
        />
      )}

    </LessonContainer>
  );
}
