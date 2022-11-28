import Hand from "../../../assets/lessons/hand-position-1.png";

import { InfoLesson } from "./InfoLesson";
import { LessonsButton, LessonsVoltar } from "../LessonsButton";
import { Link } from "react-router-dom";

interface LessonsContentProps {
  image: string;
  description: string;
  buttonTitle?: string[];
  onClick: () => void;
  onClickBack?: () => void;
  page: number;
  title: string;
  show?: string;
  text?: string;
  infoIcon?: {
    infoTitle: string;
    color: string;
  }[];
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
      <img
        className="img-center"
        src={props.image}
        alt="Fingers on the guitar"
      />
      <p className="info-text" style={{ display: props.text,   }}>
        As cordas do violão são contadas de baixo pra cima. Da mais fina pra a
        mais grossa.
      </p>

      <div className="row info-page" style={{ display: props.show }}>
        <div className="col-auto d-flex info-content">
          {props?.infoIcon?.map((item, index) => (
            <p key={index}>
              <InfoLesson color={item.color} infoTitle={item.infoTitle} />
            </p>
          ))}
        </div>
      </div>
      <hr className="line-bottom-home" />
      <div>
        <LessonsVoltar
          onClick={props.onClickBack}
          style={{ position: "fixed", left: "35%", bottom: "5%" }}
        >
          Voltar
        </LessonsVoltar>

        <LessonsButton
          style={{ position: "fixed", right: "35%", bottom: "5%" }}
          onClick={() => HandleOnClick(props.onClick)}
        >
          Entendi
        </LessonsButton>
      </div>
    </>
  );
}
