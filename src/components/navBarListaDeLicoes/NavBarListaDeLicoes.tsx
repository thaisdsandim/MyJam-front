import "./NavBarListaDeLicoes.style";
import { Nav, Logo, Hamburguer, Menu, MenuLink } from "./NavBarListaDeLicoes.style";
import IconMusic from "../../assets/images/ListaDeLicoes/musics_icon.png";
import IconPerfil from "../../assets/images/ListaDeLicoes/perfil.png";



const NavBarListaDeLicoes = () => {
    return (
      <Nav>
            <Logo href="">
                MyJam
            </Logo>
            <Hamburguer>
                <span />
                <span />
                <span />
            </Hamburguer>
            <Menu>
                <MenuLink src={IconMusic}/>
                <MenuLink src={IconPerfil}/>
            </Menu>
      </Nav>
    );
  };
  


export default NavBarListaDeLicoes;

