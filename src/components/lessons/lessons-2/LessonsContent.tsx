import Hand from "../../../assets/lessons/hand-position-1.png";
import { InfoLesson } from "./InfoLesson";
import { LessonsButton, LessonsVoltar } from "../LessonsButton";


interface LessonsContentProps {
  image: string;
  description: string;
  buttonTitle?: string[];
  onClick: () => void;
  page: number;
  title: string;
}

export function LessonsContent(props: LessonsContentProps) {
  function HandleOnClick(text: string) {
    props.onClick();
  }

  return (
    <>
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <img className="img-center" src={props.image} alt={props.description} />
      <hr className="line-bottom" />
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
    </>
  );
}

export function LessonsHome(props: LessonsContentProps) {
  function HandleOnClick(text: any) {
    props.onClick();
  }

  return (
    <>
      <hr className="line-top" />
      <h1>Contagem de dedos</h1>
      <img className="img-center" src={Hand} alt="Fingers on the guitar" />

      <div className="d-flex row info-page">
        <div className="col-3 d-flex flex-column ">
          <InfoLesson background="#5B107E" number={1} title="Casa 1" />
          <InfoLesson background="#5B107E" number={2} title="Casa 2" />
          <InfoLesson background="#5B107E" number={3} title="Casa 3" />
        </div>
        <div className="col-3 d-flex flex-column">
          <InfoLesson background="#5B107E" number={4} title="Casa 4" />
          <InfoLesson background="#5B107E" number={5} title="Casa 5" />
        </div>
        <div className="col-3 d-flex flex-column info-col">
          <InfoLesson background="#6C5ECE" number={1} title="Dedo 1" />
          <InfoLesson background="#6C5ECE" number={2} title="Dedo 2" />
          <InfoLesson background="#6C5ECE" number={3} title="Dedo 3" />
        </div>
        <div className="col-3 d-flex flex-column info-col">
          <InfoLesson background="#6C5ECE" number={4} title="Dedo 4" />
          <InfoLesson background="#6C5ECE" number={6} title="Dedo de apoio" />
        </div>
      </div>
      <hr className="line-bottom-home"/>
      <div>
        <LessonsVoltar>Voltar</LessonsVoltar>
        <LessonsButton onClick={() => HandleOnClick(props.onClick)}>
          Entendi
        </LessonsButton>
      </div>
    </>
  );
}


