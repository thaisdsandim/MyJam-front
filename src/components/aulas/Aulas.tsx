import Violao from '../../assets/images/aulas/Violão.png'
import Guitarra from '../../assets/images/aulas/Guitarra.png'
import Baixo from '../../assets/images/aulas/Baixo.png'
import Bateria from '../../assets/images/aulas/Bateria.png'
import Teclado from '../../assets/images/aulas/Teclado.png'
import { AulasC } from './Aulas.style'

const Aulas = () => {
  return (
    <AulasC>
      <div>
        <h3>O que você aprender no MyJam</h3>
      </div>
      <div className='listas'>
        <ul>
          <li>
            {" "}
            <img src={Violao} alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={Guitarra} alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={Baixo} alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={Bateria} alt="" />{" "}
          </li>
          <li>
            {" "}
            <img src={Teclado} alt="" />{" "}
          </li>
        </ul>
      </div>
    </AulasC>
  );
};

export default Aulas;
