import { Howl } from "howler";
import CipherIcon from "../../../assets/lessons/cifra-icone.png";
import Do from "../../../assets/audios/do.wav";
import { LessonsButton, LessonsVoltar } from "../LessonsButton";


interface LessonContainerProps {
  image: string;
  description: string;
  buttonTitle?: string[];
  onClick: () => void;
  page: number;
  title: string;
  cipherName: string;
}
const song = [
  {
    sound:
      "https://d7d3471nr939s.cloudfront.net/PureAcousticGuitar_Noiiz/MP3/One+Shots/Acoustic+Guitar/C_add9StrumGuitar_01_526.mp3?cb=afb9abe4-05c9-439a-a501-785da02a0c8c",
  },
];

export function LessonsContent(props: LessonContainerProps) {
  function HandleOnClick(text: string) {
    props.onClick();
  }

  function playAudio(src: string) {
    let audio = new Howl({
      src,
      html5: true,
    });
    audio.play();
  }

  return (
    <>
      <hr className="line-top" />
      <h1>{props.title}</h1>
      <div className="container-center row d-flex">
        <div className="col">
          <p className="cipher-title">{props.cipherName}</p>
          <img
            className="img-content"
            src={props.image}
            alt={props.description}
          />
        </div>
        <div className="col d-flex flex-column" style={{ marginTop: "60px" }}>
          <ol>
            <li>Pressione as cordas indicadas.</li>
            <li>Use o dedão como apoio pra reduzir o esforço</li>
          </ol>
          <div className="d-flex justify-content-center">
            {song.map((snd, index) => {
              return (
                <LessonsButton key={index} onClick={() => playAudio(snd.sound)}>
                  Tocar Nota
                  <span>
                    <img src={CipherIcon} style={{ marginLeft: "10px" }} />
                  </span>
                </LessonsButton>
              );
            })}
          </div>
        </div>
      </div>
      <div className="recomendation d-flex">
        <p>
          <span>x</span> Recomendamos pelo menos 3 repetições. Mas faça quantas
          quiser.
        </p>
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
    </>
  );
}