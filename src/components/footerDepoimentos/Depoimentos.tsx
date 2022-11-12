import { Container, LogoImg } from "./Depoimento.style";
import Icon from "../../assets/images/Beyonce_01.png";

const Depoimentos = () => {
  return (
    <Container>
      <div className="Titulo">
        <h3>depoimentos</h3>
      </div>
      <div className="Row">
        <div className="Col">
          <LogoImg src={Icon} className="FotoUser" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>

        <div className="Col">
          <LogoImg src={Icon} className="FotoUser" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>

        <div className="Col">
          <LogoImg src={Icon} className="FotoUser" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptas blanditiis impedit nisi quis ratione nemo necessitatibus
            velit est doloribus. Aspernatur et quisquam possimus, rem soluta vel
            expedita vitae sequi!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Depoimentos;
