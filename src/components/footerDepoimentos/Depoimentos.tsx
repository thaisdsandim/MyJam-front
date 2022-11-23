import { ContainerD, LogoImg } from "./Depoimento.style";
import Icon from "../../assets/images/avatarDepoimentos.png";
import Avatar from "../../assets/images/Ellipse.png";
import AvatarD from "../../assets/images/Avatar-maker.png";


const Depoimentos = () => {
  return (
    <ContainerD>
      <div className="Titulo">
        <h3>Depoimentos</h3>
      </div>
      <div className="Row">
        <div className="Col">
          <LogoImg src={Avatar} />
          <p>
          “Poder aprender sem medo de errar e sem me sentir julgada foi
                  a melhor coisa que poderia ter acontecido!”
          </p>
        </div>

        <div className="Col">
          <LogoImg src={AvatarD} />
          <p>
             “Depois que meu amigo zeca me apresentou esse site nunca mais
                  deixei de tocar”
          </p>
        </div>
        <div className="Col">
          <LogoImg src={Icon} />
          <p>
          “Depois que meu amigo zeca me apresentou esse site nunca mais
                  deixei de tocar”
          </p>
        </div>
      </div>
    </ContainerD>
  );
};

export default Depoimentos;
