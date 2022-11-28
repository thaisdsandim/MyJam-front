import { Link } from "react-router-dom";
import { FinishContainer } from "./lessons-1/LessonsContainer";
import Bg from "../../assets/lessons/finish.png";
import Overlay from "../../assets/lessons/overlay-end.png";
import { LessonsButton } from "./LessonsButton";


interface LessonsFinishProps {
  page: string,
}

export function LessonsFinish(props:LessonsFinishProps) {
  return (
    <FinishContainer>
      <div className="bg-image">
        <img src={Bg} alt="" />
      </div>
      <div className="front-image d-flex flex-column">
        <img src={Overlay}></img>
        <div className="d-flex finish-button">
          <Link to={"/lessons/3"}>
            <LessonsButton>Voltar pra lições</LessonsButton>
          </Link>
          <Link to={`/lessons/${props.page}`}>
          <LessonsButton>Próxima lição</LessonsButton>
          </Link>
        </div>
      </div>
    </FinishContainer>
  );
}
