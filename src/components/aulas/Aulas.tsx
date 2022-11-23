import Violao from "../../assets/images/aulas/Violão.png";
import Guitarra from "../../assets/images/aulas/Guitarra.png";
import Baixo from "../../assets/images/aulas/Baixo.png";
import Bateria from "../../assets/images/aulas/Bateria.png";
import Teclado from "../../assets/images/aulas/Teclado.png";
import { AulasC, LightBG } from "./Aulas.style";

const Aulas = () => {
  return (
    <LightBG>
      <AulasC>
        <div>
          <h3>O que você quer aprender no MyJam?</h3>
        </div>
        <div className="listas">
          <div>
            <ul>
              <li>
                <img src={Violao} alt="Violao" />
              </li>
              <li>
                <img src={Guitarra} alt="Guitarra" />
              </li>
              <li>
                <img src={Baixo} alt="Baixo" />
              </li>
              <li>
                <img src={Bateria} alt="Bateria" />
              </li>
              <li>
                <img src={Teclado} alt="Teclado" />
              </li>
            </ul>
          </div>
        </div>
      </AulasC>
    </LightBG>
  );
};

export default Aulas;
