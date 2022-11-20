import Hand from "../../assets/lessons/hand-position-1.png";
import { LessonsButton, LessonsVoltar } from "./LessonsButton";
import { Container } from "./LessonsContainer.style";

interface LessonContainerProps {
  image: string;
  description: string;
  buttonTitle?: string[];
  onClick: () => void;
  page: number;
  title: string;
}

export function LessonsContent(props: LessonContainerProps) {
  function HandleOnClick(text: string) {
    props.onClick();
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.description} />

      <hr />
      <div className="d-flex">
        {props?.buttonTitle?.map((item, index) => (
          <LessonsButton
            className="rounded-corners-gradient-borders"
            key={index}
            onClick={() => HandleOnClick(item)}
          >
            {item}
          </LessonsButton>
        ))}
      </div>
    </Container>
  );
}
export function LessonsHome(props: LessonContainerProps) {
  function HandleOnClick(text: any) {
    props.onClick();
  }

  return (
    <Container className="d-flex flex-column  align-items-center">
      <hr />
      <h1>Contagem de dedos</h1>
      <img src={Hand} alt="Fingers on the guitar" />

      <div className="row info-page w-100">
        <div className="col-3">
          <p>Casa 1</p>
          <p>Casa 2</p>
          <p>Casa 3</p>
        </div>
        <div className="col-3">
          <p>Casa 4</p>
          <p>Casa 5</p>
        </div>
        <div className="col-3">
          <p>Dedo 1</p>
          <p>Dedo 2</p>
        </div>
        <div className="col-3">
          <p>Dedo 3</p>
          <p>Dedo 4</p>
          <p>Dedo de apoio</p>
        </div>
      </div>
      <hr />
      <div>
        <LessonsVoltar>Voltar</LessonsVoltar>
        <LessonsButton onClick={() => HandleOnClick(props.onClick)}>
          Entendi
        </LessonsButton>
      </div>
    </Container>
  );
}
