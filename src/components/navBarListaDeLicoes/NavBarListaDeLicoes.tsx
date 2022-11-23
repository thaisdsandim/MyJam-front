import "./NavBarListaDeLicoes.style";
import { Nav, Logo, LogoNav, Menu, MenuLink } from "./NavBarListaDeLicoes.style";
import IconMusic from "../../assets/images/ListaDeLicoes/musics_icon.png";
import IconPerfil from "../../assets/images/ListaDeLicoes/perfil.png";
import IconLogo from "../../assets/images/ListaDeLicoes/logo.png";



const NavBarListaDeLicoes = () => {
    return (
      <Nav>
            <Logo href="">
              <LogoNav src={IconLogo}/>
            </Logo>
            <Menu>
                <MenuLink src={IconMusic}/>
                <MenuLink src={IconPerfil}/>
            </Menu>
      </Nav>
    );
  };
  


export default NavBarListaDeLicoes;

