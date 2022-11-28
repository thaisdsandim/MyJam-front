import { useState } from "react";
import Cifra1 from "../assets/lessons/cifra-1.png";
import Cifra2 from "../assets/lessons/cifra-2.png";
import Cifra3 from "../assets/lessons/cifra-3.png";
import Cifra4 from "../assets/lessons/cifra-4.png";
import { LessonsFinish } from "../components/lessons/lessons-3/LessonsFinish";
import {
  LessonsContent,
  LessonsHome,
} from "../components/lessons/lessons-3/LessonsContent";
import { MyJamBar } from "../components/progressBar/MyJamBar";
import { LessonContainer } from "../components/lessons/lessons-3/LessonsContainer";

export function LessonsThree() {
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
          title="Como ler a tal da cifra?"
          buttonTitle={["Entendi"]}
          description="Como ler a tal da cifra?"
          image=""
        />
      )}

      {page === 1 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual a posição do dedo 2?"
          buttonTitle={["Corda 3, Casa 4", "Corda 4, Casa 2", "Corda 2, Casa 1"]}
          description="Qual a posição do dedo 2?"
          image={Cifra1}
        />
      )}

      {page === 2 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Quantos dedos são usados nesse acorde?"
          buttonTitle={["2", "3", "4"]}
          description="Quantos dedos são usados nesse acorde?"
          image={Cifra2}
        />
      )}

      {page === 3 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual é a casa em que ficam os dedos 2 e 3?"
          buttonTitle={["2", "4", "1"]}
          description="Qual é a casa em que ficam os dedos 2 e 3?"
          image={Cifra3}
        />
      )}

      {page === 4 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual corda você vai apertar com o dedo 1?"
          buttonTitle={[
            "6",
            "2",
            "3",
          ]}
          description="Qual corda você vai apertar com o dedo 1?"
          image={Cifra4}
        />
      )}
    </LessonContainer>
  );
}
