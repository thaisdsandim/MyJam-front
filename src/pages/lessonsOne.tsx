import { useState } from "react";
import { useNavigate } from "react-router";
import Image0 from "../assets/lessons/lesson1-0.png";
import Image1 from "../assets/lessons/lesson1-1.png";
import Image2 from "../assets/lessons/lesson1-2.png";
import { LessonsFinish } from "../components/lessons/lessons-1/LessonsFinish";
import {
  LessonsContent,
  LessonsHome,
  LessonsContentButtons,
} from "../components/lessons/lessons-1/LessonsContent";
import { MyJamBar } from "../components/progressBar/MyJamBar";
import { LessonContainer } from "../components/lessons/lessons-1/LessonsContainer";

export function Lessons() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const navigate = useNavigate();

  function previousPage() {
    setPage(page - 1);
  }

  const navigateToLessons = () => {
    // 👇️ navigate to /contacts
    navigate("/listadelicoes");
  };

  function checkAnswer(index:number, correctIndex:number) {
    console.log(index, correctIndex)

    if(index === correctIndex){
      nextPage()
    }else{
      alert("Resposta incorreta, tente novamente")
    }
    
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
          title="As partes do violão"
          buttonTitle={[]}
          description="As partes do violão"
          image={Image0}
        />
      )}

      {page === 1 && (
        <LessonsContent
          page={page}
          onClick={(e )=>checkAnswer(Number(e),1)}
          title="Qual é o nome dessa parte?"
          buttonTitle={["Cabeçote", "Braço", "Tarraxa"]}
          description="Qual é o nome dessa parte?"
          image={Image1}
        />
      )}

      {page === 2 && (
        <LessonsContentButtons
          page={page}
          onClick={(e )=>checkAnswer(Number(e),0)}
          title="Qual parte divide as notas e casas?"
          buttonTitle={["Traste", "Cabeçote", "Braço"]}
          description="Qual parte divide as notas e casas?"
        />
      )}

      {page === 3 && (
        <LessonsContentButtons
          page={page}
          onClick={(e )=>checkAnswer(Number(e),0)}
          title="Qual parte define as notas?"
          buttonTitle={["Casa", "Traste", "Braço"]}
          description="Qual parte define as notas?"
        />
      )}

      {page === 4 && (
        <LessonsContent
          page={page}
          onClick={(e )=>checkAnswer(Number(e),2)}
          title="Qual parte está circulada?"
          buttonTitle={["Cabeçote", "Casa", "Tarraxa"]}
          description="Qual parte está circulada?"
          image={Image2}
        />
      )}
    </LessonContainer>
  );
}
