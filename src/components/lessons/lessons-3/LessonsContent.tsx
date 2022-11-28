import Ciphers from "../../../assets/lessons/lesson3-1.png";
import Ciphers2 from "../../../assets/lessons/cifras-musicais.png";


import { LessonsButton, LessonsVoltar } from "../LessonsButton";

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
    <>
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
    </>
  );
}
export function LessonsHome(props: LessonContainerProps) {
  function HandleOnClick(text: any) {
    props.onClick();
  }

  return (
    <>
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <p className="title-1-home">Aqui abaixo temos uma imagem que ilustra o que está acontecendo.</p>
      <img className="image-1-home" src={Ciphers2} alt="Notas musicais" />
      <div className="d-flex gap-5">
        <img className="img-home" src={Ciphers} alt="Dicas de como ler a cifra" />
        <div className="text-home">
          <div className="row d-flex flex-column gap-3">
            <div
              className="col text-center"
              style={{ marginBottom: "30px" }}
            ></div>
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
                Lembrando que quanto mais perto daquele buraco no corpo do
                violão você tocar, melhor vai ser o som.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="line-bottom-home"/>
      <div>
        
        <LessonsButton style={{position:"relative", left:"50%", bottom:"3%"}} onClick={() => HandleOnClick(props.onClick)}>
          {props.buttonTitle}
        </LessonsButton>
        <LessonsVoltar style={{position:"relative", right:"50%", bottom:"3%"}}>Voltar</LessonsVoltar>
      </div>
    </>
  );
}
