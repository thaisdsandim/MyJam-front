import Ciphers from "../../../assets/lessons/cifras-musicais.png";

import { LessonsButton, LessonsVoltar } from "../LessonsButton";
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
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <img className="img-content" src={props.image} alt={props.description} />

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
    </Container>
  );
}
export function LessonsHome(props: LessonContainerProps) {
  function HandleOnClick(text: any) {
    props.onClick();
  }

  return (
    <Container className="d-flex flex-column  align-items-center">
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <img className="img-home" src={Ciphers} alt="Fingers on the guitar" />
      <div className="text-home">
        <div className="row d-flex flex-column">
          <div className="col text-center" style={{ marginBottom: "30px" }}>
            <p>
              Aqui acima temos uma imagem que ilustra o que está acontecendo.
            </p>
          </div>
          <div className="col d-flex">
            <span>1</span>
            <p>Os números dentro das bolinhas são os dedos.</p>
          </div>
          <div className="col d-flex">
            <span>2</span>
            <p>
              A primeira linha é onde ficaria o cabeçote. A partir daí, você
              começa a contar as casas.
            </p>
          </div>
          <div className="col d-flex">
            <span>3</span>
            <p>
              As linhas das colunas são as cordas. Da direita pra esquera, da
              corda 1 até a corda 6 do violão
            </p>
          </div>
          <div className="col d-flex">
            <span>4</span>
            <p>
              As cordas são contadas debaixo para cima. É como se o braço do
              violão estivesso na vertical, de frente pra você.
            </p>
          </div>
          <div className="col d-flex">
            <span>5</span>
            <p>
              Lembrando que quanto mais perto daquele buraco no corpo do violão
              você tocar, melhor vai ser o som.
            </p>
          </div>
        </div>
      </div>
      <hr style={{marginTop:"80px"}}/>
      <div>
        <LessonsVoltar>Voltar</LessonsVoltar>
        <LessonsButton onClick={() => HandleOnClick(props.onClick)}>
          {props.buttonTitle}
        </LessonsButton>
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
