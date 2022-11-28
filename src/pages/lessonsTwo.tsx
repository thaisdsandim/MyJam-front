import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Image1 from "../assets/lessons/lesson2-1.png";
import Image2 from "../assets/lessons/lesson2-2.png";
import Image3 from "../assets/lessons/lesson2-3.png";
import Image4 from "../assets/lessons/lesson2-4.png";
import Image5 from "../assets/lessons/lesson2-5.png";
import Image6 from "../assets/lessons/lesson2-6.png";
import Image7 from "../assets/lessons/lesson2-7.png";
import { LessonsFinish } from "../components/lessons/lessons-2/LessonsFinish";
import {
  LessonsContent,
  LessonsHome,
} from "../components/lessons/lessons-2/LessonsContent";
import { MyJamBar } from "../components/progressBar/MyJamBar";
import { LessonContainer } from "../components/lessons/lessons-2/LessonsContainer";
import ListaDeLicoes from "../pages/listaDeLicoes";

export function LessonsTwo() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const navigate = useNavigate();
  
  function previousPage() {
    setPage(page - 1);
  }

  const navigateToLessons = () => {
    // 👇️ navigate to /contacts
    navigate('/listadelicoes');
  };

  function nextPage() {
    setPage(page + 1);

    if (page >= 6) {
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
        size={{ width: (page * 100) / 7 + "%" }}
      />
      {page === 0 && (
        <LessonsHome
          page={page}
          onClick={nextPage}
          onClickBack={navigateToLessons}
          title="Contagem de dedos"
          buttonTitle={[]}
          description="Contagem de dedos"
          image={Image1}
          show="flex"
          text="none"
          infoIcon={[
            { color: "#FD6E98", infoTitle: "Dedo 1" },
            { color: "#A5D9F6", infoTitle: "Dedo 2" },
            { color: "#FDCD65", infoTitle: "Dedo 3" },
            { color: "#CC5740", infoTitle: "Dedo 4" },
            { color: "#A667CE", infoTitle: "Polegar" },
          ]}
        />
      )}

      {page === 1 && (
        <LessonsHome
          page={page}
          onClick={nextPage}
          onClickBack={previousPage}
          title="Contagem das cordas"
          buttonTitle={["1", "4", "5"]}
          description="Contagem das cordas"
          image={Image2}
          show="none"
          text="flex"
        />
      )}

      {page === 2 && (
        <LessonsHome
          page={page}
          onClick={nextPage}
          onClickBack={previousPage}
          title="Contagem das casas"
          buttonTitle={["Voltar", "Entendi"]}
          description="Contagem das casas"
          image={Image3}
          show="flex"
          text="none"
          infoIcon={[
            { color: "#FD6E98", infoTitle: "Casa 1" },
            { color: "#A5D9F6", infoTitle: "Casa 2" },
            { color: "#FDCD65", infoTitle: "Casa 3" },
            { color: "#CC5740", infoTitle: "Casa 4" },
            { color: "#A667CE", infoTitle: "Casa 5" },
          ]}
        />
      )}

      {page === 3 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual é esta casa?"
          buttonTitle={["1", "4", "5"]}
          description="Qual é esta casa?"
          image={Image4}
        />
      )}

      {page === 4 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual é esta corda?"
          buttonTitle={["3", "6", "1"]}
          description="Qual é esta corda?"
          image={Image5}
        />
      )}
      {page === 5 && (
        <LessonsContent
          page={page}
          onClick={nextPage}
          title="Qual dedo está na corda 2?"
          buttonTitle={["1", "2", "4"]}
          description="Qual dedo está na corda 2?"
          image={Image6}
        />
      )}
      {page === 6 && (
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
          image={Image7}
        />
      )}
    </LessonContainer>
  );
}
