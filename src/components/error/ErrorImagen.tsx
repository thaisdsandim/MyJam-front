import { ErrorImagenStyle } from "./ErrorImagen,style";
import violao from "../../assets/images/error/violao.png";
import number0 from "../../assets/images/error/number0.png";
import number4 from "../../assets/images/error/number4.png";
import imagefundo from "../../assets/images/error/image-fundo.png";
import { VoltarBotonStyle } from "./ErrorImagen,style";
import { Container } from "../listaOrdenada/listaOrdenada.style";

export const ErrorImagen = () => {
  return (
    <Container>
      <ErrorImagenStyle>
        <div className="fundo">
          <img className="imagefundo" src={imagefundo} />
          <img className="violao" src={violao} />
          <div className="texto404">
            <img src={number4} />
            <img src={number0} />
            <img src={number4} />
          </div>
          <div className="texto">Ops, tivemos um problema</div>
        </div>
      </ErrorImagenStyle>
      <VoltarBotonStyle>
        <button className="cadastrar">Voltar</button>
      </VoltarBotonStyle>
    </Container>
  );
};
export default ErrorImagen;
