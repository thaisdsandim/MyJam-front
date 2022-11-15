import "./NavBarListaDeLicoes.style";
import { Nav, Logo, Hamburguer, Menu, MenuLink } from "./NavBarListaDeLicoes.style";


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
                <MenuLink href="">Notas</MenuLink>
                <MenuLink href="">Músicas</MenuLink>
                <MenuLink href="">Perfil</MenuLink>
            </Menu>
      </Nav>
    );
  };
  


export default NavBarListaDeLicoes;

