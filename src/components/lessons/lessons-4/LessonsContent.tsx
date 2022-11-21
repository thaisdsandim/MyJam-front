import CipherIcon from "../../../assets/lessons/cifra-icone.png";
import { LessonsButton, LessonsVoltar } from "../LessonsButton";
import { Container } from "./LessonsContainer.style";

interface LessonContainerProps {
  image: string;
  description: string;
  buttonTitle?: string[];
  onClick: () => void;
  page: number;
  title: string;
  cipherName: string;
}

export function LessonsContent(props: LessonContainerProps) {
  function HandleOnClick(text: string) {
    props.onClick();
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <div className="container-center row d-flex">
        <div className="col">
          <p className="cipher-title">{props.cipherName}</p>
          <img className="img-content" src={props.image} alt={props.description} />
        </div>
        <div className="col d-flex flex-column" style={{ marginTop: "60px" }}>
          <ol>
            <li>Pressione as cordas indicadas.</li>
            <li>Use o dedão como apoio pra reduzir o esforço</li>
          </ol>
          <div className="d-flex justify-content-center">
            <LessonsButton>
              Tocar Nota
              <span>
                <img src={CipherIcon} style={{ marginLeft: "10px" }} />
              </span>
            </LessonsButton>
          </div>
        </div>
      </div>
      <div className="recomendation d-flex">
        <p><span>x</span> Recomendamos pelo menos 3 repetições. Mas faça quantas quiser.</p>
      </div>
      <hr className="line-bottom" />
      <div className="d-flex">
        <div>
          <LessonsVoltar>Voltar</LessonsVoltar>
        </div>
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

export function LessonsFinish() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <h1 style={{ color: "white" }}>Parabéns!</h1>
    </Container>
  );
}
