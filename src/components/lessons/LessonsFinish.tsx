import { FinishContainer } from "./lessons-1/LessonsContainer";
import Bg from "../../assets/lessons/finish.png"
import Overlay from "../../assets/lessons/overlay-end.png"

export function LessonsFinish() {
  return (
    <FinishContainer>
      <div className="bg-image">
        <img src={Bg} alt="" />
      </div>
      <div className="front-image">
        <img src={Overlay}></img>
      </div>
    </FinishContainer>
  );
}
