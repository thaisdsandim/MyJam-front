import Guitar from "../../../assets/lessons/v-guitar.png";

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
      <h1>{props.title}</h1>
      <div className="container justify-content-center d-flex">
        <div className="row d-flex">
          <div className="">
            <img
              className="img-home"
              src={Guitar}
              alt="Fingers on the guitar"
            />
          </div>
        </div>
        <div className="row text-home d-flex">
          <div className="d-flex flex-column">
            <div className="text-center" style={{ marginBottom: "30px" }}>
              <p>
                Nossa primeira etapa, vamos focar no braço, que é a mais
                importante.
              </p>
            </div>
            <div className="d-flex">
              <span>1</span>
              <p>
                É o cabeçote. Nele ficam as tarraxas pra afinação e, além disso,
                faz parte da sustentação do braço.
              </p>
            </div>
            <div className="d-flex">
              <span>2</span>
              <p>Tarraxas: São as responsáveis pela afinação das cordas.</p>
            </div>
            <div className="d-flex">
              <span>3</span>
              <p>
                Casas: No violão, cada casa de cada corda é uma nota. Elas são
                divididas pelos trastes. Em alguns pontos elas são a mesma.
                Falamos disso depois.
              </p>
            </div>
            <div className="d-flex">
              <span>4</span>
              <p>
                Traste: Diferente dos da vida real, o traste do violão é
                responsável por dividir e sustentar as notas.
              </p>
            </div>
            <div className="d-flex">
              <span>5</span>
              <p>Todas essas partes juntas compõem o braço do violão.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="line-bottom-home" />
      <div>
        <LessonsVoltar>Voltar</LessonsVoltar>
        <LessonsButton onClick={() => HandleOnClick(props.onClick)}>
          Entendi
        </LessonsButton>
      </div>
    </>
  );
}
export function LessonsContentButtons(props: LessonsContentProps) {
  function HandleOnClick(text: any) {
    props.onClick();
  }
  return (
    <>
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <hr className="line-bottom" />
      <div className="d-flex flex-column">
        {props?.buttonTitle?.map((item, index) => (
          <LessonsButton
            
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

export function LessonsFinish() {
  return (
    <>
      <h1
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Parabéns!
      </h1>
    </>
  );
}
