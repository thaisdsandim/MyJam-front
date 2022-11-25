import styled from "styled-components";

export const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 132px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #222b35;
  box-shadow: 0 10px 10px rgba(0, 0, 0.025);
`;

export const MenuLink = styled.img`
  padding: 16px 11px;
  /* @media only screen and (max-width: 600px) {
    width: 80%;
    padding: 0rem 2rem;
  } */
`;

export const Menu = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  margin-right: 40px;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    padding: 0 auto;
  }

`;

export const LogoNav = styled.img`
  /* padding: 1rem 11rem; */
  /* color: #ffffff; */
  /* text-decoration: none;
  font-weight: 900;
  font-size: 50px; */
  
  margin-left: 100px;
  margin-right: 0px;

  @media only screen and (max-width: 650px) {
    margin-left:30px;
    /* padding: 1rem 6rem; */
  }
  @media only screen and (max-width: 610px){
    display: none;
  };

`;

export const Logo = styled.a`
  padding: 1rem 0rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 900;
  font-size: 50px;
  margin: 0;

  @media only screen and (max-width: 800px) {
    text-align: center;
    padding: 1rem 0rem;
  }
`;
