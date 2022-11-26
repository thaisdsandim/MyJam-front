import { Title, Container, Buttons } from "./Header.style";
import Logo from "/src/assets/images/home/logo.png";
import Simbolo from "/src/assets/images/home/simbolo-musical.png";

const Header = () => {
  return (
    <Container>
      <div className="logoMyJam">
        <img src={Logo} />
      </div>
      <Title>
        <div className="linha">
          Aprenda do seu
          <div className="type2">jeito</div>
        </div>
        <div className="linha">
          <p>Toque no seu</p>
          <div className="type2">tempo</div>
        </div>
        <img src={Simbolo} />
      </Title>
      <Buttons>
        <button className="cadastrar">Quero me cadastrar</button>
        <button className="logar">Já tenho uma conta</button>
      </Buttons>
    </Container>
  );
};

export default Header;
